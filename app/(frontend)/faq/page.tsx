import PageHeader from "@/components/PageHeader";

export default function faq() {
  return (
    <div className="w-full bg-green-50">
      <div className="w-full max-w-7xl mx-auto min-h-screen">
        <PageHeader
          title="Frequently Asked Questions Page"
          description="Find answers to common questions about our services and offerings."
        />
        <div>
          <div className="mb-4 bg-green-100 p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold">
              What services do you offer?
            </h2>
            <p className="mt-2">
              We offer a range of cardiac solutions including coronary stents,
              guide wires, and heart devices.
            </p>
          </div>
          <div className="mb-4 bg-green-100 p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold">
              How can I schedule an appointment?
            </h2>
            <p className="mt-2">
              You can schedule an appointment online or by calling our office.
            </p>
          </div>
          <div className="mb-4 bg-green-100 p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold">
              What is your opening hours?
            </h2>
            <p className="mt-2">
              We are open Saturday to Thirsday from 8am to 5pm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
