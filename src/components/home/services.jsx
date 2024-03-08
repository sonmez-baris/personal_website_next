import Link from 'next/link';

const Services = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 px-2 justify-items-center mt-6">
      <Link href="/services/web-applications">
        <div className="service-circle">
          web uygulamalar
        </div>
      </Link>
      <Link href="/services/mobile-applications">
        <div className="service-circle">
          mobil uygulamalar
        </div>
      </Link>
      <Link href="/services/embedded-systems">
        <div className="service-circle">
          gömülü sistemler
        </div>
      </Link>
      <Link href="/services/graphic-design">
        <div className="service-circle">
          grafik tasarım
        </div>
      </Link>
    </div>
  );
}

export default Services;