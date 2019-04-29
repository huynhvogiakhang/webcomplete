package com.example.backend.model;

import com.example.backend.model.baseModel.BaseModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import org.springframework.context.annotation.Lazy;

/**
 *
 * @author LEDTIN
 */
@Entity
public class Comment extends BaseModel {

    @NotNull
    private String comment;

    @ManyToOne()
    @Lazy(value = true)
    private Actical actical;

    @ManyToOne()
    @Lazy(value = true)
    private UserInfo userInfo;

    public Comment() {
    }

    public Comment(String comment, Actical actical, UserInfo userInfo) {
        this.comment = comment;
        this.actical = actical;
        this.userInfo = userInfo;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Actical getActical() {
        return actical;
    }

    public void setActical(Actical actical) {
        this.actical = actical;
    }

    public UserInfo getUserInfo() {
        return userInfo;
    }

    public void setUserInfo(UserInfo userInfo) {
        this.userInfo = userInfo;
    }

}
