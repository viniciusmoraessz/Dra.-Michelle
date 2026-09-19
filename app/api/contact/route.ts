import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, phone, message } = await request.json() as { name?: unknown; phone?: unknown; message?: unknown };
  if (![name, phone, message].every((value) => typeof value === "string" && value.trim())) return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  const contact = { name: name as string, phone: phone as string, message: message as string };
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ error: "Canal de contato ainda não configurado." }, { status: 503 });
  const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: contact.name.trim(), phone: contact.phone.trim(), message: contact.message.trim(), source: "site-dra-michelle" }) });
  if (!response.ok) return NextResponse.json({ error: "Não foi possível encaminhar a mensagem." }, { status: 502 });
  return NextResponse.json({ ok: true });
}

