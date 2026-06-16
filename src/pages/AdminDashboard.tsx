import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
                console.error("Admin fetch error:", error);

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
                <h2 className="text-xl font-semibold">Loading...</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold">
                            GGS Admin Dashboard
                        </h1>

                        <button
                            onClick={handleLogout}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                        >
                            Logout
                        </button>
                    </div>

                    <div className="mb-8">
                        <p className="text-lg">
                            Welcome,
                            <span className="font-semibold ml-2">
                                {admin?.email}
                            </span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-blue-100 p-6 rounded-lg">
                            <h2 className="font-bold text-lg mb-2">
                                Team
                            </h2>
                            <p>Manage team members</p>
                        </div>

                        <div className="bg-green-100 p-6 rounded-lg">
                            <h2 className="font-bold text-lg mb-2">
                                Projects
                            </h2>
                            <p>Manage projects</p>
                        </div>

                        <div className="bg-yellow-100 p-6 rounded-lg">
                            <h2 className="font-bold text-lg mb-2">
                                Careers
                            </h2>
                            <p>Manage job posts</p>
                        </div>

                        <div className="bg-purple-100 p-6 rounded-lg">
                            <h2 className="font-bold text-lg mb-2">
                                Messages
                            </h2>
                            <p>View contact messages</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}