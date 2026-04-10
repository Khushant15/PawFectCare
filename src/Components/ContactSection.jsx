import { useState } from 'react';
import { Phone, Mail, Send, PawPrint } from 'lucide-react';

export default function ContactSection() {
  /* ---------- form state ---------- */
  const [form, setForm] = useState({
    name: '',
    dogName: '',
    email: '',
    message: '',
  });

  /* ---------- UI feedback ---------- */
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  /* ---------- handlers ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      setStatus({ loading: false, success: true, error: '' });
      setForm({ name: '', dogName: '', email: '', message: '' }); // clear form
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: 'Something went wrong. Please try again.',
      });
    }
  };

  /* ---------- UI ---------- */
  return (
    <section id="contact" className="py-24 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Reach Out to <span className="text-amber-600">Our Experts</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about your dog's care plan? We're here to help you every step of the way.
          </p>
        </div>

        {/* feedback banners */}
        {status.success && (
          <div className="max-w-xl mx-auto mb-8 rounded-[2rem] bg-green-50 border border-green-100 p-6 text-green-800 text-center font-bold flex items-center justify-center gap-3">
            <span>🎉 WOOF! Message sent! We’ll bark back soon.</span>
          </div>
        )}
        {status.error && (
          <div className="max-w-xl mx-auto mb-8 rounded-[2rem] bg-red-50 border border-red-100 p-6 text-red-800 text-center font-bold">
            {status.error}
          </div>
        )}

        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-amber-100 border border-amber-50 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Contact Card Sidebar */}
            <div className="md:col-span-2 bg-amber-600 p-12 text-white flex flex-col justify-between">
               <div className="space-y-8">
                  <h3 className="text-3xl font-bold">Bark at Us</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-2xl">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-amber-200 uppercase font-bold tracking-widest">Call</p>
                        <p className="font-bold">+1 (555) BARK-PAW</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-2xl">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-amber-200 uppercase font-bold tracking-widest">Email</p>
                        <p className="font-bold">hello@pawfectcare.com</p>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="pt-8">
                  <PawPrint className="w-16 h-16 opacity-20" />
               </div>
            </div>

            {/* Main Form */}
            <div className="md:col-span-3 p-12">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Your Name</label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-amber-50 bg-amber-50/10 rounded-2xl focus:ring-4 focus:ring-amber-50 focus:border-amber-600 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Dog's Name</label>
                    <input
                      name="dogName"
                      type="text"
                      value={form.dogName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-amber-50 bg-amber-50/10 rounded-2xl focus:ring-4 focus:ring-amber-50 focus:border-amber-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-amber-50 bg-amber-50/10 rounded-2xl focus:ring-4 focus:ring-amber-50 focus:border-amber-600 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Your Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-amber-50 bg-amber-50/10 rounded-2xl focus:ring-4 focus:ring-amber-50 focus:border-amber-600 outline-none transition-all"
                    placeholder="Wanna talk traits, treats, or checkups?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="group w-full bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-700 shadow-xl shadow-amber-200 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span>{status.loading ? 'Sending…' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
