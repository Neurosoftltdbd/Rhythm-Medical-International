export default function ContactForm() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div>
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <p>Please fill out the form below to send us a message.</p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          id="name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="email"
          id="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          className="border border-gray-300 rounded-md p-2"
          id="message"
        />
      </div>
      <button className="bg-green-500 text-white p-2 rounded-md">Submit</button>
    </div>
  );
}
