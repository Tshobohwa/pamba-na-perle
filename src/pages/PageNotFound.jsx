const PageNotFound = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-red-200 p-15'>
      <div className="flex flex-col gap-2 justify-center items-center">
        <img src="https://notionpress.com/new-rewamp/images/404-error.gif" alt="not found" className="h-[40%]" />
      <h1 className=" text-red-700 text-4xl font-semibold">Page not found! ⚠</h1>
      </div>
    </div>
  )
}

export default PageNotFound
