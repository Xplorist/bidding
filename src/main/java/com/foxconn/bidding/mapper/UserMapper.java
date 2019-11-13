package com.foxconn.bidding.mapper;

import com.foxconn.bidding.model.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMapper {
    // 註冊提交前判斷用戶是否存在
    Integer query_user_is_exist(String username);

    // 新增臨時用戶信息
    Integer add_USER_TEMP(USER_INFO_bean param);

    // 修改臨時用戶表狀態
    Integer update_user_temp_au_status(USER_INFO_bean param);

    // 根據pkid查詢臨時用戶
    USER_INFO_bean query_user_temp_by_pkid(String pkid);

    // 新增用戶信息
    Integer add_user_info(USER_INFO_bean param);

    // 新增用戶頭像文件信息
    Integer add_USER_PIC_FILE(USER_PIC_FILE_bean param);

    // 新增接單方加工範圍
    Integer add_recv_mnufc_range(RECV_MNUFC_RANGE_bean param);

    // 通過用戶名查詢用戶
    USER_INFO_bean query_user_by_username(String username);

    // 通過id查找用戶
    USER_INFO_bean findUserById(String id);

    // 查詢用戶頭像文件
    USER_PIC_FILE_bean query_user_pic_file(String user_pic_file_pkid);

    // 刪除用戶頭像文件信息
    Integer delete_user_pic_file(String user_pic_file_pkid);

    // 更新用戶主表信息
    Integer update_user_info(USER_INFO_bean param);

    // 查詢接單方加工範圍
    List<RECV_MNUFC_RANGE_bean> query_recv_range_list(String recv_mnufc_range_rel_id);

    // 刪除接單方加工範圍list
    Integer delete_recv_range_list(String recv_mnufc_range_rel_id);

    // 根據訂單信息查詢相應的接單方郵箱地址
    List<String> query_email_by_bill_info(BILL_bean param);

    // 將此賬號的驗證碼狀態更新為非最新狀態
    Integer update_user_verification_code_not_newest(String user_pkid);

    // 新增驗證碼和用戶pkid到驗證碼表中
    Integer add_verification_code(VERIFICATION_CODE_bean param);

    // 根據用戶id查詢最新的驗證碼
    String query_newest_code_by_user_pkid(String user_pkid);

    // 更新此驗證碼不為最新
    Integer update_code_not_newest(VERIFICATION_CODE_bean param);

    // 更新用戶密碼
    Integer update_password(VERIFICATION_CODE_bean param);
}
