/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.backend.utils;

import com.fasterxml.jackson.databind.JsonNode;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletRequest;

/**
 *
 * @author LEDTIN
 */
public class ConvertUtils {
    private static Gson mapper = new Gson();
    
    public static JsonObject request2Json(HttpServletRequest request) {
	try {
	    String body = request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
	    return mapper.fromJson(body, JsonObject.class);
	} catch (IOException ex) {
            
	}
	return null;
    }
}
