package com.foxconn.bidding.service.impl;

import com.foxconn.bidding.mapper.BaseInfoMapper;
import com.foxconn.bidding.model.*;
import com.foxconn.bidding.service.BaseInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class BaseInfoServiceImpl implements BaseInfoService {
    @Autowired
    private BaseInfoMapper mapper;

    @Override
    public ResultParam query_factory_list(BaseInfoParam param, HttpServletRequest request) {
        List<FCTRY_ZONE_bean> list = mapper.query_factory_list();

        return new ResultParam("1", "success", list);
    }

    @Override
    public ResultParam query_SECN_CMPY_list(BaseInfoParam param, HttpServletRequest request) {
        List<SECN_CMPY_bean> list = mapper.query_SECN_CMPY_list(param.getFctry_zone_pkid());

        return new ResultParam("1", "success", list);
    }

    @Override
    public ResultParam query_ENTRPS_GROUP_list(BaseInfoParam param, HttpServletRequest request) {
        List<ENTRPS_GROUP_bean> list = mapper.query_ENTRPS_GROUP_list(param.getSecn_cmpy_pkid());

        return new ResultParam("1", "success", list);
    }

    @Override
    public ResultParam query_PD_OFFICE_list(BaseInfoParam param, HttpServletRequest request) {
        List<PD_OFFICE_bean> list = mapper.query_PD_OFFICE_list(param.getEntrps_group_pkid());

        return new ResultParam("1", "success", list);
    }

    // 【05】查詢交貨地點list
    @Override
    public ResultParam query_deliver_address_list(BaseInfoParam param, HttpServletRequest request) {
        List<BaseInfoParam> list = mapper.query_deliver_address_list();

        return new ResultParam("1", "查詢交貨地點list成功", list);
    }

    // 【06】查詢開標範圍list
    @Override
    public ResultParam query_bid_range_list(BaseInfoParam param, HttpServletRequest request) {
        List<BaseInfoParam> list = mapper.query_bid_range_list();

        return new ResultParam("1", "查詢開標範圍list成功", list);
    }

    // 【07】查詢產品類型list
    @Override
    public ResultParam query_pd_type_list(BaseInfoParam param, HttpServletRequest request) {
        List<BaseInfoParam> list = mapper.query_pd_type_list();

        return new ResultParam("1", "【07】查詢產品類型list成功", list);
    }

    // 【08】根據單位代碼查詢單位名稱
    @Override
    public ResultParam query_dept_name_by_dept_no(BaseInfoParam param, HttpServletRequest request) {
        String dept_no = param.getDept_no();
        String fctry_zone = param.getFctry_zone();
        if(fctry_zone == null || "".equals(fctry_zone)) {
            throw new RuntimeException("廠區為空，根據單位名稱查詢單位代碼失敗");
        }
        if("深圳".equals(fctry_zone) || "龍華".equals(fctry_zone)) {
            dept_no += "SZ";
        }
        B_DEPT_bean dept = mapper.query_dept_name_by_dept_no(dept_no);
        if(dept == null || "".equals(dept)) {
            throw new RuntimeException("根據單位名稱查詢單位代碼失敗");
        }

        return new ResultParam("1", "【08】根據單位名稱查詢單位代碼成功", dept);
    }
}
