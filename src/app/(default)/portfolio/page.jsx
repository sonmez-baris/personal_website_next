import Link from 'next/link'

const Portfolio = () => {
  return(
  <>
    <div className="flex px-2">
      <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 gap-1">
        <Link href="/portfolio?query=1">
        <li className="nav-item" role="presentation">
          <span className="portfolio-tab active">tümü</span>
        </li>
        </Link>
        <Link href="/portfolio?query=1">
        <li className="nav-item" role="presentation">
          <span className="portfolio-tab">web</span>
        </li>
        </Link>
        <Link href="/portfolio?query=1">
        <li className="nav-item" role="presentation">
          <span className="portfolio-tab">mobil</span>
        </li>
        </Link>
        <Link href="/portfolio?query=1">
        <li className="nav-item" role="presentation">
          <span className="portfolio-tab">elektronik</span>
        </li>
        </Link>
        <Link href="/portfolio?query=1">
        <li className="nav-item" role="presentation">
          <span className="portfolio-tab">grafik</span>
        </li>
        </Link>
      </ul>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 justify-items-between items-stretch px-2 mt-6 gap-2">
      {/* <div className="rounded-2xl bg-no-repeat bg-cover" :style="{'background-image': 'url(' + require('@/assets/img/web01.jpg') + ')'}" > */}
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
  </>
  )
}

export default Portfolio;