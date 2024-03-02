import Link from "next/link";

const Blog = () => {
  return(
    <div className="flex flex-col pt-2 px-2">

      <div className="flex flex-row flex-wrap md:flex-nowrap gap-3 py-3">
        <div className="w-full">
          <input type="text" className="px-2 py-1 border-1 rounded-md placeholder-gray-600 w-full text-sm dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-300" placeholder="İçerik ara..." />
        </div>
        <div className="w-full">
          <select className="px-2 py-1 border-1 rounded-md placeholder-gray-600 w-full text-sm dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
            <option value="">Kategori 1</option>
            <option value="">Kategori 2</option>
            <option value="">Kategori 3</option>
          </select>
        </div>
        <div className="w-full">
          <button className="px-2 py-1 border-1 rounded-md bg-bsonmezsecondary hover:bg-gray-400 hover:text-white transition-all duration-300 w-full text-sm dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-600">Ara</button>
        </div>
      </div>

      <div className="flex flex-col gap-2">

        <Link href="/blog/post">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
          <p className="font-semibold">Aermod INP Dosyası Çalıştırmaya Hazırlık.</p>
          <p className="text-xs text-gray-600 dark:text-gray-400"><span className="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
        </div>
        </Link>
        <Link href="/">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
          <p className="font-semibold">Aermod INP Dosyası ve Kod Yapısı.</p>
          <p className="text-xs text-gray-600 dark:text-gray-400"><span className="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
        </div>
        </Link>
        <Link href="/">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
          <p className="font-semibold">Uzun Yılların Ardından.</p>
          <p className="text-xs text-gray-600 dark:text-gray-400"><span className="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
        </div>
        </Link>
        <Link href="/">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
          <p className="font-semibold">Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık.</p>
          <p className="text-xs text-gray-600 dark:text-gray-400"><span className="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
        </div>
        </Link>
        <Link href="/">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
          <p className="font-semibold">AERMODa Giriş.</p>
          <p className="text-xs text-gray-600 dark:text-gray-400"><span className="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
        </div>
        </Link>
        <Link href="/">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
          <p className="font-semibold">Aermod INP Dosyası Çalıştırmaya Hazırlık.</p>
          <p className="text-xs text-gray-600 dark:text-gray-400"><span className="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
        </div>
        </Link>
        <Link href="/">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
          <p className="font-semibold">Aermod INP Dosyası ve Kod Yapısı.</p>
          <p className="text-xs text-gray-600 dark:text-gray-400"><span className="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
        </div>
        </Link>
        <Link href="/">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
          <p className="font-semibold">Uzun Yılların Ardından.</p>
          <p className="text-xs text-gray-600 dark:text-gray-400"><span className="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
        </div>
        </Link>
        <Link href="/">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
          <p className="font-semibold">Aermod İçin Gerekli Dosyalar ve Çalıştırmaya Hazırlık.</p>
          <p className="text-xs text-gray-600 dark:text-gray-400"><span className="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
        </div>
        </Link>
        <Link href="/">
        <div className="bg-bsonmezsecondary dark:bg-gray-800 px-4 py-4 w-full items-center rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300">
          <p className="font-semibold">AERMOD a Giriş.</p>
          <p className="text-xs text-gray-600 dark:text-gray-400"><span className="font-semibold">Genel</span> kategorisinde, 12 saat önce.</p>
        </div>
        </Link>
      </div>
      <div className="flex gap-2 justify-center mt-6">
        <Link href="/">
        <div className="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">ilk</div>
        </Link>
        <Link href="/">
        <div className="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">&lt;&lt;</div>
        </Link>
        <Link href="/">
        <div className="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">1</div>
        </Link>
        <Link href="/">
        <div className="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">2</div>
        </Link>
        <Link href="/">
        <div className="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">3</div>
        </Link>
        <Link href="/">
        <div className="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">&gt;&gt;</div>
        </Link>
        <Link href="/">
        <div className="w-8 h-8 bg-bsonmezsecondary inline-flex items-center justify-center rounded-md text-sm hover:bg-gray-400 hover:text-white transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">son</div>
        </Link>
      </div>
    </div>
  )
};

export default Blog;