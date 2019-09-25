package com.foxconn.bidding.controller;

import com.foxconn.bidding.model.ResultParam;
import com.foxconn.bidding.util.FTP_File_Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLEncoder;

@Controller
@RequestMapping("api/pic_show")
public class Pic_Show_Controller {
    @Autowired
    private FTP_File_Util util;

    // 加載圖片(param中必須傳遞 file_save_path, file_save_name, file_origin_name)
    @RequestMapping("/load")
    public void load(HttpServletRequest request, HttpServletResponse response) {
        String file_save_path = request.getParameter("file_save_path");
        String file_save_name = request.getParameter("file_save_name");
        String file_origin_name = request.getParameter("file_origin_name");

        OutputStream os = null;
        InputStream is = null;
        try {
            ResultParam resultParam = util.fileDownload(file_save_path, file_save_name);
            if(resultParam.getT() != null) {
                response.setContentType("application/x-download");
                response.addHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(file_origin_name, "UTF-8"));

                is = (InputStream) resultParam.getT();
                BufferedInputStream bis = new BufferedInputStream(is);
                os = response.getOutputStream();
                byte[] buffer = new byte[1024];
                int length;

                while((length = bis.read(buffer)) != -1) {
                    os.write(buffer, 0, length);
                }
                is.close();
                os.flush();
                os.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
