import SearchBar from "./SearchBar"

const HeaderTasks = () => {
  return (
<header className="flex gap-5 justify-end min-w-[1040px]  self-center p-4 pr-0 w-1040px bg-white max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <SearchBar />
            <p className="my-auto text-center text-gray-500 leading-[172%]">
              5 Tasks
            </p>
          </header>  )
}

export default HeaderTasks