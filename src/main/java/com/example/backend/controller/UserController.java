package com.example.backend.controller;

import com.example.backend.model.UserInfo;
import com.example.backend.repository.GenericRepository;
import com.example.backend.utils.MD5;
import com.example.backend.utils.PaginationUtils;
import com.example.backend.utils.ResponseUtils;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.util.List;
import java.util.stream.Collectors;
import org.apache.commons.lang3.exception.ExceptionUtils;
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
public class UserController {

    private final ResponseUtils res = new ResponseUtils();
    private PaginationUtils paginationUtils;
    private final MD5 hash = new MD5();

    @Autowired
    private GenericRepository genericRepository;

    @GetMapping("/userInfos")
    public ObjectNode getAllUserInfos() {
        try {
            List<UserInfo> list = genericRepository.findAll(UserInfo.class).collect(Collectors.toList());
            int total = genericRepository.count(UserInfo.class);

            return res.myJSON(list, total);
        } catch (Exception e) {
            System.out.println(ExceptionUtils.getStackTrace(e));
            return res.myErrorJSON(e.getMessage());
        }
    }

    @GetMapping("/userInfos/{id}")
    public ObjectNode getUserInfoById(@PathVariable(value = "id") Long userInfoId) {
        try {
            UserInfo userInfo = genericRepository.findById(UserInfo.class, userInfoId);
            return res.myJSON(userInfo);
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }

    @GetMapping("/adminLogin/{email}/{pass}")
    public ObjectNode adminLogin(@PathVariable String email, @PathVariable String pass) {
        try {
            List<UserInfo> list = genericRepository
                    .query(UserInfo.class)
                    .where()
                    .eq("email", email)
                    .eq("password", hash.getMd5(pass))
                    .findList();
            
            if (list.isEmpty()) {
                return res.myErrorJSON("NO USER");
            } else {
                return res.myJSON(list.get(0));
            }
            
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }

    @PostMapping("/userInfos")
    public ObjectNode createUserInfo(@RequestBody UserInfo userInfo) {
        List<UserInfo> list = genericRepository.findListBy(UserInfo.class, "email", userInfo.getEmail()).collect(Collectors.toList());
        try {
            if (list.isEmpty()) {
                userInfo.setPassword(hash.getMd5(userInfo.getPassword()));

                genericRepository.save(userInfo);
                return res.myJSON(userInfo);
            } else {
                return res.myErrorJSON("Available user with email '" + userInfo.getEmail() + "'!");
            }

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }

    @PutMapping("/userInfos/{userInfoId}")
    public ObjectNode updateUserInfo(@PathVariable Long userInfoId, @RequestBody UserInfo userInfoRequest) {
        try {
            UserInfo userInfo = genericRepository.findById(UserInfo.class, userInfoId);
            userInfo.setPassword(hash.getMd5(userInfo.getPassword()));
            userInfo.setFullName(userInfoRequest.getFullName());
            userInfo.setPhone(userInfoRequest.getPhone());
            userInfo.setFaculity(userInfoRequest.getFaculity());

            genericRepository.save(userInfo);
            return res.myJSON(userInfo);
        } catch (Exception e) {
            return res.myJSON(e);
        }
    }

    @DeleteMapping("/userInfos/{userInfoId}")
    public ObjectNode deleteUserInfo(@PathVariable Long userInfoId) {
        try {
            UserInfo userInfo = genericRepository.findById(UserInfo.class, userInfoId);
            genericRepository.delete(userInfo);
            return res.myJSON(userInfo);
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }

}
