package com.foxconn.bidding.mapper;

import com.foxconn.bidding.model.USER_INFO_bean;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminMapper {
    // 管理員查詢賬號審核任務(分頁)
    List<USER_INFO_bean> admin_query_user_au_list_pagi(USER_INFO_bean param);
}
