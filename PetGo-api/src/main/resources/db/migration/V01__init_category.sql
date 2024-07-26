
CREATE TABLE category
(
  id bigint auto_increment NOT NULL,
  category_name character varying(100) NOT NULL,

  PRIMARY KEY (id),
  UNIQUE KEY uk_local_category_name (category_name)
);
