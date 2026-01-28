import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Login",
  description: "Login to your account",
  openGraph: {
    title: "Login",
    description: "Login to your account",
    images: [
      {
        url: "https://rhythmmedicalinternational.com/logo.png",
        width: 800,
        height: 600,
      },
    ],
    siteName: "Rhythm Medical International",
  },
  twitter: {
    title: "Login",
    description: "Login to your account",
    images: [
      {
        url: "https://rhythmmedicalinternational.com/logo.png",
        width: 800,
        height: 600,
      },
    ],
    card: "summary_large_image",
  },
};

export default function LoginPage() {
  return (
    <div className="w-full bg-blue-100 min-h-screen dark:bg-gray-900 ">
      <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto">
        <PageHeader title="Login" description="Login to your account" />
        <div>
          <form
            className="flex flex-col gap-8 w-100 mx-auto rounded-lg shadow-lg p-12 bg-blue-50 dark:bg-gray-800"
            method="post"
            action=""
          >
            <input
              className="border border-gray-300 bg-white rounded-md p-2"
              type="email"
              placeholder="Email"
            />
            <input
              className="border border-gray-300 bg-white rounded-md p-2"
              type="password"
              placeholder="Password"
            />
            <button
              className="bg-green-500 text-white p-2 rounded-md"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
