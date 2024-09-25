import { SuccessObject, callFunction } from "@/lib/utils";

export async function getAllQuestions(): Promise<SuccessObject> {
  const res = await callFunction("get-all-questions");

  return res;
}
