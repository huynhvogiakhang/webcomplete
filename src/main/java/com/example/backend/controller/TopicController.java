package com.example.backend.controller;

import com.example.backend.model.Faculity;
import com.example.backend.model.Topic;
import com.example.backend.repository.GenericRepository;
import com.example.backend.utils.PaginationUtils;
import com.example.backend.utils.ResponseUtils;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;
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
public class TopicController {

    private final ResponseUtils res = new ResponseUtils();
    private PaginationUtils paginationUtils;

    @Autowired
    private GenericRepository genericRepository;

    @GetMapping("/topics")
    public ObjectNode getAllTopics() {
        try {
            List<Topic> list = genericRepository.findAll(Topic.class).collect(Collectors.toList());
            int total = genericRepository.count(Topic.class);

            return res.myJSON(list, total);
        } catch (Exception e) {
            return res.myErrorJSON(e.getMessage());
        }
    }

    @GetMapping("/topics/{id}")
    public ObjectNode getTopicById(@PathVariable(value = "id") Long topicId) {
        try {
            Topic topic = genericRepository.findById(Topic.class, topicId);
            return res.myJSON(topic);
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }

    @GetMapping("/topicsInTime")
    public ObjectNode getTopicInTime() {
        try {

            LocalDateTime now = LocalDateTime.now();
            // DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");

            List<Topic> list = genericRepository
                    .query(Topic.class)
                    .where()
                    .lt("deadline", now)
                    .findList();
            
            return res.myJSON(list);
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }

    @PostMapping("/topics")
    public ObjectNode createTopic(@RequestBody Topic topic) {
        List<Topic> list = genericRepository.findListBy(Topic.class, "name", topic.getName()).collect(Collectors.toList());
        try {
            topic.setDeadline(Instant.now().plus(topic.getDays(), ChronoUnit.DAYS));

            genericRepository.save(topic);
            return res.myJSON(topic);
        } catch (Exception e) {
            if (list.isEmpty()) {
                return res.myErrorJSON("UNKNOW_ERROR");
            } else {
                return res.myErrorJSON("Available topic with name '" + topic.getName() + "'!");
            }
        }
    }

    @PutMapping("/topics/{topicId}")
    public ObjectNode updateTopic(@PathVariable Long topicId, @RequestBody Topic topicRequest) {
        List<Topic> list = genericRepository.findListBy(Topic.class, "name", topicRequest.getName()).collect(Collectors.toList());
        try {
            Topic topic = genericRepository.findById(Topic.class, topicId);
            topic.setName(topicRequest.getName());
            topic.setDays(topicRequest.getDays());
            topic.setDeadline(Instant.now().plus(topicRequest.getDays(), ChronoUnit.DAYS));
            genericRepository.save(topic);
            return res.myJSON(topic);
        } catch (Exception e) {
            if (list.get(0).getId() != topicId) {
                return res.myErrorJSON("Available topic with name " + topicRequest.getName());
            } else {
                return res.myJSON(e);
            }
        }
    }

    @DeleteMapping("/topics/{topicId}")
    public ObjectNode deleteTopic(@PathVariable Long topicId) {
        try {
            Topic topic = genericRepository.findById(Topic.class, topicId);
            genericRepository.delete(topic);
            return res.myJSON(topic);
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }
}
