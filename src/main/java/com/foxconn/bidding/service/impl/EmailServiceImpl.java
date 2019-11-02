package com.foxconn.bidding.service.impl;

import com.foxconn.bidding.mapper.BillMapper;
import com.foxconn.bidding.mapper.UserMapper;
import com.foxconn.bidding.model.BILL_bean;
import com.foxconn.bidding.model.EmailContent;
import com.foxconn.bidding.model.ResultParam;
import com.foxconn.bidding.model.USER_INFO_bean;
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
        content += "<b style='color: red;'>網址</b>:&nbsp;&nbsp;<a href='http://10.244.231.103:8086'>http://10.244.231.103:8086</a>";
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
}
