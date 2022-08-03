import { get } from "./axios";
export interface RGetInfo {
  content: {
    title: string;
    value: string[];
  };
}

export interface PGetInfo {
  keyword: string;
}

export const getInfo = get<RGetInfo, PGetInfo>("/api/getInfo");
