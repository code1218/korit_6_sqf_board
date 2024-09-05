package com.study.SpringSecurityMybatis.controller;

import com.study.SpringSecurityMybatis.aspect.annotation.ValidAop;
import com.study.SpringSecurityMybatis.dto.request.ReqWriteBoardDto;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class BoardController {

    @ValidAop
    @PostMapping("/board")
    public ResponseEntity<?> write(@Valid @RequestBody ReqWriteBoardDto dto, BindingResult bindingResult) {
        System.out.println(dto);
        return ResponseEntity.ok().body(null);
    }
}
