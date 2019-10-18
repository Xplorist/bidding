package com.foxconn.bidding.model;

import lombok.Data;

/**
 * 接單方評價
 */
@Data
public class RECV_EVAL_bean {
    private String pkid;//主鍵id
    private String bill_pkid;//訂單表id
    private String recv_user_pkid;//評價用戶id（接單方）
    private String send_user_pkid;//被評價用戶id（發單方）
    private Integer summary_score;//綜合評價分數
    private Integer pay_rate_score;//付款時效分數
    private Integer svc_atitu_score;//服務態度分數
    private String summary_text;//綜合評價文字
    private String f_anomus;//匿名評價標誌（Y:是，N:否）
    private String create_date;//創建時間
}
