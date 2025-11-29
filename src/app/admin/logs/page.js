import { API_URL } from "@/config";
import Link from "next/link";

async function fetchLogs(page = 1, limit = 20) {
  try {
    const response = await fetch(
      `${API_URL}/common/logs?page=${page}&limit=${limit}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching logs:", error);
    return { success: false, data: [], pagination: { pages: 0, total: 0 } };
  }
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleString();
};

export default async function Page({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1;
  const limit = 20;

  const result = await fetchLogs(page, limit);
  const logs = result.data.data || [];
  const totalPages = Math.ceil(result.data.totalItems / limit) || 1;

  const hasPrevious = page > 1;
  const hasNext = page < totalPages;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Logs</h1>

      <>
        <div className="flex flex-col gap-2 font-semibold">
          <div className="grid grid-cols-5 text-center py-2 px-5   bg-custom-blue">
            <p>Moved from</p>
            <p>Moved To</p>
            <p>Type </p>
            <p>yy/mm/dd</p>
            <p>Detail</p>
          </div>
          {logs.map((ele, index) => {
            return (
              <div
                className="grid grid-cols-5 text-center py-2 px-5 rounded bg-base-300"
                key={index}
              >
                <p> {ele.moveFrom}</p>
                <p>{ele.moveTo}</p>
                <p>{ele.itemType}</p>
                <p>{ele.createdAt.split("T")[0]}</p>
                <Link href={"/admin/logs/" + ele._id} className="text-custom-blue underline underline-offset-4 font-semibold">Detail</Link>
              </div>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex gap-4 items-center justify-center">
            {/* Previous Page Link */}
            {hasPrevious && (
              <Link
                href={`?page=${page - 1}`}
                className="btn btn-sm btn-outline"
              >
                ← Previous
              </Link>
            )}

            {/* Current Page Display */}
            <div className="px-4 py-2 bg-base-200 rounded font-bold">
              Page {page} of {totalPages}
            </div>

            {/* Next Page Link */}
            {hasNext && (
              <Link
                href={`?page=${page + 1}`}
                className="btn btn-sm btn-outline"
              >
                Next →
              </Link>
            )}
          </div>
        )}
        {logs.length > 0 ? null : <p className="text-center"> No Logs Found</p>}
      </>
    </div>
  );
}
