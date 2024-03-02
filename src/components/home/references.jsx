const References = () => {
  return (
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
  );
}

export default References;