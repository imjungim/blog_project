import { sendEmail } from "@/service/email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response("유효하지 않은 포맷", { status: 400 });
  }
  // 노드메일러를 이용해서 메일을 전송하면 됨.
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일을 성공적으로 보냄" }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.error(error);

      return new Response(JSON.stringify({ message: "메일 전송 실패" }), {
        status: 500,
      });
    });
}
