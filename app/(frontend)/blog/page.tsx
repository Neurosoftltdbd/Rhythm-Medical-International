import PageHeader from "@/components/PageHeader";

export default function blog() {
  return (
    <div className="w-full bg-green-50">
      <div className="w-full max-w-7xl mx-auto min-h-screen">
        <PageHeader
          title="Blog Page"
          description="Welcome to our blog page where we share the latest updates and insights."
        />
        <div></div>
      </div>
    </div>
  );
}
