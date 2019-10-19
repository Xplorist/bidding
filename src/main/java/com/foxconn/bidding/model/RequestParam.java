package com.foxconn.bidding.model;

import lombok.Data;

/**
 * 請求參數
 */
@Data
public class RequestParam {
    private String pkid;
    private String send_user_pkid;// 發單用戶id
    private String recv_user_pkid;// 接單用戶id

    // 分頁查詢需要的字段
    private Integer pageIndex;// 分頁頁碼
    private Integer pageSize;// 分頁每頁數據條數
}
