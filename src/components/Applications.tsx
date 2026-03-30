import { motion } from 'motion/react';

const applications = [
  { name: 'Conveyor Systems', image: 'https://images.unsplash.com/photo-1580983554868-80e1f7253d85?auto=format&fit=crop&q=80&w=600&h=400' },
  { name: 'Extruders', image: 'https://images.unsplash.com/photo-1565515268484-9351a9611f77?auto=format&fit=crop&q=80&w=600&h=400' },
  { name: 'Pumps & Compressors', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600&h=400' },
  { name: 'Mixers & Agitators', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400' },
  { name: 'Cranes & Hoists', image: 'https://images.unsplash.com/photo-1504307651254-35680f356f90?auto=format&fit=crop&q=80&w=600&h=400' },
  { name: 'Decanters & Separators', image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600&h=400' },
  { name: 'Packaging & Printing', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600&h=400' },
  { name: 'Labeling Systems', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600&h=400' },
  { name: 'Pick & Place', image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=600&h=400' },
  { name: 'Blowers & Fans', image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=600&h=400' },
  { name: 'Winders & Unwinders', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600&h=400' },
  { name: 'Data Centers', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400' },
];

export default function Applications() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal tracking-tight">Applications We Serve</h2>
          <div className="w-24 h-1 bg-electric-teal mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={app.image} 
                  alt={app.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-white relative z-20">
                <h3 className="text-lg font-display font-medium text-charcoal text-center tracking-wide group-hover:text-electric-teal-dark transition-colors">
                  {app.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
