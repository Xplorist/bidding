package com.foxconn.bidding.mapper;

import com.foxconn.bidding.model.*;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillMapper {
    // 保存零件圖檔文件信息
    Integer save_PART_DOC_FILE(PART_DOC_FILE_bean param);

    // 保存訂單主表數據
    Integer save_BILL(BILL_bean param);

    // 查詢訂單是否存在
    Integer query_bill_is_exist(String bill_pkid);

    // 刪除零件圖檔文件list
    Integer delete_PART_DOC_FILE_list(String part_doc_file_rel_id);

    // 更新訂單主表數據
    Integer update_BILL(BILL_bean param);

    // 更新訂單主表的狀態
    Integer update_BILL_status(@Param("bill_pkid") String bill_pkid, @Param("bill_status") String bill_status);

    // 未登錄查詢訂單list(分頁查詢)
    List<BILL_bean> query_bill_list_not_login(BILL_bean param);

    // 發單用戶登錄個人中心的查詢訂單list(分頁查詢)
    List<BILL_bean> query_bill_list_send_user(BILL_bean param);

    // 接單用戶登錄個人中心的查詢訂單list(分頁查詢)
    List<BILL_bean> query_bill_list_recv_user(BILL_bean param);

    // 接單用戶登錄查詢個狀態訂單list個數
    Integer query_status_num_recv_user(BILL_bean param);

    // 接單用戶登錄主頁查詢訂單list(分頁查詢)
    List<BILL_bean> query_bill_list_recv_main(BILL_bean param);

    // 根據狀態查詢相應狀態的訂單個數
    Integer query_bill_num_by_status(@Param("send_user_pkid") String send_user_pkid, @Param("bill_status") String bill_status);

    // 查詢發單方待評價的訂單個數
    Integer query_bill_num_of_no_send_eval(String send_user_pkid);

    // 查詢訂單的接單用戶個數
    Integer query_bill_recv_user_num(String bill_pkid);

    // 查詢訂單參與報價的接單用戶list
    List<USER_INFO_bean> query_bill_give_recv_user_list(String bill_pkid);

    // 查詢訂單發單方評價
    SEND_EVAL_bean query_bill_send_eval(String bill_pkid);

    // 查詢訂單接單方評價
    RECV_EVAL_bean query_bill_recv_eval(String bill_pkid);

    // 保存報價從表（清單明細）數據
    Integer save_GIVE_PRICE_SLAV(GIVE_PRICE_SLAV_bean param);

    // 保存報價主表數據
    Integer save_GIVE_PRICE_MSTR(GIVE_PRICE_MSTR_bean param);

    // 根據pkid查詢訂單
    BILL_bean query_bill_by_pkid(String bill_pkid);

    // 查詢訂單零件圖檔文件list
    List<PART_DOC_FILE_bean> query_bill_file_list(String part_doc_file_rel_id);

    // 根據單個文件pkid刪除訂單零件圖檔文件
    Integer delete_part_doc_file_by_pkid(String pkid);

    // 保存發單方評價
    Integer save_send_eval(SEND_EVAL_bean param);

    // 保存接單方評價
    Integer save_recv_eval(RECV_EVAL_bean param);

    // 更新訂單發單方評價狀態為已評價
    Integer update_f_send_eval_y(String bill_pkid);

    // 更新訂單接單方評價狀態為已評價
    Integer update_f_recv_eval_y(String bill_pkid);

    // 測試時間格式轉換
    Integer save_TEST_TIME_PARSE(TEST_TIME_PARSE_bean param);

    // 測試查詢時間
    TEST_TIME_PARSE_bean query_TEST_TIME_PARSE_bean(String pkid);
}