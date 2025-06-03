"use server";

import { createClient } from "@/lib/supabase/server";

interface CreateProps {
    title: string;
    slug: string;
    category_id: string;
    tags: string;
    content: string;
}

const create = async (values: CreateProps) => {
    const supabase = await createClient();
    const {data, error} = await supabase.from('posts').insert([values]);
    if(error) {
        throw error.message;
    }
    return data;
}

export {create};