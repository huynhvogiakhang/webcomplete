package com.example.backend.model;

import com.example.backend.model.baseModel.BaseModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
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
public class UserInfo extends BaseModel{
    
    @NotNull
    @Column(unique = true)
    private String email;
    
    @NotNull
    private String password;
    
    @NotNull
    private String fullName;
    
    @NotNull
    private String phone;
    
    @NotNull
    private Integer roles;
    
    @ManyToOne()
    @Lazy(value = true)
    private Faculity faculity;
    
    @OneToMany
    @JoinColumn(name = "actical_id", referencedColumnName = "id")
    @JsonIgnore
    private List<Actical> acticals;
    
    @OneToMany
    @JoinColumn(name = "comment_id", referencedColumnName = "id")
    @JsonIgnore
    private Comment comment;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getRoles() {
        return roles;
    }

    public void setRoles(Integer roles) {
        this.roles = roles;
    }

    public Faculity getFaculity() {
        return faculity;
    }

    public void setFaculity(Faculity faculity) {
        this.faculity = faculity;
    }

    public List<Actical> getActicals() {
        return acticals;
    }

    public void setActicals(List<Actical> acticals) {
        this.acticals = acticals;
    }

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }

    public UserInfo() {
    }

    public UserInfo(String email, String password, String fullName, String phone, Integer roles, Faculity faculity, List<Actical> acticals, Comment comment) {
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.phone = phone;
        this.roles = roles;
        this.faculity = faculity;
        this.acticals = acticals;
        this.comment = comment;
    }
    
}
