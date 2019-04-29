package com.example.backend.config;

import static com.example.backend.config.ConfigInfo.EBEAN_DRIVER;
import static com.example.backend.config.ConfigInfo.EBEAN_ENT_PACKAGE;
import static com.example.backend.config.ConfigInfo.EBEAN_GENERATE;
import static com.example.backend.config.ConfigInfo.EBEAN_PASSWORD;
import static com.example.backend.config.ConfigInfo.EBEAN_RUN;
import static com.example.backend.config.ConfigInfo.EBEAN_URL;
import static com.example.backend.config.ConfigInfo.EBEAN_USERNAME;
import io.ebean.EbeanServer;
import io.ebean.EbeanServerFactory;
import io.ebean.config.ServerConfig;
import java.util.Properties;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.stereotype.Component;

@Component
public class ConfigEbeanFactory implements FactoryBean<EbeanServer> {

    @Override
    public EbeanServer getObject() throws Exception {

	ServerConfig cfg = new ServerConfig();
	Properties properties = new Properties();
	properties.put("ebean.db.ddl.generate", EBEAN_GENERATE);
	properties.put("ebean.db.ddl.run", EBEAN_RUN);
	properties.put("datasource.db.username", EBEAN_USERNAME);
	properties.put("datasource.db.password", EBEAN_PASSWORD);
	properties.put("datasource.db.databaseUrl", EBEAN_URL);
	properties.put("datasource.db.databaseDriver", EBEAN_DRIVER);
	properties.put("ebean.search.packages", EBEAN_ENT_PACKAGE);
	cfg.loadFromProperties(properties);
	return EbeanServerFactory.create(cfg);
    }

    @Override
    public Class<?> getObjectType() {
	return EbeanServer.class;
    }

    @Override
    public boolean isSingleton() {
	return true;
    }
}
