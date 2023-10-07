package com.example.webcart.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.webcart.entity.shopcart;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

public interface ShopcartMapper extends BaseMapper<shopcart> {
    @Update("alter table shopcart drop id")
    void deleteId();
    @Update("alter TABLE shopcart add id int(11) primary key auto_increment FIRST")
    void addId();
    @Select("SELECT * FROM shopcart WHERE name = #{name}")
    shopcart selectByName(String name);
}
