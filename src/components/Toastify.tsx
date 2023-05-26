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
            duration: 2000,
            style: {
              color: "#1C1C1E",
              background: "#F2F2F7",
              border: "2px solid black",
              borderRadius: "4px",
              fontFamily: "Inter, sans-serif",
            },
            iconTheme: {
              primary: "#1C1C1E",
              secondary: "#32D74B",
            },
          },
        }}
      />
      <Component {...props} />
    </>
  );
};
