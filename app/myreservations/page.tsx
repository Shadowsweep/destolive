import Image from "next/image"
import ContactButton from "@/app/components/ContactButton"
import PropertyList from "@/app/components/properties/PropertyList"


const MyReservationsPage  = () => {
    return (
      <main className="mt-6 max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="mt-4 mb-2 text-xl">My reservations</h1>
      <div>
        <div className="p-5 mt-4 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                alt="Photo beach"
                src="/arctic.jpeg"
                className="hover:scale-110 object-cover transition h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    )
}

export default MyReservationsPage;