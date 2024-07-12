import { getAllProducts } from "@/services/productServices.js";

export default function handler(request, response) {
  if (request.method === "GET") {
    response.status(200).json(getAllProducts());
  } else {
    response.status(405).json({ message: "Not allowed!" });
  }
}
