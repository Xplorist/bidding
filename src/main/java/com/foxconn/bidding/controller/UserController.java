package com.foxconn.bidding.controller;

import com.foxconn.bidding.model.ResultParam;
import com.foxconn.bidding.model.USER_INFO_bean;
import com.foxconn.bidding.service.UserService;
import com.foxconn.bidding.util.VerifyToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * 用戶相關Controller
 */
@RestController
@RequestMapping("api/user")
public class UserController {
    @Autowired
    private UserService svc;

    // 註冊提交前判斷用戶是否存在
    @RequestMapping("/ck_user_is_exist")
    public ResultParam ck_user_is_exist(@RequestBody USER_INFO_bean param, HttpServletRequest request) {
        return svc.ck_user_is_exist(param, request);
    }

    // 註冊
    @RequestMapping("/register")
    public ResultParam register(@RequestBody USER_INFO_bean param, HttpServletRequest request) {
        return svc.register(param, request);
    }

    // 登錄
    @RequestMapping("/login")
    public ResultParam login(@RequestBody USER_INFO_bean param, HttpServletRequest request) {
        return svc.login(param, request);
    }

    // 登錄後查詢用戶信息
    @VerifyToken
    @RequestMapping("/login_user_info")
    public ResultParam login_user_info(@RequestBody USER_INFO_bean param, HttpServletRequest request) {
        return svc.login_user_info(param, request);
    }
}
