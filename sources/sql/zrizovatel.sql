--
-- PostgreSQL database dump
--

-- Dumped from database version 15.14 (Homebrew)
-- Dumped by pg_dump version 16.0

-- Started on 2026-03-30 12:04:20 CEST

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
-- TOC entry 3703 (class 0 OID 24889)
-- Dependencies: 216
-- Data for Name: zrizovatel; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.zrizovatel (id, kod, nazev, zkraceny_nazev) FROM stdin;
0	1	Státní správa ve školství (MŠMT)	Státní správa ve školství
1	2	Obec	Obec
2	3	Jiný ústřední orgán státní správy než MŠMT	Jiný ústř.orgán st.správy
3	5	Privátní sektor (akciová společnost, družstvo, spol. s r.o., nadace apod.)	Privátní sektor
4	6	Církev	Církev
5	7	Kraj	Kraj
\.


-- Completed on 2026-03-30 12:04:20 CEST

--
-- PostgreSQL database dump complete
--

