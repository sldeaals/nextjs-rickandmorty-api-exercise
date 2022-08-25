import type { NextApiRequest, NextApiResponse } from "next";

type Character = {
  id?: string;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  image?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Character[]>
) {
  const { 
    query: { id, name, status, species, gender, image },
    method 
  } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ id, name, status, species, gender, image });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
