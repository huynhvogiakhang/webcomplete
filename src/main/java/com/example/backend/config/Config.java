/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.backend.config;

import java.io.File;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import org.apache.commons.configuration.CompositeConfiguration;
import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.HierarchicalINIConfiguration;

/**
 *
 * @author Administrator
 */
public class Config {

    private static Map<String, String> localconfig = new HashMap();
    public static final String CONFIG_HOME = "conf";
    public static final String CONFIG_FILE = "config.ini";

    static CompositeConfiguration config;

    public static String getParam(String section, String name) {
        String key = section + "." + name;

        String value = (String) localconfig.get(key);

        if (value != null) {
            return value;
        }

        value = config.getString(key);
        if (value != null) {
            localconfig.put(key, value);
        }
        return value;
    }
public static void refresh() {
        localconfig = new HashMap();
        loadConfig();
    }

    static {
        loadConfig();
    }
    
    static void loadConfig() {
        //String CONFIG_ITEMS = System.getProperty("cfg_items");
        String HOME_PATH = System.getProperty("apppath");
        String APP_ENV = System.getProperty("appenv");

    //if ((CONFIG_ITEMS == null) || (CONFIG_ITEMS.equals(""))) CONFIG_ITEMS = "500";   
        if (APP_ENV == null) {
            APP_ENV = "";
        }
        if (!"".equals(APP_ENV)) {
            APP_ENV = APP_ENV + ".";
        }

        if (HOME_PATH == null) {
            HOME_PATH = "";
        } else {
            HOME_PATH += File.separator;
        }

    //localconfig = new InstrumentedCache(Integer.valueOf(CONFIG_ITEMS).intValue());
        config = new CompositeConfiguration();

        File configFile = new File(HOME_PATH + "conf" + File.separator + APP_ENV + CONFIG_FILE);
        try {
            config.addConfiguration(new HierarchicalINIConfiguration(configFile));

            Iterator ii = config.getKeys();

            while (ii.hasNext()) {
                String key = (String) ii.next();
                localconfig.put(key, config.getString(key));
            }

        } catch (ConfigurationException e) {
            System.exit(1);
        }
    }
}
