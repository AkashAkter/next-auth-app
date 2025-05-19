"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header with typewriter effect */}
        <header className="mb-20 group">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
              Welcome to
            </span>{" "}
            <span className="relative">
              <span className="text-white inline-block after:content-[''] after:absolute after:w-0.5 after:h-12 after:bg-white after:right-[-8px] after:top-2 after:animate-blink">
                NEXUS
              </span>
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mt-6 opacity-0 animate-fadeIn [animation-delay:0.5s] [animation-fill-mode:forwards]">
            Elevating digital experiences through minimalist design and
            cutting-edge technology.
          </p>
        </header>

        {/* Animated Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "Sleek Design",
              desc: "Minimalist interfaces with maximum impact",
              border: "border-gray-700",
            },
            {
              title: "Robust Security",
              desc: "Enterprise-grade protection for your data",
              border: "border-gray-700",
            },
            {
              title: "Seamless UX",
              desc: "Intuitive flows that delight users",
              border: "border-gray-700",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-gray-900 border ${item.border} rounded-lg p-6 hover:border-gray-500 transition-all duration-500 hover:shadow-lg opacity-0 animate-fadeInUp`}
              style={{
                animationDelay: `${0.7 + index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-3 h-3 rounded-full mr-3 ${
                    index === 0
                      ? "bg-gray-400"
                      : index === 1
                      ? "bg-gray-300"
                      : "bg-gray-200"
                  } animate-pulse`}
                ></div>
                <h3 className="text-xl font-medium text-gray-100">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400">{item.desc}</p>
              <div className="mt-6 h-px bg-gray-800 overflow-hidden">
                <div
                  className="h-full bg-gray-600 animate-progress"
                  style={{ animationDelay: `${1 + index * 0.2}s` }}
                />
              </div>
            </div>
          ))}
        </section>

        {/* Features with animated underline */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center relative inline-block mx-auto opacity-0 animate-fadeIn [animation-delay:1.3s] [animation-fill-mode:forwards]">
            <span>Core Capabilities</span>
            <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-gray-600 overflow-hidden">
              <span className="absolute left-0 top-0 w-full h-full bg-gray-400 animate-underlineOriginLeft"></span>
            </span>
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              "Precision engineered components",
              "Dark mode optimized interfaces",
              "60fps animation pipelines",
              "Zero-downtime deployment",
              "End-to-end encryption",
              "Real-time analytics dashboard",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start opacity-0 animate-fadeInRight"
                style={{
                  animationDelay: `${1.5 + index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="w-2 h-2 mt-2 mr-3 bg-gray-400 rounded-full flex-shrink-0"></div>
                <p className="text-gray-300 hover:text-white transition-colors duration-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Animated Stats */}
        <section className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 animate-fadeIn [animation-delay:2.1s] [animation-fill-mode:forwards]">
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" },
            { value: "10ms", label: "Response" },
            { value: "∞", label: "Scalability" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-4 rounded-lg border border-gray-800 text-center hover:bg-gray-800 transition-colors duration-500"
            >
              <div className="text-3xl font-bold mb-1 text-gray-100 animate-countUp">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center opacity-0 animate-fadeIn [animation-delay:2.4s] [animation-fill-mode:forwards]">
          <div className="max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100">
              Ready to experience the power of darkness?
            </h2>
            <p className="text-gray-400">
              Our black palette is not just a color scheme - it is a statement.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="relative px-6 py-3 bg-gray-800 border border-gray-700 rounded-md font-medium group overflow-hidden transition-all duration-300 hover:bg-gray-700">
              <span className="relative z-10">Explore Features</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button className="relative px-6 py-3 bg-white text-gray-900 rounded-md font-medium group overflow-hidden transition-all duration-300 hover:bg-gray-100">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-gray-800 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} NEXUS. All systems operational.
              </p>
            </div>
            <div className="flex space-x-6">
              {["Privacy", "Terms", "Security", "Status"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        @keyframes progress {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes underlineOriginLeft {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.6s forwards;
        }
        .animate-progress {
          animation: progress 1.5s forwards cubic-bezier(0.65, 0, 0.35, 1);
        }
        .animate-underlineOriginLeft {
          animation: underlineOriginLeft 0.8s forwards
            cubic-bezier(0.65, 0, 0.35, 1);
        }
        .animate-countUp {
          animation: countUp 0.6s forwards;
        }
        .bg-grid-white\/\[0\.05\] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  );
}
