alter table actical drop foreign key fk_actical_topic_id;
drop index ix_actical_topic_id on actical;

alter table actical drop foreign key fk_actical_user_info_id;
drop index ix_actical_user_info_id on actical;

alter table comment drop foreign key fk_comment_actical_id;
drop index ix_comment_actical_id on comment;

alter table comment drop foreign key fk_comment_user_info_id;
drop index ix_comment_user_info_id on comment;

alter table user_info drop foreign key fk_user_info_faculity_id;
drop index ix_user_info_faculity_id on user_info;

drop table if exists actical;

drop table if exists comment;

drop table if exists faculity;

drop table if exists topic;

drop table if exists user_info;

