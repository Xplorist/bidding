package com.foxconn.bidding.model;

import lombok.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor(staticName = "of")
@AllArgsConstructor
public class ResultParam<T> {
    @NonNull
    private String code;
    @NonNull
    private String msg;
    private T t;
}
