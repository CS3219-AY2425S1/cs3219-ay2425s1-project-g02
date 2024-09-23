import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import React, { useState } from 'react';

export function Pages() {

    const [page, setPage] = useState<number>(1);
    const [maxPage, setMaxPage] = useState<number>(10);

    const handleNextPage = () => {
        setPage(() => page == maxPage ? page : page + 1);
      };

      const handlePrevPage = () => {
        setPage(() => page <= 1 ? 1 : page - 1);
      };

    return (
        <Pagination>
            <PaginationContent>
            <PaginationItem>
                <PaginationPrevious href="#" onClick={handlePrevPage}/>
            </PaginationItem>
            {page > 1 && 
                <PaginationItem>
                    <PaginationLink href="#">{page - 1  }</PaginationLink>
                </PaginationItem>
            }
            <PaginationItem>
                <PaginationLink href="#" isActive>
                {page}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationEllipsis />
            </PaginationItem>
            {page < maxPage &&
                <PaginationItem>
                    <PaginationLink href="#">{maxPage}</PaginationLink>
                </PaginationItem>
            }
            
            <PaginationItem>
                <PaginationNext href="#" onClick={handleNextPage} />
            </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}; 