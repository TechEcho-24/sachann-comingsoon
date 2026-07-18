import { useState } from 'react';
import { MessageCircle, ChefHat, Leaf, ShieldCheck, ArrowRight, HeartHandshake, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch("https://formspree.io/f/xgogkzbj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

  const whatsappNumber = "8318999388";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=Hi%20SachAnn%2C%20I%20would%20like%20to%20know%20more!`;

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#f8f6f0]">
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col w-full overflow-hidden">
        
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" 
            alt="Traditional Indian Spices" 
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Very soft radial dark gradient (reduced opacity since we now have text backgrounds) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/40 via-black/10 to-transparent"></div>
        </div>

        {/* Floating Header (Like previous version but with dark green glass) */}
        <header className="absolute top-0 left-0 w-full z-30 p-6 md:p-10 flex justify-between items-center pointer-events-none">
          {/* Left Pill (Logo) - Transparent Green Glass */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pointer-events-auto px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-[#1A2E18]/40 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-2"
          >
            <img src="/favicon.png" alt="SachAnn Logo" className="w-5 h-5 object-contain drop-shadow-md" />
            <span className="font-serif text-sm md:text-base font-bold text-white drop-shadow-md leading-none">
              The SachAnn Company
            </span>
          </motion.div>

          {/* Right Pill (Contact Us) - Transparent Green Glass */}
          <motion.a 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-[#1A2E18]/40 backdrop-blur-md hover:bg-[#1A2E18]/60 border border-white/20 shadow-lg flex items-center gap-2 transition-colors text-white text-sm md:text-base font-bold drop-shadow-sm leading-none"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Contact Us</span>
            <span className="sm:hidden">Chat</span>
          </motion.a>
        </header>

        {/* Hero Content - No visible box, just text with soft background glow from radial gradient above */}
        <main className="relative z-10 w-full flex-1 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 pt-28 pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl flex flex-col items-center"
          >
            {/* Launching Soon Badge */}
            <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#9B5B2E] text-white text-sm font-bold tracking-widest mb-8 shadow-md border border-white/10">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              LAUNCHING SOON
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-[1.1] mb-4">
              Food we trust at home
            </h1>
            
            {/* Sub Headline (Italic) */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl italic font-light text-[#E5D3B3] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mb-8">
              now made for yours.
            </h2>
            
            {/* Description Text */}
            <p className="text-lg md:text-xl text-white leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-4 max-w-xl">
              The customer is not only buying atta, dal or masala. They are asking: 
              <span className="font-semibold text-[#E5D3B3]"> "Can I trust what my family eats every day?"</span> 
            </p>
            
            <p className="text-lg md:text-xl text-white leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-12 max-w-xl">
              SachAnn makes trust visible before asking for it.
            </p>
            
            {/* Interactive Waitlist CTA */}
            <div className="flex justify-center mt-4 h-14 md:h-16 w-full max-w-md mx-auto">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="waitlist-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center justify-center px-8 py-3.5 md:py-4 rounded-full bg-[#1A2E18]/80 backdrop-blur-md border border-white/20 text-[#E5D3B3] text-lg font-bold shadow-2xl w-full"
                  >
                    <span>Thank you! We'll be in touch.</span>
                  </motion.div>
                ) : !showInput ? (
                  <motion.button 
                    key="waitlist-btn"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setShowInput(true)}
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 md:py-4 rounded-full bg-[#9B5B2E] text-white text-lg font-bold hover:bg-[#8A4F27] transition-all shadow-2xl group border border-white/10 w-full md:w-auto"
                  >
                    <span>Join the Waitlist</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                ) : (
                  <motion.form 
                    key="waitlist-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex w-full relative"
                  >
                    <input 
                      type="email" 
                      name="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                      placeholder="Enter your email"
                      autoFocus 
                      className="w-full h-full px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/20 transition-all shadow-lg pr-16"
                    />
                    <AnimatePresence>
                      {email.length > 0 && (
                        <motion.button 
                          initial={{ opacity: 0, scale: 0.5, right: 12 }}
                          animate={{ opacity: 1, scale: 1, right: 8 }}
                          exit={{ opacity: 0, scale: 0.5, right: 12 }}
                          type="submit" 
                          className="absolute top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#9B5B2E] text-white flex items-center justify-center hover:bg-[#8A4F27] transition-colors shadow-lg"
                        >
                          <ArrowRight size={20} />
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Core Features Bar */}
      <div className="bg-[#1A2E18] text-white py-12 px-6 md:px-12 border-t border-[#9B5B2E]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-4">
          <div className="flex items-start gap-4 flex-1">
            <Leaf className="text-[#9B5B2E] mt-1 flex-shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-xl mb-2 text-white">Earthy Premium</h4>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">Sourced directly from roots, maintaining traditional standards.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 flex-1">
            <ShieldCheck className="text-[#9B5B2E] mt-1 flex-shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-xl mb-2 text-white">Proof-led Quality</h4>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">Transparency in source, process, and freshness.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 flex-1">
            <ChefHat className="text-[#9B5B2E] mt-1 flex-shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-xl mb-2 text-white">Traditional Indian</h4>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">Authentic taste of Indian kitchens for your home.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Insight Section */}
      <section className="py-24 bg-[#F5EFE6] relative">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#9B5B2E] tracking-widest uppercase mb-4">Core Insight</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#1A2E18]">The strongest claim is personal.</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl border border-[#9B5B2E]/20 p-10 md:p-14 rounded-[2.5rem] shadow-xl"
            >
              <h4 className="text-[#9B5B2E] font-bold mb-6 tracking-wide uppercase text-sm">Current Promise</h4>
              <p className="text-3xl md:text-4xl font-medium text-[#1A2E18] leading-snug mb-8">
                "If we wouldn't serve it to our own family, we simply won't pack it for you."
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                This turns SachAnn from another "organic" brand into a family-standard food brand. Build a food brand around belief, proof and repeat purchase, not just a product list.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] border-[6px] border-[#1A2E18]/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=2070&auto=format&fit=crop" 
                alt="Family cooking together" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Trust Gap Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="mb-16 md:text-center">
            <h2 className="text-sm font-bold text-[#9B5B2E] tracking-widest uppercase mb-4">Customer Problem</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#1A2E18] max-w-3xl md:mx-auto">
              The trust gap in everyday staples
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5EFE6] p-10 rounded-[2rem] border border-[#9B5B2E]/10 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Eye className="text-[#9B5B2E]" size={28} />
              </div>
              <p className="text-[#1A2E18] font-semibold text-xl leading-relaxed">
                Too many generic claims: organic, pure, natural, premium.
              </p>
            </div>
            
            <div className="bg-[#F5EFE6] p-10 rounded-[2rem] border border-[#9B5B2E]/10 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-[#9B5B2E]" size={28} />
              </div>
              <p className="text-[#1A2E18] font-semibold text-xl leading-relaxed">
                Customer wants proof: source, process, freshness and performance.
              </p>
            </div>
            
            <div className="bg-[#1A2E18] p-10 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group border border-[#9B5B2E]/30">
              <div className="w-16 h-16 rounded-full bg-[#9B5B2E] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                <HeartHandshake className="text-white" size={28} />
              </div>
              <p className="text-white font-bold text-xl leading-relaxed">
                SachAnn can make trust visible before asking for trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2E18] text-white/60 py-12 text-center text-sm border-t border-white/10">
        <p>© 2026 The SachAnn Company. All rights reserved.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <AnimatePresence>
        {!showInput && (
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 group"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={32} className="relative z-10" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
              Chat with us!
            </span>
          </motion.a>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
