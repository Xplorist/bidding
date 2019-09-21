package com.foxconn.bidding.service;

import com.foxconn.bidding.model.ResultParam;
import com.foxconn.bidding.model.USER_ACUNT_bean;

public interface UserService {
    // 通過id查找用戶
    USER_ACUNT_bean findUserById(String id);

    // 用戶登錄
    ResultParam login(USER_ACUNT_bean param);

    // 獲取用戶
    ResultParam getUser(String username);

    // 新增用戶
    ResultParam addUser(USER_ACUNT_bean param);
}
