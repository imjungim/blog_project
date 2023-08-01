import { EmailData } from "./email";
//비즈니스 로직을 별도로 분리해서 사용!

export async function sendContactEmail(email: EmailData) {
    //API Route에 이메일 전송을 위한 요청을 보냄(fetch)
    const response = await fetch('/api/contact',{
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const data = await response.json();
    if(!response.ok){
      throw new Error(data.message || '서버 요청에 실패')
    }
    return data;
}