package com.study.SpringSecurityMybatis.dto.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class ReqWriteBoardDto {
    @NotBlank(message = "제목을 입력하세요.")
    private String title;
    @NotBlank(message = "게시글 내용을 입력하세요.")
    private String content;
}
