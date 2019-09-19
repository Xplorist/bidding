package com.foxconn.bidding.controller;

import com.foxconn.bidding.model.RegisterParam;
import com.foxconn.bidding.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class RegisterController {
    @Autowired
    private RegisterService svc;

    @RequestMapping("/template")
    public String template(@RequestBody RegisterParam param, HttpServletRequest request) {
        String result = "";

        return result;
    }

 /*   @RequestMapping("/")
    public ModelAndView index() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("send_end/index.html");

        return mav;
    }*/
}
