const Contact = () => {
  return (
    <div className="flex px-2 flex-col py-4 justify-center w-full">

      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block px-2">
            <div className="overflow-hidden">
              <table className="text-left">
                <tbody>
                  <tr>
                    <td className="text-sm py-2 pr-4 font-semibold whitespace-nowrap">
                      e-mail
                    </td>
                    <td className="text-sm py-2 whitespace-nowrap">
                      baris@barissonmez.com.tr
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <hr className="dark:border-gray-600" />
      <h4 className="font-semibold border-b-1 border-gray-300 dark:border-gray-600 my-4">iletişim formu</h4>
      <form>
        <div className="form-group mb-6">
          <input type="text" className="form-control w-full px-3 py-1.5 text-base font-normal dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white bg-gray-100 dark:bg-gray-800 focus:outline-none" placeholder="Ad ve soyadınızı yazınız." />
        </div>
        <div className="form-group mb-6">
          <input type="email" className="form-control w-full px-3 py-1.5 text-base font-normal dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white bg-gray-100 dark:bg-gray-800 focus:outline-none" placeholder="Email adresinizi yazınız." required />
        </div>
        <div className="form-group mb-6">
          <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white bg-gray-100 dark:bg-gray-800 focus:outline-none" rows="5" placeholder="Mesajınızı giriniz."></textarea>
        </div>
        <button type="submit" className="w-full px-6 py-2.5 bg-gray-700 text-white font-medium rounded shadow-md hover:bg-dark-700 hover:shadow-lg focus:outline-none dark:hover:bg-gray-600 transition duration-150 ease-in-out">gönder</button>
      </form>
    </div>
  )
};

export default Contact;