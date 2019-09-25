package com.foxconn.bidding.mapper;

import com.foxconn.bidding.model.ENTRPS_GROUP_bean;
import com.foxconn.bidding.model.FCTRY_ZONE_bean;
import com.foxconn.bidding.model.PD_OFFICE_bean;
import com.foxconn.bidding.model.SECN_CMPY_bean;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BaseInfoMapper {
    // 查詢廠區list
    List<FCTRY_ZONE_bean> query_factory_list();

    // 查詢次集團list
    List<SECN_CMPY_bean> query_SECN_CMPY_list(String fctry_zone_pkid);

    // 查詢事業群list
    List<ENTRPS_GROUP_bean> query_ENTRPS_GROUP_list(String secn_cmpy_pkid);

    // 查詢產品處list
    List<PD_OFFICE_bean> query_PD_OFFICE_list(String entrps_group_pkid);
}
