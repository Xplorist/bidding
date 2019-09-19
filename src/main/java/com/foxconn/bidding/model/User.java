package com.foxconn.bidding.model;

import lombok.Getter;
import lombok.Setter;

/**
 * 用戶bean
 */
@Getter
@Setter
public class User {
    private String pkid;// 主鍵id
    private String username;// 用戶名
    private String password;// 密碼
    private String user_info_pkid;// 用戶信息表主鍵id
    private String create_date;// 創建時間
}
