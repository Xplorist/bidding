package com.foxconn.bidding.service;

import com.foxconn.bidding.model.ResultParam;
import com.foxconn.bidding.model.USER_INFO_bean;
import com.foxconn.bidding.model.VERIFICATION_CODE_bean;

public interface EmailService {
    // 發佈訂單發送通知郵件
    ResultParam publish_bill_send_email(String bill_pkid);

    // 忘記密碼，發送驗證碼郵件
    ResultParam send_verification_code_mail(USER_INFO_bean user_bean, VERIFICATION_CODE_bean code_bean);

    // 提交註冊，發送郵件給管理員
    ResultParam register_send_email_to_admin(USER_INFO_bean user_bean);

    // 賬號審核通過或駁回，發送郵件給該賬號的郵箱（1:通過，2：駁回）
    ResultParam user_au_send_email(USER_INFO_bean user_bean, String au_type);
}
