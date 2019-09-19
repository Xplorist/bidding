package com.foxconn.bidding.interceptor;

import com.foxconn.bidding.model.ResultParam;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ResponseBody
    @ExceptionHandler(Exception.class)
    public Object handleException(Exception e) {
        e.printStackTrace();

        return ResultParam.of("30001", e.getMessage() != null? e.getMessage(): "服務器發生錯誤");
    }
}
