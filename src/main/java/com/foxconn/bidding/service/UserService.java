package com.foxconn.bidding.service;

import com.foxconn.bidding.model.ResultParam;
import com.foxconn.bidding.model.USER_INFO_bean;

import javax.servlet.http.HttpServletRequest;

public interface UserService {
    // 註冊提交前判斷用戶是否存在
    ResultParam ck_user_is_exist(USER_INFO_bean param, HttpServletRequest request);

    // 註冊
    ResultParam register(USER_INFO_bean param, HttpServletRequest request);

    // 登錄
    ResultParam login(USER_INFO_bean param, HttpServletRequest request);

    // 通過id查找用戶
    USER_INFO_bean findUserById(String id);

    // 登錄後查詢用戶信息
    ResultParam login_user_info(USER_INFO_bean param, HttpServletRequest request);

    // 根據用戶id查詢用戶信息
    ResultParam query_user_info_by_pkid(USER_INFO_bean param, HttpServletRequest request);

    // 更改用戶信息
    ResultParam update_user_info(USER_INFO_bean param, HttpServletRequest request);
}
