import { useEffect, useState } from "react";

export const Resources = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to fetch");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (error)
    return <div className="p-6 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Comments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border border-gray-300">
                ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border border-gray-300">
                Post ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border border-gray-300">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border border-gray-300">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border border-gray-300">
                Body
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {comments.map(({ id, postId, name, email, body }) => (
              <tr key={id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300 text-sm">{id}</td>
                <td className="px-4 py-2 border border-gray-300 text-sm">{postId}</td>
                <td className="px-4 py-2 border border-gray-300 text-sm">{name}</td>
                <td className="px-4 py-2 border border-gray-300 text-sm">{email}</td>
                <td className="px-4 py-2 border border-gray-300 text-sm">{body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
