package com.example.backend.utils;

/**
 *
 * @author LEDTIN
 */
public class PaginationUtils {

    private int page;
    private int pageSize;
    private int total;

    public PaginationUtils() {
    }

    /**
     * @param page
     * @param pageSize
     * @param total
     */
    public PaginationUtils(int page, int pageSize, int total) {
        this.page = page - 1;
        this.pageSize = pageSize;
        this.total = total;
    }

    /**
     * @return total page
     */
    public int totalPage() {
        // System.out.println(Math.ceil(this.total / this.pageSize));
        if (this.total == this.pageSize) {
            return 1;
        } else if (this.pageSize <= 1) {
            return (int) Math.ceil(this.total / this.pageSize);
        }
        return (int) (Math.ceil(this.total / this.pageSize) + 1);
    }

    /**
     * @return start point to select in db
     */
    public int startAt() {
        return (((this.page * this.pageSize) <= 0) ? 0 : (this.page * this.pageSize));
    }

    public int endAt() {
        return (this.startAt() + this.pageSize);
    }

}
