/* eslint-disable @typescript-eslint/no-explicit-any */
export default function UserProfile({ params }: any) {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-black font-bold text-center mb-6 ">
            Profile
          </h1>
          <p className="text-center text-sm text-gray-600 mt-4">
            This is the profile page for {params.id}.
          </p>
        </div>
      </div>
    </div>
  );
}
