import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

const Pagination = ({ count, onChange }) => {
    return (
        <ReactPaginate
            previousLabel={"<"}
            previousLinkClassName={styles.prevArrow}
            nextLinkClassName={styles.nextArrow}
            nextLabel=">"
            onPageChange={(e) => onChange(e.selected + 1)}
            containerClassName={styles.wrapper}
            activeClassName={styles.active}
            pageCount={count}
        />
    );
};

Pagination.propTypes = {
    count: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

Pagination.defaultProps = {
    count: 1,
    onChange() {}
};

export default Pagination;