package com.foxconn.bidding.util;

import com.foxconn.bidding.model.ResultParam;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class FTP_File_Util {
    @Autowired
    private FTP_Properties_Util util;

    /**
     * 文件上傳
     * @param type_base_path 類型根路徑（例如： user_pic為用戶頭像圖片類型的文件的根路徑）
     * @param file 文件
     * @return 響應結果
     */
    public ResultParam fileUpload(String type_base_path, MultipartFile file) {
        String file_origin_name = file.getOriginalFilename();
        InputStream input = null;
        try {
            input = file.getInputStream();
        } catch (IOException e) {
            e.printStackTrace();
            return new ResultParam("0", "上傳文件失敗", null);
        }

        String FTP_Address = util.getAddress();
        Integer FTP_Port = util.getPort();
        String FTP_Username = util.getUsername();
        String FTP_Password = util.getPassword();

        FTPClient ftp = new FTPClient();
        ftp.setControlEncoding("GBK");

        Date date = new Date();
        String year = new SimpleDateFormat("yyyy").format(date);
        String month = new SimpleDateFormat("MM").format(date);
        String day = new SimpleDateFormat("dd").format(date);
        String file_save_path = type_base_path + File.separator + year + File.separator + month + File.separator + day;// 取得配置文件路徑
        String file_save_name = "(" + new SimpleDateFormat("HHmmssSSS").format(new Date()).toString() + ")"
                + file_origin_name;

        try {
            int replay;
            ftp.connect(FTP_Address, FTP_Port);
            ftp.login(FTP_Username, FTP_Password);
            replay = ftp.getReplyCode();
            if(!FTPReply.isPositiveCompletion(replay)) {
                ftp.disconnect();
                return new ResultParam("0", "上傳文件失敗", null);
            }
            ftp.setFileType(FTPClient.BINARY_FILE_TYPE);
            String workingDirectory = ftp.printWorkingDirectory();
            String[] paths = file_save_path.split("\\\\");
            for(int i = 0; i < paths.length; i++) {
                ftp.makeDirectory(paths[i]);
                boolean changeWorkingDirectory_flag = ftp.changeWorkingDirectory(paths[i]);
                if(!changeWorkingDirectory_flag) {
                    return new ResultParam("0", "上傳文件失敗", workingDirectory);
                }
            }

            ftp.storeFile(file_save_name, input);
            input.close();
            ftp.logout();
        } catch (Exception e) {
            e.printStackTrace();
            return new ResultParam("0", "上傳文件失敗", null);
        } finally {
            try {
                if(ftp.isConnected()) {
                    ftp.disconnect();
                }
            } catch (IOException e) {
                e.printStackTrace();
                return new ResultParam("0", "上傳文件失敗", null);
            }
        }

        return new ResultParam("1", "上傳文件成功", file_save_path + File.separator + file_save_name);
    }

    /**
     * 文件下載
     * @param file_save_path 文件保存路徑
     * @param file_save_name 文件保存名稱
     * @return 響應結果
     */
    public ResultParam fileDownload(String file_save_path, String file_save_name) {
        InputStream is = null;

        String FTP_Address = util.getAddress();
        Integer FTP_Port = util.getPort();
        String FTP_Username = util.getUsername();
        String FTP_Password = util.getPassword();

        FTPClient ftp = new FTPClient();
        ftp.setControlEncoding("GBK");

        try {
            int replay;
            ftp.connect(FTP_Address, FTP_Port);
            ftp.login(FTP_Username, FTP_Password);
            replay = ftp.getReplyCode();
            if(!FTPReply.isPositiveCompletion(replay)) {
                ftp.disconnect();
                return new ResultParam("0", "下載文件失敗", null);
            }

            ftp.setFileType(FTPClient.BINARY_FILE_TYPE);
            String[] paths = file_save_path.split("\\\\");
            for(int i = 0; i < paths.length; i++) {
                ftp.makeDirectory(paths[i]);
                boolean changeWorkingDirectory_flag = ftp.changeWorkingDirectory(paths[i]);
                if(!changeWorkingDirectory_flag) {
                    return new ResultParam("0", "下載文件失敗", null);
                }
            }

            is = ftp.retrieveFileStream(file_save_name);
            ftp.logout();
        } catch (Exception e) {
            e.printStackTrace();
            return new ResultParam("0", "下載文件失敗", null);
        } finally {
            try {
                if(ftp.isConnected()) {
                    ftp.disconnect();
                }
            } catch (IOException e) {
                e.printStackTrace();
                return new ResultParam("0", "下載文件失敗", null);
            }
        }

        return new ResultParam("1", "下載文件成功", is);
    }
}
