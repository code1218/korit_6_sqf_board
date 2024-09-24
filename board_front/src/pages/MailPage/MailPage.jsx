import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { instance } from '../../apis/util/instance';
/** @jsxImportSource @emotion/react */

const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    width: 700px;

    & * {
        box-sizing: border-box;
        margin-bottom: 10px;
        padding: 10px 15px;
        width: 100%;
        font-size: 16px;
    }

    & input,
    & button {
        height: 40px;
    }

    & textarea {
        height: 500px;
    }
`;

function MailPage(props) {
    const [mailData, setMailData] = useState({
        toEmail: "",
        subject: "",
        content: ""
    });

    const sendMail = useMutation(
        async () => await instance.post("/email", mailData),
        {
            onSuccess: response => {
                alert("메일이 전송되었습니다.");
                window.location.reload();
            },
            onError: error => {
                console.log(error)
                alert("메일 전송 중 오류가 발생하였습니다.");
            }
        }
    );

    const handleInputOnChange = (e) => {
        setMailData(mailData => ({
            ...mailData,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div css={layout}>
            <Link to={"/"}><h1>메인 페이지</h1></Link>

            <input type="text" name='toEmail' placeholder='받는 사람'
                onChange={handleInputOnChange} value={mailData.toEmail} />

            <input type="text" name='subject' placeholder='제목'
                onChange={handleInputOnChange} value={mailData.subject} />

            <textarea name="content"
                onChange={handleInputOnChange} value={mailData.content} ></textarea>

            <button onClick={() => sendMail.mutateAsync().catch(error => { })}>전송</button>
        </div>
    );
}

export default MailPage;