package com.study.SpringSecurityMybatis.init;

import com.study.SpringSecurityMybatis.repository.CommentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CreateTriggerInit implements CommandLineRunner {
    @Autowired
    private CommentMapper commentMapper;

    @Override
    public void run(String... args) throws Exception {
//        commentMapper.createTrigger();
    }
}
