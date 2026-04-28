"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Film, Globe, Award } from 'lucide-react';

export default function ThaiBaoLongPage() {
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
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="font-cinematic font-bold text-xl tracking-widest text-white">
          THÁI BẢO LONG
        </div>
        <div className="hidden md:flex space-x-8 text-sm tracking-widest font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">HÀNH TRÌNH</a>
          <a href="#vision" className="hover:text-white transition-colors">GÓC NHÌN</a>
          <a href="#gr-ricoh" className="hover:text-white transition-colors">GR RICOH</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505] z-10"></div>
          <Image 
            src="/hero-banner.png" 
            alt="Đà Nẵng Cinematic View" 
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
            <p className="text-gold tracking-[0.3em] text-sm md:text-base font-semibold mb-6 uppercase">
              Đời Sống Và Thương Hiệu
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-cinematic font-bold text-white leading-tight mb-8 drop-shadow-2xl">
              Dấu ấn sự kiện Việt:<br />
              <span className="text-gradient font-light italic">Góc nhìn khác biệt</span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              Đạo diễn phim nghệ thuật Thái Bảo Long – Chủ tịch Hiệp hội GR Ricoh Việt Nam chinh phục khán giả quốc tế.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white"></div>
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
            <span className="drop-cap text-white font-cinematic">T</span>rong bối cảnh điện ảnh nghệ thuật Việt Nam đang dần khẳng định vị thế trên bản đồ quốc tế, những cái tên như Thái Bảo Long nổi lên như một hiện tượng đặc biệt. Không chỉ là đạo diễn phim nghệ thuật được đánh giá cao, anh còn giữ vai trò Chủ tịch Hiệp hội GR Ricoh Việt Nam – tổ chức kết nối các nghệ sĩ, nhà sáng tạo và doanh nghiệp trong lĩnh vực hình ảnh, nhiếp ảnh và điện ảnh kỹ thuật số.
          </motion.div>
        </div>
      </section>

      {/* From Da Nang to the World */}
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
              <div className="flex items-center gap-4 mb-6 text-gold">
                <Globe className="w-6 h-6" />
                <h2 className="text-sm tracking-[0.2em] font-bold uppercase">Hành trình</h2>
              </div>
              <h3 className="text-3xl md:text-5xl font-cinematic font-bold text-white mb-8 leading-tight">
                Từ Đà Nẵng đến<br/>những liên hoan phim quốc tế
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Sinh ra và lớn lên tại Đà Nẵng, Thái Bảo Long sớm đam mê nghệ thuật thị giác. Sau nhiều năm rèn luyện và làm việc tại các studio quốc tế, anh trở về và nhanh chóng để lại dấu ấn với loạt phim nghệ thuật mang đậm hơi thở miền Trung.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Các tác phẩm của anh thường khai thác những khoảng lặng của cuộc sống, sự va chạm giữa truyền thống và hiện đại, giữa con người và thiên nhiên – những chủ đề tưởng quen thuộc nhưng được anh kể lại bằng một ngôn ngữ điện ảnh rất riêng.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="/director-portrait.png" 
                alt="Đạo diễn Thái Bảo Long" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-cinematic text-xl italic font-light leading-relaxed">
                  "Phim nghệ thuật không phải là kể một câu chuyện, mà là mời khán giả cùng bước vào một không gian cảm xúc. Tôi luôn cố gắng để khán giả không chỉ xem phim, mà còn cảm nhận được nhịp thở, hơi ấm và cả những khoảng tối trong tâm hồn nhân vật."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Different Perspective */}
      <section id="vision" className="py-32 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <div className="flex justify-center mb-6 text-gold">
              <Film className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-cinematic font-bold text-white mb-8">
              Góc nhìn khác biệt<br/>
              <span className="text-zinc-500 text-2xl md:text-4xl">Chìa khóa chinh phục khán giả quốc tế</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Điều làm nên tên tuổi của đạo diễn Thái Bảo Long chính là khả năng biến những câu chuyện gần gũi thành ngôn ngữ điện ảnh toàn cầu. Thay vì chạy theo những motif thương mại, anh chọn đi sâu vào những chi tiết văn hóa Đà Nẵng – Hội An – Huế, nhưng kể chúng bằng cách nhìn hiện đại, tối giản và giàu tính triết lý.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Sóng Ngầm", desc: "Sức hút từ những điều bình dị, ẩn sâu dưới bề mặt cuộc sống." },
              { title: "Ánh Lửa Mong Manh", desc: "Câu chuyện về sự kiên cường và niềm hy vọng le lói." },
              { title: "Cõi Nhớ Đà Nẵng", desc: "Bức tranh hoài niệm về một thành phố chuyển mình." }
            ].map((film, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpVariant}
                className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-gold/50 transition-colors duration-500 group"
              >
                <Award className="w-10 h-10 text-zinc-700 group-hover:text-gold transition-colors duration-500 mb-6" />
                <h3 className="text-2xl font-cinematic text-white mb-4">{film.title}</h3>
                <p className="text-zinc-500">{film.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="mt-16 text-center"
          >
            <p className="text-xl text-zinc-300 font-light italic max-w-3xl mx-auto">
              "Khán giả quốc tế đánh giá cao cách anh sử dụng hình ảnh chậm, ánh sáng tự nhiên và âm thanh môi trường để tạo nên sức hút cảm xúc mạnh mẽ. Các bộ phim đã được chọn chiếu tại Busan, Tokyo, Berlin và Cannes (Short Film Corner)."
            </p>
          </motion.div>
        </div>
      </section>

      {/* GR Ricoh Section */}
      <section id="gr-ricoh" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <Image 
                src="/film-festival.png" 
                alt="GR Ricoh Vietnam Film Festival" 
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
              <div className="flex items-center gap-4 mb-6 text-gold">
                <Camera className="w-6 h-6" />
                <h2 className="text-sm tracking-[0.2em] font-bold uppercase">Lãnh đạo cộng đồng</h2>
              </div>
              <h3 className="text-3xl md:text-5xl font-cinematic font-bold text-white mb-8 leading-tight">
                Chủ tịch Hiệp hội<br/>GR Ricoh Việt Nam
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Năm 2024, Thái Bảo Long được bầu làm Chủ tịch Hiệp hội GR Ricoh Việt Nam. Dưới sự dẫn dắt của anh, hiệp hội đã tổ chức hàng loạt workshop, triển lãm nhiếp ảnh nghệ thuật và chương trình hỗ trợ đạo diễn trẻ.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Hiệp hội hiện đang kết nối hơn 300 thành viên, trở thành cầu nối quan trọng giữa nghệ sĩ Việt Nam với các đối tác quốc tế.
              </p>
              <div className="pl-6 border-l-2 border-gold py-2">
                <p className="text-white font-cinematic text-xl italic font-light">
                  "GR Ricoh không chỉ là thiết bị, đó là công cụ giúp chúng ta kể chuyện chân thực hơn. Tôi muốn các đạo diễn trẻ Việt Nam có thể tự do sáng tạo mà không bị giới hạn bởi công nghệ đắt đỏ."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-32 px-6 bg-[#050505] text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="text-3xl md:text-5xl font-cinematic font-bold text-white mb-8">
              Dự án sắp tới và<br/>hành trình tiếp tục
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Hiện tại, Thái Bảo Long đang hoàn tất hậu kỳ cho bộ phim nghệ thuật mới mang tên <strong className="text-white font-medium">“Gió Từ Biển Đông”</strong> – một tác phẩm kể về hành trình tìm lại chính mình của một người đàn ông giữa lòng thành phố biển Đà Nẵng đang thay đổi từng ngày. Phim dự kiến ra mắt tại Liên hoan Phim Quốc tế Tokyo 2026.
              </p>
              <p>
                Song song đó, với vai trò Chủ tịch Hiệp hội, anh đang chuẩn bị cho <strong className="text-white font-medium">“GR Ricoh Vietnam Film Festival 2026”</strong> – sự kiện quy tụ các bộ phim nghệ thuật độc lập từ Việt Nam và các nước ASEAN.
              </p>
            </div>
            
            <div className="mt-16 pt-16 border-t border-zinc-800">
              <p className="text-2xl md:text-3xl font-cinematic text-white font-light italic leading-relaxed">
                Một nghệ sĩ – một lãnh đạo – và trên hết là một người luôn tin rằng: nghệ thuật chân chính không chỉ nằm ở hình ảnh đẹp, mà nằm ở khả năng chạm đến trái tim khán giả, dù họ đến từ bất kỳ đâu trên thế giới.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center border-t border-zinc-900">
        <p className="text-zinc-600 text-sm tracking-widest uppercase">
          &copy; 2026 Thái Bảo Long. Đời Sống Và Thương Hiệu.
        </p>
      </footer>
    </div>
  );
}
