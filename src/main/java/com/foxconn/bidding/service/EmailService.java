package com.foxconn.bidding.service;

import com.foxconn.bidding.model.ResultParam;

public interface EmailService {
    // 發佈訂單發送通知郵件
    ResultParam publish_bill_send_email(String bill_pkid);
}
