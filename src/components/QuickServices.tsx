import { motion } from 'framer-motion';
import { Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';
export function QuickServices() {
  const { t } = useLanguage();
  const services = [
  {
    name: t('services.laporSPAN'),
    image: "/lapor.png",

    color: 'text-red-500',
    bg: 'bg-white',
    border: 'border-gray-200',
    href: 'https://www.lapor.go.id/',
    isExternal: true
  },
  {
    name: t('services.awakSigap'),
    image: "/awaksigap2.png",

    color: 'text-green-500',
    bg: 'bg-white',
    border: 'border-gray-200',
    href: 'https://wa.me/6281135778000',
    isExternal: true
  },
  {
    name: t('services.kesehatan'),
    image: "/kesehatan.png",

    color: 'text-red-600',
    bg: 'bg-white',
    border: 'border-gray-200',
    href: 'https://dinkes.madiunkota.go.id/',
    isExternal: true
  },
  {
    name: t('services.pendidikan'),
    image: "/pendidikan.png",

    color: 'text-blue-800',
    bg: 'bg-white',
    border: 'border-gray-200',
    href: 'https://disdik.madiunkota.go.id/',
    isExternal: true
  },
  {
    name: t('services.ketenagakerjaan'),
    image: "/ketenagakerjaan.png",

    color: 'text-blue-600',
    bg: 'bg-white',
    border: 'border-gray-200',
    href: 'https://disnaker.madiunkota.go.id/',
    isExternal: true
  },
  {
    name: t('services.perizinan'),
    image: "/perizinan.png",

    color: 'text-green-700',
    bg: 'bg-white',
    border: 'border-gray-200',
    href: 'https://dpmptsp.madiunkota.go.id/',
    isExternal: true
  },
  {
    name: t('services.infoPasar'),
    icon: Store,
    color: 'text-gray-700',
    bg: 'bg-white',
    border: 'border-gray-200',
    href: '/layanan/info-pasar',
    isExternal: false
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <section className="py-12 md:py-16 bg-[#FAFAFA] relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-end mb-12 gap-6">
          <h2 className="font-poppins text-4xl md:text-6xl font-black tracking-tight text-[#0E642B]">
            {t('services.title')}
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          
          {services.map((service) => {
            const Icon = service.icon;
            const cardContent =
            <>
                <div
                className={`w-24 h-24 md:w-28 md:h-28 rounded-full ${service.bg} border-2 ${service.border} flex items-center justify-center mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:border-accent`}>
                
                  {service.image ?
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-16 h-16 md:w-18 md:h-18 object-contain group-hover:scale-110 transition-transform duration-300 pt-[2px] pb-[2px] pl-[0px] pr-[0px] mt-[0px] mb-[0px] ml-[0px] mr-[0px]" /> :

                Icon ?
                <Icon
                  className={`w-12 h-12 md:w-14 md:h-14 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                  strokeWidth={1.5} /> :

                null}
                </div>
                <span className="font-poppins font-bold text-base md:text-lg text-dark text-center group-hover:text-primary transition-colors">
                  {service.name}
                </span>
              </>;

            if (service.isExternal) {
              return (
                <motion.a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={service.name}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.05
                  }}
                  className="flex flex-col items-center justify-center group">
                  
                  {cardContent}
                </motion.a>);

            }
            return (
              <motion.div
                key={service.name}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05
                }}
                className="flex flex-col items-center justify-center group">
                
                <Link
                  to={service.href}
                  className="flex flex-col items-center justify-center">
                  
                  {cardContent}
                </Link>
              </motion.div>);

          })}
        </motion.div>
      </div>
    </section>);

}