export default function ProfilePage() {
  const logout = async () => {};
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h1 className="text-xl font-semibold text-center mb-4 text-gray-800">
          Profile
        </h1>
        <p className="text-center text-gray-600 mb-6">
          This is your profile page.
        </p>
        <button
          onClick={logout}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
