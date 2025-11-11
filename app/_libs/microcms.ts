import { createClient } from "microcms-js-sdk";

import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListResponse,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Taste = {
  flavor: string;
} & MicroCMSListContent;

export type Menu = {
  name: string;
  taste?: Taste[];
  image?: MicroCMSImage;
  description?: string;
  amount: number;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is not defined");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is not defined");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getMenuList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Menu>({
    endpoint: "menu",
    queries,
  });
  return listData;
};
