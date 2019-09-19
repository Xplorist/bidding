package com.foxconn.bidding.mapper;

import com.foxconn.bidding.model.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
    /**
     * 通過用戶名查找用戶
     * @param username 用戶名
     * @return 用戶
     */
    User findUserByUsername(String username);

    /**
     * 通過id查找用戶
     * @param id 用戶id
     * @return 用戶
     */
    User findUserById(String id);
}
