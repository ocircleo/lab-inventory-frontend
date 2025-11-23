"use client";
import { useRouter } from "next/navigation";

const Form = ({ queries }) => {
if(typeof window === 'undefined') console.log("hitting server form");
else console.log("hitting client form");
    const router = useRouter();
    function handleUserSearchSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {};
        for (const el of form.elements) {
            if (el.name && el.value) data[el.name] = el.value;
        }
        let query = "?";
        for (const key in data) {
            if (query !== "?") query += "&";
            query += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
        }

        router.push(`/admin/users${query}`);
    }
    return (
        <form className="w-full flex flex-col gap-4 mb-6 pe-4" onSubmit={handleUserSearchSubmit}>
            <div className="flex w-full gap-2">
                <input
                    type="text"
                    name="search"
                    placeholder="Search by email or phone"
                    className="flex-1 px-4 py-2 border rounded"
                    autoComplete="off"
                    defaultValue={queries.search ?? ""}
                />
                <select
                    name="searchBy"
                    className="px-4 py-2 border rounded"
                    defaultValue="email"
                >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="name">Name</option>
                </select>
            </div>
            <div className="flex w-full gap-2">
                <input
                    type="number"
                    name="limit"
                    min="1"
                    max="100"
                    defaultValue={queries.limit ?? 15}
                    placeholder="Results per page"
                    className="w-32 px-4 py-2 border rounded"
                    autoComplete="off"
                />
                <select
                    name="userType"
                    className="px-4 py-2 border rounded"
                    defaultValue={queries.userType ?? "all"}
                >
                    <option value="all">All Users</option>
                    <option value="admin">Admin</option>
                    <option value="moderator">Moderator</option>
                    <option value="user">User</option>
                </select>
                <select
                    name="disabled"
                    className="px-4 py-2 border rounded"
                    defaultValue={queries.disabled ?? "all"}
                >
                    <option value="all">All Status</option>
                    <option value="true">Disabled</option>
                    <option value="false">Enabled</option>
                </select>
            </div>
            <div className="flex gap-3">

                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 self-start cursor-pointer"
                >
                    Search
                </button>
                <button
                    type="reset"
                    onClick={() => router.push("/admin/users")}
                    className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-blue-700 self-start cursor-pointer"
                >
                    Reset
                </button>
            </div>
        </form>
    );
}

export default Form;
