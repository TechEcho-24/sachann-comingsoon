import { useState } from 'react';
import { MessageCircle, ChefHat, Leaf, ShieldCheck, ArrowRight, HeartHandshake, Eye, Settings2, MapPin, Clock, BadgeCheck, AlertCircle, Search } from 'lucide-react';
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

      {/* Differentiation Section (Cinematic Layout) */}
      <section className="relative w-full h-auto min-h-[80vh] md:min-h-[650px] flex flex-col justify-between overflow-hidden bg-black">
        {/* Full Cover Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/stone_ground_bg.png" 
            alt="Traditional stone grinding chakki" 
            className="w-full h-full object-cover opacity-80"
          />
          {/* Subtle gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        </div>
        
        {/* Top Left Title Overlay */}
        <div className="relative z-10 w-full p-6 md:p-12 lg:p-16 pt-24 md:pt-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl"
          >
            <h2 className="text-sm md:text-base font-medium text-white/90 tracking-wide mb-3">
              Differentiation
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-tight drop-shadow-lg">
              The five reasons to believe.
            </h3>
          </motion.div>
        </div>

        {/* Bottom 5-Points Band */}
        <div className="relative z-10 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-16 pb-8 md:pb-12 px-6 md:px-12 lg:px-16 mt-auto">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
              
              {/* Point 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <Settings2 className="text-white mb-4 drop-shadow-md" size={32} strokeWidth={1.5} />
                <h4 className="text-white font-semibold text-sm md:text-base leading-snug mb-2 drop-shadow-sm">
                  Low-RPM stone grinding
                </h4>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  Preserves natural aroma, texture and character.
                </p>
              </motion.div>
              
              {/* Point 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <MapPin className="text-white mb-4 drop-shadow-md" size={32} strokeWidth={1.5} />
                <h4 className="text-white font-semibold text-sm md:text-base leading-snug mb-2 drop-shadow-sm">
                  Local farm sourcing
                </h4>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  Built on trusted, familiar farming networks.
                </p>
              </motion.div>
              
              {/* Point 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <Clock className="text-white mb-4 drop-shadow-md" size={32} strokeWidth={1.5} />
                <h4 className="text-white font-semibold text-sm md:text-base leading-snug mb-2 drop-shadow-sm">
                  Small-batch freshness
                </h4>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  Grinding/packing dates can make freshness visible.
                </p>
              </motion.div>
              
              {/* Point 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <HeartHandshake className="text-white mb-4 drop-shadow-md" size={32} strokeWidth={1.5} />
                <h4 className="text-white font-semibold text-sm md:text-base leading-snug mb-2 drop-shadow-sm">
                  Family-tested standard
                </h4>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  The same quality expected in our own homes.
                </p>
              </motion.div>
              
              {/* Point 5 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col col-span-2 md:col-span-1"
              >
                <BadgeCheck className="text-white mb-4 drop-shadow-md" size={32} strokeWidth={1.5} />
                <h4 className="text-white font-semibold text-sm md:text-base leading-snug mb-2 drop-shadow-sm">
                  Proof-led trust
                </h4>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  Lab reports, process videos, farm photos and comparisons.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Customer Problem Section (Glassmorphism Layout) */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden bg-black">
        {/* Full Cover Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/abstract_nature_bg.png" 
            alt="Abstract natural background with bokeh" 
            className="w-full h-full object-cover opacity-80"
          />
          {/* Subtle dark overlay to make white text pop */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Floating Glass Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-[1300px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-stretch"
        >
          {/* Left Column: Heading */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-xs md:text-sm font-bold text-white/70 tracking-[0.2em] uppercase mb-4">
              The Core Problem
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif leading-tight mb-6 drop-shadow-lg">
              The trust gap in everyday staples.
            </h3>
            
            {/* Divider Line */}
            <div className="h-[1px] w-24 bg-white/30 my-6 mx-auto lg:mx-0"></div>
            
            <p className="text-base md:text-lg text-white/90 leading-relaxed font-medium">
              You are not just buying atta, dal or masala.<br className="hidden lg:block" />
              You are asking: "Can I trust what my family eats every day?"
            </p>
          </div>
          
          {/* Right Column: 3 Points */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center">
            
            {/* Point 1 */}
            <div className="flex flex-col items-center text-center">
              <AlertCircle size={48} strokeWidth={1} className="text-white mb-6 drop-shadow-sm opacity-90" />
              <h4 className="text-sm md:text-base font-bold text-white mb-3">
                Generic claims
              </h4>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-[200px]">
                Too many generic claims: organic, pure, natural, and premium.
              </p>
            </div>
            
            {/* Point 2 */}
            <div className="flex flex-col items-center text-center">
              <Search size={48} strokeWidth={1} className="text-white mb-6 drop-shadow-sm opacity-90" />
              <h4 className="text-sm md:text-base font-bold text-white mb-3">
                Customer wants proof
              </h4>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-[200px]">
                Source, process, freshness and performance.
              </p>
            </div>
            
            {/* Point 3 */}
            <div className="flex flex-col items-center text-center">
              <ShieldCheck size={48} strokeWidth={1} className="text-white mb-6 drop-shadow-sm opacity-90" />
              <h4 className="text-sm md:text-base font-bold text-white mb-3">
                Visible Trust
              </h4>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-[200px]">
                SachAnn can make trust visible before asking for trust.
              </p>
            </div>
            
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-[#1A2E18] pt-16 pb-8 border-t border-[#1A2E18]/5">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12 mb-12">
            
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
              <img src="/footerlogo.png" alt="The SachAnn Company" className="h-12 md:h-16 lg:h-20 w-auto mb-6 object-contain" />
              <p className="text-sm md:text-base text-[#8A4F27] leading-relaxed font-medium">
                Making trust visible in everyday staples. Because your family deserves nothing less.
              </p>
            </div>
            
            {/* Links */}
            <div className="flex gap-12 md:gap-24 text-center md:text-left mt-4 md:mt-0">
              <div>
                <h4 className="font-bold text-[#C48446] mb-5 text-sm tracking-[0.15em] uppercase">Company</h4>
                <ul className="space-y-4 text-sm md:text-base text-[#1A2E18]/70">
                  <li><a href="#" className="hover:text-[#C48446] transition-colors font-medium">Our Story</a></li>
                  <li><a href="#" className="hover:text-[#C48446] transition-colors font-medium">Process</a></li>
                  <li><a href="#" className="hover:text-[#C48446] transition-colors font-medium">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-[#C48446] mb-5 text-sm tracking-[0.15em] uppercase">Legal</h4>
                <ul className="space-y-4 text-sm md:text-base text-[#1A2E18]/70">
                  <li><a href="#" className="hover:text-[#C48446] transition-colors font-medium">Privacy</a></li>
                  <li><a href="#" className="hover:text-[#C48446] transition-colors font-medium">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#1A2E18]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-[#1A2E18]/50 font-medium">
            <p>© {new Date().getFullYear()} The SachAnn Company. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#C48446] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#C48446] transition-colors">Facebook</a>
              <a href="#" className="hover:text-[#C48446] transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
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
