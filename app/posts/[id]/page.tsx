import { POSTS_META_DATA } from "@/lib/data/posts";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params; 
  const postMetaData = POSTS_META_DATA.find((postData) => id === postData.id);

  return <div className="py-32">{JSON.stringify(postMetaData)}</div>;
}
