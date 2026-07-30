"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
  const nome = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const telefone = formData.get("telefone") as string;
  const empresa = formData.get("empresa") as string;
  const mensagem = formData.get("mensagem") as string;

  if (!nome || !email || !mensagem) {
    return { success: false, error: "Campos obrigatórios ausentes." };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // O Gmail exige que o remetente seja o próprio e-mail autenticado
      to: process.env.EMAIL_USER, // Envia para o próprio e-mail do cliente
      replyTo: email, // Quando o cliente clicar em "Responder", vai para o e-mail do lead
      subject: `Novo Contato via Site: ${nome} - ${empresa || "Sem empresa"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px;">
          <h2>Novo Contato do Site</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone || "Não informado"}</p>
          <p><strong>Empresa:</strong> ${empresa || "Não informada"}</p>
          <br/>
          <p><strong>Mensagem:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 8px;">${mensagem}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Erro no envio de e-mail:", error);
    return { success: false, error: "Falha ao enviar o e-mail." };
  }
}
