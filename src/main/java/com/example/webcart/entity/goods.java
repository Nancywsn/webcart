package com.example.webcart.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor //不用再自己定义get方法
public class goods {
    private int id;
    private String name;
    private Double price;
    private int sales;
    private int stock;
    private int num;
    private int shopid;
}
