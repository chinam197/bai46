import React from "react";

const NumericNavigator = () => {
  return (
    <div className="row justify-content-center">
      <div className="row">
        <ul className="pagination" role="navigation" aria-label="Pagination">
          <li className="previous disabled">
            <a
              className=" "
              tabIndex={-1}
              role="button"
              aria-disabled="true"
              aria-label="Previous page"
              rel="prev"
            >
              &lt; previous
            </a>
          </li>
          <li className="active">
            <a
              rel="canonical"
              role="button"
              tabIndex={-1}
              aria-label="Page 1 is your current page"
              aria-current="page"
            >
              1
            </a>
          </li>
          <li>
            <a rel="next" role="button" tabIndex={0} aria-label="Page 2">
              2
            </a>
          </li>
          <li>
            <a role="button" tabIndex={0} aria-label="Page 3">
              3
            </a>
          </li>
          <li>
            <a role="button" tabIndex={0} aria-label="Page 4">
              4
            </a>
          </li>
          <li>
            <a role="button" tabIndex={0} aria-label="Page 5">
              5
            </a>
          </li>
          <li className="break">
            <a role="button" tabIndex={0} aria-label="Jump forward">
              ...
            </a>
          </li>
          <li>
            <a role="button" tabIndex={0} aria-label="Page 1248">
              1248
            </a>
          </li>
          <li>
            <a role="button" tabIndex={0} aria-label="Page 1249">
              1249
            </a>
          </li>
          <li>
            <a role="button" tabIndex={0} aria-label="Page 1250">
              1250
            </a>
          </li>
          <li className="next">
            <a
              className=""
              tabIndex={0}
              role="button"
              aria-disabled="false"
              aria-label="Next page"
              rel="next"
            >
              next &gt;
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NumericNavigator;
