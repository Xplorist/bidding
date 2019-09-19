package com.foxconn.bidding.service;

import com.foxconn.bidding.model.User;

public interface UserService {
    /**
     * 通過用戶名查找用戶
     * @param username 用戶名
     * @return 用戶
     */
    User findUserByUsername(String username);

    /**
     * 通過用戶id查找用戶
     * @param id 用戶id
     * @return 用戶
     */
    User findUserById(String id);
}
