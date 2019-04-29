package com.example.backend.model;

import com.example.backend.model.baseModel.BaseModel;
import com.example.backend.model.enums.ActicalStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import org.springframework.context.annotation.Lazy;

/**
 *
 * @author LEDTIN
 */
@Entity
public class Actical extends BaseModel {

    @NotNull
    private String title;

    @NotNull
    private String description;

    @NotNull
    @Enumerated(EnumType.STRING)
    private ActicalStatus status;

    @ManyToOne()
    @Lazy(value = true)
    private Topic topic;

    @ManyToOne()
    @Lazy(value = true)
    private UserInfo userInfo;

    @OneToMany
    @JoinColumn(name = "comment_id", referencedColumnName = "id")
    @JsonIgnore
    private Comment comment;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ActicalStatus getStatus() {
        return status;
    }

    public void setStatus(ActicalStatus status) {
        this.status = status;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    public UserInfo getUserInfo() {
        return userInfo;
    }

    public void setUserInfo(UserInfo userInfo) {
        this.userInfo = userInfo;
    }

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }

    public Actical() {
    }

    public Actical(String title, String description, ActicalStatus status, Topic topic, UserInfo userInfo, Comment comment) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.topic = topic;
        this.userInfo = userInfo;
        this.comment = comment;
    }

}
