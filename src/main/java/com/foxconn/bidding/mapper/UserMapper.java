package com.foxconn.bidding.mapper;

import com.foxconn.bidding.model.USER_ACUNT_bean;
import com.foxconn.bidding.model.USER_INFO_bean;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
    // 通過用戶名查找用戶
    USER_ACUNT_bean findUserByUsername(String username);

    // 通過id查找用戶
    USER_ACUNT_bean findUserById(String id);

    // 新增用戶
    Integer addUser(USER_ACUNT_bean param);

    // 新增用戶信息
    Integer addUserInfo(USER_INFO_bean param);
}
