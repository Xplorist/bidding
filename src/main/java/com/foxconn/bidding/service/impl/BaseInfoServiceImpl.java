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

}
