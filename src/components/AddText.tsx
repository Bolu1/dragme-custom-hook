import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { BiImages } from "react-icons/bi";
import { toast } from "react-toastify";

export default function AddText(props: any) {
  let [isOpen, setIsOpen] = useState(false);
  let [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [firstname, setFirstname] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const submitHandler = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    let updatedskill = [...props.text, text];
    props.setText(updatedskill);
    setText("");

    setIsOpen(false);
  };

  return (
    <>
      <div onClick={openModal} className=" flex justify-center bg-black py-4">
        <p className=" p-3 text-white  rounded-lg cursor-pointer transition-colors duration-200 transform :text-gray-300 ">
          Add Text
        </p>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 px-12 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-2xl my-8 text-gray-900"
                  >
                    Add text
                  </Dialog.Title>

                  <form onSubmit={(e) => submitHandler(e)}>
                    <div>
                      <label className="block mb-2 text-sm :text-gray-200">
                        Text <span className="text-red-500">*</span>
                      </label>
                      <div className="flex">
                        <input
                          required
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          name="text"
                          id="text"
                          type="text"
                          placeholder="Text"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md :placeholder-black :bg-gray-900 :text-gray-300 :border-gray-700 focus:border-blue-400 :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                    </div>

                    <div className="flex mt-6 justify-end items-center space-x-4">
                      <div
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className="flex items-center cursor-pointer"
                      >
                        <p>cancel</p>
                      </div>
                      <div className="items-center flex ">
                        <button
                          type="submit"
                          className="w-full px-4 py-4 tracking-wide text-white font-medium transition-colors duration-200 transform bg-black rounded-xl cursor-pointer "
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
