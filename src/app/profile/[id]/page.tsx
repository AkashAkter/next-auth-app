/* eslint-disable @typescript-eslint/no-explicit-any */
export default function UserProfile({ params }: any) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-500 p-6 text-center">
          <h1 className="text-2xl font-bold text-white">User Profile</h1>
          <p className="text-teal-100 mt-1">Viewing profile details</p>
        </div>

        {/* Profile content */}
        <div className="p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">User ID</h2>
            <p className="text-teal-600 font-mono bg-teal-50 px-3 py-1 rounded-md mt-2">
              {params.id}
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
              <p className="text-gray-800">
                user{params.id.slice(0, 4)}@example.com
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Member Since
              </h3>
              <p className="text-gray-800">January 2023</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
              <div className="flex items-center">
                <span className="h-2 w-2 bg-teal-500 rounded-full mr-2"></span>
                <p className="text-gray-800">Active</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Need to update your profile?{" "}
              <a
                href="#"
                className="text-teal-600 hover:text-teal-500 font-medium"
              >
                Edit profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
