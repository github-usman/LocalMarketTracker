import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { TfiFaceSad } from "react-icons/tfi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from "./pagination.module.css";

const Pagination = ({ setCurrentPage, currentPage, totalPage }) => {
  return (
    <div className={styles.container}>
      {totalPage ? <>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={
          styles[`${currentPage === 1 ? "arrowBtnDisable" : "arrowBtn"}`]
        }
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <span>
          {totalPage && (
            <>
              {Array.from({ length: totalPage }, (_, i) => {
                // for page is less or === 5
                if (totalPage <= 5) {
                  return (
                    <><button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]}>
                      {i + 1}
                    </button>
                    </>
                  );
                } else if (totalPage === 6) { // FOR PAGE IS EXACTLY 6
                  if (currentPage <= 3) {
                    if (i + 1 <= 3) {
                      return (
                        <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]} >
                          {i + 1}
                        </button>
                      );
                    } else if (i + 1 === 5) {
                      return <>...</>;
                    } else if (i + 1 === totalPage) {
                      return (
                        <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]}  >
                          {i + 1}
                        </button>
                      );
                    }
                  } else if (currentPage >= 4) {
                    if (i + 1 < 2) {
                      return (
                        <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]} >
                          {i + 1}
                        </button>
                      );
                    } else if (i + 1 === 2) {
                      return <>...</>;
                    } else if (i + 1 === 3) {
                    } else {
                      return (
                        <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]}  >{i + 1}</button>
                      );
                    }
                  } else {
                    if (i + 1 < 2) {
                      return (
                        <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]} >{i + 1}</button>
                      );
                    } else if (i + 1 === 2) {
                      return <>...</>;
                    } else {
                      return (
                        <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]}>
                          {i + 1}
                        </button>
                      );
                    }
                  }
                } else { //FOR PAGE IS MORE THAN 6
                  if (currentPage <= 3) {
                    if (i + 1 <= 3) {
                      return (
                        <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]} >
                          {i + 1}
                        </button>
                      );
                    } else if (i + 1 === 4) {
                      return <>...</>
                    } else if (i + 1 === totalPage) {
                      return (
                        <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]}  >
                          {i + 1}
                        </button>
                      );
                    }
                  } else if (currentPage <= totalPage - 3) {
                    if (i + 1 === 1) {
                      return (
                        <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]} >
                          {i + 1}
                        </button>
                      );
                    } else if (i + 1 === 2) {
                      return <>...</>
                    } else if (i + 1 === currentPage - 1 || i + 1 === currentPage + 1 || currentPage === i + 1) {
                      return (
                        <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]}  >
                          {i + 1}
                        </button>
                      );
                    } else if (i + 1 === totalPage) {
                      return <>...<button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]}  > {i + 1} </button>
                      </>
                    }
                  } else {
                    if (i + 1 === 1) {
                      return (
                        <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]} >
                          {i + 1}
                        </button>
                      );
                    } else if (i + 1 === 2) {
                      return <>...</>
                    } else if (i + 1 >= totalPage - 3) {
                      return (
                        <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={styles[`${currentPage === i + 1 ? "active-page" : ""}`]}  >
                          {i + 1}
                        </button>
                      );
                    }
                  }
                }
                return null;
              })}
            </>
          )}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage >= totalPage}
          className={
            styles[`${currentPage >= totalPage ? "arrowBtnDisable" : "arrowBtn"}`]
          }
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </> : <div className={styles.notFound}>
        <TfiFaceSad color="black" size={35} />
        <h5>No Product found in your City, Please try another product</h5>
      </div>
      }
    </div>
  );
};

export default Pagination;