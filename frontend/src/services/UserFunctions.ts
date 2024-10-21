import { SuccessObject, callUserFunction } from "@/lib/utils";

export async function listAllUsers(): Promise<SuccessObject> {
    const res = await callUserFunction("admin/users");

    return res;
}