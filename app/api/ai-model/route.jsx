import { QUESTIONS_PROMPT } from "@/services/Constants";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  try {
    const { jobPosition, jobDescription, duration, type } = await req.json();

    if (!jobPosition || !jobDescription || !duration || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const FINAL_PROMPT = QUESTIONS_PROMPT
      .replace("{{jobTitle}}", jobPosition)
      .replace("{{jobDescription}}", jobDescription)
      .replace("{{duration}}", duration)
      .replace("{{type}}", type);

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY, // Ensure your API key is in .env.local
    });

    const completion = await openai.chat.completions.create({
      model: "x-ai/grok-4.1-fast:free", // Updated to Grok 4.1 Fast
      messages: [{ role: "user", content: FINAL_PROMPT }],
      temperature: 0.3,
    });

    let output = completion.choices[0].message.content || "";

    // Remove <think> blocks
    output = output.replace(/<think>[\s\S]*?<\/think>/g, "").trim();

    // Extract JSON
    const start = output.indexOf("{");
    const end = output.lastIndexOf("}");

    if (start === -1 || end === -1) {
      return NextResponse.json(
        { error: "AI returned invalid JSON", raw: output },
        { status: 500 }
      );
    }

    const jsonString = output.substring(start, end + 1);

    let parsed;
    try {
      parsed = JSON.parse(jsonString);
    } catch (err) {
      return NextResponse.json(
        { error: "JSON parse error", raw: jsonString },
        { status: 500 }
      );
    }

    return NextResponse.json({ content: parsed });
  } catch (e) {
    return NextResponse.json(
      { error: "Server error", details: e.message },
      { status: 500 }
    );
  }
}
