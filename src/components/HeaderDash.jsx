import ActionButton from "./ActionButton"
import SearchBar from "./SearchBar"
import UserProfile from "./UserProfile"

const HeaderDash = () => {
  return (
<header className="flex gap-5 justify-end min-w-[1040px]  self-center p-4 pr-0 w-1040px bg-white max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <SearchBar />
            <p className="my-auto text-center text-gray-500 leading-[172%]">
              5/25 videos
            </p>
            <ActionButton
              text="Upgrade"
              className=""
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d42f04c384b3702c01684ec03113656f2b222799ea2e3e80727f477c9c411764?apiKey=068bc3b969a34e00abe7da326a2da205&"
            />
            <UserProfile />
          </header>  )
}

export default HeaderDash