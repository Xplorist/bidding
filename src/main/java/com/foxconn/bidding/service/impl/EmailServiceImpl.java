package com.foxconn.bidding.service.impl;

import com.foxconn.bidding.mapper.BillMapper;
import com.foxconn.bidding.mapper.UserMapper;
import com.foxconn.bidding.model.*;
import com.foxconn.bidding.service.EmailService;
import com.foxconn.bidding.util.EmailUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmailServiceImpl implements EmailService {
    @Autowired
    private BillMapper billMapper;
    @Autowired
    private UserMapper userMapper;

    // 發佈訂單發送通知郵件
    @Override
    public ResultParam publish_bill_send_email(String bill_pkid) {
        //String address = "";
        String subject = "【模治檢具訂單管理平台】";
        String content = "【模治檢具訂單管理平台】";

        BILL_bean bill_bean = billMapper.query_bill_by_pkid(bill_pkid);
        String bill_no = bill_bean.getBill_no();
        String pd_type = bill_bean.getPd_type();
        String send_user_pkid = bill_bean.getSend_user_pkid();
        USER_INFO_bean send_user = userMapper.findUserById(send_user_pkid);
        String send_dept_name = send_user.getDept_name();
        String send_username = send_user.getUsername();
        // 根據訂單信息查詢相應的接單方郵箱地址
        List<String> email_list = userMapper.query_email_by_bill_info(bill_bean);
        if(email_list.isEmpty()) {
            throw new RuntimeException("無接單方郵箱地址");
        }
        /*
        for(int i = 0; i < email_list.size(); i++) {
            String email = email_list.get(i);
            if(i != email_list.size() - 1) {
                address += email + ";";
            } else {
                address = email;
            }
        }
         */

        // 生成郵件標題
        subject += "發單方【" + send_dept_name + "（" + send_username + "）】新發佈了"
                + "單號為【" + bill_no + "】的【" + pd_type + "】訂單";
        // 生成郵件內容
        content += "發單方<b style='color: blue;'>" + send_dept_name + "（" + send_username + "）</b>新發佈了"
                + "單號為<b style='color: blue;'>" + bill_no + "</b>的<b style='color: blue;'>" + pd_type + "</b>訂單<br><br>";
        content += "<b style='color: red;'>網址</b>:&nbsp;&nbsp;<a href='http://10.244.168.180/bid'>http://10.244.168.180/bid</a>";
        content += "&nbsp;&nbsp;&nbsp;&nbsp;(<b style='color: red;'>請用Chrome瀏覽器（谷歌瀏覽器）打開</b>)<br>";
        content += "<hr><b style='color: black;'>【訂單詳情】</b><br><br>";
        content += "<b style='color: black;'>類型</b>：<b style='color: blue;'>" + pd_type + "</b><br>";
        content += "<b style='color: black;'>單號</b>：<b style='color: blue;'>" + bill_no + "</b><br>";
        content += "<b style='color: black;'>發單方</b>：<b style='color: blue;'>" + send_dept_name + "（" + send_username + "）</b><br>";
        content += "<b style='color: black;'>需求數量</b>：<b style='color: blue;'>" + bill_bean.getAmount() + "</b><br>";
        content += "<b style='color: black;'>接受總價</b>：<b style='color: blue;'>" + bill_bean.getTotal_price() + bill_bean.getMoney_type() + "</b><br>";
        content += "<b style='color: black;'>交貨時間</b>：<b style='color: blue;'>" + bill_bean.getDeliver_date() + "</b><br>";
        content += "<b style='color: black;'>交貨地點</b>：<b style='color: blue;'>" + bill_bean.getDeliver_address() + "</b><br>";
        content += "<b style='color: black;'>交貨方式</b>：<b style='color: blue;'>" + bill_bean.getDeliver_way() + "</b><br>";
        content += "<b style='color: black;'>制作要求</b>：<b style='color: blue;'>" + bill_bean.getMake_requ() + "</b><br>";

        Boolean f_sendEmail = false;
        for(String address_: email_list) {
            f_sendEmail = EmailUtil.sendEmail(EmailContent.of(address_, subject, content));
            if(!f_sendEmail) {
                throw new RuntimeException("發佈訂單發送通知郵件失敗");
            }
        }

        return new ResultParam("1","發佈訂單發送通知郵件成功", null);
    }

    // 忘記密碼，發送驗證碼郵件
    @Override
    public ResultParam send_verification_code_mail(USER_INFO_bean user_bean, VERIFICATION_CODE_bean code_bean) {
        String code = code_bean.getCode();

        // 郵件地址
        String address = user_bean.getEmail();

        // 郵件主題
        String subject = "【模治檢具訂單管理平台】忘記密碼-驗證碼";

        // 郵件內容
        String content = "【模治檢具訂單管理平台】忘記密碼-驗證碼<br>";
        content += "驗證碼為：<b style='color: red;'>" + code + "</b>";

        Boolean f_sendEmail = EmailUtil.sendEmail(EmailContent.of(address, subject, content));
        if(!f_sendEmail) {
            throw new RuntimeException("發送驗證碼郵件失敗");
        }

        return new ResultParam("1", "發送驗證碼郵件成功", null);
    }

    // 獲取賬號信息的郵件內容
    public String getUserInfoContent(String content, USER_INFO_bean user_bean) {
        content += "<b style='color: red;'>網址</b>:&nbsp;&nbsp;<a href='http://10.244.168.180/bid'>http://10.244.168.180/bid</a>";
        content += "&nbsp;&nbsp;&nbsp;&nbsp;(<b style='color: red;'>請用Chrome瀏覽器（谷歌瀏覽器）打開</b>)<br>";
        content += "<hr>【賬號信息】：<br>";
        content += "賬號名稱：" + user_bean.getUsername() + "<br>";
        content += "賬號類別：" + ("send".equals(user_bean.getSend_recv_type()) ? "發單方": "接單方") + "<br>";
        content += "廠區：" + user_bean.getFctry_zone() + "<br>";
        content += "次集團：" + user_bean.getSecn_cmpy() + "<br>";
        content += "事業群：" + user_bean.getEntrps_group() + "<br>";
        content += "產品處：" + user_bean.getPd_office() + "<br>";
        content += "單位代碼：" + user_bean.getDept_code() + "<br>";
        content += "單位名稱：" + user_bean.getDept_name() + "<br>";
        content += "交易法人：" + user_bean.getLegal_person() + "<br>";
        content += "費用代碼：" + user_bean.getCost_code() + "<br>";
        if("recv".equals(user_bean.getSend_recv_type())) {
            content += "加工範圍：";
            String recv_mnufc_range_rel_id = user_bean.getRecv_mnufc_range_rel_id();
            List<RECV_MNUFC_RANGE_bean> recv_range_list = userMapper.query_recv_range_list(recv_mnufc_range_rel_id);
            for (RECV_MNUFC_RANGE_bean range: recv_range_list) {
                content += "&nbsp;&nbsp;" + range.getName();
            }
            content += "<br>";
        }
        content += "業務窗口：" + user_bean.getBusis_mngr() + "<br>";
        content += "固定電話：" + user_bean.getTel() + "<br>";
        content += "移動電話：" + user_bean.getPhone() + "<br>";
        content += "電子郵箱：" + user_bean.getEmail() + "<br>";
        content += "賬號簡介：" + user_bean.getSummary() + "<br>";
        if(user_bean.getRej_msg() != null && !"".equals(user_bean.getRej_msg())) {
            content += "駁回信息：" + user_bean.getRej_msg() + "<br>";
        }

        return content;
    }

    // 提交註冊，發送郵件給管理員
    @Override
    public ResultParam register_send_email_to_admin(USER_INFO_bean user_bean) {
        // 查詢管理員郵箱
        USER_INFO_bean admin_user = userMapper.query_user_by_username("admin");
        String address = admin_user.getEmail();

        // 郵件主題
        String subject = "【模治檢具訂單管理平台-賬號審核】管理員，你好，有新的賬號註冊需要你審核";

        // 郵件內容
        String content = "【模治檢具訂單管理平台-賬號審核】管理員，你好，有新的賬號註冊需要你審核<br>";
        content = getUserInfoContent(content, user_bean);

        Boolean f_sendEmail = EmailUtil.sendEmail(EmailContent.of(address, subject, content));
        if(!f_sendEmail) {
            throw new RuntimeException("提交註冊，發送郵件給管理員失敗");
        }

        return new ResultParam("1", "提交註冊，發送郵件給管理員成功", null);
    }

    // 賬號審核通過或駁回，發送郵件給該賬號的郵箱（1:通過，2：駁回）
    @Override
    public ResultParam user_au_send_email(USER_INFO_bean user_bean, String au_type) {
        String au_type_str =  ("1".equals(au_type)? "通過": "駁回");

        // 郵件地址
        String address = user_bean.getEmail();

        // 郵件主題
        String subject = "【模治檢具訂單管理平台-賬號審核】你提交的賬號註冊,管理員已";
        subject += au_type_str;

        // 郵件內容
        String content = subject;
        content = getUserInfoContent(content, user_bean);

        Boolean f_sendEmail = EmailUtil.sendEmail(EmailContent.of(address, subject, content));
        if(!f_sendEmail) {
            throw new RuntimeException("賬號已審核" + au_type_str + "，發送郵件給該賬號的郵箱失敗");
        }

        return new ResultParam("1", "賬號已審核 " + au_type_str + "，發送郵件給該賬號的郵箱成功", null);
    }
}
