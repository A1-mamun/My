import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="max-w-[1500px] mx-auto 2xl:px-0 xl:px-10 md:px-6 sm:px-2 ">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
