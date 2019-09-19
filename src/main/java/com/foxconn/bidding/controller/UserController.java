package com.foxconn.bidding.controller;

import com.foxconn.bidding.model.ResultParam;
import com.foxconn.bidding.model.User;
import com.foxconn.bidding.service.UserService;
import com.foxconn.bidding.util.TokenUtil;
import com.foxconn.bidding.util.VerifyToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserService userService;

    // 登錄
    @PostMapping("/login")
    public ResultParam login(@RequestBody User param) {
        User user = userService.findUserByUsername(param.getUsername());
        if(user == null) {
           return ResultParam.of("20001", "用戶不存在");
        }
        if(!user.getPassword().equals(param.getPassword())) {
            return ResultParam.of("20002", "密碼錯誤");
        }
        String token = TokenUtil.getToken(user.getPkid(), user.getPassword());

        return new ResultParam("10001", "登錄成功", token);
    }

    @VerifyToken
    @GetMapping("/getUser")
    public ResultParam getUser(String id) {
        User user = userService.findUserById(id);

        return new ResultParam("10002", "查詢成功", user);
    }
}
