package com.foxconn.bidding.model;

import lombok.Data;

@Data
public class USER_INFO_bean {
    private String pkid;//主鍵id
    private String username;//賬號名稱
    private String password;//賬號密碼
    private String in_out_type;//公司內外類別(in：公司內，out：公司外)
    private String send_recv_type;//發單接單類別(send：發單方，recv：接單方)
    private String fctry_zone;//所屬廠區
    private String secn_cmpy;//所屬次集團
    private String entrps_group;//所屬事業群
    private String pd_office;//所屬產品處
    private String dept_name;//單位名稱
    private String legal_person;//交易法人
    private String cost_code;//費用代碼
    private String recv_mnufc_range;//加工範圍(接單）
    private String bank_name;//收/付款銀行名稱
    private String bank_acunt;//收/付款銀行賬號
    private String busis_mngr;//業務經理
    private String tel;//聯繫電話
    private String email;//email
    private String summary;//簡介
    private String user_pic_file_pkid;//頭像文件pkid
    private String create_date;//創建時間

    // 非表中字段
    private USER_PIC_FILE_bean user_pic_file;// 用戶頭像文件
    private String f_win_bid;// 是否中標標誌（Y:是，N:否）
}
