function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "The 'Narrative Shift' ebook completely changed how I view my daily routine. I finally started that project I was afraid of.",
      author: "Alex S.",
      initials: "AS",
      bgColor: "bg-blue-600"
    },
    {
      id: 2,
      text: "I binged the entire channel in one weekend. The one-on-one coaching was the clarity I needed.",
      author: "Michael J.",
      initials: "MJ",
      bgColor: "bg-purple-600"
    },
    {
      id: 3,
      text: "Real, raw, and honest. This isn't just productivity advice; it's life advice.",
      author: "Riya K.",
      initials: "RK",
      bgColor: "bg-pink-600"
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Voices</h2>
          <p className="text-gray-400">What the storytellers are saying.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="flex text-yellow-400 mb-4 text-sm">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-gray-300 mb-4 text-sm italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${testimonial.bgColor} rounded-full flex items-center justify-center font-bold text-xs`}>
                  {testimonial.initials}
                </div>
                <span className="text-sm font-bold text-white">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
