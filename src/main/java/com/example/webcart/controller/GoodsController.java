package com.example.webcart.controller;

import com.example.webcart.entity.goods;
import com.example.webcart.entity.shopcart;
import com.example.webcart.mapper.GoodsMapper;
import com.example.webcart.mapper.ShopcartMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin //解决跨域问题
@RestController
public class GoodsController {
    @Autowired
    GoodsMapper goodsMapper;
    @Autowired
    ShopcartMapper shopcartMapper;

    @RequestMapping("/cart")
    public List<shopcart> cartlist() {
        return shopcartMapper.selectList(null);
    }

    @RequestMapping("/select1")
    public List<goods> select1() {
        return goodsMapper.selectList(null);
    }

    @RequestMapping("/addtocart")
    //接收到的商品添加到cart中
    public Map<String, Object> addtocart(@RequestBody goods addgood) {

        Map<String, Object> map = new HashMap<>(3);
        String name =addgood.getName();
        if(shopcartMapper.selectByName(name) == null) {
            shopcart recegood = new shopcart();
            recegood.setName(name);
            recegood.setPrice(addgood.getPrice());
            int id = addgood.getId();
            recegood.setGoodid(id);
            recegood.setQuantity(addgood.getNum());
            recegood.setShopid(addgood.getShopid());

            System.out.println(recegood);
            boolean s = shopcartMapper.insert(recegood) > 0 ? true : false;
            map.put("success", s);
        }else {

            shopcart selgood =shopcartMapper.selectByName(name);
            System.out.println(selgood);
            int addquantity =selgood.getQuantity()+addgood.getNum();
            System.out.println(addquantity);
            selgood.setQuantity(addquantity);
            boolean s = shopcartMapper.updateById(selgood) > 0 ? true : false;
            map.put("success", s);
        }
        return map;
    }

    @RequestMapping("/delete")
    //接收到的商品id从cart中删除
    public Map<String, Object> delete(@RequestBody shopcart good) {

        int id = good.getId();
        System.out.println(id);
        boolean s = shopcartMapper.deleteById(id)> 0 ? true : false;

        shopcartMapper.deleteId();
        shopcartMapper.addId();

        Map<String, Object> map = new HashMap<>(3);
        map.put("success", s);
        return map;
    }
}
