import supabase from "../lib/supabase";

export const fetchRecords = async (userId) => {
  const { data: records, error } = await supabase
    .from("items")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: true })
    .limit(100);

  if (error) throw error;
  return records;
};
