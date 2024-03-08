import Image from 'next/image';
import Skills from '@/components/home/skills';
import Services from '@/components/home/services';
import Blog from '@/components/home/blog';
import References from '@/components/home/references';
import Social from '@/components/home/social';

const Home = () => {
  return (
    <>
    <div className="flex px-2 py-4">
      <div className="w-20 h-20 flex-shrink-0"><Image src="/img/profile.jpg" alt="Barış Sönmez" width={80} height={80} className="object-cover rounded-full" /></div>
        <div className="ml-2">
          <p className="text-sm">Merhaba, ben Barış Sönmez.<br />
          Antalya’da yaşayan, full stack web & mobil uygulama geliştiricisiyim.</p>
          <Social />
        </div>
      </div>
    <div className="px-2 mt-2">
      <div className="border-b-1 dark:border-gray-700 w-full">
        <h2 className="font-semibold text-bsonmezprimary dark:text-gray-300">ne yaparım?</h2>
      </div>
      <Services />
      <Skills />
    </div>

    <div className="px-2 mt-10">
      <div className="border-b-1 dark:border-gray-700 w-full">
        <h2 className="font-semibold text-bsonmezprimary">blogtan...</h2>
      </div>
      <Blog />
    </div>

    <div className="px-2 mt-10">
      <div className="border-b-1 dark:border-gray-700 w-full">
        <h2 className="font-semibold text-bsonmezprimary">bazı referanslar</h2>
      </div>
      <References />
    </div>
    </>
  )
};

export default Home;