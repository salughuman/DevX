
import React from 'react'


const Clients = () => {
  return (
    <div className="mx-auto text-gray-700 my-10 py-12 px-4 w-full max-w-7x bg-secondary-100">
      <div className="grid grid-cols-6 lg:grid-cols-5 gap-y-10 gap-x-5">

        {/* :PARTNER 1 -> Airbnb */}
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex justify-center items-center">
          <img src="https://fancytailwind.com/static/airbnb-logo-ef1fe817361635d7e70b730325bada48.svg" alt="" className="max-h-8" />
        </div>

        {/* :PARTNER 2 -> All */}
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex justify-center items-center">
          <img src="https://fancytailwind.com/static/all-limitless-logo-a2bc67b04c70cbdaf47b69769ee38c39.svg" alt="" className="max-h-8 " />
        </div>

        {/* :PARTNER 3 -> Microsoft */}
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex justify-center items-center">
          <img src="https://fancytailwind.com/static/microsoft-logo-29676a36b829016b82e0d8d1865c842b.svg" alt="" className="max-h-8 " />
        </div>

        {/* :PARTNER 4 -> Blablacar */}
        <div className="col-span-3 lg:col-span-1 flex justify-center items-center">
          <img src="https://fancytailwind.com/static/blablacar-logo-black-d14f356f24cf3b23017d777b9909293c.svg" alt="" className="max-h-8 " />
        </div>

        {/* :PARTNER 5 -> Stellantis */}
        <div className="col-span-full sm:col-span-3 lg:col-span-1 flex justify-center items-center">
          <img src="https://fancytailwind.com/static/stellantis-logo-c510cf1f58c6b30a9936f8a2ad770350.png" alt="" className="max-h-8 " />
        </div>

      </div>
    </div>
  )
}

export default Clients
