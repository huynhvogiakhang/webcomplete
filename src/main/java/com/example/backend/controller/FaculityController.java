package com.example.backend.controller;

import com.example.backend.model.Faculity;
import com.example.backend.repository.GenericRepository;
import com.example.backend.utils.PaginationUtils;
import com.example.backend.utils.ResponseUtils;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author LEDTIN
 */

@CrossOrigin(origins = "*")
@RestController
public class FaculityController {

    private final ResponseUtils res = new ResponseUtils();
    private PaginationUtils paginationUtils;

    @Autowired
    private GenericRepository genericRepository;

    @GetMapping("/faculities")
    public ObjectNode getAllFaculities() {
        try {
            List<Faculity> list = genericRepository.findAll(Faculity.class).collect(Collectors.toList());
            int total = genericRepository.count(Faculity.class);

            return res.myJSON(list, total);
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }

    @GetMapping("/faculities/{id}")
    public ObjectNode getFaculityById(@PathVariable(value = "id") Long faculityId) {
        try {
            Faculity faculity = genericRepository.findById(Faculity.class, faculityId);
            return res.myJSON(faculity);
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }

    @PostMapping("/faculities")
    public ObjectNode createFaculity(@RequestBody Faculity faculity) {
        List<Faculity> list = genericRepository.findListBy(Faculity.class, "name", faculity.getName()).collect(Collectors.toList());
        try {
            genericRepository.save(faculity);
            return res.myJSON(faculity);

        } catch (Exception e) {
            if (list.isEmpty()) {
                return res.myErrorJSON("UNKNOW_ERROR");
            } else {
                return res.myErrorJSON("Available faculity with name '" + faculity.getName() + "'!");
            }

        }
    }

    @PutMapping("/faculities/{faculityId}")
    public ObjectNode updateFaculity(@PathVariable Long faculityId, @RequestBody Faculity faculityRequest) {
        List<Faculity> list = genericRepository.findListBy(Faculity.class, "name", faculityRequest.getName()).collect(Collectors.toList());
        try {
            Faculity faculity = genericRepository.findById(Faculity.class, faculityId);
            faculity.setName(faculityRequest.getName());
            
            genericRepository.save(faculity);
            return res.myJSON(faculity);
        } catch (Exception e) {
            if (list.get(0).getId() != faculityId) {
                return res.myErrorJSON("Available faculity with name " + faculityRequest.getName());
            } else {
                return res.myJSON(e);
            }
        }
    }

    @DeleteMapping("/faculities/{faculityId}")
    public ObjectNode deleteCategory(@PathVariable Long faculityId) {
        try {
            Faculity faculity = genericRepository.findById(Faculity.class, faculityId);
            genericRepository.delete(faculity);
            return res.myJSON(faculity);
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }
}
