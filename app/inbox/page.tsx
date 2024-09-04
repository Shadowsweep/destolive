import Image from "next/image"
import PropertyList from "../components/properties/PropertyList";
import Conversation from "../components/inbox/Conversation";

const InboxPage  = () => {
    return (
      <main className="mt-6 max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
      <h1 className="mt-4 my-6 mb-2 text-xl">Inbox</h1>
      <Conversation />
      <Conversation />
      <Conversation />
      </main>
    )}
export default InboxPage ;