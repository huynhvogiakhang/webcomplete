package com.example.backend;

import com.example.backend.config.ConfigInfo;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication(scanBasePackages = {"com.example"})
public class BackendApplication {


    public static void main(String[] args) {

	    System.err.println("==============>" + ConfigInfo.SPRING_BOOT_CONFIG);
	    ConfigurableApplicationContext applicationContext = new SpringApplicationBuilder(BackendApplication.class)
		    .properties("spring.config.location:" + ConfigInfo.SPRING_BOOT_CONFIG)
		    .build().run(args);
    }
}
