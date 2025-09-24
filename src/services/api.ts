import { Ques } from "@/types/api/apiType";
import { Product } from "@/types/product/typeProduct";

const url = "https://68bd4aa5227c48698f842caf.mockapi.io";

export async function getAllProducts() {
  try {
    const res = await fetch(`${url}/products`);
    if (!res.ok) {
      throw new Error("fetch failed data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProduct(id: string) {
  try {
    const res = await fetch(`${url}/products/${id}`);
    if (!res.ok) {
      throw new Error("fetch failed data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function createUserQuestion(ques: Ques) {
  try {
    const res = await fetch(`${url}/user-questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ques),
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const userQues = await res.json();
    return userQues;
  } catch (error) {
    console.error("Error creating user question:", error);
    throw error;
  }
}

export async function getAllProductsPagination({
  page = 1,
  category,
  discount,
  color,
  size,
}: {
  page: number;
  category?: string;
  discount?: boolean;
  color?: string;
  size?: string;
}): Promise<Product[]> {
  const params = new URLSearchParams();
  params.append("page", page.toString());
  params.append("limit", "12");
  if (category) params.append("category", category);
  if (discount) params.append("discount", "true");
  if (color) params.append("colors", color); 
  if (size) params.append("size", size);

  const res = await fetch(
    `https://68bd4aa5227c48698f842caf.mockapi.io/products?${params.toString()}`
  );
  if (!res.ok) throw new Error("fetch failed data");
  return res.json();
}

export async function getProductsCount({
  category,
  discount,
  color,
  size,
}: {
  category?: string;
  discount?: boolean;
  color?: string;
  size?: string;
}): Promise<number> {
  const params = new URLSearchParams();
  if (category) params.append("category", category);
  if (discount) params.append("discount", "true");
  if (color) params.append("colors", color);
  if (size) params.append("size", size);

  const res = await fetch(
    `https://68bd4aa5227c48698f842caf.mockapi.io/products?${params.toString()}`
  );
  if (!res.ok) throw new Error("fetch failed data");
  const data: Product[] = await res.json();
  return data.length;
}
