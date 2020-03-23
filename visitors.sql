-- Adminer 4.7.6 PostgreSQL dump

DROP TABLE IF EXISTS "visitors";
CREATE TABLE "public"."visitors" (
    "id" integer NOT NULL,
    "visitors_name" character varying,
    "visitors_age" character varying,
    "date_of_visit" date,
    "time_of_visit" time without time zone,
    "name_of_person_who_assisted_the_vistor" character varying,
    "comments" character varying,
    CONSTRAINT "visitors_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


-- 2020-03-23 21:35:57.655754+00
