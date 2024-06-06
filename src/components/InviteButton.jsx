function InviteButton() {
    return (
      <button className="flex flex-col justify-center items-start px-2 py-2 w-full text-xs font-medium tracking-normal leading-5 text-center rounded-none border border-solid bg-teal-400 bg-opacity-20 border-teal-400 border-opacity-20 text-neutral-800 max-md:pr-5">
        <div className="flex gap-3.5 py-1 pr-0.5 pl-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b50b8f5d1a5e0e6cb862e5ede9a74ef29cae15af178642d88680045652ddcdd?apiKey=068bc3b969a34e00abe7da326a2da205&"
            className="shrink-0 aspect-square w-[18px]"
            alt=""
          />
          <span>Invite teammates</span>
        </div>
      </button>
    );
  }

  export default InviteButton