import { tool } from "ai";
import { z } from "zod";

export const timeTool = tool({
  description: "A tool to get the current time.",
  inputSchema: z.object({}),
  execute: async () => new Date().toLocaleTimeString(),
});

// custom tool to execute code in a sandboxed environment and return the output as a string
export const codeExecutionTool = tool({
  description:
    "A tool to execute JavaScript code in a sandboxed environment and return the output as a string.",
  inputSchema: z.object({
    code: z.string().describe("The JavaScript code to execute."),
  }),
  execute: async ({ code }) => {
    //TODO: Implement code execution logic here
    return "Code output";
  },
});
