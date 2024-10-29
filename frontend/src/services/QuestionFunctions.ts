import { SERVICE_QUESTION, SuccessObject, callFunction } from "@/lib/utils";

export async function getAllQuestions(): Promise<SuccessObject> {
  const res = await callFunction(SERVICE_QUESTION, "get-all-questions");

  return res;
}
