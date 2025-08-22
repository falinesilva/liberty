import supabase from "../lib/supabase";

export const getUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw error;
  return user;
};

export const getDisplayName = (user) => user?.user_metadata?.display_name || null;
