
CREATE TABLE animal
(
  id bigint auto_increment NOT NULL,
  animal_name character varying(100) NOT NULL,
  description character varying(500) NOT NULL,
  image_url character varying(1000) NOT NULL,
  category bigint NOT NULL,
  birth_date date NOT NULL,
  status boolean NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (category) REFERENCES category(id),
);