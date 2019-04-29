-- init script create procs
-- Inital script to create stored procedures etc for mysql platform
DROP PROCEDURE IF EXISTS usp_ebean_drop_foreign_keys;

delimiter $$
--
-- PROCEDURE: usp_ebean_drop_foreign_keys TABLE, COLUMN
-- deletes all constraints and foreign keys referring to TABLE.COLUMN
--
CREATE PROCEDURE usp_ebean_drop_foreign_keys(IN p_table_name VARCHAR(255), IN p_column_name VARCHAR(255))
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE c_fk_name CHAR(255);
  DECLARE curs CURSOR FOR SELECT CONSTRAINT_NAME from information_schema.KEY_COLUMN_USAGE
    WHERE TABLE_SCHEMA = DATABASE() and TABLE_NAME = p_table_name and COLUMN_NAME = p_column_name
      AND REFERENCED_TABLE_NAME IS NOT NULL;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  OPEN curs;

  read_loop: LOOP
    FETCH curs INTO c_fk_name;
    IF done THEN
      LEAVE read_loop;
    END IF;
    SET @sql = CONCAT('ALTER TABLE ', p_table_name, ' DROP FOREIGN KEY ', c_fk_name);
    PREPARE stmt FROM @sql;
    EXECUTE stmt;
  END LOOP;

  CLOSE curs;
END
$$

DROP PROCEDURE IF EXISTS usp_ebean_drop_column;

delimiter $$
--
-- PROCEDURE: usp_ebean_drop_column TABLE, COLUMN
-- deletes the column and ensures that all indices and constraints are dropped first
--
CREATE PROCEDURE usp_ebean_drop_column(IN p_table_name VARCHAR(255), IN p_column_name VARCHAR(255))
BEGIN
  CALL usp_ebean_drop_foreign_keys(p_table_name, p_column_name);
  SET @sql = CONCAT('ALTER TABLE ', p_table_name, ' DROP COLUMN ', p_column_name);
  PREPARE stmt FROM @sql;
  EXECUTE stmt;
END
$$
create table actical (
  id                            integer auto_increment not null,
  title                         varchar(255) not null,
  description                   varchar(255) not null,
  status                        varchar(10) not null,
  topic_id                      integer,
  user_info_id                  integer,
  created_time                  datetime(6) not null,
  update_time                   datetime(6) not null,
  constraint ck_actical_status check ( status in ('Processing','Accepted','Rejected','Public')),
  constraint pk_actical primary key (id)
);

create table comment (
  id                            integer auto_increment not null,
  comment                       varchar(255) not null,
  actical_id                    integer,
  user_info_id                  integer,
  created_time                  datetime(6) not null,
  update_time                   datetime(6) not null,
  constraint pk_comment primary key (id)
);

create table faculity (
  id                            integer auto_increment not null,
  name                          varchar(255) not null,
  created_time                  datetime(6) not null,
  update_time                   datetime(6) not null,
  constraint uq_faculity_name unique (name),
  constraint pk_faculity primary key (id)
);

create table topic (
  id                            integer auto_increment not null,
  name                          varchar(255) not null,
  days                          integer not null,
  deadline                      datetime(6) not null,
  created_time                  datetime(6) not null,
  update_time                   datetime(6) not null,
  constraint uq_topic_name unique (name),
  constraint pk_topic primary key (id)
);

create table user_info (
  id                            integer auto_increment not null,
  email                         varchar(255) not null,
  password                      varchar(255) not null,
  full_name                     varchar(255) not null,
  phone                         varchar(255) not null,
  roles                         integer not null,
  faculity_id                   integer,
  created_time                  datetime(6) not null,
  update_time                   datetime(6) not null,
  constraint uq_user_info_email unique (email),
  constraint pk_user_info primary key (id)
);

create index ix_actical_topic_id on actical (topic_id);
alter table actical add constraint fk_actical_topic_id foreign key (topic_id) references topic (id) on delete restrict on update restrict;

create index ix_actical_user_info_id on actical (user_info_id);
alter table actical add constraint fk_actical_user_info_id foreign key (user_info_id) references user_info (id) on delete restrict on update restrict;

create index ix_comment_actical_id on comment (actical_id);
alter table comment add constraint fk_comment_actical_id foreign key (actical_id) references actical (id) on delete restrict on update restrict;

create index ix_comment_user_info_id on comment (user_info_id);
alter table comment add constraint fk_comment_user_info_id foreign key (user_info_id) references user_info (id) on delete restrict on update restrict;

create index ix_user_info_faculity_id on user_info (faculity_id);
alter table user_info add constraint fk_user_info_faculity_id foreign key (faculity_id) references faculity (id) on delete restrict on update restrict;

