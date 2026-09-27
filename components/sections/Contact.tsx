export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0B1422] py-28 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-[#9FB4D0] mb-4">
            CONTACT US
          </p>

          <h2 className="text-5xl font-bold">
            Let's Build Something Great Together
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Get in touch with us for industrial, commercial, and custom engineering projects.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <div className="space-y-8">

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
              <p className="text-gray-300">
                110017 South Delhi
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p className="text-gray-300">
                +91 9910395725,+91 8700635070,+91 9370569442
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p className="text-gray-300">
                manoj@hightechengineeringsolutions.com, abhishek@hightechengineeringsolutions.com, siddhanthitechsolutions@gmail.com
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-semibold mb-2">🕒 Working Hours</h3>
              <p className="text-gray-300">
                Monday - Saturday<br />
                9:00 AM - 6:00 PM
              </p>
            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

            <form
  action="https://formspree.io/f/mgoglezd"
  method="POST"
  className="space-y-6"
>

              <input
  name="name"
  type="text"
  placeholder="Your Name"
  className="w-full rounded-xl bg-[#162232] border border-white/10 px-5 py-4 outline-none"
/>

<input
  name="email"
  type="email"
  placeholder="Email Address"
  className="w-full rounded-xl bg-[#162232] border border-white/10 px-5 py-4 outline-none"
/>

<input
  name="phone"
  type="tel"
  placeholder="Phone Number"
  className="w-full rounded-xl bg-[#162232] border border-white/10 px-5 py-4 outline-none"
/>

<textarea
  name="message"
  rows={6}
  placeholder="Tell us about your project..."
  className="w-full rounded-xl bg-[#162232] border border-white/10 px-5 py-4 outline-none resize-none"
></textarea>

<button
  type="submit"
  className="w-full rounded-xl bg-[#3D506B] py-4 font-semibold hover:bg-[#536B8A] transition"
>
  Send Message
</button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}