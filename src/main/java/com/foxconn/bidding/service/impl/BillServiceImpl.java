package com.foxconn.bidding.service.impl;

import com.foxconn.bidding.mapper.BillMapper;
import com.foxconn.bidding.mapper.UserMapper;
import com.foxconn.bidding.model.*;
import com.foxconn.bidding.service.BillService;
import com.foxconn.bidding.service.EmailService;
import com.foxconn.bidding.service.GivePriceSortService;
import com.foxconn.bidding.util.DateParseUtil;
import com.foxconn.bidding.util.UUID_Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BillServiceImpl implements BillService {
    @Autowired
    private BillMapper mapper;// 訂單mapper
    @Autowired
    private UserMapper userMapper;// 用戶mapper
    @Autowired
    private GivePriceSortService sortSVC;
    @Autowired
    private EmailService emailService;

    @Override
    @Transactional
    public ResultParam saveBill(BILL_bean param, HttpServletRequest request) {
        String send_user_pkid = (String) request.getAttribute("user_pkid");
        USER_INFO_bean send_user = userMapper.findUserById(send_user_pkid);

        String bill_pkid = param.getPkid();
        if(bill_pkid == null || "".equals(bill_pkid))  {
            /* 新增保存 */
            List<PART_DOC_FILE_bean> file_list = param.getFile_list();
            String part_doc_file_rel_id = UUID_Util.getUUID32();// 零件圖檔文件表關聯id
            /* 保存零件圖檔文件信息 */
            for(int i = 0; i < file_list.size(); i++) {
                PART_DOC_FILE_bean part_doc_file_bean = file_list.get(i);
                part_doc_file_bean.setPart_doc_file_rel_id(part_doc_file_rel_id);
                part_doc_file_bean.setList_order(i + 1);
                // 保存零件圖檔文件信息
                Integer save_part_doc_file_flag = mapper.save_PART_DOC_FILE(part_doc_file_bean);
                if(save_part_doc_file_flag <= 0) {
                    throw new RuntimeException("保存零件圖檔文件信息失敗:[save_PART_DOC_FILE is failed !]");
                }
            }

            // 保存開標範圍具體值
            String bid_range = param.getBid_range();
            if(bid_range == null || "".equals(bid_range)) {
                throw new RuntimeException("開標範圍不能為空");
            }
            switch (bid_range) {
                case "集團":
                    param.setBid_range_value("all");
                    break;
                case "次集團":
                    String secn_cmpy = send_user.getSecn_cmpy();
                    param.setBid_range_value(secn_cmpy);
                    break;
                case "廠區":
                    String fctry_zone = send_user.getFctry_zone();
                    param.setBid_range_value(fctry_zone);
                    break;
                case "事業群":
                    String entrps_group = send_user.getEntrps_group();
                    param.setBid_range_value(entrps_group);
                    break;
                case "產品處":
                    String pd_office = send_user.getPd_office();
                    param.setBid_range_value(pd_office);
                    break;
            }

            /* 保存訂單主表數據 */
            bill_pkid = UUID_Util.getUUID32();
            String bill_no = "尚未發佈暫無單號";
            String bill_status = "0";
            param.setPkid(bill_pkid);
            param.setBill_no(bill_no);
            param.setBill_status(bill_status);
            param.setSend_user_pkid(send_user_pkid);
            param.setPart_doc_file_rel_id(part_doc_file_rel_id);
            // 設置類型編號
            String pd_type = param.getPd_type();
            String pd_type_no = "Z";
            switch (pd_type) {
                case "治具":
                    pd_type_no = "Z";
                    break;
                case "檢具":
                    pd_type_no = "J";
                    break;
                case "沖模":
                    pd_type_no = "C";
                    break;
                case "塑模":
                    pd_type_no = "S";
                    break;
            }
            param.setPd_type_no(pd_type_no);

            try {
                param.setDeliver_date(DateParseUtil.gmtStrToJavaStyleStr(param.getDeliver_date()));
                param.setBid_start_date(DateParseUtil.gmtStrToJavaStyleStr(param.getBid_start_date()));
                param.setBid_end_date(DateParseUtil.gmtStrToJavaStyleStr(param.getBid_end_date()));
            } catch (ParseException e) {
                e.printStackTrace();
                throw new RuntimeException("格式化時間失敗");
            }

            // 保存訂單主表數據
            Integer save_bill_flag = mapper.save_BILL(param);
            if(save_bill_flag <= 0) {
                throw new RuntimeException("保存訂單主表數據失敗:[save_BILL is failed !]");
            }
        } else {
            /* 編輯保存 */
            Integer bill_is_exist = mapper.query_bill_is_exist(bill_pkid);
            if(bill_is_exist <= 0) {
                throw new RuntimeException("pkid為" + bill_pkid + "的訂單不存在");
            }

            // 保存開標範圍具體值
            String bid_range = param.getBid_range();
            if(bid_range == null || "".equals(bid_range)) {
                throw new RuntimeException("開標範圍不能為空");
            }
            switch (bid_range) {
                case "集團":
                    param.setBid_range_value("all");
                    break;
                case "次集團":
                    String secn_cmpy = send_user.getSecn_cmpy();
                    param.setBid_range_value(secn_cmpy);
                    break;
                case "廠區":
                    String fctry_zone = send_user.getFctry_zone();
                    param.setBid_range_value(fctry_zone);
                    break;
                case "事業群":
                    String entrps_group = send_user.getEntrps_group();
                    param.setBid_range_value(entrps_group);
                    break;
                case "產品處":
                    String pd_office = send_user.getPd_office();
                    param.setBid_range_value(pd_office);
                    break;
            }

            // 設置類型編號
            String pd_type = param.getPd_type();
            String pd_type_no = "Z";
            switch (pd_type) {
                case "治具":
                    pd_type_no = "Z";
                    break;
                case "檢具":
                    pd_type_no = "J";
                    break;
                case "沖模":
                    pd_type_no = "C";
                    break;
                case "塑模":
                    pd_type_no = "S";
                    break;
            }
            param.setPd_type_no(pd_type_no);

            // 先刪除零件圖檔文件list，再新增
            String part_doc_file_rel_id = param.getPart_doc_file_rel_id();
            Integer delete_PART_DOC_FILE_list_f = mapper.delete_PART_DOC_FILE_list(part_doc_file_rel_id);
            /*if(delete_PART_DOC_FILE_list_f <= 0) {
                throw new RuntimeException("刪除零件圖檔文件list失敗");
            }*/
            List<PART_DOC_FILE_bean> file_list = param.getFile_list();
            for(int i = 0; i < file_list.size(); i++) {
                PART_DOC_FILE_bean part_doc_file_bean = file_list.get(i);
                part_doc_file_bean.setPart_doc_file_rel_id(part_doc_file_rel_id);
                part_doc_file_bean.setList_order(i + 1);
                // 保存零件圖檔文件
                Integer save_part_doc_file_flag = mapper.save_PART_DOC_FILE(part_doc_file_bean);
                if(save_part_doc_file_flag <= 0) {
                    throw new RuntimeException("保存零件圖檔文件失敗:[save_PART_DOC_FILE is failed !]");
                }
            }

            try {
                param.setDeliver_date(DateParseUtil.gmtStrToJavaStyleStr(param.getDeliver_date()));
                param.setBid_start_date(DateParseUtil.gmtStrToJavaStyleStr(param.getBid_start_date()));
                param.setBid_end_date(DateParseUtil.gmtStrToJavaStyleStr(param.getBid_end_date()));
            } catch (ParseException e) {
                e.printStackTrace();
                throw new RuntimeException("時間格式化失敗");
            }

            // 更新訂單主表數據
            Integer update_bill_f = mapper.update_BILL(param);
            if(update_bill_f <= 0) {
                throw new RuntimeException("更新訂單主表數據失敗");
            }
        }

        return new ResultParam("1", "保存訂單成功", bill_pkid);
    }

    @Override
    @Transactional
    public ResultParam submitBill(BILL_bean param, HttpServletRequest request) {
        // 保存訂單
        ResultParam resultParam = saveBill(param, request);
        if(!"1".equals(resultParam.getCode())) {
            throw new RuntimeException("保存訂單失敗:[saveBill is failed !]");
        }
        String bill_pkid = (String) resultParam.getT();
        String bill_status = "1";
        param.setPkid(bill_pkid);
        param.setBill_status(bill_status);
        param.setF_bill_no("1");
        Integer f_update_bill_publish = mapper.update_bill_publish(param);
        if(f_update_bill_publish <= 0) {
            throw new RuntimeException("發佈（提交）訂單時更新訂單狀態失敗");
        }

        // 查詢訂單單號關聯表中的訂單單號
        String bill_no = mapper.query_bill_no_from_rel(bill_pkid);
        if(bill_no == null || "".equals(bill_no)) {
            throw new RuntimeException("查詢訂單單號關聯表中的訂單單號失敗");
        }
        // 更新訂單單號
        Integer f_update_bill_no = mapper.update_bill_no(bill_pkid, bill_no);
        if(f_update_bill_no <= 0) {
            throw new RuntimeException("更新訂單單號失敗");
        }

        // 發佈訂單發送通知郵件
        ResultParam result = emailService.publish_bill_send_email(bill_pkid);
        if(!"1".equals(result.getCode())) {
            throw new RuntimeException("發佈訂單發送通知郵件失敗");
        }

        return new ResultParam("1","發佈(提交)訂單成功", null);
    }

    @Override
    public ResultParam query_bill_list_not_login(BILL_bean param, HttpServletRequest request) {
        List<BILL_bean> bill_list = mapper.query_bill_list_not_login(param);
        Integer page_total = 1;
        Integer row_total = 0;
        if(!bill_list.isEmpty()) {
            BILL_bean bill_bean = bill_list.get(0);
            row_total = bill_bean.getRow_total();
            Integer pageSize = param.getPageSize();
            page_total = row_total % pageSize == 0 ? row_total / pageSize : (row_total / pageSize) + 1;
        }
        for(int i = 0; i < bill_list.size(); i++) {
            BILL_bean bill_bean = bill_list.get(i);
            String bill_pkid = bill_bean.getPkid();
            String send_user_pkid = bill_bean.getSend_user_pkid();

            // 查詢發單用戶信息
            USER_INFO_bean send_user = userMapper.findUserById(send_user_pkid);
            bill_bean.setSend_user(send_user);
            // 查詢參與單位個數
            Integer recv_user_num = mapper.query_bill_recv_user_num(bill_pkid);
            bill_bean.setRecv_user_num(recv_user_num);
        }

        Map<String,Object> map = new HashMap<>();
        map.put("bill_list", bill_list);
        map.put("page_total", page_total);
        map.put("row_total", row_total);

        return new ResultParam("1", "未登錄查詢訂單list成功", map);
    }

    @Override
    public ResultParam query_bill_list_send_user(BILL_bean param, HttpServletRequest request) {
        String user_pkid = (String) request.getAttribute("user_pkid");
        param.setSend_user_pkid(user_pkid);
        List<BILL_bean> bill_list = mapper.query_bill_list_send_user(param);
        Integer page_total = 1;
        Integer row_total = 0;
        if(!bill_list.isEmpty()) {
            BILL_bean bill_bean = bill_list.get(0);
            row_total = bill_bean.getRow_total();
            Integer pageSize = param.getPageSize();
            page_total = row_total % pageSize == 0 ? row_total / pageSize : (row_total / pageSize) + 1;
        }
        for(int i = 0; i < bill_list.size(); i++) {
            BILL_bean bill_bean = bill_list.get(i);
            String bill_pkid = bill_bean.getPkid();
            String bill_status = bill_bean.getBill_status();
            String recv_user_pkid = bill_bean.getRecv_user_pkid();
            if(recv_user_pkid != null && !"".equals(recv_user_pkid)) {
                // 查詢中標單位信息
                USER_INFO_bean recv_user = userMapper.findUserById(recv_user_pkid);
                bill_bean.setRecv_user(recv_user);
            }
            // 查詢參與單位個數
            Integer recv_user_num = mapper.query_bill_recv_user_num(bill_pkid);
            bill_bean.setRecv_user_num(recv_user_num);
        }

        Map<String,Object> map = new HashMap<>();
        map.put("bill_list", bill_list);
        map.put("page_total", page_total);
        map.put("row_total", row_total);

        return new ResultParam("1", "發單用戶登錄查詢訂單list成功", map);
    }

    @Override
    public ResultParam query_status_bill_num_send_user(BILL_bean param, HttpServletRequest request) {
        String user_pkid = (String) request.getAttribute("user_pkid");

        // 根據狀態查詢相應狀態的訂單個數（all：全部，0：待發佈，1：待報價，1.5:待選標,2：待發貨，3：待收貨，4：待付款，5：待收款，6：已完成）
        Integer num_status_all = mapper.query_bill_num_by_status(user_pkid, "all");
        Integer num_status_0 = mapper.query_bill_num_by_status(user_pkid, "0");
        Integer num_status_1 = mapper.query_bill_num_by_status(user_pkid, "1");
        Integer num_status_1_5 = mapper.query_bill_num_by_status(user_pkid, "1.5");
        Integer num_status_2 = mapper.query_bill_num_by_status(user_pkid, "2");
        Integer num_status_3 = mapper.query_bill_num_by_status(user_pkid, "3");
        Integer num_status_4 = mapper.query_bill_num_by_status(user_pkid, "4");
        Integer num_status_5 = mapper.query_bill_num_by_status(user_pkid, "5");
        Integer num_status_6 = mapper.query_bill_num_by_status(user_pkid, "6");

        // 查詢發單方待評價的訂單個數
        Integer num_no_send_eval = mapper.query_bill_num_of_no_send_eval(user_pkid);

        Map<String,Object> map = new HashMap<>();
        map.put("num_status_all", num_status_all);
        map.put("num_status_0", num_status_0);
        map.put("num_status_1", num_status_1);
        map.put("num_status_1_5", num_status_1_5);
        map.put("num_status_2", num_status_2);
        map.put("num_status_3", num_status_3);
        map.put("num_status_4", num_status_4);
        map.put("num_status_5", num_status_5);
        map.put("num_status_6", num_status_6);
        map.put("num_no_send_eval", num_no_send_eval);

        return new ResultParam("1", "發單用戶登錄查詢個狀態訂單list個數成功", map);
    }

    // 接單用戶登錄個人中心的查詢訂單list(分頁查詢)
    @Override
    public ResultParam query_bill_list_recv_user(BILL_bean param, HttpServletRequest request) {
        String user_pkid = (String) request.getAttribute("user_pkid");
        USER_INFO_bean user = userMapper.findUserById(user_pkid);
        String recv_mnufc_range_rel_id = user.getRecv_mnufc_range_rel_id();
        List<RECV_MNUFC_RANGE_bean> recv_range_list = userMapper.query_recv_range_list(recv_mnufc_range_rel_id);
        //param.setPd_type(recv_mnufc_range);
        param.setRecv_range_list(recv_range_list);
        param.setRecv_user_pkid(user_pkid);
        param.setRecv_user(user);
        List<BILL_bean> bill_list = mapper.query_bill_list_recv_user(param);

        Integer page_total = 1;
        Integer row_total = 0;
        if(!bill_list.isEmpty()) {
            BILL_bean bill_bean = bill_list.get(0);
            row_total = bill_bean.getRow_total();
            Integer pageSize = param.getPageSize();
            page_total = row_total % pageSize == 0 ? row_total / pageSize : (row_total / pageSize) + 1;
        }
        for(int i = 0; i < bill_list.size(); i++) {
            BILL_bean bill_bean = bill_list.get(i);
            String bill_pkid = bill_bean.getPkid();
            // 查詢參與單位個數
            Integer recv_user_num = mapper.query_bill_recv_user_num(bill_pkid);
            bill_bean.setRecv_user_num(recv_user_num);
        }

        Map<String,Object> map = new HashMap<>();
        map.put("bill_list", bill_list);
        map.put("page_total", page_total);
        map.put("row_total", row_total);

        return new ResultParam("1", "未登錄查詢訂單list成功", map);
    }

    @Override
    public ResultParam query_status_num_recv_user(BILL_bean param, HttpServletRequest request) {
        String user_pkid = (String) request.getAttribute("user_pkid");
        USER_INFO_bean user = userMapper.findUserById(user_pkid);
        //String recv_mnufc_range = user.getRecv_mnufc_range();
        String recv_mnufc_range_rel_id = user.getRecv_mnufc_range_rel_id();
        List<RECV_MNUFC_RANGE_bean> recv_range_list = userMapper.query_recv_range_list(recv_mnufc_range_rel_id);
        param.setRecv_range_list(recv_range_list);

        //param.setPd_type(recv_mnufc_range);
        param.setRecv_user_pkid(user_pkid);
        param.setRecv_user(user);

        param.setBill_status("all");
        Integer num_status_all = mapper.query_status_num_recv_user(param);

        param.setBill_status("1");
        Integer num_status_1 = mapper.query_status_num_recv_user(param);

        param.setBill_status("2");
        Integer num_status_2 = mapper.query_status_num_recv_user(param);

        param.setBill_status("3");
        Integer num_status_3 = mapper.query_status_num_recv_user(param);

        param.setBill_status("4");
        Integer num_status_4 = mapper.query_status_num_recv_user(param);

        param.setBill_status("5");
        Integer num_status_5 = mapper.query_status_num_recv_user(param);

        param.setBill_status("6");
        Integer num_status_6 = mapper.query_status_num_recv_user(param);

        param.setBill_status("no_recv_eval");
        Integer num_no_recv_eval = mapper.query_status_num_recv_user(param);

        Map<String,Object> map = new HashMap<>();
        map.put("num_status_all", num_status_all);
        map.put("num_status_1", num_status_1);
        map.put("num_status_2", num_status_2);
        map.put("num_status_3", num_status_3);
        map.put("num_status_4", num_status_4);
        map.put("num_status_5", num_status_5);
        map.put("num_status_6", num_status_6);
        map.put("num_no_recv_eval", num_no_recv_eval);

        return new ResultParam("1", "接單用戶登錄查詢個狀態訂單list個數成功", map);
    }

    @Override
    public ResultParam query_bill_list_recv_main(BILL_bean param, HttpServletRequest request) {
        String user_pkid = (String) request.getAttribute("user_pkid");
        USER_INFO_bean user = userMapper.findUserById(user_pkid);
        //String recv_mnufc_range = user.getRecv_mnufc_range();
        String recv_mnufc_range_rel_id = user.getRecv_mnufc_range_rel_id();
        List<RECV_MNUFC_RANGE_bean> recv_range_list = userMapper.query_recv_range_list(recv_mnufc_range_rel_id);
        param.setRecv_range_list(recv_range_list);
        //param.setPd_type(recv_mnufc_range);
        param.setRecv_user_pkid(user_pkid);
        param.setRecv_user(user);
        List<BILL_bean> bill_list = mapper.query_bill_list_recv_main(param);

        Integer page_total = 1;
        Integer row_total = 0;
        if(!bill_list.isEmpty()) {
            BILL_bean bill_bean = bill_list.get(0);
            row_total = bill_bean.getRow_total();
            Integer pageSize = param.getPageSize();
            page_total = row_total % pageSize == 0 ? row_total / pageSize : (row_total / pageSize) + 1;
        }
        for(int i = 0; i < bill_list.size(); i++) {
            BILL_bean bill_bean = bill_list.get(i);
            String bill_pkid = bill_bean.getPkid();
            String send_user_pkid = bill_bean.getSend_user_pkid();
            USER_INFO_bean send_user = userMapper.findUserById(send_user_pkid);
            bill_bean.setSend_user(send_user);
            // 查詢參與單位個數
            Integer recv_user_num = mapper.query_bill_recv_user_num(bill_pkid);
            bill_bean.setRecv_user_num(recv_user_num);
        }

        Map<String,Object> map = new HashMap<>();
        map.put("bill_list", bill_list);
        map.put("page_total", page_total);
        map.put("row_total", row_total);

        return new ResultParam("1", "接單用戶登錄主頁查詢訂單list(分頁查詢)成功", map);
    }

    @Override
    @Transactional
    public ResultParam save_give_price(GIVE_PRICE_MSTR_bean param, HttpServletRequest request) {
        String give_price_slav_rel_id = UUID_Util.getUUID32();// 報價從表關聯id
        // 先保存報價從表數據（訂單明細）
        List<GIVE_PRICE_SLAV_bean> slav_list = param.getSlav_list();
       if(slav_list.isEmpty()) {
            throw new RuntimeException("保存失敗，訂單明細(報價從表)不能為空");
        }
        for(int i = 0; i < slav_list.size(); i++) {
            GIVE_PRICE_SLAV_bean give_price_slav_bean = slav_list.get(i);
            give_price_slav_bean.setGive_price_slav_rel_id(give_price_slav_rel_id);
            give_price_slav_bean.setList_order(i + 1);
            Integer save_give_price_slav_f = mapper.save_GIVE_PRICE_SLAV(give_price_slav_bean);
            if(save_give_price_slav_f <= 0) {
                throw new RuntimeException("保存訂單明細（報價從表）數據失敗");
            }
        }
        // 保存報價主表數據
        String user_pkid = (String) request.getAttribute("user_pkid");
        param.setRecv_user_pkid(user_pkid);
        param.setGive_price_slav_rel_id(give_price_slav_rel_id);

        try {
            param.setDeliver_date(DateParseUtil.gmtStrToJavaStyleStr(param.getDeliver_date()));
        } catch (ParseException e) {
            e.printStackTrace();
            throw new RuntimeException("時間格式化失敗");
        }

        Integer save_GIVE_PRICE_MSTR_f = mapper.save_GIVE_PRICE_MSTR(param);
        if(save_GIVE_PRICE_MSTR_f <= 0) {
            throw new RuntimeException("保存報價主表數據失敗");
        }

        return new ResultParam("1", "保存報價成功", null);
    }

    @Override
    public ResultParam query_bill_by_pkid(BILL_bean param, HttpServletRequest request) {
        String bill_pkid = param.getPkid();
        // 查詢訂單信息
        BILL_bean bill_bean = mapper.query_bill_by_pkid(bill_pkid);
        String part_doc_file_rel_id = bill_bean.getPart_doc_file_rel_id();
        // 查詢零件圖檔文件list
        List<PART_DOC_FILE_bean> part_doc_file_list = mapper.query_bill_file_list(part_doc_file_rel_id);
        bill_bean.setFile_list(part_doc_file_list);
        String send_user_pkid = bill_bean.getSend_user_pkid();
        // 查詢發單用戶
        USER_INFO_bean send_user = userMapper.findUserById(send_user_pkid);
        bill_bean.setSend_user(send_user);
        // 查詢訂單參與報價的接單用戶list
        List<USER_INFO_bean> give_recv_user_list = mapper.query_bill_give_recv_user_list(bill_pkid);
        bill_bean.setGive_recv_user_list(give_recv_user_list);
        // 查詢訂單發單方評價
        SEND_EVAL_bean send_eval = mapper.query_bill_send_eval(bill_pkid);
        bill_bean.setSend_eval(send_eval);
        // 查詢訂單接單方評價
        RECV_EVAL_bean recv_eval = mapper.query_bill_recv_eval(bill_pkid);
        bill_bean.setRecv_eval(recv_eval);

        return new ResultParam("1", "根據pkid查詢訂單數據成功", bill_bean);
    }

    @Override
    @Transactional
    public ResultParam delete_part_doc_file_by_pkid(PART_DOC_FILE_bean param, HttpServletRequest request) {
        String pkid = param.getPkid();
        Integer delete_part_doc_file_by_pkid_f = mapper.delete_part_doc_file_by_pkid(pkid);
        if(delete_part_doc_file_by_pkid_f <= 0) {
            throw new RuntimeException("根據單個文件pkid刪除訂單零件圖檔文件失敗");
        }

        return new ResultParam("1", "根據單個文件pkid刪除訂單零件圖檔文件成功", null);
    }

    @Override
    @Transactional
    public ResultParam update_bill_status(BILL_bean param, HttpServletRequest request) {
        String bill_pkid = param.getPkid();
        String bill_status = param.getBill_status();
        Integer f_update_bill_status = mapper.update_BILL_status(bill_pkid, bill_status);
        if(f_update_bill_status <= 0) {
            throw new RuntimeException("更改訂單狀態失敗");
        }

        return new ResultParam("1", "更改訂單狀態成功", null);
    }

    @Override
    @Transactional
    public ResultParam save_send_eval(SEND_EVAL_bean param, HttpServletRequest request) {
        String send_user_pkid = (String) request.getAttribute("user_pkid");
        String bill_pkid = param.getBill_pkid();
        // 根據pkid查詢訂單
        BILL_bean bill_bean = mapper.query_bill_by_pkid(bill_pkid);
        String recv_user_pkid = bill_bean.getRecv_user_pkid();
        param.setRecv_user_pkid(recv_user_pkid);
        param.setSend_user_pkid(send_user_pkid);
        // 保存發單方評價
        Integer f_save_send_eval = mapper.save_send_eval(param);
        if(f_save_send_eval <= 0) {
            throw new RuntimeException("保存發單方評價失敗");
        }
        // 更新訂單發單方評價狀態為已評價
        Integer f_update_f_send_eval_y = mapper.update_f_send_eval_y(bill_pkid);
        if(f_update_f_send_eval_y <= 0) {
            throw new RuntimeException("更新訂單發單方評價狀態為已評價失敗");
        }

        return new ResultParam("1", "保存發單方評價成功", null);
    }

    @Override
    @Transactional
    public ResultParam save_recv_eval(RECV_EVAL_bean param, HttpServletRequest request) {
        String recv_user_pkid = (String) request.getAttribute("user_pkid");
        String bill_pkid = param.getBill_pkid();
        // 根據pkid查詢訂單
        BILL_bean bill_bean = mapper.query_bill_by_pkid(bill_pkid);
        String send_user_pkid = bill_bean.getSend_user_pkid();
        param.setRecv_user_pkid(recv_user_pkid);
        param.setSend_user_pkid(send_user_pkid);
        // 保存接單方評價
        Integer f_save_recv_eval = mapper.save_recv_eval(param);
        if(f_save_recv_eval <= 0) {
            throw new RuntimeException("保存接單方評價失敗");
        }
        // 更新訂單接單方評價狀態為已評價
        Integer f_update_f_recv_eval_y = mapper.update_f_recv_eval_y(bill_pkid);
        if(f_update_f_recv_eval_y <= 0) {
            throw new RuntimeException("更新訂單接單方評價狀態為已評價失敗");
        }

        return new ResultParam("1", "保存接單方評價成功", null);
    }

    @Override
    public ResultParam test_time_parse(TEST_TIME_PARSE_bean param, HttpServletRequest request) {
        String uuid32 = UUID_Util.getUUID32();
        param.setPkid(uuid32);
        String test_time = param.getTest_time();
        try {
            test_time = DateParseUtil.gmtStrToJavaStyleStr(test_time);
            param.setTest_time(test_time);
        } catch (ParseException e) {
            e.printStackTrace();
            throw new RuntimeException("時間格式轉換失敗");
        }

        Integer f_save_TEST_TIME_PARSE = mapper.save_TEST_TIME_PARSE(param);
        if(f_save_TEST_TIME_PARSE <= 0) {
            throw new RuntimeException("測試時間格式轉換失敗");
        }

        // String uuid32 = "1C4874E21B2A43B4AE452BAE687D7232";
        TEST_TIME_PARSE_bean test_time_parse_bean = mapper.query_TEST_TIME_PARSE_bean(uuid32);

        return new ResultParam("1", "測試時間格式轉換成功", test_time_parse_bean);
    }

    @Override
    public ResultParam query_give_price_by_bill_pkid(GIVE_PRICE_MSTR_bean param, HttpServletRequest request) {
        String recv_user_pkid = (String) request.getAttribute("user_pkid");
        String bill_pkid = param.getBill_pkid();
        // 根據訂單id和接單用戶id查詢報價信息
        GIVE_PRICE_MSTR_bean give_price_mstr_bean = mapper.query_give_price_mstr(bill_pkid, recv_user_pkid);
        if(give_price_mstr_bean == null) {
            throw new RuntimeException("根據訂單id查詢報價信息失敗");
        } else {
            String give_price_slav_rel_id = give_price_mstr_bean.getGive_price_slav_rel_id();
            // 根據報價從表關聯id查詢報價從表list(報價明細)
            List<GIVE_PRICE_SLAV_bean> slav_list = mapper.query_give_price_slav_list(give_price_slav_rel_id);
            for (int i = 0; i < slav_list.size(); i++) {
                GIVE_PRICE_SLAV_bean give_price_slav_bean = slav_list.get(i);
                String part_doc_file_pkid = give_price_slav_bean.getPart_doc_file_pkid();
                // 根據零件圖檔文件id查詢零件圖檔文件信息
                PART_DOC_FILE_bean part_doc_file_bean = mapper.query_part_doc_file(part_doc_file_pkid);
                give_price_slav_bean.setPart_doc_file(part_doc_file_bean);
            }
            give_price_mstr_bean.setSlav_list(slav_list);
        }

        return new ResultParam("1", "根據訂單id查詢報價信息成功", give_price_mstr_bean);
    }

    @Override
    public ResultParam query_send_get_eval_list(RequestParam param, HttpServletRequest request) {
        Integer pageSize = param.getPageSize();
        String send_user_pkid = (String) request.getAttribute("user_pkid");
        param.setSend_user_pkid(send_user_pkid);
        // 查詢接單方收到的評價list(分頁查詢)
        List<RECV_EVAL_bean> send_get_eval_list = mapper.query_send_get_eval_list(param);
        // 計算總頁數
        Integer page_total = 1;
        Integer row_total = 0;
        if(!send_get_eval_list.isEmpty()) {
            RECV_EVAL_bean recv_eval_bean = send_get_eval_list.get(0);
            row_total = recv_eval_bean.getRow_total();
            page_total = row_total % pageSize == 0 ? row_total / pageSize : (row_total / pageSize) + 1;
        }
        for (int i = 0; i < send_get_eval_list.size(); i++) {
            RECV_EVAL_bean recv_eval_bean = send_get_eval_list.get(i);
            String recv_user_pkid = recv_eval_bean.getRecv_user_pkid();
            USER_INFO_bean recv_user = userMapper.findUserById(recv_user_pkid);
            recv_eval_bean.setRecv_user(recv_user);
        }

        Map<String, Object> map = new HashMap<>();
        map.put("page_total", page_total);
        map.put("row_total", row_total);
        map.put("send_get_eval_list", send_get_eval_list);

        return new ResultParam("1", "查詢發單方收到的評價list(分頁查詢)成功", map);
    }

    @Override
    public ResultParam query_send_make_eval_list(RequestParam param, HttpServletRequest request) {
        Integer pageSize = param.getPageSize();
        String send_user_pkid = (String) request.getAttribute("user_pkid");
        param.setSend_user_pkid(send_user_pkid);
        // 查詢發單方做出的評價list(分頁查詢)
        List<SEND_EVAL_bean> send_make_eval_list = mapper.query_send_make_eval_list(param);

        // 計算總頁數
        Integer page_total = 1;
        Integer row_total = 0;
        if(!send_make_eval_list.isEmpty()) {
            SEND_EVAL_bean recv_eval_bean = send_make_eval_list.get(0);
            row_total = recv_eval_bean.getRow_total();
            page_total = row_total % pageSize == 0 ? row_total / pageSize : (row_total / pageSize) + 1;
        }
        for (int i = 0; i < send_make_eval_list.size(); i++) {
            SEND_EVAL_bean send_eval_bean = send_make_eval_list.get(i);
            String recv_user_pkid = send_eval_bean.getRecv_user_pkid();
            USER_INFO_bean recv_user = userMapper.findUserById(recv_user_pkid);
            send_eval_bean.setRecv_user(recv_user);
        }

        Map<String, Object> map = new HashMap<>();
        map.put("page_total", page_total);
        map.put("row_total", row_total);
        map.put("send_make_eval_list", send_make_eval_list);

        return new ResultParam("1", "查詢發單方做出的評價list(分頁查詢)成功", map);
    }

    @Override
    public ResultParam query_recv_get_eval_list(RequestParam param, HttpServletRequest request) {
        Integer pageSize = param.getPageSize();
        String recv_user_pkid = (String) request.getAttribute("user_pkid");
        param.setRecv_user_pkid(recv_user_pkid);
        // 查詢接單方收到的評價list(分頁查詢)
        List<SEND_EVAL_bean> recv_get_eval_list = mapper.query_recv_get_eval_list(param);

        // 計算總頁數
        Integer page_total = 1;
        Integer row_total = 0;
        if(!recv_get_eval_list.isEmpty()) {
            SEND_EVAL_bean recv_eval_bean = recv_get_eval_list.get(0);
            row_total = recv_eval_bean.getRow_total();
            page_total = row_total % pageSize == 0 ? row_total / pageSize : (row_total / pageSize) + 1;
        }
        for (int i = 0; i < recv_get_eval_list.size(); i++) {
            SEND_EVAL_bean send_eval_bean = recv_get_eval_list.get(i);
            String send_user_pkid = send_eval_bean.getSend_user_pkid();
            USER_INFO_bean send_user = userMapper.findUserById(send_user_pkid);
            send_eval_bean.setSend_user(send_user);
        }

        Map<String, Object> map = new HashMap<>();
        map.put("page_total", page_total);
        map.put("row_total", row_total);
        map.put("recv_get_eval_list", recv_get_eval_list);

        return new ResultParam("1", "查詢接單方收到的評價list(分頁查詢)成功", map);
    }

    @Override
    public ResultParam query_recv_make_eval_list(RequestParam param, HttpServletRequest request) {
        Integer pageSize = param.getPageSize();
        String recv_user_pkid = (String) request.getAttribute("user_pkid");
        param.setRecv_user_pkid(recv_user_pkid);
        // 查詢接單方做出的評價list(分頁查詢)
        List<RECV_EVAL_bean> recv_make_eval_list = mapper.query_recv_make_eval_list(param);

        // 計算總頁數
        Integer page_total = 1;
        Integer row_total = 0;
        if(!recv_make_eval_list.isEmpty()) {
            RECV_EVAL_bean recv_eval_bean = recv_make_eval_list.get(0);
            row_total = recv_eval_bean.getRow_total();
            page_total = row_total % pageSize == 0 ? row_total / pageSize : (row_total / pageSize) + 1;
        }
        for (int i = 0; i < recv_make_eval_list.size(); i++) {
            RECV_EVAL_bean recv_eval_bean = recv_make_eval_list.get(i);
            String send_user_pkid = recv_eval_bean.getSend_user_pkid();
            USER_INFO_bean send_user = userMapper.findUserById(send_user_pkid);
            recv_eval_bean.setSend_user(send_user);
        }

        Map<String, Object> map = new HashMap<>();
        map.put("page_total", page_total);
        map.put("row_total", row_total);
        map.put("recv_make_eval_list", recv_make_eval_list);

        return new ResultParam("1", "查詢接單方做出的評價list(分頁查詢)成功", map);
    }

    @Override
    public ResultParam query_send_get_eval_avg(RequestParam param, HttpServletRequest request) {
        String send_user_pkid = (String) request.getAttribute("user_pkid");
        // 查詢發單方收到的評價平均分
        RECV_EVAL_bean recv_eval_bean = mapper.query_send_get_eval_avg(send_user_pkid);

        return new ResultParam("1", "查詢發單方收到的評價平均分成功", recv_eval_bean);
    }

    @Override
    public ResultParam query_recv_get_eval_avg(RequestParam param, HttpServletRequest request) {
        String recv_user_pkid = (String) request.getAttribute("user_pkid");
        // 查詢接單方收到的評價平均分
        SEND_EVAL_bean send_eval_bean = mapper.query_recv_get_eval_avg(recv_user_pkid);

        return new ResultParam("1", "查詢接單方收到的評價平均分成功", send_eval_bean);
    }

    @Override
    public ResultParam query_give_price_list(GIVE_PRICE_MSTR_bean param, HttpServletRequest request) {
        List<GIVE_PRICE_MSTR_bean> give_price_list = null;
        Integer pageSize = param.getPageSize();
        String sort_way = param.getSort_way();
        Integer row_total = 0;
        Integer page_total = 1;

        // 分頁查詢
        if("complex".equals(sort_way)) {
            give_price_list = sortSVC.query_give_price_list_complex(param);
        } else {
            give_price_list = mapper.query_give_price_list_pagi(param);
        }
        if(!give_price_list.isEmpty()) {
            GIVE_PRICE_MSTR_bean give_price_mstr_bean = give_price_list.get(0);
            row_total = give_price_mstr_bean.getRow_total();
            page_total = row_total % pageSize == 0 ? row_total / pageSize : (row_total / pageSize) + 1;
        }

        // 查詢報價清單
        for(int i = 0; i < give_price_list.size(); i++) {
            GIVE_PRICE_MSTR_bean bean = give_price_list.get(i);
            String give_price_slav_rel_id = bean.getGive_price_slav_rel_id();
            List<GIVE_PRICE_SLAV_bean> slav_list = mapper.query_give_price_slav_list(give_price_slav_rel_id);
            for(int j = 0; j < slav_list.size(); j++) {
                GIVE_PRICE_SLAV_bean give_price_slav_bean = slav_list.get(j);
                String part_doc_file_pkid = give_price_slav_bean.getPart_doc_file_pkid();
                PART_DOC_FILE_bean part_doc_file_bean = mapper.query_part_doc_file(part_doc_file_pkid);
                if(part_doc_file_bean != null) {
                    give_price_slav_bean.setPart_doc_file(part_doc_file_bean);
                }
            }
            bean.setSlav_list(slav_list);

            // 查詢接單方信息
            if(bean.getRecv_user() == null) {
                String recv_user_pkid = bean.getRecv_user_pkid();
                USER_INFO_bean recv_user = userMapper.findUserById(recv_user_pkid);
                bean.setRecv_user(recv_user);
            }
        }

        Map<String, Object> map = new HashMap<>();
        map.put("give_price_list", give_price_list);
        map.put("row_total", row_total);
        map.put("page_total", page_total);

        return new ResultParam("1", "【22】根據訂單id查詢排序後報價list(分頁查詢)成功", map);
    }

    @Override
    @Transactional
    public ResultParam select_win_bid(GIVE_PRICE_MSTR_bean param, HttpServletRequest request) {
        String pkid = param.getPkid();
        // 根據報價id查詢標價信息
        GIVE_PRICE_MSTR_bean give_price = mapper.query_give_price_by_pkid(pkid);
        // 更新該報價數據為中標
        Integer f_give_price_win_bid = mapper.update_give_price_win_bid(pkid);
        if(f_give_price_win_bid <= 0) {
            throw new RuntimeException("更新該報價數據為中標失敗");
        }
        String bill_pkid = give_price.getBill_pkid();
        String recv_user_pkid = give_price.getRecv_user_pkid();
        // 更新訂單表為中標後狀態，更新中標接單用戶
        Integer f_bill_win_bid = mapper.update_bill_win_bid(bill_pkid, recv_user_pkid);
        if(f_bill_win_bid <= 0) {
            throw new RuntimeException("更新訂單表為中標後狀態，更新中標接單用戶失敗");
        }

        return new ResultParam("1", "【23】選定中標成功", null);
    }
}
