import React, { useState } from "react";
import gfgicon from "./gfgicon.png";

export default function Modal(props) {
  const { showModal, setShowModal,descr } = props;
/*   const [showModal, setShowModal] = useState(false);
 */  return (
    <div className="absolute">

      <div className="modal">
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

              <div class="relative transform overflow-hidden rounded-lg bg-white dark:bg-red-400 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white dark:bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <img src={gfgicon} alt="" srcset="" />
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-green-500" id="modal-title">Full Event Details</h3>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">{descr}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button type="button" onClick={() => setShowModal(false)} class="inline-flex w-full justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Close</button>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}