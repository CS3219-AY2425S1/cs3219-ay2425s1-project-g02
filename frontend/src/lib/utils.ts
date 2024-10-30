import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export const HTTP_SERVICE_USER =
  import.meta.env.USER_SERVICE_BACKEND_URL || "http://localhost:5001";
export const HTTP_SERVICE_QUESTION =
  import.meta.env.VITE_QUESTION_SERVICE_BACKEND_URL || "http://localhost:5002";
export const HTTP_SERVICE_COLLAB =
  import.meta.env.VITE_COLLAB_SERVICE_BACKEND_URL || "http://localhost:5004";
export const WS_SERVICE_COLLAB =
  import.meta.env.VITE_COLLAB_SERVICE_WS_URL || "ws://localhost:5004";



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface IDictionary<T> {
  [key: string]: T;
}

export type SuccessObject = {
  success: boolean;
  data?: any;
  error?: any;
};

export function isSubset<T>(subset: Set<T>, superset: Set<T>): boolean {
  // Iterate over each element in the subset
  for (let item of subset) {
    // Check if the element exists in the superset
    if (!superset.has(item)) {
      return false; // Return false if any element is not found
    }
  }
  return true; // Return true if all elements are found
}

// Utility function for faking delaying execution
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Utility function for making fetch requests with credentials
export async function callFunction(
  serviceName: string,
  functionName: string,
  method: string = "GET",
  body?: any
): Promise<SuccessObject> {
  const url = `${serviceName}/${functionName}`;
  const token = sessionStorage.getItem("authToken");

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  console.log(response);

  // Check for empty response
  const data = await response.json().catch(() => ({ success: true }));

  if (!response.ok) {
    return { success: false, error: data.message };
  }

  return { success: true, data: data };
}

export async function callUserFunction(
  functionName: string,
  method: string = "GET",
  body?: any,
  customHeaders?: Record<string, string>
): Promise<SuccessObject> {
  try {
    const url = `${userServiceBackendUrl}/${functionName}`;
    const token = sessionStorage.getItem("authToken");

    // Create default headers
    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...customHeaders, // Merge custom headers if any
    };

    const response = await fetch(url, {
      method,
      headers,
      body: method !== "GET" ? JSON.stringify(body) : undefined, // Avoid sending body for GET requests
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Check for empty response
    const data = await response.text();

    if (!data) {
      return { success: true };
    }

    // Parse the JSON data
    const result = JSON.parse(data);

    return { success: true, data: result };
  } catch (error: any) {
    console.error("Fetch error:", error);
    return { success: false, error }; // Handle the error
  }
}