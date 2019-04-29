package com.example.backend.controller;

import com.example.backend.model.Actical;
import com.example.backend.model.Comment;
import com.example.backend.model.enums.ActicalStatus;
import com.example.backend.repository.GenericRepository;
import com.example.backend.utils.PaginationUtils;
import com.example.backend.utils.ResponseUtils;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author LEDTIN
 */
@CrossOrigin(origins = "*")
@RestController
public class CommentController {

    private final ResponseUtils res = new ResponseUtils();
    private PaginationUtils paginationUtils;

    @Autowired
    private GenericRepository genericRepository;

    @GetMapping("/comments")
    public ObjectNode getAllComments() {
        try {
            List<Comment> list = genericRepository.findAll(Comment.class).collect(Collectors.toList());

            return res.myJSON(list, 0);
        } catch (Exception e) {
            return res.myErrorJSON(e.getMessage());
        }
    }
    
    @GetMapping("/commentsOfActical/{id}")
    public ObjectNode getAllCommentsOfActical(@PathVariable Long id) {
        try {
            List<Comment> list = genericRepository
                    .query(Comment.class)
                    .where()
                    .eq("actical_id", id)
                    .findList();

            return res.myJSON(list, list.size());
        } catch (Exception e) {
            return res.myErrorJSON(e.getMessage());
        }
    }

    @PostMapping("/comments")
    public ObjectNode createActical(@RequestBody Comment comment) {
        try {
            System.out.println(comment.getActical().getId());
            genericRepository.save(comment);
            return res.myJSON(comment);
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }

}
