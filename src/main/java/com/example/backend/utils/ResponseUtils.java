package com.example.backend.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.util.List;

public class ResponseUtils {

    private static final ObjectMapper mapper = new ObjectMapper();

//    private boolean status;
//    private String message;
//    private List list;
    public ResponseUtils() {
    }

    public ObjectNode myErrorJSON(String message) {
        ObjectNode node = mapper.createObjectNode();
        node.put("status", false);
        node.put("message", message);
        return node;
    }

    public ObjectNode myJSON(boolean status, String message, List list) {
        ObjectNode node = mapper.createObjectNode();
        node.put("status", status);
        node.put("message", message);
        node.putPOJO("response", list);
        return node;
    }

    public ObjectNode myJSON(Object obj) {
        ObjectNode node = mapper.createObjectNode();
        node.put("status", true);
        node.put("message", "success");
        node.putPOJO("response", obj);
        return node;
    }

    public ObjectNode myJSON(List list, int total) {
        ObjectNode node = mapper.createObjectNode();
        node.put("status", true);
        node.put("message", "success");
        node.putPOJO("response", list);
        node.put("total", total);
        return node;
    }

    public ObjectNode myJSON(List list, int total, int page, int pageSize, int totalPage) {
        ObjectNode node = mapper.createObjectNode();
        node.put("status", true);
        node.put("message", "success");
        node.putPOJO("response", list);
        node.put("total", total);
        node.put("page", page);
        node.put("pageSize", pageSize);
        node.put("totalPage", totalPage);
        return node;
    }

}
