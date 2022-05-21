import Button from "./Button";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const Dropdown = ({ countries, onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    // Dropdown menu with the list of items
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <select
        {...register("country", { required: true })}
        defaultValue={""}
        className="w-full bg-white border border-orange-200 hover:border-orange-400 px-2 py-2 rounded-2xl shadow focus:outline-none focus:shadow-outline text-slate-500"
      >
        {/* Dropdown menu with the list of items */}
        <option className="text-slate-300" value="" disabled>
          Country
        </option>
        {countries.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <Button />
    </form>
  );
};

Dropdown.propTypes = {
  countries: PropTypes.array,
};

export default Dropdown;
