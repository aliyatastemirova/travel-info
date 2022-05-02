import PropTypes from "prop-types";

const Dropdown = ({ items }) => {
  return (
    // Dropdown menu with the list of items
    <select className="w-full bg-white border border-orange-200 hover:border-orange-400 px-2 py-2 rounded-2xl shadow focus:outline-none focus:shadow-outline text-slate-500">
      {/* Dropdown menu with the list of items */}
      <option className="text-slate-300" value="" disabled selected>
        Country
      </option>
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  items: PropTypes.array,
};

export default Dropdown;
