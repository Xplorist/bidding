package com.foxconn.bidding.mapper;

import com.foxconn.bidding.model.USER_INFO_bean;
import com.foxconn.bidding.model.USER_PIC_FILE_bean;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
    // 註冊提交前判斷用戶是否存在
    Integer query_user_is_exist(String username);

    // 新增用戶信息
    Integer add_USER_INFO(USER_INFO_bean param);

    // 新增用戶頭像文件
    Integer add_USER_PIC_FILE(USER_PIC_FILE_bean param);

    // 通過用戶名查詢用戶
    USER_INFO_bean query_user_by_username(String username);

    // 通過id查找用戶
    USER_INFO_bean findUserById(String id);

    // 查詢用戶頭像文件
    USER_PIC_FILE_bean query_user_pic_file(String user_pic_file_pkid);
}
