import { createClient } from "@supabase/supabase-js";

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function getStaticProps() {
  const { data } = await supabaseAdmin.from("images").select("*");
  return {
    props: {
      images: data,
    },
  };
}
