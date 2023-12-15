import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  status: Status;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    status: {
      message: "All systems online",
    },
  });
}
