import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const PRODUCT_PAGE_SIZE = 16;
export const PLACES_PAGE_SIZE = 15;

export function paginateItems<T>(items: T[], page: number, pageSize = PRODUCT_PAGE_SIZE) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    totalPages,
    current,
  };
}

function pageItems(current: number, total: number): Array<number | "ellipsis"> {
  if (total <= 7) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  if (current <= 4) {
    return [1, 2, 3, 4, 5, "ellipsis", total];
  }

  if (current >= total - 3) {
    return [1, "ellipsis", total - 4, total - 3, total - 2, total - 1, total];
  }

  return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", total];
}

function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages < 1) {
    return null;
  }

  const items = pageItems(page, totalPages);

  return (
    <nav className="pagination" aria-label="Pages">
      <button
        type="button"
        className="pagination-arrow"
        disabled={page <= 1}
        aria-label="Previous page"
        onClick={() => onChange(page - 1)}
      >
        <ChevronLeft size={18} />
      </button>

      {items.map((item, index) =>
        item === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className="pagination-ellipsis" aria-hidden="true">
            • • •
          </span>
        ) : (
          <button
            type="button"
            key={item}
            className={`pagination-page ${page === item ? "active" : ""}`}
            aria-current={page === item ? "page" : undefined}
            aria-label={`Page ${item}`}
            onClick={() => onChange(item)}
          >
            {item}
          </button>
        ),
      )}

      <button
        type="button"
        className="pagination-arrow"
        disabled={page >= totalPages}
        aria-label="Next page"
        onClick={() => onChange(page + 1)}
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}

export default Pagination;
