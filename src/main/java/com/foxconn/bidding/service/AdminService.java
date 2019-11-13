package com.foxconn.bidding.service;

import com.foxconn.bidding.model.ResultParam;
import com.foxconn.bidding.model.USER_INFO_bean;

import javax.servlet.http.HttpServletRequest;

public interface AdminService {
    // 【01】管理員查詢賬號審核任務(分頁)
    ResultParam query_user_au_list_pagi(USER_INFO_bean param, HttpServletRequest request);

    // 【02】管理員賬號審核（1:通過，2:駁回）
    ResultParam user_au(USER_INFO_bean param, HttpServletRequest request);
}
