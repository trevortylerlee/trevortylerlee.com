import { Toaster } from "react-hot-toast";

export default (Component) => {
  return (props) => (
    <>
      <Toaster
        position={props.position || "top-center"}
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 1000,
          style: {
            background: "#333",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 2500,
            style: {
              color: "black",
              background: "white",
              border: "1px solid black",
              borderRadius: "1px",
              fontFamily: "Inter, sans-serif",
            },
            iconTheme: {
              primary: "#000",
              secondary: "#22c55e",
            },
          },
        }}
      />
      <Component {...props} />
    </>
  );
};
