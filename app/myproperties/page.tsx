import Image from "next/image"
import PropertyList from "../components/properties/PropertyList";

const MyPropertiesPage  = () => {
    return (
      <main className="mt-6 max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="mt-4 my-6 mb-2 text-xl">My properties</h1>

      <div className=" grid grid-cols-1 md:grid-cols-3   gap-6  ">
                     <PropertyList />
            </div>

      </main>
      )}

export default  MyPropertiesPage;