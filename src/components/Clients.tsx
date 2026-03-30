import { motion } from 'motion/react';

export default function Clients() {
  // Using placeholder logos that look like tech/enterprise companies
  const clients = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/7/7b/Reliance_Industries_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/c/ce/Siemens_logo.svg"
  ];

  return (
    <section className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal tracking-tight">Trusted by Industry Leaders</h2>
          <div className="w-24 h-1 bg-electric-teal mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:-translate-y-1 w-full h-32"
            >
              <img src={client} alt={`Client ${index + 1}`} className="max-h-12 max-w-[160px] object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
