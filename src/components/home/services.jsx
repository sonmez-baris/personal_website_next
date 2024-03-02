const Services = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 px-2 justify-items-center mt-6">
      <a href="#">
        <div className="service-circle">
          web uygulamalar
        </div>
      </a>
      <a href="#">
        <div className="service-circle">
          mobil uygulamalar
        </div>
      </a>
      <a href="#">
        <div className="service-circle">
          gömülü sistemler
        </div>
      </a>
      <a href="#">
        <div className="service-circle">
          grafik tasarım
        </div>
      </a>
    </div>
  );
}

export default Services;