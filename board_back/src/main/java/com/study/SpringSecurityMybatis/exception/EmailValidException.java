package com.study.SpringSecurityMybatis.exception;

public class EmailValidException extends RuntimeException {
    public EmailValidException() {
        super("이메일 인증 후 이용바랍니다.");
    }
}
