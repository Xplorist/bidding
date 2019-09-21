package com.foxconn.bidding.model;

import lombok.Data;

@Data
public class USER_ACUNT_bean {
    private String pkid;//主鍵id
    private String user_info_pkid;//用戶註冊信息表id
    private String username;//賬號名稱
    private String password;//密碼
    private String create_date;//創建時間

    // 非表中字段
    private USER_INFO_bean user_info;// 用戶信息
}
