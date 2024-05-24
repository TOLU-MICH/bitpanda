import React from "react";
import PModal from "../component/dashboard/Modaler";

import btc from "../assets/btc.svg";
import eth from "../assets/eth.svg";
import QRCode from "react-qr-code";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "../assets/dashboard/copy.svg";
import usdt from "../assets/dashboard/usdt.svg";
import avatar from "../assets/dashboard/avatar.svg";

const investData = [
  { name: "Bitcoin", acronym: "BTC", img: btc },
  { name: "Ethereum", acronym: "ETH", img: eth },
  {
    name: "Tether",
    acronym: "USDT",
    img: usdt,
  },
];

function Wallet() {
  const [user, setUser] = React.useState("User");

  const [open, setOpen] = React.useState(false);
  const [openWithdraw, setOpenWithdraw] = React.useState(false);
  const [next, setNext] = React.useState(false);
  const [address, setAddress] = React.useState({
    value: "adshvfsdhfbfsdbfbsfbfffvfvfvfvfvf",
    copied: false,
  });

  const handleWithdraw = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "error",
      title: "Withdraw Failed. Try again Later",
    });
    setOpenWithdraw(false);
  };

  return (
    <section className="flex-col flex md:flex-row w-full h-screen">
      <aside
        className={
          "m-[15px] h-fit p-4 rounded-xl lg:rounded-none lg:p-0 lg:m-0  lg:w-[25%] xl:w-[15%] lg:h-full bg-black text-white"
        }
      >
        <div className="items-center gap-4 font-bold p-[30px] mt-20 hidden lg:flex">
          <div className="rounded-full p-2 bg-gray-50">
            <img src={avatar} alt="" className="w-7" />
          </div>
          Hi {user}
        </div>
        <ul>
          <li
            className={
              "py-4 text-sm font-bold text-center relative p-[30px] cursor-pointer "
            }
          >
            Current Balance: <strong className="text-xl">$40</strong>
          </li>
          <li
            className={
              "py-4 text-sm font-bold text-center relative p-[30px] cursor-pointer "
            }
          >
            Initial Balance: <strong className="text-xl">$100</strong>
          </li>
          <li className="py-4 text-sm font-bold text-center relative cursor-pointer">
            <button
              className="bg-gray-700 p-2 w-fit text-white rounded-xl mt-5 ml-[5%] font-bold px-9 md:px-10"
              onClick={() => setOpen(true)}
            >
              Deposit
            </button>
            <button
              className="bg-gray-700 p-2 w-fit text-white rounded-xl mt-5 ml-[5%] font-bold px-9 md:px-10"
              onClick={() => setOpenWithdraw(true)}
            >
              Withdraw
            </button>
          </li>
        </ul>
      </aside>
      <section className="mx-auto w-[90%] lg:max-w-[70%] xl:max-w-[40%] h-fit mt-8 lg:mt-0 md:h-full">
        <div className="relative overflow-x-auto w-full h-full flex items-center ml-4  lg:ml-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-2">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="bg-white ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Modals */}
        <PModal open={open} setOpen={setOpen}>
          <div className="">
            {next === false ? (
              <>
                <h3 className="mb-4 font-medium text-xl">Means of payment :</h3>
                <div className="flex flex-col gap-4">
                  {investData.map((item, index) => (
                    <button
                      className="flex gap-3 items-center border-b pb-4 last:border-b-0"
                      onClick={() => setNext(true)}
                    >
                      <img src={item.img} alt="bitcoin Logo" />
                      <p className="text-sm">{item.name}</p>
                      <p className="text-gray-500 font-bold text-base">
                        {item.acronym}
                      </p>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="px-3 flex flex-col items-center gap-4">
                <QRCode value="hey" />
                <span>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-bold">Address:</h4>
                    <CopyToClipboard
                      text={address.value}
                      onCopy={() => setAddress({ ...address, copied: true })}
                    >
                      <button>
                        {address.copied == true ? (
                          "✅copied"
                        ) : (
                          <span className="flex gap-2">
                            <img src={copy} alt="copy" className="w-4" /> Copy
                          </span>
                        )}
                      </button>
                    </CopyToClipboard>
                  </div>
                  <p className="px-4 py-2 rounded-lg bg-gray-200">
                    {address.value}
                  </p>
                </span>
                <button
                  className="py-3 px-10 bg-black rounded-xl text-white font-bold"
                  onClick={() => setOpen(false)}
                >
                  {" "}
                  Confirm
                </button>
              </div>
            )}
          </div>
        </PModal>
        <PModal open={openWithdraw} setOpen={setOpenWithdraw}>
          <div className="">
            {next === false ? (
              <>
                <h3 className="mb-4 font-medium text-xl">Means of payment :</h3>
                <div className="flex flex-col gap-4">
                  {investData.map((item, index) => (
                    <button
                      className="flex gap-3 items-center border-b pb-4 last:border-b-0"
                      onClick={() => setNext(true)}
                    >
                      <img src={item.img} alt="bitcoin Logo" />
                      <p className="text-sm">{item.name}</p>
                      <p className="text-gray-500 font-bold text-base">
                        {item.acronym}
                      </p>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="px-3 flex flex-col items-center gap-4">
                <div className="w-full  max-w-[300px] h-fit">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-base font-medium text-gray-900 "
                  >
                    Kindly enter your address :
                  </label>
                  <input
                    name="username"
                    type={"text"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder={"address..."}
                  />
                </div>
                <button
                  className="py-3 px-10 bg-black rounded-xl text-white font-bold"
                  onClick={handleWithdraw}
                >
                  {" "}
                  Confirm
                </button>
              </div>
            )}
          </div>
        </PModal>
      </section>
    </section>
  );
}

export default Wallet;
