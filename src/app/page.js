import Image from "next/image";
import avatar from "../../public/image-product-1.jpg";
import cart from "../../public/icon-cart.svg";
import photo from "../../public/image-avatar.png";

export default function Home() {
  return (
    <div className="min-h-screen px-36 bg-white">
      <div className="flex border p-6 justify-between border-black ">
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
        <div className="flex justify-center items-center gap-10">
            <Image src={cart} />
          <Image className="" src={photo} alt="Avatar" width={50} height={50} />
        </div>
      </div>
      <div className="border mt-20 mb-5 border-black h-0.5"></div>
      <div className="h-3/4 flex border border-black">
        <div className="w-1/2 px-10 py-10 ">
          <div className="flex flex-col items-center h-full">
            <Image className="rounded-lg h-3/4 w-3/4" src={avatar} alt="pic" />
            <div className="flex mt-5 gap-10 justify-between">
              <div className="h-28 w-28 bg-orange-400 rounded-lg"></div>
              <div className="h-28 w-28 bg-orange-400 rounded-lg"></div>
              <div className="h-28 w-28 bg-orange-400 rounded-lg"></div>
              <div className="h-28 w-28 bg-orange-400 rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="flex w-1/2 py-20 pr-20 flex-col border border-red-500">
          <div className="flex flex-col w-full border border-black p-10">
            <p className="text-gray-500 text-sm tracking-widest">
              SNEAKER COMPANY
            </p>
            <p className="font-bold mb-10 mt-4 text-5xl tracking-wider">
              Fall Limited Edition Sneakers
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
            <div className="flex mt-4 justify-start mb-1 gap-5 items-center">
              <div className="text-3xl font-semibold">$125.00</div>
              <div className="bg-black text-xl text-white rounded-md px-2">50%</div>
            </div>
            <p className="text-gray-400 line-through mt-2 mb-5">$250.00</p>
            <div className="flex justify-start h-12 gap-3">
              <div className="flex border justify-around items-center py-1 w-44 bg-gray-100 rounded-lg ">
                <button className="text-3xl text-orange-400">-</button>
                <p className="text-lg font-bold">0</p>
                <button className="text-3xl mb-1 text-orange-400">+</button>
              </div>
              <button className="w-2/3 flex justify-center gap-5 items-center bg-primaryOrange rounded-lg">
                <Image src={cart} />
                <p>Add to cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
