package com.foxconn.bidding.service;

import com.foxconn.bidding.model.GIVE_PRICE_MSTR_bean;

import java.util.List;

public interface GivePriceSortService {
    List<GIVE_PRICE_MSTR_bean> query_give_price_list_complex(GIVE_PRICE_MSTR_bean param);
}
