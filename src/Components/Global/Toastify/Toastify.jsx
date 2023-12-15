import { toast } from "react-toastify"

export function infoMsg(msg) {
   toast.info(msg, {
      className: 'custom-toast',
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
   })
}

export function errorMsg(msg) {
   toast.error(msg, {
      className: 'custom-toast',
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
   })
}

export function successMsg(msg) {
   toast.success(msg, {
      className: 'custom-toast',
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
   })
}