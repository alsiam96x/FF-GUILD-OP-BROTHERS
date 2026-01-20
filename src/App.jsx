import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <section className="bg-gray-900 min-h-screen text-white">
 <div className="fixed bottom-5 right-5 z-50 animate-bounce-glow">
  <a
    href="https://wa.me/8801825442717"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500 text-white text-3xl shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
  >
    <FaWhatsapp />
  </a>
</div>



      <div className="container mx-auto px-4 py-4">

        {/* Guild Banner */}
        <div className="relative h-64 md:h-80 lg:h-96 ">
          <img
            src="/guildimg.png"
            alt="Guild Logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 md:w-80"
          />
        </div>

        {/* Guild Name */}
<div className="text-center">
  <h1 className="text-4xl md:text-5xl font-extrabold text-white/80 tracking-wide">
    <span className="block mb-2 text-lg font-mono">UID : 3039331317</span>
    #OP BROTHERS

  </h1>
  <p className="text-white text-sm md:text-base max-w-2xl mx-auto mt-4 font-serif leading-relaxed tracking-wide">
    The official guild page for #OP BROTHERS – join the community & follow the leader.
  </p>
</div>

        {/* Guild Rules / Info */}
        <div className="bg-gray-800/90 p-6 md:p-10 shadow-xl max-w-4xl mx-auto mt-8 rounded-xl space-y-4 border border-gray-700">
          <p className="text-white leading-relaxed whitespace-pre-line text-base md:text-lg">
            🌿 <strong>#OP BROTHERS GUILD RULES</strong> 🌿
            {"\n\n"}🍃 Join Requirements:
            {"\n"}- গিল্ডে যোগ দিতে হলে অবশ্যই তোমার সাথে একজন বন্ধু বা স্কোয়াড মেম্বার থাকতে হবে।
            {"\n"}- একা গিল্ডে যোগ দেওয়া যাবে না।
            {"\n"}- লেভেল ৬০+ হতে হবে।
            {"\n\n"}🌱 Weekly Activity:
            {"\n"}- গিল্ডের নিয়মিত সাপ্তাহিক কার্যক্রমগুলো বাধ্যতামূলকভাবে সম্পন্ন করতে হবে।
            {"\n"}- Inactive players গ্রহণ করা হবে না।
            {"\n\n"}🍀 Name Change (Must):
            {"\n"}- গিল্ডে যোগ দেওয়ার পর নাম পরিবর্তন করা বাধ্যতামূলক।
            {"\n\n"}🌼 Name Style:
            {"\n"}#OP乂YOURNAME
          </p>
        </div>

      {/* Leader Info */}
<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-between bg-gray-800/90 p-6 shadow-xl rounded-xl mt-8 border border-gray-700 space-y-4 md:space-y-0">
  <a
    href="https://www.youtube.com/@opsiamvai-2.0"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 font-semibold"
  >
    <FaYoutube 
      size={32} 
      className="text-red-600 animate-pulse"
    />
    <span className=" text-yellow-400">LEADER : <span className="text-white"><span className="text-red-600">#</span>OPSIAM.VAI࿐</span></span>
  </a>
  <span className="text-white font-medium">
    UID : 2834031346
  </span>
</div>

{/* Image Gallery */}
<div className="max-w-4xl mx-auto mt-16 px-4">
  <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-3 text-white">
    Guild Gallery
  </h2>
  <p className="text-center text-gray-400 mb-8 text-sm md:text-base">
     Some items...
  </p>

  <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
    {[
      "/gallery/1.png",
      "/gallery/2.png",
      "/gallery/3.png",
    ].map((img, index) => (
      <div
        key={index}
        className="relative group rounded-xl overflow-hidden border border-gray-700 bg-gray-800 shadow-xl"
      >
        {/* Image */}
        <img
          src={img}
          alt={`Gallery ${index + 1}`}
          className="w-full object-cover transition duration-500 group-hover:scale-110"
        />

      </div>
    ))}
  </div>
</div>
      </div>
{/* Footer */}
<footer className="bg-gray-900 border-t border-gray-700 mt-16">
  <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-gray-300">
    <div className=" text-center text-gray-500 text-sm md:text-base">
      © {new Date().getFullYear()} #OP BROTHERS. All rights reserved.
    </div>
  </div>
</footer>


    </section>
  );
}

export default App;
