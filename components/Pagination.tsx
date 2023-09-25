import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPrevClick: () => void;
    onNextClick: () => void;
    onPageChange?: (page: number, skip?: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPrevClick,
    onNextClick,
    onPageChange,
}) => {
    const handlePrevClick = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            onPageChange && onPageChange(newPage);
            onPrevClick();
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            const newPage = currentPage + 1;
            onPageChange && onPageChange(newPage);
            onNextClick();
        }
    };

    return (
        <div className="flex justify-end items-center md:gap-x-4 gap-x-2">
            <button
                className="bg-purple-400 px-5 py-1 rounded-md"
                onClick={handlePrevClick}
                disabled={currentPage === 1}
            >
                Prev
            </button>
            <p>
                Page {currentPage} / {totalPages}
            </p>
            <button
                className="bg-purple-400 px-5 py-1 rounded-md"
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
