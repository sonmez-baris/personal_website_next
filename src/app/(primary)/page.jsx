import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Home = () => {
  return (
    <>
    <div className="flex px-2 py-4">
      <div className="w-20 h-20 flex-shrink-0"><Image src="/img/baris.jpg" alt="Barış Sönmez" width={80} height={80} className="object-cover rounded-full" /></div>
        <div className="ml-2">
          <p className="text-sm">Merhaba, ben Barış Sönmez.<br />
          Antalya’da yaşayan, full stack web & mobil uygulama geliştiricisiyim.</p>
          <p className="flex flex-wrap">
            <a href="#" className="top-contact-item">&lt;github&gt;</a>
            <a href="#" className="top-contact-item">&lt;twitter&gt;</a>
            <a href="#" className="top-contact-item">&lt;linkedin&gt;</a>
            <a href="#" className="top-contact-item">&lt;instagram&gt;</a>
          </p>
        </div>
      </div>
    <div className="px-2 mt-2">
      <div className="border-b-1 dark:border-gray-700 w-full">
        <h2 className="font-semibold text-bsonmezprimary dark:text-gray-300">ne yaparım?</h2>
      </div>
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
      <div className="flex px-2 flex-row mt-6 flex-wrap w-full">
        <span className="skill-tag">php</span>
        <span className="skill-tag">javascript</span>
        <span className="skill-tag">flutter</span>
        <span className="skill-tag">dart</span>
        <span className="skill-tag">html</span>
        <span className="skill-tag">css</span>
        <span className="skill-tag">laravel</span>
        <span className="skill-tag">codeigniter</span>
        <span className="skill-tag">sql</span>
        <span className="skill-tag">vue</span>
        <span className="skill-tag">tailwind</span>
        <span className="skill-tag">bootstrap</span>
        <span className="skill-tag">aermod</span>
        <span className="skill-tag">illustrator</span>
        <span className="skill-tag">photoshop</span>
        <span className="skill-tag">fireworks</span>
        <span className="skill-tag">premiere</span>
        <span className="skill-tag">kicad</span>
        <span className="skill-tag">easyeda</span>
        <span className="skill-tag">figma</span>
        <span className="skill-tag">avr</span>
        <span className="skill-tag">surfer</span>
        <span className="skill-tag">autocad</span>
        <span className="skill-tag">blender</span>
        <span className="skill-tag">cinema4d</span>
        <span className="skill-tag">netcad</span>
        <span className="skill-tag">pwa</span>
        <span className="skill-tag">jquery</span>
      </div>
    </div>

    <div className="px-2 mt-10">
      <div className="border-b-1 dark:border-gray-700 w-full">
        <h2 className="font-semibold text-bsonmezprimary">blogtan...</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 px-2 mt-6 gap-2">
        <a href="#">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-2 py-3 rounded-xl">
          <p className="text-bsonmezprimary mb-2"><FontAwesomeIcon icon={faCode} className="w-6" /></p>
          <h5 className="text-sm font-semibold mb-2">Aermod INP Dosyası Çalıştırmaya H...</h5>
          <p className="text-sm">“Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık” başlıklı yazımda...</p>
        </div>
        </a>
        <a href="#">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-2 py-3 rounded-xl">
          <p className="text-bsonmezprimary mb-2"><FontAwesomeIcon icon={faCode} className="w-6" /></p>
          <h5 className="text-sm font-semibold mb-2">Aermod INP Dosyası Çalıştırmaya H...</h5>
          <p className="text-sm">“Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık” başlıklı yazımda...</p>
        </div>
        </a>
        <a href="#">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-2 py-3 rounded-xl">
          <p className="text-bsonmezprimary mb-2"><FontAwesomeIcon icon={faCode} className="w-6" /></p>
          <h5 className="text-sm font-semibold mb-2">Aermod INP Dosyası Çalıştırmaya H...</h5>
          <p className="text-sm">“Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık” başlıklı yazımda...</p>
        </div>
        </a>
        <a href="#">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-2 py-3 rounded-xl">
          <p className="text-bsonmezprimary mb-2"><FontAwesomeIcon icon={faCode} className="w-6"/></p>
          <h5 className="text-sm font-semibold mb-2">Aermod INP Dosyası Çalıştırmaya H...</h5>
          <p className="text-sm">“Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık” başlıklı yazımda...</p>
        </div>
        </a>
        <a href="#">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-2 py-3 rounded-xl">
          <p className="text-bsonmezprimary mb-2"><FontAwesomeIcon icon={faCode} className="w-6" /></p>
          <h5 className="text-sm font-semibold mb-2">Aermod INP Dosyası Çalıştırmaya H...</h5>
          <p className="text-sm">“Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık” başlıklı yazımda...</p>
        </div>
        </a>
        <a href="#">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-2 py-3 rounded-xl">
          <p className="text-bsonmezprimary mb-2"><FontAwesomeIcon icon={faCode} className="w-6" /></p>
          <h5 className="text-sm font-semibold mb-2">Aermod INP Dosyası Çalıştırmaya H...</h5>
          <p className="text-sm">“Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık” başlıklı yazımda...</p>
        </div>
        </a>
      </div>
    </div>

    <div className="px-2 mt-10">
      <div className="border-b-1 dark:border-gray-700 w-full">
        <h2 className="font-semibold text-bsonmezprimary">bazı referanslar</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-items-between items-stretch px-2 mt-6 gap-2">
        {/* <div className="rounded-2xl bg-no-repeat bg-cover" style={backgroundImage: `url(${('@/assets/img/web01.jpg')})`}> */}
        <div className="rounded-2xl bg-no-repeat bg-cover">
          <a href="">
            <div className="bg-bsonmezsecondary dark:bg-gray-800 bg-opacity-90 h-full py-6 rounded-xl">
              <p className="text-bsonmezprimary w-full text-center text-sm font-semibold">&lt;web&gt;</p>
              <h5 className="mt-4 text-sm text-center font-semibold">özlem<br />özyün</h5>
            </div>
          </a>
        </div>
        <div className="rounded-2xl bg-no-repeat bg-cover">
          <a href="">
            <div className="bg-bsonmezsecondary dark:bg-gray-800 bg-opacity-90 h-full py-6 rounded-xl">
              <p className="text-bsonmezprimary w-full text-center text-sm font-semibold">&lt;embed&gt;</p>
              <h5 className="mt-4 text-sm text-center font-semibold">jagbt</h5>
            </div>
          </a>
        </div>
        <div className="rounded-2xl bg-no-repeat bg-cover">
          <a href="">
            <div className="bg-bsonmezsecondary dark:bg-gray-800 bg-opacity-90 h-full py-6 rounded-xl">
              <p className="text-bsonmezprimary w-full text-center text-sm font-semibold">&lt;mobile&gt;</p>
              <h5 className="mt-4 text-sm text-center font-semibold">mert<br />istihbarat</h5>
            </div>
          </a>
        </div>
        <div className="rounded-2xl bg-no-repeat bg-cover">
          <a href="">
            <div className="bg-bsonmezsecondary dark:bg-gray-800 bg-opacity-90 h-full py-6 rounded-xl">
              <p className="text-bsonmezprimary w-full text-center text-sm font-semibold">&lt;graphic&gt;</p>
              <h5 className="mt-4 text-sm text-center font-semibold">cpr<br />mobil</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
    </>
  )
};

export default Home;