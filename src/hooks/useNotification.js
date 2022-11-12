import toast from "react-hot-toast";

export default function useNotification() {


    //This will return a toast that saying success on the screen with green background
  const success = () => {
    toast.custom(
      (t) => (
        <div
          className={`bg-green-500 text-white px-6 py-4 shadow-md rounded-full ${
            t.visible ? "animate-enter" : "animate-leave"
          }`}
        >
          Success !
        </div>
      ),
      {
        duration: 2000,
        position: "bottom-center",
      }
    );
  };

  //This will return a text saying "ERROR !" on the screen with red background
  const error = () => {
    toast.custom(
      (t) => (
        <div
          className={`bg-red-500 text-white px-6 py-4 shadow-md rounded-full ${
            t.visible ? "animate-enter" : "animate-leave"
          }`}
        >
          Error !
        </div>
      ),
      {
        duration: 2000,
        position: "bottom-center",
      }
    );
  };

  return [success, error];
}
