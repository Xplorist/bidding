package com.foxconn.bidding.model;

import lombok.Data;

@Data
public class BaseInfoParam {
    private String pkid;// 主鍵id
    private String name;// 名稱
    private String fctry_zone_pkid;// 產區主鍵id
    private String secn_cmpy_pkid;// 次集團主鍵id
    private String entrps_group_pkid;// 事業群主鍵id
}
