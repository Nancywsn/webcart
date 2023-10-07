package com.example.webcart;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.webcart.mapper")
public class WebcartApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebcartApplication.class, args);
    }

}
