import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../utils/data/products";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const {
      query: { pid },
    } = req;
    const product = products.find((x) => x.id === pid);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
