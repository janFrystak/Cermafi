--
-- PostgreSQL database dump
--

-- Dumped from database version 15.14 (Homebrew)
-- Dumped by pg_dump version 16.0

-- Started on 2026-03-30 12:03:13 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3702 (class 0 OID 24598)
-- Dependencies: 214
-- Data for Name: neprijeti_duvod; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.neprijeti_duvod (id, duvod) FROM stdin;
2	Pro nesplnění podmínek
3	Pro nedostačující kapacitu
4	Vzdal se přijetí
1	Přijat na vyšší prioritu
\.


-- Completed on 2026-03-30 12:03:14 CEST

--
-- PostgreSQL database dump complete
--

