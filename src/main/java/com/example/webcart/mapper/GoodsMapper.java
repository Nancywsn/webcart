package com.example.webcart.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.webcart.entity.goods;
//BaseMapper接口中提供了现成的增删改查方法，继承即可用
public interface GoodsMapper extends BaseMapper<goods> {
}
