import { useFormik } from "formik";
import schema from "./schema";
import InputField from "./InputField";
import inputs from "./constant";

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
    },

    validationSchema: schema,

    onSubmit: (values, actions) => {
      alert("Form Submitted");
    },
  });

  return (
    <div className="vh-100 vw-100 bg-dark text-white">
      <div className="container py-5">
        <h2 className="text-center">CoinMania</h2>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-4 mt-5"
        >
          {inputs.map((props) => (
            <InputField formik={formik} {...props} />
          ))}

          <button disabled={formik.isSubmitting} className="my-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
