--
-- PostgreSQL database dump
--

-- Dumped from database version 15.14 (Homebrew)
-- Dumped by pg_dump version 16.0

-- Started on 2026-03-30 11:56:21 CEST

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 40961)
-- Name: admin; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.admin (
    id integer NOT NULL,
    username character varying(100) NOT NULL,
    password_hash character varying(255) NOT NULL,
    permission_level integer DEFAULT 1 NOT NULL
);


ALTER TABLE public.admin OWNER TO admin;

--
-- TOC entry 219 (class 1259 OID 40960)
-- Name: admin_users_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.admin_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_users_id_seq OWNER TO admin;

--
-- TOC entry 3754 (class 0 OID 0)
-- Dependencies: 219
-- Name: admin_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.admin_users_id_seq OWNED BY public.admin.id;


--
-- TOC entry 215 (class 1259 OID 24850)
-- Name: kraj; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.kraj (
    id bigint NOT NULL,
    nazev text,
    nazev_kratky text
);


ALTER TABLE public.kraj OWNER TO admin;

--
-- TOC entry 214 (class 1259 OID 24598)
-- Name: neprijeti_duvod; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.neprijeti_duvod (
    id bigint NOT NULL,
    duvod text
);


ALTER TABLE public.neprijeti_duvod OWNER TO admin;

--
-- TOC entry 223 (class 1259 OID 41224)
-- Name: obor; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.obor (
    id bigint NOT NULL,
    kod text,
    nazev text,
    zkraceny_nazev text
);


ALTER TABLE public.obor OWNER TO admin;

--
-- TOC entry 221 (class 1259 OID 41000)
-- Name: skola; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.skola (
    id bigint NOT NULL,
    red_izo bigint,
    ico bigint,
    zrizovatel smallint,
    uzemi text,
    kraj_id integer,
    okres text,
    orp integer,
    plny_nazev text,
    zkraceny_nazev text,
    ulice text,
    cislo_popisne integer,
    cast_obce text,
    psc integer,
    misto text,
    ruian integer,
    telefon text,
    fax text,
    email_1 text,
    email_2 text,
    web text,
    reditel text,
    izo bigint,
    druh text,
    budova text,
    kapacita bigint,
    datum_zahajeni text
);


ALTER TABLE public.skola OWNER TO admin;

--
-- TOC entry 217 (class 1259 OID 32792)
-- Name: uchazec; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.uchazec (
    id bigint NOT NULL,
    rok bigint,
    kolo bigint,
    m_procentni_skor bigint,
    c_procentni_skor bigint
);


ALTER TABLE public.uchazec OWNER TO admin;

--
-- TOC entry 218 (class 1259 OID 32795)
-- Name: uchazec_volba; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.uchazec_volba (
    uchazec_id bigint,
    priorita text,
    zrizovatel smallint,
    obor_kod text,
    forma text,
    zkraceno smallint,
    prijat smallint,
    duvod_neprijeti_id smallint,
    redizo bigint,
    id bigint NOT NULL
);


ALTER TABLE public.uchazec_volba OWNER TO admin;

--
-- TOC entry 222 (class 1259 OID 41122)
-- Name: uchazec_volba_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.uchazec_volba_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.uchazec_volba_id_seq OWNER TO admin;

--
-- TOC entry 3755 (class 0 OID 0)
-- Dependencies: 222
-- Name: uchazec_volba_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.uchazec_volba_id_seq OWNED BY public.uchazec_volba.id;


--
-- TOC entry 216 (class 1259 OID 24889)
-- Name: zrizovatel; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.zrizovatel (
    id bigint,
    kod bigint NOT NULL,
    nazev text,
    zkraceny_nazev text
);


ALTER TABLE public.zrizovatel OWNER TO admin;

--
-- TOC entry 3567 (class 2604 OID 41262)
-- Name: admin id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.admin ALTER COLUMN id SET DEFAULT nextval('public.admin_users_id_seq'::regclass);


--
-- TOC entry 3566 (class 2604 OID 41263)
-- Name: uchazec_volba id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.uchazec_volba ALTER COLUMN id SET DEFAULT nextval('public.uchazec_volba_id_seq'::regclass);


--
-- TOC entry 3587 (class 2606 OID 40966)
-- Name: admin admin_users_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_users_pkey PRIMARY KEY (id);


--
-- TOC entry 3589 (class 2606 OID 40968)
-- Name: admin admin_users_username_key; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_users_username_key UNIQUE (username);


--
-- TOC entry 3573 (class 2606 OID 41146)
-- Name: kraj kraj_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.kraj
    ADD CONSTRAINT kraj_pkey PRIMARY KEY (id);


--
-- TOC entry 3570 (class 2606 OID 24602)
-- Name: neprijeti_duvod neprijeti_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.neprijeti_duvod
    ADD CONSTRAINT neprijeti_pkey PRIMARY KEY (id);


--
-- TOC entry 3599 (class 2606 OID 41235)
-- Name: obor obor_kod_unique; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.obor
    ADD CONSTRAINT obor_kod_unique UNIQUE (kod);


--
-- TOC entry 3601 (class 2606 OID 41233)
-- Name: obor obor_pkey1; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.obor
    ADD CONSTRAINT obor_pkey1 PRIMARY KEY (id);


--
-- TOC entry 3593 (class 2606 OID 41144)
-- Name: skola skola_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.skola
    ADD CONSTRAINT skola_pkey PRIMARY KEY (id);


--
-- TOC entry 3595 (class 2606 OID 41179)
-- Name: skola skola_red_izo_unique; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.skola
    ADD CONSTRAINT skola_red_izo_unique UNIQUE (red_izo);


--
-- TOC entry 3580 (class 2606 OID 41115)
-- Name: uchazec uchazec_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.uchazec
    ADD CONSTRAINT uchazec_pkey PRIMARY KEY (id);


--
-- TOC entry 3585 (class 2606 OID 41125)
-- Name: uchazec_volba uchazec_volba_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.uchazec_volba
    ADD CONSTRAINT uchazec_volba_pkey PRIMARY KEY (id);


--
-- TOC entry 3576 (class 2606 OID 41106)
-- Name: zrizovatel zrizovatel_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.zrizovatel
    ADD CONSTRAINT zrizovatel_pkey PRIMARY KEY (kod);


--
-- TOC entry 3596 (class 1259 OID 41236)
-- Name: idx_obor_kod; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX idx_obor_kod ON public.obor USING btree (kod);


--
-- TOC entry 3590 (class 1259 OID 41111)
-- Name: idx_skola_red_izo; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX idx_skola_red_izo ON public.skola USING btree (red_izo);


--
-- TOC entry 3577 (class 1259 OID 41113)
-- Name: idx_uchazec_kolo; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX idx_uchazec_kolo ON public.uchazec USING btree (kolo);


--
-- TOC entry 3578 (class 1259 OID 41112)
-- Name: idx_uchazec_rok; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX idx_uchazec_rok ON public.uchazec USING btree (rok);


--
-- TOC entry 3581 (class 1259 OID 41110)
-- Name: idx_uchazec_volba_obor_kod; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX idx_uchazec_volba_obor_kod ON public.uchazec_volba USING btree (obor_kod);


--
-- TOC entry 3582 (class 1259 OID 41109)
-- Name: idx_uchazec_volba_redizo; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX idx_uchazec_volba_redizo ON public.uchazec_volba USING btree (redizo);


--
-- TOC entry 3583 (class 1259 OID 41108)
-- Name: idx_uchazec_volba_uchazec_id; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX idx_uchazec_volba_uchazec_id ON public.uchazec_volba USING btree (uchazec_id);


--
-- TOC entry 3571 (class 1259 OID 24855)
-- Name: ix_kraje_id; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX ix_kraje_id ON public.kraj USING btree (id);


--
-- TOC entry 3597 (class 1259 OID 41229)
-- Name: ix_obor_id; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX ix_obor_id ON public.obor USING btree (id);


--
-- TOC entry 3591 (class 1259 OID 41005)
-- Name: ix_skola_id; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX ix_skola_id ON public.skola USING btree (id);


--
-- TOC entry 3574 (class 1259 OID 24894)
-- Name: ix_zrizovatel_id; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX ix_zrizovatel_id ON public.zrizovatel USING btree (id);


--
-- TOC entry 3606 (class 2606 OID 41257)
-- Name: skola fk_skola_kraj; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.skola
    ADD CONSTRAINT fk_skola_kraj FOREIGN KEY (kraj_id) REFERENCES public.kraj(id);


--
-- TOC entry 3602 (class 2606 OID 41252)
-- Name: uchazec_volba fk_volba_duvod; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.uchazec_volba
    ADD CONSTRAINT fk_volba_duvod FOREIGN KEY (duvod_neprijeti_id) REFERENCES public.neprijeti_duvod(id);


--
-- TOC entry 3603 (class 2606 OID 41247)
-- Name: uchazec_volba fk_volba_obor; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.uchazec_volba
    ADD CONSTRAINT fk_volba_obor FOREIGN KEY (obor_kod) REFERENCES public.obor(kod);


--
-- TOC entry 3604 (class 2606 OID 41242)
-- Name: uchazec_volba fk_volba_skola; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.uchazec_volba
    ADD CONSTRAINT fk_volba_skola FOREIGN KEY (redizo) REFERENCES public.skola(red_izo);


--
-- TOC entry 3605 (class 2606 OID 41237)
-- Name: uchazec_volba fk_volba_uchazec; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.uchazec_volba
    ADD CONSTRAINT fk_volba_uchazec FOREIGN KEY (uchazec_id) REFERENCES public.uchazec(id);


-- Completed on 2026-03-30 11:56:21 CEST

--
-- PostgreSQL database dump complete
--

