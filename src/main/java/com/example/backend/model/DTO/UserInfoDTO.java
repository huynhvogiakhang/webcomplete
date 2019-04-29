package com.example.backend.model.DTO;

import com.example.backend.model.Actical;
import com.example.backend.model.Faculity;
import com.example.backend.model.baseModel.BaseModel;
import java.util.List;
/**
 *
 * @author LEDTIN
 */
public class UserInfoDTO {

    private Integer id;
    private String email;
    private String fullName;
    private String phone;
    private Integer roles;
    private Faculity faculity;
    private List<Actical> acticals;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public UserInfoDTO() {
    }

    public UserInfoDTO(Integer id, String email, String fullName, String phone, Integer roles, Faculity faculity, List<Actical> acticals) {
        this.id = id;
        this.email = email;
        this.fullName = fullName;
        this.phone = phone;
        this.roles = roles;
        this.faculity = faculity;
        this.acticals = acticals;
    }
    
    
    
}
