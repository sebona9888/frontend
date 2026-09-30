import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Admin {
    _id: string;
    email: string;
}

export default function AdminDashboard() {
    const [admin, setAdmin] = useState<Admin | null>(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    navigate("/login");
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
                console.error("Error loading admin:", error);
                localStorage.removeItem("token");
                navigate("/login");
            } finally {
                setLoading(false);
            }
        };

        fetchAdmin();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading dashboard...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="bg-white rounded-lg shadow p-6 mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">
                            GGS Admin Dashboard
                        </h1>

                        {admin && (
                            <p className="text-gray-600 mt-2">
                                Welcome, {admin.email}
                            </p>
                        )}
                    </div>

                    <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
                    >
                        Logout
                    </button>
                </div>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Team */}
                    <button
                        onClick={() => navigate("/admin/team")}
                        className="bg-blue-100 hover:bg-blue-200 p-6 rounded-lg text-left transition cursor-pointer"
                    >
                        <h2 className="font-bold text-lg mb-2">
                            Team
                        </h2>
                        <p className="text-gray-700">
                            Manage team members
                        </p>
                    </button>

                    {/* Projects */}
                    <button
                        onClick={() => navigate("/admin/projects")}
                        className="bg-green-100 hover:bg-green-200 p-6 rounded-lg text-left transition cursor-pointer"
                    >
                        <h2 className="font-bold text-lg mb-2">
                            Projects
                        </h2>
                        <p className="text-gray-700">
                            Manage projects
                        </p>
                    </button>

                    {/* Careers */}
                    <button
                        onClick={() => navigate("/admin/careers")}
                        className="bg-yellow-100 hover:bg-yellow-200 p-6 rounded-lg text-left transition cursor-pointer"
                    >
                        <h2 className="font-bold text-lg mb-2">
                            Careers
                        </h2>
                        <p className="text-gray-700">
                            Manage job posts
                        </p>
                    </button>

                    {/* Messages */}
                    <button
                        onClick={() => navigate("/admin/messages")}
                        className="bg-purple-100 hover:bg-purple-200 p-6 rounded-lg text-left transition cursor-pointer"
                    >
                        <h2 className="font-bold text-lg mb-2">
                            Messages
                        </h2>
                        <p className="text-gray-700">
                            View contact messages
                        </p>
                    </button>

                </div>
            </div>
        </div>
    );
}