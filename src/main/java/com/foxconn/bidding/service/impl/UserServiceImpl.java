package com.foxconn.bidding.service.impl;

import com.foxconn.bidding.mapper.UserMapper;
import com.foxconn.bidding.model.ResultParam;
import com.foxconn.bidding.model.USER_INFO_bean;
import com.foxconn.bidding.model.USER_PIC_FILE_bean;
import com.foxconn.bidding.service.UserService;
import com.foxconn.bidding.util.SimpleEncodeUtil;
import com.foxconn.bidding.util.TokenUtil;
import com.foxconn.bidding.util.UUID_Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper mapper;

    @Override
    public ResultParam ck_user_is_exist(USER_INFO_bean param, HttpServletRequest request) {
        Integer query_user_is_exist_flag = mapper.query_user_is_exist(param.getUsername());
        if (query_user_is_exist_flag > 0) {
            return new ResultParam("0", "此賬號名稱已存在，無法新增", null);
        }

        return new ResultParam("1", "此賬號名稱可新增", null);
    }

    @Override
    @Transactional
    public ResultParam register(USER_INFO_bean param, HttpServletRequest request) {
        String user_pic_file_pkid = "";
        USER_PIC_FILE_bean user_pic_file = param.getUser_pic_file();
        if(user_pic_file != null && user_pic_file.getFile_save_name() != null) {
            user_pic_file_pkid = UUID_Util.getUUID32();
            user_pic_file.setPkid(user_pic_file_pkid);

            Integer add_USER_PIC_FILE_flag = mapper.add_USER_PIC_FILE(user_pic_file);
            if(add_USER_PIC_FILE_flag <= 0) {
                throw new RuntimeException("新增用戶頭像文件信息失敗");
            }
        }

        param.setPassword(SimpleEncodeUtil.encode(param.getPassword()));
        param.setUser_pic_file_pkid(user_pic_file_pkid);
        Integer add_user_info_flag = mapper.add_USER_INFO(param);
        if(add_user_info_flag <= 0) {
            throw new RuntimeException("新增用戶信息失敗");
        }

        return new ResultParam("1", "註冊成功", null);
    }

    @Override
    public ResultParam login(USER_INFO_bean param, HttpServletRequest request) {
        USER_INFO_bean user = mapper.query_user_by_username(param.getUsername());
        String encodedPSW = SimpleEncodeUtil.encode(param.getPassword());

        if(user == null) {
            return ResultParam.of("0", "用戶不存在");
        }
        if(!encodedPSW.equals(user.getPassword())) {
            return ResultParam.of("0", "密碼錯誤");
        }
        String token = TokenUtil.getToken(user.getPkid(), param.getPassword());// token必須用前端傳遞的param中傳遞的password

        return new ResultParam("1", "登錄成功", token);
    }

    @Override
    public USER_INFO_bean findUserById(String id) {
        return mapper.findUserById(id);
    }

    @Override
    public ResultParam login_user_info(USER_INFO_bean param, HttpServletRequest request) {
        USER_INFO_bean user_info_bean = mapper.query_user_by_username(param.getUsername());

        if(user_info_bean == null) {
            return new ResultParam("0", "查詢用戶信息失敗", null);
        } else {
            String user_pic_file_pkid = user_info_bean.getUser_pic_file_pkid();
            if(user_pic_file_pkid != null) {
                USER_PIC_FILE_bean user_pic_file_bean = mapper.query_user_pic_file(user_pic_file_pkid);
                user_info_bean.setUser_pic_file(user_pic_file_bean);
            } else {
                USER_PIC_FILE_bean user_pic_file_bean = mapper.query_user_pic_file("default");
                user_info_bean.setUser_pic_file(user_pic_file_bean);
            }
            return new ResultParam("1", "查詢用戶信息成功", user_info_bean);
        }
    }
}
