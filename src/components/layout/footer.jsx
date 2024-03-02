import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="flex flex-col border-t-2 border-b-2 dark:border-gray-700 py-2 mt-10 mb-16 md:mb-0">
      <div className="text-xs text-center font-light px-2 flex justify-center gap-1">barış sönmez (c) {year}. made with <span className="text-green-800 dark:text-gray-200 flex gap-1 items-center"><FontAwesomeIcon icon={faReact} className="w-4" /> <span>Next.js</span></span>.</div>
      <div className="text-xs text-center font-light px-2 flex justify-center gap-1">we <span className="text-red-600 dark:text-gray-200">♥</span> <a href="https://github.com/sonmez-baris/personal_website_vue" className="hover:underline" target="_blank">opensource</a></div>
      <div className="text-xs text-center font-light px-2">
        <a href="" className="text-gray-400 dark:hover:text-gray-100 text-xs mr-3 hover:text-gray-800 transition-colors duration-300">&lt;gizlilik&gt;</a>
        <a href="" className="text-gray-400 dark:hover:text-gray-100 text-xs mr-3 hover:text-gray-800 transition-colors duration-300">&lt;çerezler&gt;</a>
        <a href="" className="text-gray-400 dark:hover:text-gray-100 text-xs mr-3 hover:text-gray-800 transition-colors duration-300">&lt;iletişim&gt;</a>
      </div>
    </footer>
  );
}

export default Footer;