import { SuccessObject, callFunction } from "@/lib/utils";

export async function listAllUsers(): Promise<SuccessObject> {
    const res = await callFunction("listAllUsers");

    return res;
}