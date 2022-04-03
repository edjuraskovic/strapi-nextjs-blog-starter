import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Link from "next/link";
import { appConfig } from "../lib/appConfig";

const Drawer = ({ open, setOpen, links }) => {
const [touchStart, setTouchStart] = useState(0);
const [touchEnd, setTouchEnd] = useState(0);

  function handleTouchStart(e) {
      setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
      setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
      if (touchStart - touchEnd < -150) {
          setOpen(false);
      }
  }
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-hidden z-50" onClose={setOpen}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchEnd={(e) => handleTouchEnd(e)}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="relative w-screen max-w-xs">
                  <div className="h-full flex flex-col pb-6  shadow-xl overflow-y-scroll bg-white">
                    <div className="mt-6 relative flex-1 px-4 sm:px-6 ">
                      {/* content */}
                          <div className="">
                            <a href="/" className="block font-semibold p-4 text-xl focus:outline-none border-0">
                              {appConfig.site_name}
                            </a>
                            <ul className="list-none p-4">
                              {links.map((category) => {
                                return (
                                  <li key={category.id} className="my-4">
                                    <Link as={`/blog/category/${category.slug}`} href="/blog/category/[id]">
                                      <a className="text-lg"># {category.name}</a>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                      {/* content end */}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Drawer