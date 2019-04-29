package com.example.backend.repository;

import com.example.backend.model.baseModel.BaseModel;
import io.ebean.EbeanServer;
import io.ebean.Query;
import io.ebean.annotation.Transactional;
import java.awt.print.Pageable;
import java.util.Collection;
import java.util.List;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Repository;

/**
 *
 * @author LEDTIN
 */
@Repository
public class GenericRepository {

    @Autowired
    private EbeanServer server;

    public EbeanServer getServer() {
        return server;
    }

    /**
     *
     * @param <T>
     * @param clazz
     * @return list of all in table T
     */
    public <T extends BaseModel> Stream<T> findAll(Class<T> clazz) {
        return server.find(clazz).findList().stream();
    }

    /**
     *
     * @param <T>
     * @param clazz
     * @return total rows in table T
     */
    public <T extends BaseModel> int count(Class<T> clazz) {
        return server.find(clazz).findCount();
    }

    /**
     *
     * @param <T>
     * @param clazz
     * @param start
     * @param pageSize
     * @return select * from T from start to (start + pageSize)
     */
    public <T extends BaseModel> Stream<T> paginate(Class<T> clazz, int start, int pageSize) {
        return server.find(clazz).setFirstRow(start).setMaxRows(pageSize).findList().stream();
    }

    /**
     *
     * @param <T>
     * @param clazz
     * @param start
     * @param pageSize
     * @param sort
     * @return select * from T where sort from start to (start + pageSize)
     */
    public <T extends BaseModel> Stream<T> paginateAndSort(Class<T> clazz, int start, int pageSize, String sort) {
        return server.find(clazz).orderBy(sort).setFirstRow(start).setMaxRows(pageSize).findList().stream();
    }

    /**
     *
     * @param <T>
     * @param clazz
     * @param id
     * @return select one in T where T.id = id
     */
    public <T extends BaseModel> T findById(Class<T> clazz, long id) {
        return server.find(clazz, id);
    }

    /**
     *
     * @param <T>
     * @param clazz
     * @param column
     * @param val
     * @return select one in T where T.column = value
     */
    public <T extends BaseModel> T findOneBy(Class<T> clazz, String column, Object val) {
        return server.find(clazz).where().eq(column, val).findOne();
    }

    /**
     * @param <T>
     * @param clazz
     * @param column
     * @param val
     * @return select list in T where T.column = value
     */
    public <T extends BaseModel> Stream<T> findListBy(Class<T> clazz, String column, Object val) {
        return server.find(clazz).where().eq(column, val).findList().stream();
    }

    /**
     * @param <T>
     * @param clazz
     * @param column1
     * @param val1
     * @param column2
     * @param val2
     * @return select list in T where T.column1 = value1 and T.column2 = value2
     */
    public <T extends BaseModel> Stream<T> findListBy2Param(Class<T> clazz, String column1, Object val1, String column2, Object val2) {
        return server.find(clazz).where().eq(column1, val1).eq(column2, val2).findList().stream();
    }

    public <T extends BaseModel> Query<T> query(Class<T> clazz) {
        return server.find(clazz);
    }

    @Transactional
    public <T extends BaseModel> void save(T bean) {
        server.save(bean);
    }

    @Transactional
    public <T extends BaseModel> void update(T bean) {
        server.update(bean);
    }

    @Transactional
    public <T extends BaseModel> void saveAll(Collection<T> beans) {
        server.saveAll(beans);
    }

    @Transactional
    public <T extends BaseModel> void delete(T bean) {
        server.delete(bean);
    }

    @Transactional
    public <T extends BaseModel> void deleteById(Class<T> clazz, long id) {
        server.delete(clazz, id);
    }

    @Transactional
    public <T extends BaseModel> void deleteAll(Collection<T> beans) {
        server.deleteAll(beans);
    }

    @Transactional
    public <T extends BaseModel> void deleteAllById(Class<T> clazz, List<Long> ids) {
        server.deleteAll(clazz, ids);
    }
}
