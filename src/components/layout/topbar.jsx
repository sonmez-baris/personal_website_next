const TopBar = ({ msg }) => {
  return(
    <div className="flex flex-col border-b-2 dark:border-gray-700 py-1">
      <div className="text-xs text-right px-2 dark:text-gray-200">{ msg }</div>
      <div className="text-xs text-right px-2 dark:text-gray-200">—Tesla</div>
    </div>
  )
};

export default TopBar;