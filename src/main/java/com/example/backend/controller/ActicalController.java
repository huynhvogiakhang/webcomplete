package com.example.backend.controller;

import com.example.backend.model.Actical;
import com.example.backend.model.DTO.UserInfoDTO;
import com.example.backend.model.Faculity;
import com.example.backend.model.UserInfo;
import com.example.backend.model.enums.ActicalStatus;
import com.example.backend.repository.GenericRepository;
import com.example.backend.utils.MD5;
import com.example.backend.utils.PaginationUtils;
import com.example.backend.utils.ResponseUtils;
import com.example.backend.utils.SendMail;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import javax.mail.MessagingException;
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
public class ActicalController {

    private final ResponseUtils res = new ResponseUtils();
    private PaginationUtils paginationUtils;
    private final MD5 hash = new MD5();

    @Autowired
    private GenericRepository genericRepository;

    @GetMapping("/acticals")
    public ObjectNode getAllActicals() {
        try {
            List<Actical> list = genericRepository.findAll(Actical.class).collect(Collectors.toList());
            //ArrayList<UserInfoDTO> listResult = new ArrayList<>();

//            for (int i = 0; i < list.size(); i++) {
//                List<Actical> listFaculity = genericRepository.findListBy(Actical.class, "user_info_id", list.get(i).getId()).collect(Collectors.toList());
//                UserInfoDTO item = new UserInfoDTO(list.get(i).getId(), list.get(i).getEmail(), list.get(i).getFullName(), list.get(i).getPhone(), list.get(i).getRoles(), list.get(i).getFaculity(), listFaculity);
//                listResult.add(item);
//            }
            return res.myJSON(list, 0);
        } catch (Exception e) {
            return res.myErrorJSON(e.getMessage());
        }
    }

    @GetMapping("/acticals/{id}")
    public ObjectNode getActicalById(@PathVariable(value = "id") Long acticalId) {
        try {
            Actical actical = genericRepository.findById(Actical.class, acticalId);
            return res.myJSON(actical);
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }

    @GetMapping("/acticalsByUserAndTopic/{userId}/{topicId}")
    public ObjectNode getActicalByUserAndTopic(@PathVariable Long userId, @PathVariable Long topicId) {
        try {
//            List<UserInfo> list = genericRepository.findAll(UserInfo.class).collect(Collectors.toList());
//            ArrayList<UserInfoDTO> listResult = new ArrayList<>();
//
//            for (int i = 0; i < list.size(); i++) {
//                List<Actical> listFaculity = genericRepository.findListBy(Actical.class, "user_info_id", list.get(i).getId()).collect(Collectors.toList());
//                UserInfoDTO item = new UserInfoDTO(list.get(i).getId(), list.get(i).getEmail(), list.get(i).getFullName(), list.get(i).getPhone(), list.get(i).getRoles(), list.get(i).getFaculity(), listFaculity);
//                listResult.add(item);
//            }
            System.out.println(userId);
            System.out.println(topicId);
            List<Actical> listFaculity = genericRepository.findListBy2Param(Actical.class, "user_info_id", userId, "topic_id", topicId).collect(Collectors.toList());

            return res.myJSON(listFaculity, listFaculity.size());
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }

    @PostMapping("/acticals")
    public ObjectNode createActical(@RequestBody Actical actical) {
        try {
            actical.setStatus(ActicalStatus.Processing);

            genericRepository.save(actical);
            return res.myJSON(actical);
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }

    @PutMapping("/acticalsAccepted/{acticalId}")
    public ObjectNode updateActicalAccepted(@PathVariable Long acticalId) {
        try {
            Actical actical = genericRepository.findById(Actical.class, acticalId);
            actical.setStatus(ActicalStatus.Accepted);

            genericRepository.save(actical);

            try {
                new SendMail().sendMail(actical.getUserInfo().getEmail(), "Actical Accepted", "Your actical have been accepted. Your article will be submitted to the Marketing Manager to be considered for the best article. <br/> Thanks.");
            } catch (IOException | MessagingException e) {
                System.out.println(e);
            }

            return res.myJSON(actical);
        } catch (Exception e) {
            return res.myJSON(e);
        }
    }

    @PutMapping("/acticalsRejected/{acticalId}")
    public ObjectNode updateActicalRejected(@PathVariable Long acticalId) {
        try {
            Actical actical = genericRepository.findById(Actical.class, acticalId);
            actical.setStatus(ActicalStatus.Rejected);

            genericRepository.save(actical);

            try {
                new SendMail().sendMail(actical.getUserInfo().getEmail(), "Actical Rejected", "Your actical have been rejected. If you have any questions, please contact us for more details. <br/> Thanks.");
            } catch (IOException | MessagingException e) {
                System.out.println(e);
            }

            return res.myJSON(actical);
        } catch (Exception e) {
            return res.myJSON(e);
        }
    }

    @PutMapping("/acticalsPublic/{acticalId}")
    public ObjectNode updateActicalPublic(@PathVariable Long acticalId) {
        try {
            Actical actical = genericRepository.findById(Actical.class, acticalId);
            actical.setStatus(ActicalStatus.Public);

            try {
                new SendMail().sendMail(actical.getUserInfo().getEmail(), "Actical Public", "Your actical have been public. Your post is one of the best posts to public. Congratulations. <br/> Thanks.");
            } catch (IOException | MessagingException e) {
                System.out.println(e);
            }

            genericRepository.save(actical);
            return res.myJSON(actical);
        } catch (Exception e) {
            return res.myJSON(e);
        }
    }

    @DeleteMapping("/acticals/{acticalId}")
    public ObjectNode deleteActical(@PathVariable Long acticalId) {
        try {
            UserInfo userInfo = genericRepository.findById(UserInfo.class, acticalId);
            genericRepository.delete(userInfo);
            return res.myJSON(userInfo);
        } catch (Exception e) {
            return res.myErrorJSON("UNKNOW_ERROR");
        }
    }
}
