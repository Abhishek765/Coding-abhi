import { ToolLoopAgent } from "ai";
import { openai } from "@ai-sdk/openai";
import { codeExecutionTool, timeTool } from "./tools";

const utilityAgent = new ToolLoopAgent({
  model: openai("gpt-5.5"),
  instructions:
    "You are a helpful assistant that can use tools to answer the students' questions related to their code.",
  tools: {
    timeTool: timeTool,
    codeExecutionTool: codeExecutionTool,
  },
});

export { utilityAgent };
