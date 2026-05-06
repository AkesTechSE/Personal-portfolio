'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
      console.error('Error:', result.error);
    }
  } catch (error) {
    console.error('Error sending email:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  }
};

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: 'akililuabera44@gmail.com',
      link: 'mailto:akililuabera44@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      details: 'ArbaMinch, Ethiopia',
      link: 'https://www.google.com/maps/place/Kola+Shara/@6.0660904,37.5256999,12.78z/data=!4m5!3m4!1s0x17baa39090591ae3:0x6091c3e9f7692c5!8m2!3d6.0902029!4d37.5675774?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      details: '+251 909 630346',
      link: 'tel:+251909630346'
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <div className="mb-14 text-center">
          <p className="section-label">04. Contact</p>
          <h4 className="section-heading mt-4">Let’s build something useful together.</h4>
        </div>
        
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-slate-100">Let&apos;s Start a Conversation</h3>
              <p className="mb-8 text-base leading-7 text-slate-300/75">
                I'm always interested in new opportunities - whether it's collaborating on exciting projects, 
                discussing AI technologies, or exploring how we can work together to bring your ideas to life.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="group flex items-center space-x-4 rounded-2xl border border-white/10 bg-[#0b1728] p-4 transition-all duration-300 hover:border-sky-400/25 hover:bg-[#0f1d33]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-400/25 bg-sky-400/10 text-sky-200 transition-transform duration-300 group-hover:scale-110">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100">{method.title}</h4>
                      <p className="text-slate-300/70">{method.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Response Note */}
              <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-400/8 p-4">
                <p className="text-sm text-sky-100/85">
                  <strong>Quick Response:</strong> I typically reply within  As soon as possible. Feel free to reach out, and I look forward to connecting with you!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl border border-white/10 bg-[#0b1728] p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-medium text-slate-300/70">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-white/10 bg-[#07111f] px-4 py-3 text-slate-100 outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-sky-400/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-medium text-slate-300/70">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-white/10 bg-[#07111f] px-4 py-3 text-slate-100 outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-sky-400/50"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="mb-2 block font-medium text-slate-300/70">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-[#07111f] px-4 py-3 text-slate-100 outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-sky-400/50"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-2 block font-medium text-slate-300/70">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full resize-none rounded-lg border border-white/10 bg-[#07111f] px-4 py-3 text-slate-100 outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-sky-400/50"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'cursor-not-allowed bg-white/10 text-slate-500'
                      : 'border border-sky-400/60 bg-transparent text-sky-200 hover:border-sky-300 hover:bg-sky-400/10'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-4 text-center text-emerald-200">
                    ✅ Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="rounded-lg border border-rose-400/30 bg-rose-400/10 p-4 text-center text-rose-200">
                    ❌ There was an error sending your message. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
