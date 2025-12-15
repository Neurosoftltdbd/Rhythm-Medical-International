export default function LoginPage() {
  return (
    <div className="w-full ">
      <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto min-h-screen">
        <h2 className="text-2xl font-bold mb-4 text-center my-8">Login</h2>
        <div>
          <form
            className="flex flex-col gap-4 w-100 mx-auto rounded-lg shadow-lg p-8 bg-gray-200"
            method="post"
            action=""
          >
            <input
              className="border border-gray-300 rounded-md p-2"
              type="email"
              placeholder="Email"
            />
            <input className="border border-gray-300 rounded-md p-2" type="password" placeholder="Password" />
            <button className="bg-green-500 text-white p-2 rounded-md" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
