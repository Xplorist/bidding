package com.foxconn.bidding.service.impl;

import com.foxconn.bidding.mapper.UserMapper;
import com.foxconn.bidding.model.User;
import com.foxconn.bidding.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper mapper;

    @Override
    public User findUserByUsername(String username) {
        return mapper.findUserByUsername(username);
    }

    @Override
    public User findUserById(String id) {
        return mapper.findUserById(id);
    }
}
