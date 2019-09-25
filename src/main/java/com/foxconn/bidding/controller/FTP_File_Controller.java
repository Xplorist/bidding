package com.foxconn.bidding.controller;

import com.foxconn.bidding.model.ResultParam;
import com.foxconn.bidding.util.FTP_File_Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("api/ftp_file")
public class FTP_File_Controller {
    @Autowired
    private FTP_File_Util util;

    // 上傳用戶頭像圖片
    @RequestMapping("/upload_user_pic")
    public ResultParam upload_user_pic(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        return util.fileUpload("user_pic", file);
    }

}
