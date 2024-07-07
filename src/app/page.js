import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen px-36 bg-white">
      <div className="flex p-6 border justify-between border-black ">
        <div className="flex border items-center">
          <div className="flex gap-10 items-center">
            <p className="text-2xl mr-4">Sneakers</p>
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex gap-10">
          <p>Cart</p>
          <p>Image</p>
        </div>
      </div>
      <div className="border mt-20 mb-5 border-black h-0.5"></div>
      <div className="h-[70vh] flex border border-black">
        <div className="w-1/2 px-10 border border-black">Hello</div>

        <div className="flex w-1/2 py-20 px-5 flex-col border border-red-500">
          <div className="flex flex-col w-full border border-black p-10">
            <p className="text-gray-500 text-sm tracking-widest">SNEAKER COMPANY</p>
            <p className="font-bold mb-10 text-4xl tracking-wider">Fall Limited Edition Sneakers</p>
            <p className="text-gray-400">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className="flex border mt-4 justify-start gap-4 items-center">
              <div className="text-xl">$125.00</div>
              <div className="bg-black text-white rounded-lg px-2">50%</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
