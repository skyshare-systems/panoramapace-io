import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shortenAddress = (address: any) =>
  address?.substring(0, 4)?.toLowerCase() +
    "..." +
    address?.substring(40, 44)?.toLowerCase() ?? "0x00000";
