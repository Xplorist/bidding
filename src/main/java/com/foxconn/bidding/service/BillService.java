package com.foxconn.bidding.service;

import com.foxconn.bidding.model.*;

import javax.servlet.http.HttpServletRequest;

public interface BillService {
    // 保存訂單
    ResultParam saveBill(BILL_bean param, HttpServletRequest request);

    // 發佈訂單(提交訂單)
    ResultParam submitBill(BILL_bean param, HttpServletRequest request);

    // 未登錄查詢訂單list(分頁查詢)
    ResultParam query_bill_list_not_login(BILL_bean param, HttpServletRequest request);

    // 發單用戶登錄個人中心的查詢訂單list(分頁查詢)
    ResultParam query_bill_list_send_user(BILL_bean param, HttpServletRequest request);

    // 發單用戶登錄查詢個狀態訂單list個數
    ResultParam query_status_bill_num_send_user(BILL_bean param, HttpServletRequest request);

    // 接單用戶登錄個人中心的查詢訂單list(分頁查詢)
    ResultParam query_bill_list_recv_user(BILL_bean param, HttpServletRequest request);

    // 接單用戶登錄查詢個狀態訂單list個數
    ResultParam query_status_num_recv_user(BILL_bean param, HttpServletRequest request);

    // 接單用戶登錄主頁查詢訂單list(分頁查詢)
    ResultParam query_bill_list_recv_main(BILL_bean param, HttpServletRequest request);

    // 接單用戶提交報價,開始競價（保存報價）
    ResultParam save_give_price(GIVE_PRICE_MSTR_bean param, HttpServletRequest request);

    // 根據pkid查詢訂單數據
    ResultParam query_bill_by_pkid(BILL_bean param, HttpServletRequest request);

    // 根據單個文件pkid刪除訂單零件圖檔文件
    ResultParam delete_part_doc_file_by_pkid(PART_DOC_FILE_bean param, HttpServletRequest request);

    // 更改訂單狀態
    ResultParam update_bill_status(BILL_bean param, HttpServletRequest request);

    // 保存發單方評價
    ResultParam save_send_eval(SEND_EVAL_bean param, HttpServletRequest request);

    // 保存接單方評價
    ResultParam save_recv_eval(RECV_EVAL_bean param, HttpServletRequest request);

    // 測試時間格式轉換
    ResultParam test_time_parse(TEST_TIME_PARSE_bean param, HttpServletRequest request);
}