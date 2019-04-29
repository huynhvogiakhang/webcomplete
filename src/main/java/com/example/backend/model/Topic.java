package com.example.backend.model;

import com.example.backend.model.baseModel.BaseModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.Instant;
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
public class Topic extends BaseModel {

    @NotNull
    @Column(unique = true)
    private String name;

    @NotNull
    private Integer days;
    
    @NotNull
    private Instant deadline;
    
    @OneToMany
    @JoinColumn(name = "actical_id", referencedColumnName = "id")
    @JsonIgnore
    private List<Actical> acticals;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getDays() {
        return days;
    }

    public void setDays(Integer days) {
        this.days = days;
    }

    public Instant getDeadline() {
        return deadline;
    }

    public void setDeadline(Instant deadline) {
        this.deadline = deadline;
    }

    public List<Actical> getActicals() {
        return acticals;
    }

    public void setActicals(List<Actical> acticals) {
        this.acticals = acticals;
    }

    public Topic() {
    }

    public Topic(String name, Integer days, Instant deadline, List<Actical> acticals) {
        this.name = name;
        this.days = days;
        this.deadline = deadline;
        this.acticals = acticals;
    }

}
