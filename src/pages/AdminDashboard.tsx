import { useEffect, useState } from "react";
import axios from "axios";

interface Admin {
    _id: string;
    email: string;
}

export default function AdminDashboard() {
    const [admin, setAdmin] = useState<Admin | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    window.location.href = "/login";
                    return;
                }

                const res = await axios.get(
                    "http://localhost:5000/api/admin/me",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setAdmin(res.data);
            } catch (error) {
                console.error(error);

                localStorage.removeItem("token");
                window.location.href = "/login";
            } finally {
                setLoading(false);
            }
        };

        fetchAdmin();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    if (loading) {
        return (
            <div className="p-10">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">
                        GGS Admin Dashboard
                    </h1>

                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                        Logout
                    </button>
                </div>

                <div className="mb-6">
                    <p className="text-lg">
                        Welcome,
                        <span className="font-semibold ml-2">
                            {admin?.email}
                        </span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-blue-100 p-4 rounded">
                        <h2 className="font-bold">Team</h2>
                        <p>Manage team members</p>
                    </div>

                    <div className="bg-green-100 p-4 rounded">
                        <h2 className="font-bold">Projects</h2>
                        <p>Manage projects</p>
                    </div>

                    <div className="bg-yellow-100 p-4 rounded">
                        <h2 className="font-bold">Careers</h2>
                        <p>Manage job posts</p>
                    </div>

                    <div className="bg-purple-100 p-4 rounded">
                        <h2 className="font-bold">Messages</h2>
                        <p>View contact messages</p>
                    </div>
                </div>
            </div>
        </div>
    );
}