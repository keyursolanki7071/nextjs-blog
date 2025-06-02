"use server";
import { createClient } from "@/lib/supabase/server";

const fetchAllCategories = async () => {
  const supabase = await createClient();
  const {data} = await supabase.from("categories").select("*");
  return data
};

export { fetchAllCategories };
