// import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 p-6 text-center">
      <p>&copy; {new Date().getFullYear()} The Celebration Studio. All rights reserved.</p>
      <p className="mt-2">Designed with ❤️ for unforgettable events.</p>
    </footer>
  );
}

function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-pink-600">The Celebration Studio</Link>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/about" className="hover:text-pink-600">About</Link></li>
          <li><Link to="/services" className="hover:text-pink-600">Services</Link></li>
          <li><Link to="/portfolio" className="hover:text-pink-600">Portfolio</Link></li>
          <li><Link to="/testimonials" className="hover:text-pink-600">Testimonials</Link></li>
          <li><Link to="/contact" className="hover:text-pink-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}


// function Portfolio() {
//   const portfolioItems = [
//     { category: "Weddings", image: "/portfolio/wedding1.jpg", caption: "Elegant floral stage for a summer wedding." },
//     { category: "Birthdays", image: "/portfolio/birthday1.jpg", caption: "Fun-filled jungle theme party for kids." },
//     { category: "Corporate Events", image: "/portfolio/corporate1.jpg", caption: "Product launch event with modern lighting." },
//     { category: "Weddings", image: "/portfolio/wedding2.jpg", caption: "Royal-themed wedding decor with traditional touches." },
//     { category: "Birthdays", image: "/portfolio/birthday2.jpg", caption: "Luxury balloon decoration for an 18th birthday." },
//     { category: "Corporate Events", image: "/portfolio/corporate2.jpg", caption: "Conference backdrop and seating design." }
//   ];

//   return (
//     <main className="portfolio-page p-10 bg-white">
//       <h2 className="text-4xl font-bold text-center mb-10">Our Work</h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {portfolioItems.map((item, index) => (
//           <div key={index} className="shadow rounded overflow-hidden">
//             <img src={item.image} alt={item.caption} className="w-full h-60 object-cover" />
//             <div className="p-4">
//               <h4 className="font-semibold text-lg mb-1">{item.category}</h4>
//               <p className="text-gray-600 text-sm">{item.caption}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

function Portfolio() {
  const portfolioItems = [
    { category: "Weddings", image: "/portfolio/wedding1.jpg", caption: "Elegant floral stage for a summer wedding." },
    { category: "Birthdays", image: "/portfolio/birthday1.jpg", caption: "Fun-filled jungle theme party for kids." },
    { category: "Corporate Events", image: "/portfolio/corporate1.jpg", caption: "Product launch event with modern lighting." },
    { category: "Weddings", image: "/portfolio/wedding2.jpg", caption: "Royal-themed wedding decor with traditional touches." },
    { category: "Birthdays", image: "/portfolio/birthday2.jpg", caption: "Luxury balloon decoration for an 18th birthday." },
    { category: "Corporate Events", image: "/portfolio/corporate2.jpg", caption: "Conference backdrop and seating design." }
  ];

  return (
    <main className="portfolio-page">
      <h2>Our Work</h2>
      <div className="grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-card">
            <img src={item.image} alt={item.caption} className="portfolio-image" />
            <div className="card-content">
              <h4>{item.category}</h4>
              <p>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


// export function About() {
//   return (
//     <main className="about-page p-10 bg-white">
//       <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
//       <div className="max-w-3xl mx-auto text-center text-gray-700">
//         <p className="mb-4">
//           The Celebration Studio is a premier event management and decoration company
//           based in Rajkot, Gujarat. With over a decade of experience, we specialize
//           in crafting unforgettable experiences for weddings, birthdays, corporate events,
//           and more.
//         </p>
//         <p className="mb-4">
//           Our team of passionate designers and planners brings your vision to life
//           through attention to detail, creativity, and flawless execution.
//           From floral arrangements to complete event planning, we ensure every
//           moment of your celebration is picture-perfect.
//         </p>
//         <p>
//           What sets us apart is our personalized service and dedication to quality.
//           Let us handle your special day — stress-free, stylish, and spectacular.
//         </p>
//       </div>
//     </main>
//   );
// }

export function About() {
  return (
    <main className="about-page">
      <h2>About Us</h2>
      <div className="about-content">
        <p>
          The Celebration Studio is a premier event management and decoration company based in Ahmedabad, Gujarat.
          With over a decade of experience, we specialize in crafting unforgettable experiences for weddings, birthdays,
          corporate events, and more.
        </p>
        <p>
          Our passionate team of designers and planners work closely with you to bring your vision to life —
          ensuring every detail is beautiful, functional, and stress-free. Whether it’s luxurious floral arrangements,
          elegant stage decor, or full-scale planning, we deliver excellence from start to finish.
        </p>
        <p>
          What sets us apart? A deep dedication to quality, personalized service, and creative flair that makes every celebration
          truly unique. Let’s create moments you’ll cherish forever.
        </p>
      </div>
    </main>
  );
}


const WhatsAppWidget = () => (
  <a
    href="https://wa.me/919427702320?text=Hi%20there!%20I'm%20interested%20in%20your%20event%20services."
    className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
  </a>
);

function Home() {
  return (
    <main className="home-page">
      <section className="hero bg-cover text-white p-10 text-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
        <h1 className="text-5xl font-bold">The Celebration Studio</h1>
        <p className="text-xl mt-4">Crafting Moments, Creating Memories</p>
        <a href="/contact" className="mt-6 inline-block bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700">Get a Free Quote</a>
      </section>
      <section className="intro text-center p-10 bg-white">
        <h2 className="text-3xl font-semibold mb-4">Welcome to The Celebration Studio</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">We are your one-stop destination for elegant event planning and creative decoration services. From weddings to corporate events, we bring your dream celebrations to life with passion and professionalism.</p>
      </section>
      <section className="services-preview bg-gray-100 p-10">
        <h3 className="text-2xl font-bold text-center mb-8">Our Top Services</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white shadow rounded">
            <img src="/icons/wedding.svg" alt="Wedding" className="mx-auto mb-4" />
            <h4 className="font-semibold text-lg">Wedding Planning</h4>
            <p className="text-gray-600">Elegant, customized weddings tailored to your style and budget.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <img src="/icons/birthday.svg" alt="Birthday" className="mx-auto mb-4" />
            <h4 className="font-semibold text-lg">Birthday Celebrations</h4>
            <p className="text-gray-600">Creative and colorful birthday setups for all age groups.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <img src="/icons/corporate.svg" alt="Corporate" className="mx-auto mb-4" />
            <h4 className="font-semibold text-lg">Corporate Events</h4>
            <p className="text-gray-600">Professional setups for product launches, seminars, and more.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="text-pink-600 hover:underline text-lg">Explore All Services →</Link>
        </div>
      </section>
      <section className="cta bg-pink-600 text-white p-10 text-center">
        <h3 className="text-3xl font-semibold mb-4">Let’s Plan Your Next Event</h3>
        <p className="text-lg mb-6">Get in touch with us to turn your ideas into a memorable celebration.</p>
        <a href="/contact" className="bg-white text-pink-600 px-6 py-3 rounded-full text-lg hover:bg-gray-100">Contact Us</a>
      </section>
    </main>
  );
}

// function Services() {
//   const serviceList = [
//     { title: "Wedding Planning", icon: "/icons/wedding.svg", description: "Elegant, customized weddings tailored to your style and budget." },
//     { title: "Birthday Celebrations", icon: "/icons/birthday.svg", description: "Creative and colorful birthday setups for all age groups." },
//     { title: "Corporate Events", icon: "/icons/corporate.svg", description: "Professional setups for product launches, seminars, and conferences." },
//     { title: "Floral Decoration", icon: "/icons/flowers.svg", description: "Fresh, theme-based floral arrangements for any occasion." },
//     { title: "Stage Setup", icon: "/icons/stage.svg", description: "Custom-designed stages for weddings, concerts, and formal events." },
//     { title: "Lighting & Effects", icon: "/icons/lighting.svg", description: "Ambient lighting, LED walls, and special effects to wow your guests." },
//     { title: "Theme Parties", icon: "/icons/theme.svg", description: "Custom theme-based decorations and props for any celebration." },
//     { title: "Event Rentals", icon: "/icons/rentals.svg", description: "Rental services for tents, seating, AV equipment, and more." }
//   ];

//   return (
//     <main className="services-page p-10 bg-white">
//       <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {serviceList.map((service, index) => (
//           <div key={index} className="p-6 bg-gray-50 shadow rounded text-center">
//             <img src={service.icon} alt={service.title} className="w-16 h-16 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//             <p className="text-gray-600">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// function Testimonials() {
//   const reviews = [
//     {
//       name: "Ritika Sharma",
//       text: "Absolutely stunning decoration! Our wedding looked like a dream thanks to The Celebration Studio.",
//       image: "/clients/ritika.jpg"
//     },
//     {
//       name: "Anil Desai",
//       text: "Very professional and responsive. They transformed our corporate event into something extraordinary.",
//       image: "/clients/anil.jpg"
//     },
//     {
//       name: "Meena Patel",
//       text: "Loved the birthday setup! My daughter was thrilled and the guests couldn’t stop praising it.",
//       image: "/clients/meena.jpg"
//     }
//   ];

//   return (
//     <main className="testimonials-page p-10 bg-white">
//       <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {reviews.map((review, index) => (
//           <div key={index} className="bg-gray-50 p-6 shadow rounded text-center">
//             <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
//             <p className="text-gray-700 italic mb-4">“{review.text}”</p>
//             <h4 className="font-semibold">{review.name}</h4>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

function Services() {
  const serviceList = [
    { title: "Wedding Planning", icon: "/icons/wedding.svg", description: "Elegant, customized weddings tailored to your style and budget." },
    { title: "Birthday Celebrations", icon: "/icons/birthday.svg", description: "Creative and colorful birthday setups for all age groups." },
    { title: "Corporate Events", icon: "/icons/corporate.svg", description: "Professional setups for product launches, seminars, and conferences." },
    { title: "Floral Decoration", icon: "/icons/flowers.svg", description: "Fresh, theme-based floral arrangements for any occasion." },
    { title: "Stage Setup", icon: "/icons/stage.svg", description: "Custom-designed stages for weddings, concerts, and formal events." },
    { title: "Lighting & Effects", icon: "/icons/lighting.svg", description: "Ambient lighting, LED walls, and special effects to wow your guests." },
    { title: "Theme Parties", icon: "/icons/theme.svg", description: "Custom theme-based decorations and props for any celebration." },
    { title: "Event Rentals", icon: "/icons/rentals.svg", description: "Rental services for tents, seating, AV equipment, and more." }
  ];

  return (
    <main className="services-page">
      <h2>Our Services</h2>
      <div className="grid">
        {serviceList.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}


function Testimonials() {
  const reviews = [
    {
      name: "Ritika Sharma",
      text: "Absolutely stunning decoration! Our wedding looked like a dream thanks to The Celebration Studio.",
      image: "/clients/ritika.jpg"
    },
    {
      name: "Anil Desai",
      text: "Very professional and responsive. They transformed our corporate event into something extraordinary.",
      image: "/clients/anil.jpg"
    },
    {
      name: "Meena Patel",
      text: "Loved the birthday setup! My daughter was thrilled and the guests couldn’t stop praising it.",
      image: "/clients/meena.jpg"
    }
  ];

  return (
    <main className="testimonials-page">
      <h2>What Our Clients Say</h2>
      <div className="grid">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            <img src={review.image} alt={review.name} />
            <p className="quote">“{review.text}”</p>
            <h4>{review.name}</h4>
          </div>
        ))}
      </div>
    </main>
  );
}


function Contact() {
  return (
    <main className="contact-page p-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <form className="space-y-6">
          <input type="text" placeholder="Name" className="w-full border p-3 rounded" required />
          <input type="email" placeholder="Email" className="w-full border p-3 rounded" required />
          <input type="tel" placeholder="Phone" className="w-full border p-3 rounded" required />
          <select className="w-full border p-3 rounded" required>
            <option value="">Select Event Type</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Corporate</option>
            <option>Other</option>
          </select>
          <textarea placeholder="Your Message" rows="5" className="w-full border p-3 rounded" required></textarea>
          <button type="submit" className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700">Send Message</button>
        </form>
        <div>
          <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
          <p className="mb-2">The Celebration Studio</p>
          <p className="mb-2">9TH Floor Aakruti Complex, Stadium Circle, Navrangpura, Ahmedabad, Gujarat 380009</p>
          <p className="mb-2">Email: omnims@gmail.com</p>
          <p className="mb-4">Phone: +91-11111-11111</p>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.574998553344!2d72.56544749999999!3d23.039371999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848adaf06f61%3A0xc0742f3c45943a73!2sOmniMD!5e0!3m2!1sen!2sin!4v1752172291686!5m2!1sen!2sin"
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.872160725614!2d72.6574322!3d22.991728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8706234d0433%3A0x88840f015f5fad96!2sThe%20Celebration%20Studio!5e0!3m2!1sen!2sin!4v1750276229478!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppWidget />
    </Router>
  );
}

export default App;
