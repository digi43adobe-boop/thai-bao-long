"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Headphones, Music, Globe, Sparkles } from 'lucide-react';

export default function VuongPuPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-[#4f46e5] selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="font-cinematic font-bold text-xl tracking-widest text-white">
          VƯƠNG PU
        </div>
        <div className="hidden md:flex space-x-8 text-sm tracking-widest font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">HÀNH TRÌNH</a>
          <a href="#projects" className="hover:text-white transition-colors">DỰ ÁN</a>
          <a href="#vision" className="hover:text-white transition-colors">TẦM NHÌN</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505] z-10"></div>
          <Image 
            src="/vuong-pu-hero.png" 
            alt="Vương Pu Concert Atmosphere" 
            fill 
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-indigo-400 tracking-[0.3em] text-sm md:text-base font-semibold mb-6 uppercase">
              Đời Sống Và Thương Hiệu
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-cinematic font-bold text-white leading-tight mb-8 drop-shadow-2xl">
              "Phù thuỷ âm thanh" Vương Pu<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-light italic text-3xl md:text-5xl lg:text-6xl mt-4 block">
                Ngôn ngữ âm thanh khác biệt
              </span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              Producer âm nhạc chinh phục các dự án lớn trong và ngoài nước bằng sự tinh tế và đột phá.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-indigo-500/50 to-indigo-500"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 relative z-30 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light text-center"
          >
            <span className="drop-cap text-white font-cinematic" style={{color: '#818cf8'}}>T</span>rong làng âm nhạc Việt Nam và khu vực, cái tên Vương Pu đã trở thành biểu tượng của sự tinh tế và đột phá trong khâu âm thanh. Với biệt danh "Phù thuỷ âm thanh", anh là producer đứng sau hàng loạt dự án tầm cỡ quốc gia và quốc tế, từ concert hoành tráng đến phim điện ảnh, từ lễ hội âm nhạc đến các chiến dịch thương hiệu toàn cầu.
            <br/><br/>
            Không chỉ dừng lại ở kỹ thuật mix-master hoàn hảo, Vương Pu luôn mang đến một "linh hồn âm thanh" riêng biệt – sự kết hợp hài hòa giữa công nghệ hiện đại và hơi thở văn hóa Việt Nam.
          </motion.div>
        </div>
      </section>

      {/* From Studio to Global Stage */}
      <section id="about" className="py-24 px-6 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-4 mb-6 text-indigo-400">
                <Headphones className="w-6 h-6" />
                <h2 className="text-sm tracking-[0.2em] font-bold uppercase">Khởi đầu</h2>
              </div>
              <h3 className="text-3xl md:text-5xl font-cinematic font-bold text-white mb-8 leading-tight">
                Từ phòng thu nhỏ<br/>đến sân khấu quốc tế
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Sinh ra tại Hà Nội, Vương Pu sớm đam mê âm thanh từ những năm 2010 khi còn là sinh viên chuyên ngành Kỹ thuật Âm thanh. Sau 5 năm rèn luyện tại các studio lớn ở Singapore và Los Angeles, anh trở về Việt Nam và nhanh chóng gây tiếng vang với khả năng “thổi hồn” vào từng track nhạc.
              </p>
              <div className="pl-6 border-l-2 border-indigo-500 py-2 mt-8 mb-8">
                <p className="text-white font-cinematic text-xl italic font-light leading-relaxed">
                  "Âm thanh không chỉ là âm lượng hay tần số. Âm thanh là cảm xúc. Tôi luôn tìm cách để mỗi beat, mỗi layer âm thanh đều kể một câu chuyện riêng."
                </p>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                Với kinh nghiệm hơn 12 năm, anh đã tham gia sản xuất âm thanh cho hơn 80 dự án lớn.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/20"
            >
              <Image 
                src="/vuong-pu-portrait.png" 
                alt="Producer Vương Pu" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects & Sound Layering */}
      <section id="projects" className="py-32 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <div className="flex justify-center mb-6 text-indigo-400">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-cinematic font-bold text-white mb-8">
              "Phù thuỷ âm thanh"<br/>
              <span className="text-zinc-500 text-2xl md:text-4xl">Cách anh tạo nên sự khác biệt</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Điều làm nên tên tuổi của Vương Pu chính là khả năng biến những ý tưởng âm nhạc thông thường thành trải nghiệm âm thanh sống động, giàu chiều sâu. Anh nổi tiếng với kỹ thuật "sound layering" đặc trưng: kết hợp âm thanh dân tộc (tiếng sáo trúc, trống hội, tiếng sóng biển...) cùng công nghệ spatial audio và Dolby Atmos hiện đại.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Concert Ánh Sáng", desc: "SVĐ Mỹ Đình (hơn 40.000 khán giả)" },
              { title: "Biển Cả & Những Vì Sao", desc: "Nhạc phim điện ảnh (Đạo diễn Victor Vũ)" },
              { title: "BLACKPINK Asia Tour", desc: "Sound design cho chặng diễn tại Việt Nam" },
              { title: "SEA Games 31 & 32", desc: "Âm thanh chính thức của đại hội thể thao" }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpVariant}
                className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-indigo-500/50 hover:bg-zinc-900/80 transition-all duration-500 group"
              >
                <Music className="w-8 h-8 text-zinc-600 group-hover:text-indigo-400 transition-colors duration-500 mb-6" />
                <h3 className="text-xl font-cinematic text-white mb-3">{project.title}</h3>
                <p className="text-zinc-500 text-sm">{project.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="mt-20 flex flex-col md:flex-row gap-8 items-center bg-zinc-900/30 p-8 md:p-12 rounded-3xl border border-zinc-800"
          >
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-cinematic text-white mb-4">Dấu ấn quốc tế 2025</h3>
              <p className="text-zinc-400 leading-relaxed">
                Anh là producer Việt Nam đầu tiên được mời tham gia workshop "Advanced Sound Design" tại AES Convention (Audio Engineering Society) ở New York – vinh dự hiếm có dành cho producer Đông Nam Á.
              </p>
            </div>
            <div className="hidden md:block w-px h-24 bg-zinc-800"></div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-xl text-white font-light italic">
                "Khi làm việc với Vương Pu, bạn sẽ cảm nhận được âm nhạc không chỉ được nghe bằng tai, mà còn chạm đến trái tim và ký ức."
              </p>
              <p className="text-indigo-400 mt-2 uppercase tracking-widest text-xs font-bold">— Nhiều nghệ sĩ lớn chia sẻ</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern & Traditional Blend */}
      <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20"
            >
              <Image 
                src="/vuong-pu-studio.png" 
                alt="Sự kết hợp giữa hiện đại và truyền thống" 
                fill 
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <div className="flex items-center gap-4 mb-6 text-purple-400">
                <Globe className="w-6 h-6" />
                <h2 className="text-sm tracking-[0.2em] font-bold uppercase">Đồng hành</h2>
              </div>
              <h3 className="text-3xl md:text-5xl font-cinematic font-bold text-white mb-8 leading-tight">
                Các dự án lớn trong<br/>và ngoài nước
              </h3>
              <ul className="space-y-4 text-zinc-400 text-lg mb-8">
                <li className="flex gap-3">
                  <span className="text-purple-500 mt-1">•</span> 
                  Nhà sản xuất âm thanh độc quyền Lễ khai mạc Vietnam Game Festival 2026.
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500 mt-1">•</span> 
                  Âm thanh cho phim điện ảnh "Gió Từ Biển Đông" của đạo diễn Thái Bảo Long.
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500 mt-1">•</span> 
                  Tour âm nhạc "Heritage Sounds 2026" tại châu Âu (hợp tác nghệ sĩ Việt kiều & Pháp).
                </li>
              </ul>
              <p className="text-zinc-400 text-lg leading-relaxed border-t border-zinc-800 pt-6">
                Với vai trò cố vấn âm thanh, anh đã giúp các chiến dịch quảng cáo của Samsung Việt Nam, VinFast và Unilever trở nên ấn tượng hơn bao giờ hết nhờ chất lượng âm thanh đỉnh cao.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="vision" className="py-32 px-6 bg-[#050505] text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="text-3xl md:text-5xl font-cinematic font-bold text-white mb-8">
              Tầm nhìn tương lai của<br/>"Phù thuỷ âm thanh"
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Khi được hỏi về định hướng sắp tới, Vương Pu cho biết anh muốn xây dựng một <strong className="text-white font-medium">"Âm thanh Việt Nam hiện đại"</strong> – nơi âm nhạc Việt không chỉ được nghe ở trong nước mà còn lan tỏa mạnh mẽ trên các nền tảng toàn cầu.
              </p>
              
              <div className="py-8">
                <p className="text-2xl md:text-3xl font-cinematic text-white font-light italic leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white">
                  "Tôi muốn mỗi dự án đều mang một chút hồn cốt Việt Nam, nhưng lại được bao bọc bởi công nghệ âm thanh tiên tiến nhất thế giới. Đó là cách để chúng ta chinh phục khán giả quốc tế mà không đánh mất bản sắc."
                </p>
              </div>

              <p>
                Từ một producer tài năng đến "Phù thuỷ âm thanh" được giới chuyên môn kính nể, Vương Pu đang viết tiếp câu chuyện của riêng mình: dùng âm thanh để kết nối văn hóa, kết nối con người và đưa âm nhạc Việt Nam lên tầm cao mới trên bản đồ âm nhạc thế giới.
              </p>
            </div>
            
            <div className="mt-16 pt-16 border-t border-zinc-800">
              <p className="text-xl md:text-2xl font-cinematic text-zinc-300 font-light italic leading-relaxed">
                Một người nghệ sĩ thầm lặng, nhưng mỗi track anh chạm vào đều để lại dấu ấn khó quên. Đó chính là sức mạnh của "Phù thuỷ âm thanh" Vương Pu.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center border-t border-zinc-900">
        <p className="text-zinc-600 text-sm tracking-widest uppercase">
          &copy; 2026 Vương Pu. Đời Sống Và Thương Hiệu.
        </p>
      </footer>
    </div>
  );
}
