package com.foxconn.bidding.service.impl;

import com.foxconn.bidding.mapper.BillMapper;
import com.foxconn.bidding.mapper.UserMapper;
import com.foxconn.bidding.model.*;
import com.foxconn.bidding.service.EmailService;
import com.foxconn.bidding.service.UserService;
import com.foxconn.bidding.util.SimpleEncodeUtil;
import com.foxconn.bidding.util.TokenUtil;
import com.foxconn.bidding.util.UUID_Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Random;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper mapper;
    @Autowired
    private BillMapper billMapper;
    @Autowired
    private EmailService emailService;

    @Override
    public ResultParam ck_user_is_exist(USER_INFO_bean param, HttpServletRequest request) {
        Integer query_user_is_exist_flag = mapper.query_user_is_exist(param.getUsername());
        if (query_user_is_exist_flag > 0) {
            return new ResultParam("0", "此賬號名稱已存在，無法新增", null);
        }

        return new ResultParam("1", "此賬號名稱可新增", null);
    }

    // 提交註冊
    @Override
    @Transactional
    public ResultParam register(USER_INFO_bean param, HttpServletRequest request) {
        String send_recv_type = param.getSend_recv_type();
        if(send_recv_type == null || "".equals(send_recv_type)) {
            throw new RuntimeException("發單方接單方類型不能為空");
        }
        // 保存用戶頭像文件
        String user_pic_file_pkid = "";
        USER_PIC_FILE_bean user_pic_file = param.getUser_pic_file();
        if(user_pic_file != null && user_pic_file.getFile_save_name() != null) {
            user_pic_file_pkid = UUID_Util.getUUID32();
            user_pic_file.setPkid(user_pic_file_pkid);

            Integer add_USER_PIC_FILE_flag = mapper.add_USER_PIC_FILE(user_pic_file);
            if(add_USER_PIC_FILE_flag <= 0) {
                throw new RuntimeException("新增用戶頭像文件信息失敗");
            }
        }
        // 保存接單方加工範圍
        List<RECV_MNUFC_RANGE_bean> recv_range_list = param.getRecv_range_list();
        if ("recv".equals(send_recv_type) && recv_range_list != null && !recv_range_list.isEmpty()) {
            String recv_mnufc_range_rel_id = UUID_Util.getUUID32();
            param.setRecv_mnufc_range_rel_id(recv_mnufc_range_rel_id);
            for(int i = 0; i < recv_range_list.size(); i++) {
                RECV_MNUFC_RANGE_bean range_bean = recv_range_list.get(i);
                range_bean.setRecv_mnufc_range_rel_id(recv_mnufc_range_rel_id);
                range_bean.setList_order(i + 1);
                Integer f_add_recv_mnufc_range = mapper.add_recv_mnufc_range(range_bean);
                if(f_add_recv_mnufc_range <= 0) {
                    throw new RuntimeException("保存加工範圍失敗");
                }
            }
        }

        param.setPassword(SimpleEncodeUtil.encode(param.getPassword()));
        param.setUser_pic_file_pkid(user_pic_file_pkid);
        Integer add_user_temp_flag = mapper.add_USER_TEMP(param);
        if(add_user_temp_flag <= 0) {
            throw new RuntimeException("新增用戶信息失敗");
        }

        // 提交註冊，發送郵件給管理員
        ResultParam f_send_email = emailService.register_send_email_to_admin(param);
        if(!"1".equals(f_send_email.getCode())) {
            throw new RuntimeException("給管理員發送賬號審核郵件失敗");
        }

        return new ResultParam("1", "提交註冊成功", null);
    }

    @Override
    public ResultParam login(USER_INFO_bean param, HttpServletRequest request) {
        USER_INFO_bean user = mapper.query_user_by_username(param.getUsername());
        String encodedPSW = SimpleEncodeUtil.encode(param.getPassword());

        if(user == null) {
            return ResultParam.of("0", "用戶不存在");
        }
        if(!encodedPSW.equals(user.getPassword())) {
            return ResultParam.of("0", "密碼錯誤");
        }
        String token = TokenUtil.getToken(user.getPkid(), param.getPassword());// token必須用前端傳遞的param中傳遞的password

        return new ResultParam("1", "登錄成功", token);
    }

    @Override
    public USER_INFO_bean findUserById(String id) {
        return mapper.findUserById(id);
    }

    @Override
    public ResultParam login_user_info(USER_INFO_bean param, HttpServletRequest request) {
        USER_INFO_bean user_info_bean = mapper.query_user_by_username(param.getUsername());

        if(user_info_bean == null) {
            return new ResultParam("0", "查詢用戶信息失敗", null);
        } else {
            String user_pic_file_pkid = user_info_bean.getUser_pic_file_pkid();
            if(user_pic_file_pkid != null) {
                USER_PIC_FILE_bean user_pic_file_bean = mapper.query_user_pic_file(user_pic_file_pkid);
                user_info_bean.setUser_pic_file(user_pic_file_bean);
            } else {
                USER_PIC_FILE_bean user_pic_file_bean = mapper.query_user_pic_file("default");
                user_info_bean.setUser_pic_file(user_pic_file_bean);
            }

            String recv_mnufc_range_rel_id = user_info_bean.getRecv_mnufc_range_rel_id();
            if(recv_mnufc_range_rel_id != null && !"".equals(recv_mnufc_range_rel_id)) {
                List<RECV_MNUFC_RANGE_bean> recv_range_list = mapper.query_recv_range_list(recv_mnufc_range_rel_id);
                user_info_bean.setRecv_range_list(recv_range_list);
            }

            return new ResultParam("1", "查詢用戶信息成功", user_info_bean);
        }
    }

    @Override
    public ResultParam query_user_info_by_pkid(USER_INFO_bean param, HttpServletRequest request) {
        String pkid = param.getPkid();
        USER_INFO_bean user_info_bean = mapper.findUserById(pkid);
        if(user_info_bean == null) {
            throw new RuntimeException("根據用戶id查詢用戶信息失敗");
        }
        // 查詢用戶頭像
        String user_pic_file_pkid = user_info_bean.getUser_pic_file_pkid();
        if(user_pic_file_pkid != null && !"".equals(user_pic_file_pkid)) {
            USER_PIC_FILE_bean user_pic_file_bean = mapper.query_user_pic_file(user_pic_file_pkid);
            user_info_bean.setUser_pic_file(user_pic_file_bean);
        } else {
            USER_PIC_FILE_bean user_pic_file_bean = mapper.query_user_pic_file("default");
            user_info_bean.setUser_pic_file(user_pic_file_bean);
        }
        // 查詢接單方的加工範圍list
        String recv_mnufc_range_rel_id = user_info_bean.getRecv_mnufc_range_rel_id();
        if(recv_mnufc_range_rel_id != null && !"".equals(recv_mnufc_range_rel_id)) {
            List<RECV_MNUFC_RANGE_bean> recv_range_list = mapper.query_recv_range_list(recv_mnufc_range_rel_id);
            user_info_bean.setRecv_range_list(recv_range_list);
        }

        String send_recv_type = user_info_bean.getSend_recv_type();
        if("send".equals(send_recv_type)) {
            // 查詢發單方收到的評價list
            List<RECV_EVAL_bean> send_get_eval_list = billMapper.query_send_get_eval_list_nopagi(pkid);
            user_info_bean.setGet_eval_list(send_get_eval_list);
            for(int i = 0; i < send_get_eval_list.size(); i++) {
                RECV_EVAL_bean recv_eval_bean = send_get_eval_list.get(i);
                String recv_user_pkid = recv_eval_bean.getRecv_user_pkid();
                USER_INFO_bean user = mapper.findUserById(recv_user_pkid);
                recv_eval_bean.setUser(user);
            }
        } else if("recv".equals(send_recv_type)) {
            // 查詢接單方收到的評價list
            List<SEND_EVAL_bean> recv_get_eval_list = billMapper.query_recv_get_eval_list_nopagi(pkid);
            user_info_bean.setGet_eval_list(recv_get_eval_list);
            for(int i = 0; i < recv_get_eval_list.size(); i++) {
                SEND_EVAL_bean send_eval_bean = recv_get_eval_list.get(i);
                String send_user_pkid = send_eval_bean.getSend_user_pkid();
                USER_INFO_bean user = mapper.findUserById(send_user_pkid);
                send_eval_bean.setUser(user);
            }
        }

        return new ResultParam("1", "根據用戶id查詢用戶信息成功", user_info_bean);
    }

    @Override
    @Transactional
    public ResultParam update_user_info(USER_INFO_bean param, HttpServletRequest request) {
        String pkid = param.getPkid();
        USER_PIC_FILE_bean user_pic_file = param.getUser_pic_file();
        USER_INFO_bean user_info_bean = mapper.findUserById(pkid);
        String user_pic_file_pkid = user_info_bean.getUser_pic_file_pkid();
        param.setUser_pic_file_pkid(user_pic_file_pkid);
        // 修改了用戶頭像文件，先刪除舊的文件信息，再保存新的文件信息
        if(user_pic_file != null && user_pic_file.getFile_save_name() != null && !"".equals(user_pic_file.getFile_save_name())) {
            if(user_pic_file_pkid == null || "".equals(user_info_bean)) {
                user_pic_file_pkid = UUID_Util.getUUID32();
            }
            param.setUser_pic_file_pkid(user_pic_file_pkid);
            Integer f_delete_user_pic_file = mapper.delete_user_pic_file(user_pic_file_pkid);
            /*if(f_delete_user_pic_file <= 0) {
                throw new RuntimeException("刪除用戶頭像文件信息失敗");
            }*/
            user_pic_file.setPkid(user_pic_file_pkid);
            Integer f_add_user_pic_file = mapper.add_USER_PIC_FILE(user_pic_file);
            if(f_add_user_pic_file <= 0) {
                throw new RuntimeException("保存用戶頭像文件信息失敗");
            }
        }
        // 修改接單方加工範圍list,先刪除舊的接單方加工範圍，在保存新的接單方加工範圍
        List<RECV_MNUFC_RANGE_bean> recv_range_list = param.getRecv_range_list();
        String send_recv_type = param.getSend_recv_type();
        if(send_recv_type == null || "".equals(send_recv_type)) {
            throw new RuntimeException("發單接單類型不能為空");
        }
        if("recv".equals(send_recv_type) && !recv_range_list.isEmpty()) {
            String recv_mnufc_range_rel_id = user_info_bean.getRecv_mnufc_range_rel_id();
            Integer f_delete_recv_range_list = mapper.delete_recv_range_list(recv_mnufc_range_rel_id);
            if(f_delete_recv_range_list <= 0) {
                throw new RuntimeException("刪除接單方加工範圍失敗");
            }
            for(int i = 0; i < recv_range_list.size(); i++) {
                RECV_MNUFC_RANGE_bean range_bean = recv_range_list.get(i);
                range_bean.setRecv_mnufc_range_rel_id(recv_mnufc_range_rel_id);
                range_bean.setList_order(i + 1);
                Integer f_add_recv_mnufc_range = mapper.add_recv_mnufc_range(range_bean);
                if(f_add_recv_mnufc_range <= 0) {
                    throw new RuntimeException("新增接單方加工範圍失敗");
                }
            }
        }

        String dept_code = param.getDept_code();
        if(dept_code == null || "".equals(dept_code)) {
            throw new RuntimeException("更改用戶信息失败，用户单位代码为空");
        }
        // 更新用戶主表信息
        Integer f_update_user_info = mapper.update_user_info(param);
        if(f_update_user_info <= 0) {
            throw new RuntimeException("更新用戶主表信息失敗");
        }

        return new ResultParam("1", "更改用戶信息成功", null);
    }

    // 【07】忘記密碼，生成驗證碼
    @Override
    @Transactional
    public ResultParam generate_code(USER_INFO_bean param, HttpServletRequest request) {
        String username = param.getUsername();
        // 查詢此用戶是否存在
        USER_INFO_bean user_bean = mapper.query_user_by_username(username);
        if(user_bean == null) {
            throw new RuntimeException("此用戶不存在");
        }

        String email = user_bean.getEmail();
        if(email == null || "".equals(email)) {
            throw new RuntimeException( "用戶【" + username + "】的郵箱地址為空");
        }

        // 後台中生成隨機數
        Integer random_code = new Random().nextInt(888889) + 111111;
        String user_pkid = user_bean.getPkid();
        VERIFICATION_CODE_bean code_bean = new VERIFICATION_CODE_bean();
        code_bean.setCode(random_code.toString());
        code_bean.setUser_pkid(user_pkid);
        // 將此賬號的驗證碼狀態更新為非最新狀態
        mapper.update_user_verification_code_not_newest(user_pkid);
        // 將隨機數和用戶pkid保存到驗證碼表中
        Integer f_add_verification_code = mapper.add_verification_code(code_bean);
        if(f_add_verification_code <= 0) {
            throw new RuntimeException("新增驗證碼和用戶pkid到驗證碼表中失敗");
        }
        // 發送驗證碼郵件
        ResultParam code_result = emailService.send_verification_code_mail(user_bean, code_bean);
        if(!"1".equals(code_result.getCode())) {
            throw new RuntimeException("發送驗證碼郵件失敗");
        }

        return new ResultParam("1", "生成驗證碼成功,並已成功發送至郵箱", email);
    }

    // 【08】忘記密碼，檢查驗證碼是否正確
    @Override
    @Transactional
    public ResultParam check_code(VERIFICATION_CODE_bean param, HttpServletRequest request) {
        String code_fr_front = param.getCode();
        if(code_fr_front == null || "".equals(code_fr_front)) {
            throw new RuntimeException("未輸入驗證碼");
        }
        String username = param.getUsername();
        USER_INFO_bean user_bean = mapper.query_user_by_username(username);
        if(user_bean == null) {
            throw new RuntimeException("用戶【" + username + "】不存在");
        }
        // 根據用戶id查詢最新的驗證碼
        String user_pkid = user_bean.getPkid();
        param.setUser_pkid(user_pkid);
        String code_in_db = mapper.query_newest_code_by_user_pkid(user_pkid);
        if(code_in_db == null) {
            throw new RuntimeException("此用戶未生成最新的驗證碼");
        }
        if(!code_fr_front.equals(code_in_db)) {
            throw new RuntimeException("輸入的驗證碼有誤，請輸入最新生成的驗證碼");
        }

        return new ResultParam("1", "輸入的驗證碼正確", null);
    }

    /*
      check_code_before_update和check_code的區別在於：
      check_code_before_update在檢查驗證碼為最新後將最新的驗證碼設置為非最新狀態
    */
    @Transactional
    public ResultParam check_code_before_update(VERIFICATION_CODE_bean param, HttpServletRequest request) {
        String code_fr_front = param.getCode();
        if(code_fr_front == null || "".equals(code_fr_front)) {
            throw new RuntimeException("未輸入驗證碼");
        }
        String username = param.getUsername();
        USER_INFO_bean user_bean = mapper.query_user_by_username(username);
        if(user_bean == null) {
            throw new RuntimeException("用戶【" + username + "】不存在");
        }
        // 根據用戶id查詢最新的驗證碼
        String user_pkid = user_bean.getPkid();
        param.setUser_pkid(user_pkid);
        String code_in_db = mapper.query_newest_code_by_user_pkid(user_pkid);
        if(code_in_db == null) {
            throw new RuntimeException("此用戶未生成最新的驗證碼");
        }
        if(!code_fr_front.equals(code_in_db)) {
            throw new RuntimeException("輸入的驗證碼有誤，請輸入最新生成的驗證碼");
        }
        // 更新此驗證碼不為最新
        Integer f_update_code_not_newest = mapper.update_code_not_newest(param);
        if(f_update_code_not_newest <= 0) {
            throw new RuntimeException("更新此驗證碼不為最新失敗");
        }

        return new ResultParam("1", "輸入的驗證碼正確", null);
    }

    // 【09】忘記密碼，提交更新密碼
    @Override
    @Transactional
    public ResultParam update_password(VERIFICATION_CODE_bean param, HttpServletRequest request) {
        ResultParam f_check_code = check_code_before_update(param, request);
        if(!"1".equals(f_check_code.getCode())) {
            throw new RuntimeException("驗證碼有誤，無法更新密碼");
        }
        String password = param.getPassword();
        password = SimpleEncodeUtil.encode(password);
        param.setPassword(password);
        // 更新用戶密碼
        Integer f_update_password = mapper.update_password(param);
        if(f_update_password <= 0) {
            throw new RuntimeException("提交更新密碼失敗");
        }

        return new ResultParam("1", "提交更新密碼成功", null);
    }
}
