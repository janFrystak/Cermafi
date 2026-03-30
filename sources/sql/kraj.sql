--
-- PostgreSQL database dump
--

-- Dumped from database version 15.14 (Homebrew)
-- Dumped by pg_dump version 16.0

-- Started on 2026-03-30 12:02:29 CEST

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
-- TOC entry 3703 (class 0 OID 24850)
-- Dependencies: 215
-- Data for Name: kraj; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.kraj (id, nazev, nazev_kratky) FROM stdin;
1	Jihočeský kraj	CZ-JC
2	Jihomoravský kraj	CZ-JM
3	Karlovarský kraj	CZ-KA
4	Královéhradecký kraj	CZ-KR
5	Liberecký kraj	CZ-LI
6	Moravskoslezský kraj	CZ-MS
7	Olomoucký kraj	CZ-OL
8	Pardubický kraj	CZ-PA
9	Plzeňský kraj	CZ-PL
10	Praha	CZ-PR
11	Středočeský kraj	CZ-ST
12	Ústecký kraj	CZ-US
13	Vysočina	CZ-VY
14	Zlínský kraj	CZ-ZL
\.


-- Completed on 2026-03-30 12:02:30 CEST

--
-- PostgreSQL database dump complete
--

