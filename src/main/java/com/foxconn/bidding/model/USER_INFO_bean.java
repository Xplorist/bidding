package com.foxconn.bidding.model;

import lombok.Data;

@Data
public class USER_INFO_bean {
    private String pkid;//主鍵id
    private String username;//賬號名稱
    private String in_out_type;//公司內外類別
    private String send_recv_type;//發單接單類別
    private String belong_factory;//所屬廠區（公司內）
    private String belong_group;//所屬事業群（公司內）
    private String belong_office;//所屬處（公司內）
    private String dept_name;//單位名稱
    private String legal_person;//交易法人（公司內）
    private String cost_code;//費用代碼（公司內）
    private String send_mnufc_range;//加工範圍（公司內發單）
    private String bank_acunt;//收/付款銀行
    private String busis_mngr;//業務經理
    private String tel;//聯繫電話
    private String email;//email
    private String summary;//簡介
    private String create_date;//創建時間
}
