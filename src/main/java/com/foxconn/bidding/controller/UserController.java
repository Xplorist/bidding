package com.foxconn.bidding.controller;

import com.foxconn.bidding.model.ResultParam;
import com.foxconn.bidding.model.USER_ACUNT_bean;
import com.foxconn.bidding.service.UserService;
import com.foxconn.bidding.util.VerifyToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserService userService;

    // 註冊
    @PostMapping("/register")
    public ResultParam register(@RequestBody USER_ACUNT_bean param) {
        return userService.addUser(param);
    }

    // 登錄
    @PostMapping("/login")
    public ResultParam login(@RequestBody USER_ACUNT_bean param) {
        return userService.login(param);
    }

    @VerifyToken
    @GetMapping("/getUser")
    public ResultParam getUser(String username) {
        return userService.getUser(username);
    }
}
