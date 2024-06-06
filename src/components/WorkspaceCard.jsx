
function WorkspaceCard() {
    return (
      <section className="flex flex-col justify-center px-4 py-2.5 w-full bg-white rounded-2xl border border-solid border-gray-500 border-opacity-20 mb-5">
        <article className="flex gap-0 justify-center">
          <div className="flex flex-col">
            <h2 className="justify-center text-sm font-bold tracking-normal leading-6 text-neutral-800">
              Student Workspace
            </h2>
            <p className="text-xs tracking-normal leading-5 text-gray-500">1 member</p>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca91fa54f173b85d80027529ecd37a0d6e4b387954e8adb115c1ae6effd2595b?apiKey=068bc3b969a34e00abe7da326a2da205&"
            className="shrink-0 my-auto w-6 aspect-square"
            alt=""
          />
        </article>
      </section>
    );
  }

  export default WorkspaceCard