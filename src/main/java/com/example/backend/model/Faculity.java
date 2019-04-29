package com.example.backend.model;

import com.example.backend.model.baseModel.BaseModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

/**
 *
 * @author LEDTIN
 */
@Entity
public class Faculity extends BaseModel {

    @NotNull
    @Column(unique = true)
    private String name;

    @OneToMany
    @JoinColumn(name = "user_info_id", referencedColumnName = "id")
    @JsonIgnore
    private List<UserInfo> userInfos;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<UserInfo> getUserInfos() {
        return userInfos;
    }

    public void setUserInfos(List<UserInfo> userInfos) {
        this.userInfos = userInfos;
    }

    public Faculity() {
    }

    public Faculity(String name, List<UserInfo> userInfos) {
        this.name = name;
        this.userInfos = userInfos;
    }

}
