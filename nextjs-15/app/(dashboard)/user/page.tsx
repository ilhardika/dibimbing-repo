type Post = {
  id: number;
  title: string;
  views: number;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:3001/posts");
  const posts = (await res.json()) as Post[];
  return posts;
}

export default async function UserPage() {
  const posts = await getPosts();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">Title: {post.title}</h2>
            <h2 className="text-sm text-gray-600">Views: {post.views}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
