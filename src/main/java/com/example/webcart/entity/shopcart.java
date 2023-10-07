package com.example.webcart.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor //不用再自己定义get方法
public class shopcart {
    @TableId(type = IdType.AUTO)
    private int id;
    private String name;
    private int quantity;
    private Double price;
    private int goodid;
    private int shopid;
}

