--
-- PostgreSQL database dump
--

-- Dumped from database version 15.14 (Homebrew)
-- Dumped by pg_dump version 16.0

-- Started on 2026-03-30 15:22:05 CEST

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
-- TOC entry 3706 (class 0 OID 41224)
-- Dependencies: 223
-- Data for Name: obor; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.obor (id, kod, nazev, zkraceny_nazev) FROM stdin;
1	1601M001	Ochrana a tvorba životního prostředí	Ochr.a tvorba živ.prostř.
2	1601M002	Ochrana přírody a prostředí	Ochr.přírody a prostředí
3	1601M004	Ekologie a ochrana krajiny	Ekol.a ochrana krajiny
4	1601M005	Ochrana a obnova životního prostředí	Ochr.a obnova živ.prostř.
5	1601M01	Ekologie a životní prostředí	Ekologie a životní prost.
6	1601N002	Správa ochrany životního prostředí	Správa ochr.živ.prostředí
7	1601N003	Vodní hospodářství a ekologie	Vodní hospod.a ekologie
8	1601N004	Monitorování životního prostředí	Monitor.živ.prostředí
9	1601N01	Správa ochrany životního prostředí	Správa ochr.živ.prostředí
10	1601N02	Vodní hospodářství a ekologie	Vodní hosp.a ekologie
11	1602M001	Průmyslová ekologie	Průmyslová ekologie
12	1602M01	Průmyslová ekologie	Průmyslová ekologie
13	1602N001	Vodní a odpadové hospodářství	Vodní a odpadové hospod.
14	1820M01	Informační technologie	Informační technologie
15	2141M001	Hornictví a hornická geologie - hlubinné dobývání ložisek	Hlubinné dobývání ložisek
16	2141M002	Hornictví a hornická geologie - lomové dobývání ložisek	Lomové dobývání ložisek
17	2141M003	Užitá geologie	Užitá geologie
18	2142L501	Hornictví	Hornictví
19	2142M001	Těžba a zpracování kamene	Těžba a zpracov.kamene
20	2142M01	Geotechnika	Geotechnika
21	2143L001	Hutník operátor	Hutník operátor
22	2143L01	Hutník operátor	Hutník operátor
23	2143L504	Hutnictví	Hutnictví
24	2143L51	Hutník operátor	Hutník operátor
25	2143M001	Hutnictví	Hutnictví
26	2143M002	Řízení a kontrola výroby	Řízení a kontrola výroby
27	2143M01	Hutnictví	Hutnictví
28	2144L001	Technik modelářských zařízení	Technik modelář.zařízení
29	2144L01	Technik modelových zařízení	Technik mod.zařízení
30	2144L51	Technik modelových zařízení	Technik mod.zařízení
31	2144M001	Slévárenství	Slévárenství
32	2144M01	Strojírenská metalurgie	Strojírenská metalurgie
33	2151H002	Horník	Horník
34	2152E001	Hutnické práce	Hutnické práce
35	2152E503	Hutní výroba	Hutní výroba
36	2152H005	Hutník	Hutník
37	2152H01	Hutník	Hutník
38	2153H001	Modelář	Modelář
39	2153H01	Modelář	Modelář
40	2154E002	Formířské práce	Formířské práce
41	2155E503	Slévárenská výroba	Slévárenská výroba
42	2155H001	Slévač	Slévač
43	2155H01	Slévač	Slévač
44	2341M001	Strojírenství	Strojírenství
45	2341M003	Řízení jakosti ve strojírenství	Řízení jakosti ve stroj.
46	2341M004	Strojírenství a administrativní technika s rozšířeným jazykovým vyučováním	Stroj.a admin.technika
47	2341M01	Strojírenství	Strojírenství
48	2341N001	Optimalizace strojírenských technologií	Optimal.stroj.technologií
49	2341N002	Výrobní technologie ve strojírenství	Výr.technol.ve strojíren.
50	2341N003	Strojírenství	Strojírenství
51	2341N004	Strojírenství se zaměřením na počítače a CNC techniku	Str.-poč.a CNC technika
52	2341N005	Jakost a metrologie	Jakost a metrologie
53	2341N006	Stavba obráběcích strojů	Stavba obráběcích strojů
54	2341N01	Strojírenská výroba	Strojírenská výroba
55	2341N02	Strojírenství s využitím CAD a CAM	Strojírenství s CAD,CAM
56	2341N03	Strojírenství	Strojírenství
57	2341N04	Management jakosti ve strojírenské výrobě a službách	Management jakosti
58	2341N05	Jakost a metrologie	Jakost a metrologie
59	2341N06	Strojírenská výroba - počítačová podpora konstruování a programování NC strojů	Strojír.-PC konstr.
60	2341N07	Řízení kvality ve strojírenské výrobě a službách	Říz.kval.ve stroj.v.a sl.
61	2341N08	Strojírenství s využitím CAD/CAM technologií	Stroj.s CAD/CAM technol.
62	2343L008	Mechanik přípravář pro kovovýrobu	Mechanik přípravář
63	2343L506	Provozní technika	Provozní technika
64	2343L51	Provozní technika	Provozní technika
65	2344L001	Mechanik strojů a zařízení	Mechanik strojů a zaříz.
66	2344L01	Mechanik strojů a zařízení	Mechanik strojů
67	2344L51	Mechanik strojů a zařízení	Mechanik strojů a zaříz.
68	2345L001	Mechanik seřizovač	Mechanik seřizovač
69	2345L003	Mechanik seřizovač - programování a obsluha technologických pracovišť	Mech.seř.-progr.,obsluha
70	2345L004	Mechanik seřizovač - mechatronik	Mech.seř.-mechatronik
71	2345L005	Mechanik číslicově řízených strojů	Mech.číslicově říz.strojů
72	2345L009	Letecký mechanik	Letecký mechanik
73	2345L01	Mechanik seřizovač	Mechanik seřizovač
74	2345L011	Mechanik - operátor sklářských strojů	Mech.-oper.sklářsk.strojů
75	2345L02	Letecký mechanik	Letecký mechanik
76	2345L51	Mechanik seřizovač	Mechanik seřizovač
77	2345M003	Strojník požární techniky	Strojník požární techniky
78	2345M004	Silniční doprava	Silniční doprava
79	2345M005	Silniční doprava - provoz a údržba vozidel	Provoz a údržba vozidel
80	2345M006	Silniční doprava - diagnostika motorových vozidel	Diagnostika mot.vozidel
81	2345M01	Dopravní prostředky	Dopravní prostředky
82	2345N001	Automobilová diagnostika a servis	Automobil.diagn.a servis
83	2345N002	Diagnostika silničních vozidel	Diagnostika sil.vozidel
84	2345N003	Technická diagnostika a optimalizace renovačních metod	Tech.diag.a opt.ren.met.
85	2345N004	Diagnostika a servis silničních vozidel	Diagn.,servis sil.vozidel
86	2345N005	Autoelektronika a opravy silničních motorových vozidel	Autoelektronika,op.mot.v.
87	2345N01	Automobilová diagnostika a servis	Automob.diagn.a servis
88	2345N02	Diagnostika silničních vozidel	Diagnostika vozidel
89	2345N03	Diagnostika a servis silničních vozidel	Diag.,servis sil.vozidel
90	2345N04	Osvědčující technik traťové údržby	Osvědč.tech.trať.údržby
91	2351E004	Zámečnické práce a údržba	Zámeč.práce a údržba
92	2351E005	Zámečnické práce ve stavebnictví	Zámeč.práce ve staveb.
93	2351E01	Strojírenské práce	Strojírenské práce
94	2351E501	Strojírenská výroba	Strojírenská výroba
95	2351H001	Zámečník	Zámečník
96	2351H003	Strojní mechanik - stroje a zařízení	Stroj.mech.-stroje a zař.
97	2351H004	Strojní mechanik - ocelové konstrukce	Stroj.mech.-ocel.konst.
98	2351H007	Mechanik opravář - stroje a zařízení	Mech opr.-stroje,zařízení
99	2351H01	Strojní mechanik	Strojní mechanik
100	2351H510	Strojírenská výroba	Strojírenská výroba
101	2352H001	Nástrojař	Nástrojař
102	2352H01	Nástrojař	Nástrojař
103	2353H001	Rytec kovů	Rytec kovů
104	2354E001	Výroba kovové bižuterie	Výroba kovové bižuterie
105	2355H002	Klempíř - strojírenská výroba	Klempíř-strojír.výroba
106	2355H01	Klempíř	Klempíř
107	2355H02	Karosář	Karosář
108	2356E004	Obráběcí práce	Obráběcí práce
109	2356E501	Obrábění kovů	Obrábění kovů
110	2356H001	Obráběč kovů	Obráběč kovů
111	2356H002	Obráběč kovů - univerzální obrábění	Obráběč kovů-univ.obráb.
112	2356H003	Obráběč kovů - soustružení	Obráběč kovů-soustružení
113	2356H004	Obráběč kovů - frézování	Obráběč kovů-frézování
114	2356H005	Obráběč kovů - broušení	Obráběč kovů-broušení
115	2356H006	Obráběč kovů - obsluha číslicově řízených strojů	Obr.kovů-obsl.čís.říz.st.
116	2356H01	Obráběč kovů	Obráběč kovů
117	2356H507	Obrábění kovů	Obrábění kovů
118	2357E002	Kovářské práce	Kovářské práce
119	2357H001	Strojní kovář	Strojní kovář
120	2357H01	Kovář	Kovář
121	2361H001	Lakýrník	Lakýrník
122	2361H01	Autolakýrník	Autolakýrník
123	2362H001	Optik	Optik
124	2362H006	Jemný mechanik	Jemný mechanik
125	2362H01	Jemný mechanik	Jemný mechanik
126	2362L01	Optik	Optik
127	2362L51	Optik	Optik
128	2363H001	Hodinář	Hodinář
129	2364E002	Strojně montážní práce - montérské práce	Montérské práce
130	2364E003	Strojně montážní práce - automontážní práce	Automontážní práce
131	2365H001	Mechanik silničních strojů	Mechanik silnič.strojů
132	2365H004	Strojník - duté sklo	Strojník-duté sklo
133	2365H009	Strojník - lodní doprava	Strojník-lodní doprava
134	2365H01	Strojník	Strojník
135	2365H02	Lodník	Lodník
136	2365H020	Strojník	Strojník
137	2365H03	Strojník silničních strojů	Strojník silnič.strojů
138	2366H001	Mechanik opravář	Mechanik opravář
139	2367H004	Seřizovač textilních strojů	Seřizovač textil.strojů
140	2368E501	Technické služby v autoservisu	Techn.služ.v autoservisu
141	2368H001	Automechanik	Automechanik
142	2368H003	Mechanik opravář - silniční motorová vozidla	Mech.opr.-sil.motor.voz.
143	2368H01	Mechanik opravář motorových vozidel	Mechanik opravář.mot.voz.
144	2368H506	Technické služby v autoservisu	Techn.služ.v autoservisu
145	2369H001	Puškař	Puškař
146	2369H01	Puškař	Puškař
147	2369L001	Technik - puškař	Technik-puškař
148	2369L01	Technik - puškař	Technik - puškař
149	2369L51	Technik - puškař	Technik - puškař
150	2371E001	Nožířské práce	Nožířské práce
151	2631N002	Výpočetní technika	Výpočetní technika
152	2631N004	Automatizace a informatika	Automatizace a inform.
153	2631N005	Výpočetní technika a základy programování	Výp.techn.a zákl.program.
154	2631N006	Počítačová podpora v řízení podniku	Poč.podpora v říz.podniku
155	2631N007	Aplikace výpočetní techniky	Aplikace výp.techniky
156	2631N011	Výpočetní systémy	Výpočetní systémy
157	2631N012	Systémy informační	Systémy informační
158	2631N013	Užití počítačů	Užití počítačů
159	2631N014	Počítačová grafika v elektrotechnice	Počít.graf.v elektrotech.
160	2631N015	Počítačové systémy	Počítačové systémy
161	2631N016	Počítačové systémy elektronické	Počítač.systémy elektron.
162	2641L01	Mechanik elektrotechnik	Mechanik elektrotechnik
163	2641L501	Elektrotechnika	Elektrotechnika
164	2641L506	Provozní elektrotechnika	Provozní elektrotechnika
165	2641L51	Mechanik elektrotechnik	Mechanik elektrotechnik
166	2641L52	Provozní elektrotechnika	Provozní elektrotechnika
167	2641M002	Elektrotechnika	Elektrotechnika
168	2641M01	Elektrotechnika	Elektrotechnika
169	2641N01	Elektrotechnika - mechatronické systémy	Elektrotech.-mechatr.sys.
170	2641N02	Silnoproudá elektrotechnika	Silnopr.elektrotechnika
171	2641N03	Automatizace a informatika	Automatizace,informatika
172	2641N04	Výroba, přenos a užití elektrické energie	Výroba,přenos el.energie
173	2641N05	Automatizační technika	Automatizační technika
174	2641N06	Elektrotechnika v inteligentních stavbách	Elektrot.v intelig.stavb.
175	2641N07	Elektrotechnika - elektromechanické systémy	Elektro.-elektrom.syst.
176	2641N08	Průmyslová elektrotechnika	Průmysl.elektrotechnika
177	2641N09	Energetika	Energetika
178	2641N10	Aplikovaná elektrotechnika	Aplik.elektrotechnika
179	2641N11	Internet věcí	Internet věcí
180	2641N12	Elektrodiagnostika a diagnostika silničních vozidel	Elektrodiag.,diag.vozidel
181	2642L001	Mechanik silnoproudých zařízení	Mechanik silnoproud.zař.
182	2642M001	Zařízení silnoproudé elektrotechniky	Zaříz.silnopr.eltechniky
183	2642N001	Silnoproudá elektrotechnika	Silnopr.elektrotechnika
184	2643L001	Mechanik elektronik	Mechanik elektronik
185	2643L006	Mechanik zabezpečovacích a sdělovacích systémů	Mech.zabez.a sděl.systémů
186	2643M004	Slaboproudá elektrotechnika	Slaboproud.elektrotech.
187	2643N002	Slaboproudá elektrotechnika	Slaboproud.elektrotech.
188	2643N003	Lékařská elektronika	Lékařská elektronika
189	2644M001	Automatizační technika	Automatizační technika
190	2644N001	Automatizační technika	Automatizační technika
191	2644N003	Automatizované systémy	Automatizované systémy
192	2645L005	Telekomunikační mechanik	Telekomunikační mechanik
193	2645L503	Zařízení sdělovací techniky	Zaříz.sdělovací techniky
194	2645L51	Telekomunikace	Telekomunikace
195	2645M004	Digitální telekomunikační technika	Digitál.telekom.technika
196	2645M01	Telekomunikace	Telekomunikace
197	2646L505	Autoelektronika	Autoelektronika
198	2646M001	Obrazová a zvuková technika - technické zaměření	Obr.,zv.techn.-techn.zam.
260	2841J001	Chemicko-farmaceutická výroba	Chemicko-farmac.výroba
199	2646M002	Obrazová a zvuková technika - technologickoorganizační zaměření	Obr.,zv.tech.-technolorg.
200	2646M003	Zabezpečovací a sdělovací technika v dopravě	Zabez.,sděl.tech.-doprava
201	2647M001	Výpočetní technika	Výpočetní technika
202	2647M002	Elektronické počítačové systémy	Elektron.počítač.systémy
203	2647M003	Informační technologie - aplikace osobních počítačů	Aplikace osob.počítačů
204	2647M004	Správce informačních systémů	Správce inform.systémů
205	2647M006	Počítačové elektronické systémy	Počítač.elektron.systémy
206	2647N01	Informační technologie, zaměření:výpočetní technika a informatika	Informační technologie
207	2647N02	Aplikace výpočetní techniky	Aplikace výpočet.techniky
208	2647N03	Informační technologie ve strojírenství	IT ve strojírenství
209	2647N04	Informační technologie	Informační technologie
210	2647N05	Informační a komunikační technologie	Info.a komunik.technolog.
211	2647N06	Přenos a zpracování informací	Přenos a zprac.informací
212	2647N07	Počítačová podpora v řízení podniku	Poč.podpora v říz.podniku
213	2647N08	Počítačová grafika v technických oborech	PC grafika v techn.ob.
214	2647N09	Přenosové a síťové technologie	Přenosové a síťové techn.
215	2647N10	Výpočetní systémy	Výpočetní systémy
216	2647N11	Informační a komunikační systémy	Inf.a komunik.systémy
217	2647N12	Výpočetní technika a programování	Výp.technika a programov.
218	2647N13	Výpočetní technika	Výpočetní technika
219	2647N14	Informační technologie v podnikové praxi	Inf. t. v podnik. praxi
220	2647N15	Počítačové systémy	Počítačové systémy
221	2647N16	Systémový administrátor IT	Systém.administrátor IT
222	2647N17	Zabezpečovací technika a bezpečnostní technologie	Zabezp.tech.,bezp.techn.
223	2647N18	Multimediální internetové služby	Multimed.internet.služby
224	2647N19	Správce počítačových sítí pro malé a střední organizace	Správce počítač.sítí
225	2647N20	Interaktivní grafika a vizualizace	Interaktiv.graf.,vizual.
226	2647N21	ICTpodpora firemních procesů	ICT podpora firem.procesů
227	2647N22	Informatika ve firemní praxi	Informat.ve firem.praxi
228	2647N23	Audiovizuální technika a distribuce signálů	Audioviz.tech.,distr.sig.
229	2647N24	Programování	Programování
230	2647N25	Technické a průmyslové aplikace	Tech. a průmysl.aplikace
231	2647N26	Kybernetická bezpečnost	Kybernetická bezpečnost
232	2647N27	Technik kybernetické bezpečnosti	Technik kyber.bezpečnosti
233	2647N28	Síťové a zabezpečovací technologie	Síť.,zabezpeč.technologie
234	2647N29	Kybernetická bezpečnost a umělá inteligence	Kyber.bezp., uměla intel.
235	2647N30	Aplikovaná bezpečnost ve zdravotnictví	Aplik. bezpeč. ve zdrav.
236	2647N31	Kybernetická bezpečnost pro kritickou infrastrukturu	Kyber.bezp.krit.infrastr.
237	2651E001	Elektrotechnické a strojně montážní práce	Eltechn.,str.montáž.práce
238	2651E01	Elektrotechnické a strojně montážní práce	Elektrot.stroj.mont.práce
239	2651E502	Elektrotechnická výroba	Elektrotechnická výroba
240	2651H001	Elektrikář	Elektrikář
241	2651H002	Elektrikář - slaboproud	Elektrikář-slaboproud
242	2651H003	Elektrikář - silnoproud	Elektrikář-silnoproud
243	2651H01	Elektrikář	Elektrikář
244	2651H02	Elektrikář - silnoproud	Elektrikář-silnoproud
245	2651H504	Elektrotechnická výroba	Elektrotechnická výroba
246	2652H002	Elektromechanik - stroje a zařízení	Elmech.-stroje a zařízení
247	2652H004	Mechanik elektrotechnických zařízení	Mechanik eltechn.zaříz.
248	2652H01	Elektromechanik pro zařízení a přístroje	Elektromechanik
249	2653H001	Mechanik elektronických zařízení	Mech.elektron.zařízení
250	2656H001	Elektromechanik - sdělovací a zabezpečovací technika	Elmech.-sděl.a zab.tech.
251	2657H001	Autoelektrikář	Autoelektrikář
252	2657H01	Autoelektrikář	Autoelektrikář
253	2658H001	Spojový mechanik - spojovací zařízení	Spoj.mech.-spoj.zařízení
254	2659H001	Spojový mechanik	Spojový mechanik
255	2659H002	Spojový mechanik - sdělovací sítě	Spoj.mech.-sdělovací sítě
256	2659H01	Spojový mechanik	Spojový mechanik
257	2832N001	Sklářství	Sklářství
258	2832N01	Řízení sklářské a keramické výroby	Řízení skl.a keram.výroby
259	2832N02	Řízení výroby zpracování kamene	Říz.výroby zprac.kamene
261	2841M007	Výroba celulózy a papíru	Výroba celulózy a papíru
262	2841M008	Chemicko-farmaceutická výroba	Chemicko-farmac.výroba
263	2841M01	Technologie celulózy a papíru	Technol.cel.a papíru
264	2842L001	Operátor gumárenské a plastikářské výroby	Oper.gum.,plastik.výroby
265	2842L01	Chemik operátor	Chemik operátor
266	2842L012	Chemik operátor - průmyslová chemie	Operátor-průmysl.chemie
267	2842L501	Provozní chemie	Provozní chemie
268	2842L502	Provozní chemie - chemicko-technologické procesy	Chem.-technolog.procesy
269	2842L503	Provozní chemie - výroba celulózy a papíru	Výroba celulózy a papíru
270	2842L505	Provozní chemie - zpracování kaučuku a plastů	Zprac.kaučuku a plastů
271	2842L506	Provozní chemie - analytická chemie	Analytická chemie
272	2842L51	Chemik operátor	Chemik operátor
273	2844M001	Aplikovaná chemie	Aplikovaná chemie
274	2844M002	Aplikovaná chemie - analytická chemie	Analytická chemie
275	2844M003	Aplikovaná chemie - chemická technologie	Chemická technologie
276	2844M004	Aplikovaná chemie - farmaceutické substance	Farmaceutické substance
277	2844M005	Aplikovaná chemie - ochrana životního prostředí	Ochrana život.prostředí
278	2844M006	Aplikovaná chemie - výpočetní technika v chemii	Výp.technika v chemii
279	2844M007	Aplikovaná chemie - podnikový management	Podnikový management
280	2844M01	Aplikovaná chemie	Aplikovaná chemie
281	2845L501	Sklářský průmysl	Sklářský průmysl
282	2845L51	Sklářský a keramický průmysl	Sklář.,keramický průmysl
283	2845M001	Technologie skla	Technologie skla
284	2846L002	Technologie výroby keramiky a porcelánu	Technol.výr.keram.a porc.
285	2846L501	Keramický průmysl	Keramický průmysl
286	2846M001	Technologie keramiky	Technologie keramiky
287	2846M01	Technologie silikátů	Technologie silikátů
288	2851H001	Chemik - laborant	Chemik-laborant
289	2852E01	Chemické práce	Chemické práce
290	2852E501	Chemická výroba	Chemická výroba
291	2852H007	Chemik	Chemik
292	2852H01	Chemik	Chemik
293	2853H001	Operátor farmaceutické výroby	Operát.farmaceut.výroby
294	2853H002	Laborant pro farmaceutickou výrobu	Labor.farmaceut.výroby
295	2855E501	Gumárenská a plastikářská výroba	Gumáren.,plastik.výroba
296	2856E01	Papírenská výroba	Papírenská výroba
297	2856E503	Zpracování papíru	Zpracování papíru
298	2857E001	Keramické práce	Keramické práce
299	2857E01	Keramická výroba	Keramická výroba
300	2857E502	Keramická výroba	Keramická výroba
301	2857H007	Keramik	Keramik
302	2857H01	Výrobce a dekoratér keramiky	Výrobce a dekor.keramiky
303	2858E001	Výroba lisovaného skla	Výroba lisovaného skla
304	2858E002	Výroba dutého skla	Výroba dutého skla
305	2858E003	Zušlechťování skla	Zušlechťování skla
306	2858E01	Sklářská výroba	Sklářská výroba
307	2858H001	Sklář - duté a lisované sklo	Sklář-dut.a lisov.sklo
308	2858H005	Sklář	Sklář
309	2858H01	Sklář - výrobce a zušlechťovatel skla	Sklář-výrobce a zušlechť.
310	2861H004	Brusič technického a šperkového kamene	Brusič tech.,šperk.kamene
311	2861H005	Brusič skla	Brusič skla
312	2862H001	Malíř skla a keramiky - malba skla	Malba skla
313	2862H003	Malíř skla a keramiky	Malíř skla a keramiky
314	2863E01	Bižuterní výroba	Bižuterní výroba
315	2863E501	Bižuterní výroba	Bižuterní výroba
316	2863H001	Výrobce bižuterie - skleněná bižuterie	Skleněná bižuterie
317	2863H002	Výrobce bižuterie - kovová bižuterie	Kovová bižuterie
318	2863H01	Výrobce bižuterie a dekorativních předmětů	Výrobce bižutérie
319	2864E001	Práce při výrobě bižuterie a ozdobných předmětů - výroba bižuterie	Výroba bižuterie
320	2864E002	Práce při výrobě bižuterie a ozdobných předmětů - výroba ozdobných předmětů	Výroba ozdob.předmětů
321	2864H003	Výrobce ozdobných předmětů	Výrobce ozdob.předmětů
322	2864H004	Výrobce vánočních ozdob	Výrobce vánočních ozdob
323	2931N001	Technologie potravinářských výrob	Technol.potrav.výrob
324	2931N002	Technologie a hygiena potravin	Techn.a hygiena potravin
325	2931N003	Zpracování mléka	Zpracování mléka
326	2931N004	Analýza potravin	Analýza potravin
327	2941L501	Potravinářská technologie	Potravinářská technologie
328	2941L502	Potravinářský průmysl	Potravinářský průmysl
329	2941L51	Technologie potravin	Technologie potravin
330	2941M001	Technologie potravin	Technologie potravin
331	2941M01	Technologie potravin	Technologie potravin
332	2941N01	Potravinářská technologie a biotechnologie	Potr.technolog.a biotech.
333	2941N02	Analýza potravin	Analýza potravin
334	2941N03	Technologie a hygiena potravin	Techn.a hygiena potravin
335	2941N04	Zpracování mléka	Zpracování mléka
336	2942M001	Analýza potravin	Analýza potravin
337	2942M01	Analýza potravin	Analýza potravin
338	2943L502	Potravinářská technologie - výroba cukru a cukrovinek	Výroba cukru,cukrovinek
339	2943L503	Potravinářská technologie - průmyslová výroba krmiv a mlynářství	Prům.výroba krmiv,mlyn.
340	2943L504	Potravinářská technologie - zpracování mouky	Zpracování mouky
341	2943M001	Technologie potravin - výroba cukru a cukrovinek	Výroba cukru,cukrovinek
342	2943M002	Technologie potravin - mlynářství a výroba krmiv	Mlynářství a výroba krmiv
343	2943M003	Technologie potravin - zpracování mouky	Zpracování mouky
344	2944L502	Potravinářská technologie - zpracování masa	Zpracování masa
345	2944M001	Technologie potravin - zpracování masa	Zpracování masa
346	2945L501	Potravinářská technologie - kvasná technologie	Kvasná technologie
347	2945M001	Technologie potravin - kvasná technologie	Kvasná technologie
348	2945M002	Technologie potravin - výroba nápojů	Výroba nápojů
349	2946L502	Potravinářská technologie - zpracování mléka	Zpracování mléka
350	2946M001	Technologie potravin - zpracování mléka	Zpracování mléka
351	2947M001	Technologie potravin - technologie tuků	Technologie tuků
352	2948L501	Potravinářská technologie - konzervárenství	Konzervárenství
353	2948M001	Technologie potravin - konzervace potravin	Konzervace potravin
354	2951E01	Potravinářská výroba	Potravinářská výroba
355	2951E02	Potravinářské práce	Potravinářské práce
356	2951E501	Potravinářská výroba	Potravinářská výroba
357	2951H01	Výrobce potravin	Výrobce potravin
358	2952H001	Mlynář	Mlynář
359	2953E002	Pekařské práce	Pekařské práce
360	2953H001	Pekař	Pekař
361	2953H01	Pekař	Pekař
362	2954E002	Pečivářské a cukrovinkářské práce	Pečivář.,cukrovin.práce
363	2954E003	Cukrářské práce	Cukrářské práce
364	2954H001	Cukrář	Cukrář
365	2954H002	Cukrář - výroba	Cukrář-výroba
366	2954H003	Cukrovinkář - pečivář - výroba cukrovinek	Výroba cukrovinek
367	2954H004	Cukrovinkář - pečivář - výroba trvanlivého pečiva	Výroba trvanlivého pečiva
368	2954H01	Cukrář	Cukrář
369	2955E001	Mlékařské práce	Mlékařské práce
370	2955H001	Mlékař	Mlékař
371	2955H002	Mlékař - výroba	Mlékař-výroba
372	2956E002	Řeznické a uzenářské práce	Řeznické,uzenářské práce
373	2956H001	Řezník - uzenář	Řezník-uzenář
374	2956H002	Řezník - uzenář - výroba	Řezník-uzenář-výroba
375	2956H003	Řezník - uzenář - prodej	Řezník-uzenář-prodej
376	2956H01	Řezník - uzenář	Řezník-uzenář
377	2957H002	Sladovník - pivovarník	Sladovník-pivovarník
378	2958E001	Konzervárenské práce	Konzervárenské práce
379	2958H001	Konzervář	Konzervář
380	3131N001	Textilní technologické procesy	Textil.technolog.procesy
381	3141J001	Textilní výroba a podnikatelství	Text.výr.a podnikatelství
382	3141L008	Operátor textilní výroby	Operátor textilní výroby
383	3141L503	Textilní průmysl	Textilní průmysl
384	3141L504	Textilní průmysl - textilní technologie	Textilní technologie
385	3141L505	Textilní výroba a podnikatelství	Text.výr.a podnikatelství
386	3141L51	Textilnictví	Textilnictví
387	3141M003	Modelování pletenin	Modelování pletenin
388	3141M004	Textilní výroba a podnikatelství	Text.výr.a podnikatelství
659	3941M003	Mechatronika	Mechatronika
389	3141M007	Textilní technologie - pletařství	Text.technol.-pletařství
390	3141M01	Textilnictví	Textilnictví
391	3141N01	Textilnictví a oděvnictví	Textilnictví a oděvnictví
392	3142L502	Textilní průmysl - zušlechťování textilií	Zušlechťování textilií
393	3142M001	Zušlechťování textilií	Zušlechťování textilií
394	3143J001	Oděvnictví	Oděvnictví
395	3143L003	Operátor oděvní výroby	Operátor oděvní výroby
396	3143L004	Operátor oděvní výroby - oděvní výroba	Operátor-oděvní výroba
397	3143L006	Operátor oděvní výroby - obchodní činnost	Operátor-obchod.činnost
398	3143L01	Oděvní technik	Oděvní technik
399	3143L501	Oděvnictví	Oděvnictví
400	3143L503	Krejčí - podnikatel	Krejčí-podnikatel
401	3143L51	Oděvnictví	Oděvnictví
402	3143M001	Oděvnictví	Oděvnictví
403	3143M002	Oděvnictví - technologie oděvů	Oděvnictví-technol.oděvů
404	3143M003	Oděvnictví - konstrukce oděvů	Oděvnictví-konstr.od.
405	3143M006	Krejčová - podnikatelka	Krejčová-podnikatelka
406	3143M01	Oděvnictví	Oděvnictví
407	3151E001	Přádelnické práce	Přádelnické práce
408	3152H003	Plsťař	Plsťař
409	3153E003	Tkalcovské práce	Tkalcovské práce
410	3154E001	Pletařské práce	Pletařské práce
411	3154H001	Pletař	Pletař
412	3157E01	Textilní a oděvní výroba	Textilní a oděvní výroba
413	3157E501	Textilní výroba	Textilní výroba
414	3157H001	Pracovník v textilním a oděvním průmyslu	Pracovník-text.,oděv.prům
415	3157H01	Výrobce textilií	Výrobce textilií
416	3158H001	Krejčí	Krejčí
417	3158H01	Krejčí	Krejčí
418	3159E001	Šití oděvů	Šití oděvů
419	3159E002	Šití prádla	Šití prádla
420	3159E01	Šití oděvů	Šití oděvů
421	3159E02	Šití prádla	Šití prádla
422	3159E503	Výroba konfekce	Výroba konfekce
423	3159H501	Výroba konfekce	Výroba konfekce
424	3162H001	Kloboučník	Kloboučník
425	3162H01	Výrobce pokrývek hlavy	Výrobce pokrývek hlavy
426	3231N001	Obuvnická technologie	Obuvnická technologie
427	3241E01	Kožedělná výroba	Kožedělná výroba
428	3241E501	Výroba usní	Výroba usní
429	3241M002	Zpracování usní, plastů a pryže	Zprac.usní,plastů,pryže
430	3241M01	Zpracování usní, plastů a pryže	Zprac.usní,plastů,pryže
431	3242L001	Operátor kožedělné výroby	Operátor kožedělné výroby
432	3242L502	Kožedělná výroba	Kožedělná výroba
433	3242M001	Výroba obuvi a galanterního zboží - výroba galanterního zboží	Výroba galanterního zboží
434	3243L001	Operátor kožešnické výroby	Operátor kožešn.výroby
435	3243L502	Kožešnická konfekce	Kožešnická konfekce
436	3244M004	Výroba obuvi a galanterního zboží - administrativa ve výrobě obuvi a gal. zboží	Admin.-výr.obuvi,gal.zb.
437	3244M005	Technické a informační služby	Techn.a informační služby
438	3244M006	Výroba obuvi a galanterního zboží - výroba obuvi	Výroba obuvi
439	3252E001	Brašnářské a sedlářské práce	Brašnář.,sedlářské práce
440	3252H001	Brašnář	Brašnář
441	3252H01	Výrobce kožedělného zboží	Výrobce kožedělného zboží
442	3253H001	Kožešník	Kožešník
443	3254E001	Obuvnické práce	Obuvnické práce
444	3254H006	Obuvník	Obuvník
445	3254H01	Výrobce obuvi	Výrobce obuvi
446	3255H001	Rukavičkář	Rukavičkář
447	3256H001	Sedlář	Sedlář
448	3258E501	Výroba obuvi	Výroba obuvi
449	3331N001	Tvorba nábytku a dřevěné konstrukce	Tvorba náb.,dřev.konstr.
450	3331N01	Tvorba nábytku a dřevěné konstrukce	Tvorba nábytku a dřev.k.
451	3341L006	Operátor dřevařské a nábytkářské výroby	Oper.dřevař.a nábyt.výr.
452	3341L01	Operátor dřevařské a nábytkářské výroby	Operátor dřev.,nábyt.výr.
453	3341M001	Dřevařství	Dřevařství
454	3341M002	Dřevěné konstrukce	Dřevěné konstrukce
455	3342L502	Dřevařská a nábytkářská výroba	Dřevař.a nábytkář.výroba
456	3342L51	Nábytkářská a dřevařská výroba	Nábytkář.,dřev.výroba
457	3342M001	Nábytkářství	Nábytkářství
458	3342M002	Čalounictví	Čalounictví
459	3342M003	Nábytkářská a dřevařská výroba	Nábytkář.a dřevař.výroba
460	3342M01	Nábytkářská a dřevařská výroba	Nábyt.a dřev.výroba
461	3343L501	Výroba hudebních nástrojů	Výroba hudebních nástrojů
462	3343M001	Výroba hudebních nástrojů	Výroba hudebních nástrojů
463	3343M002	Výroba hudebních nástrojů - výroba hudebních nástrojů	Výroba hudebních nástrojů
464	3343M003	Výroba hudebních nástrojů - akustika a zvuková technika	Akustika a zvuk.technika
465	3343M004	Výroba hudebních nástrojů - management prodeje hudebních nástrojů	Manag.prodeje hud.nástr.
466	3343M01	Výroba hudebních nástrojů	Výroba hudeb.nástrojů
467	3352E001	Kartáčnické a košíkářské práce	Kartáč.a košíkář.práce
468	3353E503	Košíkářská výroba	Košíkářská výroba
469	3354H001	Mechanik hudebních nástrojů - akordeony a foukací harmoniky	Mechanik-akordeony
470	3354H002	Mechanik hudebních nástrojů - klávesové nástroje	Mechanik-kláves.nástroje
471	3354H003	Mechanik hudebních nástrojů - strunné nástroje	Mechanik-strunné nástroje
472	3354H004	Mechanik hudebních nástrojů - varhany	Mechanik-varhany
473	3354H005	Mechanik dechových a bicích hudebních nástrojů	Mechanik-dech.,bicí nást.
474	3354H01	Mechanik hudebních nástrojů	Mechanik hudeb. nástrojů
475	3354H02	Mechanik dechových a bicích hudebních nástrojů	Mechanik dech.,bic.h.nás.
476	3355H001	Rámař - pozlacovač	Rámař-pozlacovač
477	3356E001	Truhlářské práce	Truhlářské práce
478	3356E004	Tesařské a truhlářské práce - truhlářské práce ve stavebnictví	Truhlář.práce ve staveb.
479	3356E01	Truhlářská a čalounická výroba	Truh.,čalounická výroba
480	3356H001	Truhlář	Truhlář
481	3356H002	Truhlář - výroba nábytku	Truhlář-výroba nábytku
482	3356H003	Truhlář - dřevěné konstrukce	Truhlář-dřev.konstrukce
483	3356H01	Truhlář	Truhlář
484	3357E001	Dřevařské práce	Dřevařské práce
485	3357E01	Dřevařská výroba	Dřevařská výroba
486	3357E502	Zpracování dřeva	Zpracování dřeva
487	3357H001	Výrobce sportovních potřeb	Výrobce sport.potřeb
488	3357H502	Zpracování dřeva	Zpracování dřeva
489	3358E01	Zpracovatel přírodních pletiv	Zprac.přírodních pletiv
490	3358H501	Zpracovatel přírodních pletiv	Zpracovatel přírod.pletiv
491	3359E001	Čalounické práce	Čalounické práce
492	3359E504	Čalounická výroba	Čalounická výroba
493	3359H001	Čalouník	Čalouník
494	3359H01	Čalouník	Čalouník
495	3359H502	Čalounická výroba	Čalounická výroba
496	3441L501	Polygrafický průmysl	Polygrafický průmysl
497	3441L51	Polygrafický průmysl	Polygrafický průmysl
498	3441M001	Polygrafie	Polygrafie
499	3441M002	Počítačová grafika	Počítačová grafika
500	3441M01	Polygrafie	Polygrafie
501	3442M001	Obalová technika	Obalová technika
502	3442M01	Obalová technika	Obalová technika
503	3451H001	Sazeč	Sazeč
504	3452H001	Tiskař na polygrafických strojích	Tiskař-polygrafické str.
505	3452H01	Tiskař na polygrafických strojích	Tiskář,polygr.stroje
506	3452L001	Tiskař na polygrafických strojích	Tiskař-polygrafické str.
507	3452L01	Tiskař na polygrafických strojích	Tiskař na polygr.strojích
508	3453H001	Reprodukční grafik	Reprodukční grafik
509	3453H01	Reprodukční grafik	Reprodukční grafik
510	3453L002	Reprodukční grafik pro média	Reprodukční grafik-média
511	3453L01	Reprodukční grafik pro média	Reprod.grafik pro média
512	3454E501	Polygrafická výroba	Polygrafická výroba
513	3456H001	Fotograf	Fotograf
514	3456L01	Fotograf	Fotograf
515	3456L51	Fotograf	Fotograf
516	3457E001	Knihařské práce	Knihařské práce
517	3457E01	Knihařské práce	Knihařské práce
518	3457H001	Knihař	Knihař
519	3457H01	Knihař	Knihař
520	3457L001	Technik dokončovacího zpracování tiskovin	Technik dok.zpr.tiskovin
521	3457L01	Technik dokončovacího zpracování tiskovin	Technik dok.zprac.tiskov.
522	3641M001	Pozemní stavitelství	Pozemní stavitelství
523	3641N001	Stavební obnova památek	Stavební obnova památek
524	3641N002	Realizace pozemních staveb	Realizace pozem.staveb
525	3641N003	Stavebnictví	Stavebnictví
526	3641N005	Stavby pozemní	Stavby pozemní
527	3641N01	Obnova stavebních památek	Obnova staveb.památek
528	3641N02	Pozemní stavby	Pozemní stavby
529	3641N03	Inženýrské stavitelství	Inženýrské stavitelství
530	3641N04	Stavebnictví	Stavebnictví
531	3641N05	Příprava a realizace staveb	Přípr. a realizace staveb
532	3641N06	Ochrana památek a krajiny	Ochrana památek a krajiny
533	3641N07	Nízkoenergetické a pasivní objekty	Nízkoenerg.,pasiv.objekty
534	3641N08	Pozemní stavby - Téměř nulové budovy	Poz.stav.-Téměř nul.bud.
535	3642L502	Silniční stavitelství	Silniční stavitelství
536	3642M006	Dopravní stavitelství	Dopravní stavitelství
537	3642M007	Vodohospodářské stavby	Vodohospodářské stavby
538	3642M010	Inženýrské stavitelství - vodní stavby	Vodní stavby
539	3642M011	Inženýrské stavitelství - železniční stavitelství	Železniční stavitelství
540	3642M012	Inženýrské stavitelství - dopravní stavitelství	Dopravní stavitelství
541	3642M014	Inženýrské stavitelství - vodní hospodářství	Inžen.stavit.-vodní hosp.
542	3642N001	Železniční stavitelství	Železniční stavitelství
543	3642N003	Inženýrské stavitelství	Inženýrské stavitelství
544	3642N004	Stavby inženýrské	Stavby inženýrské
545	3643M001	Stavební materiály	Stavební materiály
546	3643M01	Stavební materiály	Stavební materiály
547	3644L502	Stavební provoz	Stavební provoz
548	3644L51	Stavební provoz	Stavební provoz
549	3645L002	Mechanik tepelných zařízení	Mechanik tepel.zařízení
550	3645L505	Technik plynových zařízení a tepelných soustav	Tech.plyn.zař.,tep.soust.
551	3645L52	Technik plynových zařízení a tepelných soustav	Technik plyn.zařízení
552	3645M002	Technická zařízení budov	Technická zaříz.budov
553	3645M01	Technická zařízení budov	Technická zařízení budov
554	3646M002	Geodézie - geodézie	Geodézie-geodézie
555	3646M003	Geodézie - katastr nemovitostí	Geod.-katastr nemovitostí
556	3646M01	Geodézie a katastr nemovitostí	Geodézie a katastr nem.
557	3647M001	Stavebnictví	Stavebnictví
558	3647M01	Stavebnictví	Stavebnictví
559	3647N001	Organizace a řízení ve stavebnictví	Org.,řízení ve staveb.
560	3647N002	Ochrana památek a krajiny	Ochrana památek a krajiny
561	3651E002	Dlaždičské práce	Dlaždičské práce
562	3651E01	Dlaždičské práce	Dlaždičské práce
563	3651H002	Dlaždič	Dlaždič
564	3652H001	Instalatér	Instalatér
565	3652H004	Mechanik plynových zařízení	Mechanik plyn.zařízení
566	3652H01	Instalatér	Instalatér
567	3652H02	Mechanik plynových zařízení	Mechanik plynových zař.
568	3653H001	Izolatér	Izolatér
569	3654E001	Kamenické práce	Kamenické práce
570	3654H001	Kameník	Kameník
571	3654H01	Kameník	Kameník
572	3655E001	Klempířské práce ve stavebnictví	Klemp.práce ve staveb.
573	3655E01	Klempířské práce ve stavebnictví	Klempířské práce ve stav.
574	3655H001	Klempíř - stavební výroba	Klempíř-stavební výroba
575	3656H001	Kominík	Kominík
576	3656H01	Kominík	Kominík
577	3657E005	Malířské, lakýrnické a natěračské práce - malířské a natěračské práce	Malíř.,lakýrn.,natěr.pr.
578	3657E007	Malířské, lakýrnické a natěračské práce - lakýrnické a natěračské práce	Lakýrn.,natěračské práce
579	3657E01	Malířské a natěračské práce	Malířské a natěr.práce
580	3657E508	Malířské a natěračské práce	Malířské a natěrač.práce
581	3657H001	Malíř	Malíř
582	3658H01	Montér vodovodů a kanalizací a obsluha vodárenských zařízení	Montér vodovodů a kan.
583	3659E001	Podlahářské práce	Podlahářské práce
584	3659E01	Podlahářské práce	Podlahářské práce
585	3659H001	Podlahář	Podlahář
586	3659H01	Podlahář	Podlahář
587	3661H002	Silničář	Silničář
588	3662E002	Sklenářské práce	Sklenářské práce
589	3662E01	Sklenářské práce	Sklenářské práce
727	4151H011	Farmář	Farmář
590	3662E503	Sklenářské práce	Sklenářské práce
591	3662H001	Sklenář	Sklenář
592	3662H01	Sklenář	Sklenář
593	3663H001	Štukatér	Štukatér
594	3663H01	Štukatér	Štukatér
595	3664E002	Tesařské a truhlářské práce - tesařské práce	Tesařské práce
596	3664E01	Tesařské práce	Tesařské práce
597	3664H001	Tesař	Tesař
598	3664H01	Tesař	Tesař
599	3665H01	Vodař	Vodař
600	3666H001	Montér suchých staveb	Montér suchých staveb
601	3666H01	Montér suchých staveb	Montér suchých staveb
602	3667E001	Zednické práce	Zednické práce
603	3667E002	Stavební práce	Stavební práce
604	3667E01	Zednické práce	Zednické práce
605	3667E02	Stavební práce	Stavební práce
606	3667E503	Stavební výroba	Stavební výroba
607	3667E507	Dělník technických služeb	Dělník techn.služeb
608	3667H001	Zedník	Zedník
609	3667H003	Kamnář	Kamnář
610	3667H004	Obkladač	Obkladač
611	3667H01	Zedník	Zedník
612	3667H02	Kamnář	Kamnář
613	3667H502	Stavební výroba	Stavební výroba
614	3668E001	Železobetonářské práce	Železobetonářské práce
615	3669E001	Pokrývačské práce	Pokrývačské práce
616	3669E01	Pokrývačské práce	Pokrývačské práce
617	3669H001	Pokrývač	Pokrývač
618	3669H01	Pokrývač	Pokrývač
619	3741L009	Operátor provozu a ekonomiky dopravy	Operátor prov.,ekon.dopr.
620	3741L503	Dopravní provoz	Dopravní provoz
621	3741M005	Provoz a ekonomika letecké dopravy	Provoz,ekon.letec.dopravy
622	3741M006	Provoz a ekonomika dopravy	Provoz,ekonomika dopravy
623	3741M007	Provoz a ekonomika lodní dopravy	Provoz,ekonom.lodní dopr.
624	3741M01	Provoz a ekonomika dopravy	Provoz,ekonomika dopravy
625	3741N001	Management a logistika	Management a logistika
626	3741N002	Celnictví a spedice	Celnictví a spedice
627	3741N003	Provoz a ekonomika dopravy	Provoz,ekonomika dopravy
628	3741N004	Mezinárodní silniční doprava a přeprava	Mezinár.sil.dopr.a přepr.
629	3741N01	Dopravní a spediční činnost	Dopravní a spediční činn.
630	3741N02	Letecká doprava v cestovním ruchu	Letecká doprava-cest.ruch
631	3741N03	Provoz a ekonomika dopravy	Provoz a ekonom.dopravy
632	3741N04	Dopravní logistika a obchod	Dopr.logistika a obchod
633	3742L003	Poštovní manipulant	Poštovní manipulant
634	3742L501	Poštovní provoz	Poštovní provoz
635	3742L51	Logistické a finanční služby	Logist.,fin.služby
636	3742M001	Poštovní a peněžní služby	Poštovní a peněž.služby
637	3742M01	Logistické a finanční služby	Logistické a fin.služby
638	3742N01	Logistik specialista	Logistik specialista
639	3751H001	Manipulant poštovního provozu a přepravy	Manipul.pošt.prov.,přepr.
640	3751H01	Manipulant poštovního provozu a přepravy	Manipulant pošt.provozu
641	3752H001	Železničář	Železničář
642	3752H01	Železničář	Železničář
643	3908L501	Požární ochrana	Požární ochrana
644	3908M001	Požární ochrana	Požární ochrana
645	3908M01	Požární ochrana	Požární ochrana
646	3908N001	Prevence rizik a záchranářství	Prev.rizik,záchranářství
647	3908N01	Řízení bezpečnosti práce	Řízení bezpečnosti práce
648	3908N02	Prevence rizik a záchranářství	Prevence rizik a záchr.
649	3941H01	Malíř a lakýrník	Malíř a lakýrník
650	3941J001	Strojírenská a elektrotechnická zařízení	Strojír.,eltechn.zařízení
651	3941L001	Autotronik	Autotronik
652	3941L002	Mechanik instalatérských a elektrotechnických zařízení budov	Mechanik inst.,eltech.z.
653	3941L01	Autotronik	Autotronik
654	3941L02	Mechanik instalatérských a elektrotechnických zařízení	Mechanik instal.,el.zaříz
655	3941L502	Strojírenská a elektrotechnická zařízení	Strojír.,eltechn.zařízení
656	3941L51	Autotronik	Autotronik
657	3941M001	Strojírenská a elektrotechnická zařízení	Strojír.,eltechn.zařízení
658	3941M002	Strojírenství a elektrotechnika	Strojír.,elektrotechnika
660	3941M004	Elektrotechnika a strojírenství	Eltechnika,strojírenství
661	3941N001	Výrobní a řídící systémy podniku	Výrob.a říd.syst.podniku
662	3941N002	Řídicí technika	Řídicí technika
663	3941N003	Automatizované informační systémy řízení v ekonomice	Aut.inf.syst.říz.v ekon.
664	3941N01	Bezpečnost práce a krizové řízení	Bezp.práce a kriz.řízení
665	3941N02	Výrobní a řídící systémy podniku	Výr.,říd.syst.podniku
666	3941N03	Facility management	Facility management
667	3941N04	Správa nemovitostí	Správa nemovitostí
668	3941N05	Facility a property management	Facility,property manag.
669	3943N01	Diplomovaný oční optik bez získání způsobilosti zdravotnického pracovníka	Diplomovaný oční optik
670	3943N02	Diplomovaný oční optik	Diplomovaný oční optik
671	4104M001	Rostlinolékařství	Rostlinolékařství
672	4104M01	Rostlinolékařství	Rostlinolékařství
673	4131N001	Obnova a rozvoj venkova	Obnova a rozvoj venkova
674	4131N002	Zemědělské podnikání	Zemědělské podnikání
675	4131N003	Zemědělský manažer	Zemědělský manažer
676	4131N005	Zahradní a krajinná tvorba	Zahradní,krajinná tvorba
677	4131N006	Péče o krajinu	Péče o krajinu
678	4131N007	Obchodování se zemědělsko-potravinářskými komoditami	Obch.se zem.potr.komod.
679	4131N009	Šlechtitelství	Šlechtitelství
680	4131N01	Regionální politika zemědělství a venkova	Reg.pol. zeměděl.,venkova
681	4131N010	Agroturistika	Agroturistika
682	4131N02	Agroturistika	Agroturistika
683	4131N03	Obchodování se zemědělsko-potravinářskými komoditami	Obchod.se zem.-potr.kom.
684	4131N04	Péče o krajinu	Péče o krajinu
685	4131N05	Šlechtitelství	Šlechtitelství
686	4131N06	Zemědělské podnikání	Zemědělské podnikání
687	4131N07	Ekologické zemědělství	Ekologické zemědělství
688	4132N001	Lesnictví	Lesnictví
689	4132N002	Vyšší odborné lesnictví	Vyšší odborné lesnictví
690	4132N01	Lesnictví	Lesnictví
691	4141L007	Zemědělský podnikatel	Zemědělský podnikatel
692	4141L503	Zemědělství	Zemědělství
693	4141L504	Zemědělství - rybářství	Zemědělství-rybářství
694	4141M001	Agropodnikání	Agropodnikání
695	4141M01	Agropodnikání	Agropodnikání
696	4142M001	Vinohradnictví	Vinohradnictví
697	4142M01	Vinohradnictví	Vinohradnictví
698	4143L004	Chovatel cizokrajných zvířat	Chovatel cizokraj.zvířat
699	4143L01	Chovatel cizokrajných zvířat	Chovatel cizokraj.zvířat
700	4143L507	Trenérství dostihových a sportovních koní	Trenér.dostih.,sport.koní
701	4143L51	Rybářství	Rybářství
702	4143L52	Trenérství dostihových a sportovních koní	Trenérství sport.koní
703	4143M001	Rybářství	Rybářství
704	4143M002	Chovatelství	Chovatelství
705	4143M01	Rybářství	Rybářství
706	4143M02	Chovatelství	Chovatelství
707	4144L501	Zahradnictví	Zahradnictví
708	4144L51	Zahradnictví	Zahradnictví
709	4144M001	Zahradnictví	Zahradnictví
710	4144M01	Zahradnictví	Zahradnictví
711	4144N01	Zahradní krajinná tvorba	Zahradní krajinná tvorba
712	4145L505	Mechanizace zemědělství a lesního hospodářství	Mechaniz.zem.a les.hosp.
713	4145L51	Mechanizace zemědělství a lesního hospodářství	Mechanizace zemědělství
714	4145M001	Mechanizace a služby	Mechanizace a služby
715	4145M01	Mechanizace a služby	Mechanizace a služby
716	4146J002	Lesní hospodářství	Lesní hospodářství
717	4146L502	Lesní hospodářství	Lesní hospodářství
718	4146M001	Lesnictví	Lesnictví
719	4146M003	Myslivecké hospodářství	Myslivecké hospodářství
720	4146M01	Lesnictví	Lesnictví
721	4151E006	Farmářské práce	Farmářské práce
722	4151E01	Zemědělské práce	Zemědělské práce
723	4151E501	Zemědělská výroba	Zemědělská výroba
724	4151H007	Zemědělec, hospodyňka	Zemědělec,hospodyňka
725	4151H008	Krajinář	Krajinář
726	4151H01	Zemědělec - farmář	Zemědělec-farmář
728	4151H013	Včelař	Včelař
729	4151H02	Včelař	Včelař
730	4152E005	Sadovnické a květinářské práce	Sadov.a květinář.práce
731	4152E008	Květinářské práce - květinářské a aranžérské práce	Květin.a aranžérské práce
732	4152E01	Zahradnické práce	Zahradnické práce
733	4152E011	Zahradnické práce	Zahradnické práce
734	4152E02	Zahradnická výroba	Zahradnická výroba
735	4152E510	Zahradnická výroba	Zahradnická výroba
736	4152H001	Zahradník	Zahradník
737	4152H01	Zahradník	Zahradník
738	4153E501	Rybářská výroba	Rybářská výroba
739	4153H002	Rybář	Rybář
740	4153H008	Jezdec a ošetřovatel dostihových koní	Jezdec,ošetř.dostih.koní
741	4153H009	Chovatel a zpracovatel drůbeže	Chovatel,zpracov.drůbeže
742	4153H01	Rybář	Rybář
743	4153H010	Chovatel koní a jezdec	Chovatel koní a jezdec
744	4153H011	Chovatel laboratorních a kožešinových zvířat	Chov.lab.a kožeš.zvířat
745	4153H02	Jezdec a chovatel koní	Jezdec a chovatel koní
746	4154H002	Kovář a podkovář	Kovář a podkovář
747	4154H01	Podkovář a zemědělský kovář	Podkovář a zeměd.kovář
748	4155E002	Opravářské práce	Opravářské práce
749	4155E01	Opravářské práce	Opravářské práce
750	4155H003	Opravář zemědělských strojů	Opravář zeměděl.strojů
751	4155H01	Opravář zemědělských strojů	Opravář zeměděl.strojů
752	4156E002	Pěstební a lesnické práce	Pěstební,lesnické práce
753	4156E01	Lesnické práce	Lesnické práce
754	4156E501	Lesní výroba	Lesní výroba
755	4156H001	Mechanizátor lesní výroby	Mechanizátor les.výroby
756	4156H01	Lesní mechanizátor	Lesní mechanizátor
757	4156H02	Opravář lesnických strojů	Opravář lesnických strojů
758	4157H001	Zpracovatel dřeva	Zpracovatel dřeva
759	4157H01	Zpracovatel dřeva	Zpracovatel dřeva
760	4331N01	Fyzioterapie zvířat	Fyzioterapie zvířat
761	4331N02	Veterinární sestra	Veterinární sestra
762	4331N03	Veterinární asistent	Veterinární asistent
763	4331N04	Veterinářství	Veterinářství
764	4331N05	Diplomovaný veterinární asistent	Dipl.veterinární asistent
765	4341M001	Veterinární prevence	Veterinární prevence
766	4341M01	Veterinářství	Veterinářství
767	5341H002	Ošetřovatel	Ošetřovatel
768	5341H01	Ošetřovatel	Ošetřovatel
769	5341J004	Zubní instrumentářka	Zubní instrumentářka
770	5341J01	Zubní instrumentářka	Zubní instrumentářka
771	5341L51	Zdravotnický asistent	Zdravotnický asistent
772	5341M001	Všeobecná sestra	Všeobecná sestra
773	5341M007	Zdravotnický asistent	Zdravotnický asistent
774	5341M008	Nutriční asistent	Nutriční asistent
775	5341M01	Zdravotnický asistent	Zdravotnický asistent
776	5341M02	Nutriční asistent	Nutriční asistent
777	5341M03	Praktická sestra	Praktická sestra
778	5341M04	Masér ve zdravotnictví	Masér ve zdravotnictví
779	5341N001	Diplomovaná všeobecná sestra	Diplom.všeobecná sestra
780	5341N002	Diplomovaná dětská sestra	Diplom.dětská sestra
781	5341N003	Diplomovaná porodní asistentka	Diplom.porodní asistentka
782	5341N004	Diplomovaný zdravotnický záchranář	Dipl..zdravot.záchranář
783	5341N005	Diplomovaná sestra pro intenzivní péči	Dipl.sestra-intenz.péče
784	5341N006	Diplomovaná sestra pro psychiatrii	Dipl.sestra-psychiatrie
785	5341N007	Diplomovaná dentální hygienistka	Dipl.dentální hygienistka
786	5341N11	Diplomovaná všeobecná sestra	Diplom.všeobecná sestra
787	5341N21	Diplomovaný zdravotnický záchranář	Dipl.zdrav.záchranář
788	5341N31	Diplomovaná dentální hygienistka	Dipl.dentální hygienistka
789	5341N41	Diplomovaný nutriční terapeut	Dipl.nutriční terapeut
790	5341N51	Diplomovaná dětská sestra	Diplom.dětská sestra
791	5342N001	Diplomovaný ergoterapeut	Diplomovaný ergoterapeut
792	5342N002	Diplomovaný fyzioterapeut	Diplomovaný fyzioterapeut
793	5342N004	Diplomovaný fyzioterapeut	Diplomovaný fyzioterapeut
794	5343M001	Zdravotní laborant	Zdravotní laborant
795	5343M002	Farmaceutický laborant	Farmaceutický laborant
796	5343M005	Laboratorní asistent	Laboratorní asistent
797	5343M01	Laboratorní asistent	Laboratorní asistent
798	5343N003	Diplomovaný zdravotní laborant	Dipl.zdravotní laborant
799	5343N004	Diplomovaný farmaceutický asistent	Dipl.farmaceut.asistent
800	5343N11	Diplomovaný farmaceutický asistent	Dipl.farmaceut. asistent
801	5343N21	Diplomovaný zdravotní laborant	Dipl.zdravotní laborant
802	5344M001	Zubní technik	Zubní technik
803	5344M002	Ortopedicko - protetický technik	Ortoped.-protet.technik
804	5344M003	Oční technik	Oční technik
805	5344M006	Oční technik bez získání způsobilosti zdravotnického pracovníka	Oční technik
806	5344M007	Asistent zubního technika	Asistent zubního technika
807	5344M008	Ortoticko-protetický technik	Ortoticko-protet.technik
808	5344M01	Ortoticko - protetický technik	Ortoticko-protet.technik
809	5344M03	Asistent zubního technika	Asistent zubního technika
810	5344N001	Diplomovaný oční technik	Diplomovaný oční technik
811	5344N002	Diplomovaný zubní technik	Diplomovaný zubní technik
812	5344N003	Diplomovaný oční technik bez získání způsobilosti zdravotnického pracovníka	Diplomovaný oční technik
813	5344N11	Diplomovaný zubní technik	Diplomovaný zubní technik
814	5345M001	Dietní sestra	Dietní sestra
815	5345N002	Diplomovaná dietní sestra	Diplomovaná dietní sestra
816	5345N004	Diplomovaný radiologický asistent	Dipl.radiolog.asistent
817	5345N005	Diplomovaný asistent hygienické služby	Dipl.asistent hyg.služby
818	6141M001	Teologické disciplíny	Teologické disciplíny
819	6141N004	Teologicko-pastorační činnost	Teolog.-pastorač.činnost
820	6141N005	Teologická a pastorační činnost	Teolog.a pastorač.činnost
821	6141N006	Katecheticko - pastorační činnost	Katech.-pastorač.činnost
822	6141N007	Misijní a teologická činnost	Misijní a teolog.činnost
823	6141N008	Teologie a pastorace	Teologie a pastorace
824	6141N01	Teologická a pastorační činnost	Teolog.a pastor. činnost
825	6141N02	Teologická a pastoračně sociální činnost	Teolog.a pastor.soc.činn.
826	6141N03	Misijní a teologická činnost	Misijní a teologická čin.
827	6141N04	Teologie a pastorace	Teologie a pastorace
828	6341L501	Ekonomika a řízení obchodních a výrobních firem	Ekon.,říz.obch.,výr.firem
829	6341L503	Podnikání, obchod a služby	Podnikání,obchod a služby
830	6341L504	Podnikání a management	Podnikání a management
831	6341L505	Podnikatel	Podnikatel
832	6341L506	Základy podnikání	Základy podnikání
833	6341L507	Podnikové hospodaření	Podnikové hospodaření
834	6341L509	Podnikatel pro obchod a služby	Podnikatel-obchod,služby
835	6341L510	Podnikatelství pro obchod a peněžnictví	Podnikatel.-obch.,peněž.
836	6341L511	Podnikatelství malých firem	Podnikatel.malých firem
837	6341L512	Podnikatelská administrativa	Podnikat.administrativa
838	6341L513	Podnikatel pro obchod s rozšířeným jazykovým vyučováním	Podnikatel pro obch.-RJV
839	6341L514	Obchodní manager	Obchodní manager
840	6341L515	Obchodně podnikatelské činnosti	Obchodně podnikat.čin.
841	6341L516	Provoz a řízení obchodních a výrobních firem	Prov.,říz.obch.výr.firem
842	6341M003	Ekonomika a řízení obchodních a výrobních firem	Ekon.,říz.obch.,výr.firem
843	6341M004	Obchodní akademie	Obchodní akademie
844	6341M006	Obchodně podnikatelská činnost	Obchod.podnik.činnost
845	6341M007	Obchod a podnikání	Obchod a podnikání
846	6341M009	Podnikání, obchod a služby	Podnikání,obchod a služby
847	6341M01	Ekonomika a podnikání	Ekonomika a podnikání
848	6341M010	Podnikatelská činnost	Podnikatelská činnost
849	6341M011	Podnikání a management	Podnikání a management
850	6341M013	Podnikatel	Podnikatel
851	6341M014	Podnikatelství	Podnikatelství
852	6341M015	Podnikání a řízení firem	Podnikání,řízení firem
853	6341M016	Podnikání a obchod	Podnikání a obchod
854	6341M017	Specialista pro obchodní a manažerskou činnost	Special.obch.,manaž.čin.
855	6341M018	Podnikové hospodaření	Podnikové hospodaření
856	6341M019	Firemní a finanční management	Firemní a fin.management
857	6341M02	Obchodní akademie	Obchodní akademie
858	6341M020	Ekonomika a management	Ekonomika a management
859	6341M021	Obchodní podnikatel a manager	Obch.podnikatel a manager
860	6341M022	Podnikatel pro obchod a služby	Podnikatel-obchod,služby
861	6341M023	Asistent podnikatele	Asistent podnikatele
862	6341M024	Podnikatelství pro obchod a peněžnictví	Podnikatel.-obch.,peněž.
863	6341M025	Zahraniční obchod	Zahraniční obchod
864	6341M026	Manažer pro střední stupeň řízení	Manaž.pro stř.stup.řízení
865	6341M027	Podnikání, řízení a obchod	Podnik.,řízení a obchod
866	6341M028	Firemní ekonom	Firemní ekonom
867	6341M030	Podnikatelská administrativa	Podnikat.administrativa
868	6341M031	Podnikatel pro obchod s rozšířeným jazykovým vyučováním	Podnikatel pro obch.-RJV
869	6341M032	Ekonomika soukromého podnikání	Ekonom.soukr.podnikání
870	6341M033	Obchodní manager	Obchodní manager
871	6341M034	Ekonomika a podnikání	Ekonomika a podnikání
872	6341M035	Asistent pro střední management	Asist.pro stř.management
873	6341M036	Ekonom	Ekonom
874	6341M037	Provoz a řízení kulturních subjektů	Prov.,říz.kultur.subjektů
875	6341M038	Obchodně podnikatelské činnosti	Obchodně podnikat.čin.
876	6341M039	Podnikatel	Podnikatel
877	6341M040	Informatika v ekonomice	Informatika v ekonomice
878	6341M041	Provoz a řízení obchodních a výrobních firem	Prov.,říz.obch.,výr.firem
879	6341N001	Mezinárodní obchod	Mezinárodní obchod
880	6341N004	Obchodní podnikání	Obchodní podnikání
881	6341N005	Marketing	Marketing
882	6341N007	Zpracování ekonomických a vědeckotechnických informací	Zprac.ek.,věd.tech.infor.
883	6341N008	Účetnictví a finanční hospodaření	Účet.a finanční hospodař.
884	6341N01	Mezinárodní obchodní styk	Mezinárodní obchodní styk
885	6341N010	Účetnictví	Účetnictví
886	6341N011	Prokurista	Prokurista
887	6341N012	Finance a účetnictví	Finance a účetnictví
888	6341N013	Finanční a ekonomické poradenství	Finanč.a ekon.poradenství
889	6341N014	Firemní ekonomika	Firemní ekonomika
890	6341N015	Ekonomika podniku a management	Ekon.podniku a management
891	6341N016	Financování a účetnictví	Financování a účetnictví
892	6341N017	Ekonomika a management podniku	Ekon.a management podniku
893	6341N018	Účetnictví a daně	Účetnictví a daně
894	6341N019	Obchodní podnikatelství	Obchodní podnikatelství
895	6341N02	Finance a daně	Finance a daně
896	6341N020	Obchod a právo v obchodu	Obchod a právo v obchodu
897	6341N023	Ekonomika mezinárodního hospodářství	Ekon.mezinár.hospodář.
898	6341N024	Marketing pro střední stupeň řízení	Marketing pro stř.st.říz.
899	6341N025	Mezinárodní obchodní styk	Mezinárodní obchodní styk
900	6341N026	Firemní management	Firemní management
901	6341N027	Ekonomika a zahraniční obchod	Ekonomika,zahran.obchod
902	6341N029	Podnikání a management	Podnikání a management
903	6341N03	Marketing	Marketing
904	6341N031	Mezinárodní obchod, přeprava, zasilatelství	Mezin.obch.,přepr.,zasil.
905	6341N032	Prokurista firmy	Prokurista firmy
906	6341N033	Zahraniční obchod	Zahraniční obchod
907	6341N035	Daně a účetnictví	Daně a účetnictví
908	6341N037	Firemní obchodník	Firemní obchodník
909	6341N04	Daňová a finanční správa	Daňová a finanční správa
910	6341N05	Řízení a zabezpečování jakosti	Řízení a zabezp.jakosti
911	6341N06	Řízení výroby	Řízení výroby
912	6341N07	Marketing pro střední stupeň řízení	Marketing- stř.st.řízení
913	6341N08	Zahraniční obchod	Zahraniční obchod
914	6341N09	Podnikání	Podnikání
915	6341N10	Řízení malého a středního podniku	Řízení m.a stř.podniku
916	6341N11	Firemní ekonomika	Firemní ekonomika
917	6341N12	Ekonomika a management podniku	Ekon. a manag.podniku
918	6341N13	Provozní ekonomika odpadového hospodářství	Prov.ek.odpadového hosp.
919	6341N14	Ekonomika podniku a management	Ekon.podniku a management
920	6341N15	Účetnictví	Účetnictví
921	6341N16	Finanční řízení	Finanční řízení
922	6341N17	Ekonomika a management v podnicích finančních služeb	Ekon., manag.fin.služeb
923	6341N18	Ekonomika a podnikání	Ekonomika a podnikání
924	6341N19	Firemní management	Firemní management
925	6341N20	Obchodní podnikání	Obchodní podnikání
926	6341N21	Firemní ekonomika v globálním ekonomickém prostředí	Firem.ekon.v globálním pr
927	6341N22	Účetnictví a daně	Účetnictví a daně
928	6341N23	Mezinárodní obchod	Mezinárodní obchod
929	6341N24	Finanční a ekonomické poradenství	Fin. a ekon.poradenství
930	6341N25	Účetnictví a finanční hospodaření	Účetnictví a fin.hosp.
931	6341N26	Účetnictví a finanční řízení podniku	Účetnictví,fin.říz.podnik
932	6341N27	Sociální pojišťovnictví	Sociální pojišťovnictví
933	6341N28	Management malých a středních firem	Manag.malých,střed.firem
934	6341N29	Administrativa a ekonomika pro podnikání	Admin.,ekonom.pro podnik.
935	6341N30	Mezinárodní obchod, logistické a finanční služby	Mezin.obch.,logist.,fin.
936	6341N31	Ekonomika a provoz zájmových chovů	Ekonom.,provoz zájm.chovů
937	6341N32	Podnikání malých a středních firem	Podnik.malých a stř.firem
938	6341N33	Digitální marketing	Digitální marketing
939	6341N34	Podnikání malé a střední firmy	Podnik.malé a stř.firmy
940	6342L502	Technickohospodářské a správní činnosti	Techn.hosp.a správní čin.
941	6342M001	Výpočetní technika a technika administrativy	Výp.tech.a tech.administ.
942	6342M002	Zpracování ekonomických dat	Zprac.ekonomických dat
943	6342N01	Personální řízení	Personální řízení
944	6342N02	Personální práce	Personální práce
945	6342N03	Personální management	Personální management
946	6342N04	Management lidských zdrojů	Managem.lidských zdrojů
947	6343L001	Peněžní manipulant	Peněžní manipulant
948	6343M001	Bankovnictví a pojišťovnictví	Bankovn.a pojišťovnictví
949	6343M002	Bankovnictví - manager	Bankovnictví-manager
950	6343N001	Odhadcovství	Odhadcovství
951	6343N002	Bankovnictví a pojišťovnictví	Bankovn.a pojišťovnictví
952	6343N003	Sociální pojišťovnictví	Sociální pojišťovnictví
953	6343N004	Finanční poradenství	Finanční poradenství
954	6343N005	Bankovnictví a finance	Bankovnictví a finance
955	6343N006	Pojišťovnictví a management	Pojišťovn.a management
956	6343N007	Finance a řízení	Finance a řízení
957	6343N008	Bankovnictví	Bankovnictví
958	6343N009	Finanční řízení	Finanční řízení
959	6343N01	Pojišťovnictví	Pojišťovnictví
960	6343N010	Účetnictví a finanční řízení	Účetnictví,finanč.řízení
961	6343N011	Pojišťovnictví	Pojišťovnictví
962	6343N013	Finance, účetnictví, finanční řízení	Finance,účet.,fin.řízení
963	6343N014	Finance a bankovnictví	Finance a bankovnictví
964	6343N015	Účetnictví a finance	Účetnictví a finance
965	6343N016	Finance a daně	Finance a daně
966	6343N02	Finanční poradenství	Finanční poradenství
967	6343N03	Bankovnictví	Bankovnictví
968	6343N04	Bankovnictví a finance	Bankovnictví a finance
969	6343N05	Finanční řízení	Finanční řízení
970	6343N06	Účetnictví a finanční řízení	Účetnictví a fin.řízení
971	6343N07	Účetnictví a finance	Účetnictví a finance
972	6343N08	Finanční poradenství	Finanční poradenství
973	6343N09	Finance a daně	Finance a daně
974	6343N10	Finance a účetnictví	Finance a účetnictví
975	6343N11	Finance, účetnictví, finanční řízení	Fin.,účet.,fin.řízení
976	6343N12	Odhadcovství	Odhadcovství
977	6343N13	Finančnictví a bankovnictví	Finančnictví a bank.
978	6343N14	Bankovnictví a pojišťovnictví	Bankovnictví a pojišťovn.
979	6351J001	Obchodní škola	Obchodní škola
980	6351J01	Obchodní škola	Obchodní škola
981	6431N002	Strojírenský management	Strojírenský management
982	6431N003	Management elektrotechniky	Management eltechniky
983	6431N005	Výrobní a obchodní manažer textilu	Výrob.,obch.manaž.textilu
984	6431N006	Logistika a management	Logistika a management
985	6431N007	Obchodník v dopravě	Obchodník v dopravě
986	6431N008	Management dopravy	Management dopravy
987	6431N009	Marketing výpočetní techniky	Market.výpočetní techniky
988	6431N01	Management cestovního ruchu	Management cest.ruchu
989	6431N011	Management technických oborů	Management techn.oborů
990	6431N012	Ekonomika strojírenství	Ekonomika strojírenství
991	6431N013	Management cestovního ruchu	Management cest.ruchu
992	6431N015	Manažer a ekonom firmy	Manažer a ekonom firmy
993	6431N016	Manažer sportu	Manažer sportu
994	6431N017	Management tělesné výchovy a sportu	Manag.těl.vých.a sportu
995	6431N018	Manažer provozu	Manažer provozu
996	6431N02	Projektové řízení	Projektové řízení
997	6431N03	Management firem	Management firem
998	6431N04	Management v zemědělství	Management v zemědělství
999	6431N05	Firemní management	Firemní management
1000	6431N06	Ekonomika strojírenství	Ekonomika strojírenství
1001	6431N07	Management sportovních aktivit	Management sport.aktivit
1002	6431N08	Výrobní a obchodní management textilu	Výr.a obch.manag.textilu
1003	6431N09	Management sportu	Management sportu
1004	6431N10	Řízení malého a středního podniku	Říz.mal.a stř.podniku
1005	6431N11	Management dopravy	Management dopravy
1006	6431N12	Management tělesné výchovy a sportu	Management TV a sportu
1007	6431N13	Management v lázeňství	Management v lázeňství
1008	6431N14	Logistika a management	Logistika a management
1009	6431N15	Řízení sportovních a tělovýchovných činností a organizací	Říz.sport.a TV čin.a org.
1010	6441L504	Podnikání v oborech strojírenství	Podnik.-obory strojíren.
1011	6441L505	Podnikání v oborech elektrotechniky a telekomunikací	Podnik.-ob.eltech.,telek.
1012	6441L508	Podnikání v oborech potravinářství	Podnik.-obory potravinář.
1013	6441L51	Podnikání	Podnikání
1014	6441L515	Podnikání v technických povoláních	Podnik.-technická povol.
1015	6441L518	Podnikání v oborech zemědělství a lesního hospodářství	Podnik.-obory zem.,les.h.
1016	6441L521	Podnikání v oborech obchodu a služeb	Podnik.-obory obch.,služ.
1017	6441L523	Podnikání v oborech umění, užitého umění a rukodělné uměl. řem. výroby	Podnik.-ob.užitého umění
1018	6441L524	Podnikání	Podnikání
1019	6441M001	Podnikání a služby	Podnikání a služby
1020	6441M002	Umělecká produkce	Umělecká produkce
1021	6442L012	Obchodně provozní pracovník civilního letectví	Obch.prov.prac.civil.let.
1022	6442M001	Management v oblasti životního prostředí	Management v oblasti ŽP
1023	6442M002	Management hutnictví	Management hutnictví
1024	6442M003	Strojírenská technická administrativa	Stroj.technická administ.
1025	6442M007	Obchodní management ve strojírenství	Obch.managem.ve strojír.
1026	6442M008	Výrobní management ve strojírenství	Výr.managem.ve strojíren.
1027	6442M009	Management strojírenství	Management strojírenství
1028	6442M010	Technická administrativa - elektrotechnika	Techn.administr.-eltechn.
1029	6442M011	Management v elektrotechnice	Management v eltechnice
1030	6442M012	Management aplikace osobních počítačů	Managem.aplik.os.počítačů
1031	6442M013	Management elektrotechniky	Management eltechniky
1032	6442M014	Management výpočetní techniky	Managem.výpoč.techniky
1033	6442M015	Management organizační a výpočetní techniky	Managem.organ.,výp.techn.
1034	6442M016	Management sklářství	Management sklářství
1035	6442M017	Management technické chemie silikátů	Manag.tech.chemie silik.
1036	6442M018	Řízení chemických výrob - podnikání a management	Říz.ch.výr.-podn.,manag.
1037	6442M019	Management chemických výrob a spotřební chemie	Manag.chemických výrob
1038	6442M020	Management chemických výrob a spotřební chemie	Manag.chemických výrob
1039	6442M021	Management výroby celulózy a papíru	Manag.výr.celul.a papíru
1040	6442M022	Management potravinářských výrob	Managem.potravinář.výrob
1041	6442M023	Management textilu	Management textilu
1042	6442M024	Management textilu a oděvnictví	Management textilu,oděvn.
1043	6442M025	Management zpracování kůže, plastů, pryže a výroby obuvi	Manag.zpr.kůže,plastů,ob.
1044	6442M026	Management obalové techniky	Managem.obalové techniky
1045	6442M027	Management ve stavebnictví	Managem.ve stavebnictví
1046	6442M028	Stavební podnikatel a manažer	Staveb.podnikatel,manažer
1047	6442M029	Management v automobilové dopravě	Management-automob.dopr.
1048	6442M030	Management dopravy, pošt a telekomunikací	Manag.dopr.,pošt,telekom.
1049	6442M031	Management železniční dopravy	Managem.železnič.dopravy
1050	6442M032	Management v dopravě	Management v dopravě
1051	6442M033	Management zemědělství a lesnictví	Managem.zem.a lesnictví
1052	6442M034	Management obchodních firem a sportovních klubů	Managem.obchod.firem,SK
1053	6442M035	Management techniky administrativy	Managem.techn.administr.
1054	6442M036	Management obchodu	Management obchodu
1055	6442M037	Management obchodu a služeb	Managem.obchodu a služeb
1056	6442M038	Management drobného podnikání a obchodu	Manag.drob.podnik.,obch.
1057	6442M039	Management obchodu a služeb	Managem.obchodu a služeb
1058	6442M040	Management cestovního ruchu	Management cest.ruchu
1059	6442M041	Management v pohostinství	Managem.v pohostinství
1060	6442M042	Management administrativy a správy	Managem.admin.a správy
1061	6442M043	Management a turismus	Management a turismus
1062	6442M044	Manažer mezinárodní přepravy a obchodu	Manag.mezin.přepr.,obch.
1063	6442M045	Management užitého umění	Management užitého umění
1064	6442M047	Management - asistent podnikatele ve strojírenství	Manag.-asist.podnik.-str.
1065	6442M048	Management a podnikání v umění a reklamě	Manag.,podn.-umění,rekl.
1066	6442M051	Management obchodního podnikání	Managem.obchod.podnikání
1067	6442M052	Management sportovních zařízení	Management sport.zařízení
1068	6443M002	Ekonomika zemědělství a výživy	Ekonom.zemědělství,výživy
1069	6443M003	Ekonomika zemědělství a výživy - podnikání a služby	Ek.zem.,výž.-podn.,služby
1070	6443M005	Ekonomika obchodu a služeb	Ekonom.obchodu a služeb
1071	6443M006	Ekonomika oděvnictví	Ekonomika oděvnictví
1072	6443M007	Ekonomika a cestovní ruch	Ekonomika a cestovní ruch
1073	6443M008	Ekonomika zemědělství a výživy - cestovní ruch	Ek.zem.,výž.-cestov.ruch
1074	6541L005	Číšník - servírka	Číšník-servírka
1075	6541L006	Kuchař	Kuchař
1076	6541L01	Gastronomie	Gastronomie
1077	6541L502	Veřejné stravování	Veřejné stravování
1078	6541L503	Gastronomické služby	Gastronomické služby
1079	6541L504	Společné stravování	Společné stravování
1080	6541L51	Gastronomie	Gastronomie
1081	6541M001	Provoz hotelů a společného stravování	Provoz hotelů,spol.strav.
1082	6541M002	Gastronomické služby	Gastronomické služby
1083	6541N001	Gastronomie a služby cestovního ruchu	Gastr.,služby cest.ruchu
1084	6542L502	Podnikatelství pro hotely a cestovní ruch	Podnikatelství-hotely,CR
1085	6542M004	Hotelnictví a turismus	Hotelnictví a turismus
1086	6542M005	Management turismu a služeb	Manag.turismu a služeb
1087	6542M006	Management turistických služeb	Manag.turistických služeb
1088	6542M007	Podnikatelství pro hotely a cestovní ruch	Podnikatelství-hotely,CR
1089	6542M008	Managering hotelů a cestovního ruchu	Managering hotelů a CR
1090	6542M009	Pracovník cestovního ruchu	Pracov.cestovního ruchu
1091	6542M01	Hotelnictví	Hotelnictví
1092	6542M010	Služby a cestovní ruch	Služby a cestovní ruch
1093	6542M011	Služby cestovního ruchu	Služby cestovního ruchu
1094	6542M02	Cestovní ruch	Cestovní ruch
1095	6542N001	Cestovní ruch	Cestovní ruch
1096	6542N002	Řízení hotelového provozu	Řízení hotelového provozu
1097	6542N003	Rozvoj a řízení regionální turistiky	Rozvoj,říz.reg.turistiky
1098	6542N004	Řízení hotelnictví a turistických služeb	Řízení hotel.a tur.služeb
1099	6542N005	Cestovní ruch	Cestovní ruch
1100	6542N007	Turismus	Turismus
1101	6542N009	Management hotelového provozu	Management hotel.provozu
1102	6542N01	Gastronomie a hotelnictví	Gastronomie a hotelnictví
1103	6542N02	Řízení hotelnictví a turistických služeb	Říz.hotelnictví a tur.sl.
1104	6542N03	Management hotelového provozu	Managem. hotel. provozu
1105	6542N04	Řízení hotelového provozu	Řízení hotelového provozu
1106	6543N01	Cestovní ruch	Cestovní ruch
1107	6543N02	Rozvoj a řízení regionální turistiky	Rozvoj a řízení regionáln
1108	6551E01	Stravovací a ubytovací služby	Strav.a ubyt.služby
1109	6551E02	Práce ve stravování	Práce ve stravování
1110	6551E501	Provoz společného stravování	Provoz společ.stravování
1111	6551H002	Kuchař - číšník pro pohostinství	Kuchař-číšník,pohostinst.
1112	6551H004	Kuchař - číšník - příprava jídel	Kuchař-číšník-přípr.jídel
1113	6551H006	Kuchař - číšník - pohostinství	Kuchař-číšník,pohostinst.
1114	6551H007	Hostinský	Hostinský
1115	6551H01	Kuchař - číšník	Kuchař-číšník
1116	6551H501	Provoz společného stravování	Provoz společ.stravování
1117	6552E001	Kuchařské práce	Kuchařské práce
1118	6552H001	Kuchař	Kuchař
1119	6553H001	Číšník - servírka	Číšník-servírka
1120	6641L008	Obchodník	Obchodník
1121	6641L01	Obchodník	Obchodník
1122	6641L501	Provoz obchodu	Provoz obchodu
1123	6641L51	Obchodník	Obchodník
1124	6641M001	Obchod a marketing	Obchod a marketing
1125	6641N001	Podnikatel pro obchod a služby	Podnikatel-obchod,služby
1126	6641N01	Obchodně-podnikatelská činnost	Obchodně-podnik.činnost
1127	6641N02	Mezinárodní obchod, přeprava, zasílatelství	Mezinárodní obchod,přepr.
1128	6641N03	Podnikatelská činnost	Podnikatelská činnost
1129	6642L503	Propagace	Propagace
1130	6642L51	Propagace	Propagace
1131	6643M001	Knihkupectví	Knihkupectví
1132	6643M002	Knihkupecké a nakladatelské činnosti	Knihkup.a naklad.činnosti
1133	6643M01	Knihkupecké a nakladatelské činnosti	Knihkupecké a nakl.čin.
1134	6644L501	Skladové hospodářství	Skladové hospodářství
1135	6651E003	Prodavačské práce	Prodavačské práce
1136	6651E01	Prodavačské práce	Prodavačské práce
1137	6651E501	Obchodní provoz	Obchodní provoz
1138	6651H002	Prodavač	Prodavač
1139	6651H003	Prodavač - potravinářské zboží	Prodavač-potravin.zboží
1140	6651H004	Prodavač - smíšené zboží	Prodavač-smíšené zboží
1141	6651H005	Prodavač - elektrotechnické zboží	Prodavač-eltechn.zboží
1142	6651H006	Prodavač - drogistické zboží	Prodavač-drogist.zboží
1143	6651H007	Prodavač - motorová vozidla	Prodavač-motorová vozidla
1144	6651H008	Prodavač - stavebniny a řemeslné potřeby	Prodavač-stav.,řem.potř.
1145	6651H009	Prodavač - textil a oděvy	Prodavač-textil a oděvy
1146	6651H01	Prodavač	Prodavač
1147	6651H010	Prodavač - obuv a kožená galanterie	Prodavač-obuv,kož.galan.
1148	6651H011	Prodavač - domácí potřeby	Prodavač-domácí potřeby
1149	6651H012	Prodavač - drobné zboží	Prodavač-drobné zboží
1150	6651H013	Prodavač - hodiny a klenoty	Prodavač-hodiny,klenoty
1151	6651H014	Prodavač - nábytek a bytové zařízení	Prodavač-nábytek
1152	6651H015	Prodavač - textil, oděvy a obuv	Prodavač-text.,oděvy,obuv
1153	6651H016	Prodavač - drobné zboží, klenoty a nábytek	Prodavač-d.zb.,klen.,náb.
1154	6651H017	Prodavač - průmyslové zboží	Prodavač-průmyslové zboží
1155	6651H018	Prodavač - květiny	Prodavač-květiny
1156	6651H020	Prodavač - zbraně a střelivo	Prodavač-zbraně,střelivo
1157	6651H022	Prodavač a výrobce lahůdek	Prodavač,výrobce lahůdek
1158	6651H501	Obchodní provoz	Obchodní provoz
1159	6652H001	Aranžér	Aranžér
1160	6652H01	Aranžér	Aranžér
1161	6653H003	Operátor skladování	Operátor skladování
1162	6653H01	Operátor skladování	Operátor skladování
1163	6841M001	Personální řízení	Personální řízení
1164	6841M003	Právní činnost	Právní činnost
1165	6841M005	Komerční právo	Komerční právo
1166	6841M006	Právní administrativa	Právní administrativa
1167	6841N001	Personální řízení	Personální řízení
1168	6841N003	Právo komerční	Právo komerční
1169	6841N004	Právní činnost	Právní činnost
1170	6841N005	Ekonomicko-právní činnost	Ekonom.-právní činnost
1171	6841N006	Komerční právo	Komerční právo
1172	6841N007	Správní činnost	Správní činnost
1173	6841N01	Sociálně právní činnost	Sociálně právní činnost
1174	6841N010	Personální práce	Personální práce
1175	6841N02	Aplikované právo	Aplikované právo
1176	6841N03	Ekonomicko-právní činnost	Ekonomicko-právní činnost
1177	6841N04	Kvalifikovaná ekonomicko-právní administrace pro komerční sféru	Kv.ek.pravní administrace
1178	6841N05	Právní asistence	Právní asistence
1179	6841N06	Právní administrativa	Právní administrativa
1180	6841N07	Administrativa justice	Administrativa justice
1181	6842H01	Bezpečnostní pracovník (režim pokusného ověřování)	Bezp.pracovník (p.ověř.)
1182	6842L01	Vnitřní pořádek a bezpečnost (režim pokusného ověřování)	Vnitř.pořádek,bezp.(p.o.)
1183	6842L501	Veřejně pořádková činnost	Veřejně pořádk.činnost
1184	6842L503	Veřejnoprávní ochrana	Veřejnoprávní ochrana
1185	6842L504	Policejní činnost	Policejní činnost
1186	6842L51	Bezpečnostní služby	Bezpečnostní služby
1187	6842L581	Policejně správní a technickohospodářské činnosti	Pol.správ.,tech.hosp.čin.
1188	6842M001	Ochrana osob a majetku	Ochrana osob a majetku
1189	6842M002	Veřejnoprávní ochrana	Veřejnoprávní ochrana
1190	6842M003	Bezpečnostně právní činnost	Bezpečnost.právní činnost
1191	6842M01	Bezpečnostně právní činnost	Bezpečn.právní činnost
1192	6842N001	Prevence kriminality	Prevence kriminality
1193	6842N002	Krizové řízení	Krizové řízení
1194	6842N01	Prevence kriminality	Prevence kriminality
1195	6842N02	Krizové řízení	Krizové řízení
1196	6842N03	Přípravné trestní řízení	Přípravné trestní řízení
1197	6842N04	Bezpečnostně právní činnost	Bezpeč. právní činnost
1198	6842N05	Dopravně bezpečnostní činnost	Dopr.bezpečn.činnost
1199	6842N06	Bezpečnost obyvatelstva	Bezpečnost obyvatelstva
1200	6842N07	Bezpečnost v silniční dopravě	Bezpeč.v silniční dopravě
1201	6842N08	Bezpečnostně právní činnosti	Bezpeč.právní činnosti
1202	6842N09	Bezpečnostní činnost ve veřejném sektoru	Bezp.čin.ve veř.sektoru
1203	6843M001	Veřejnosprávní činnost	Veřejnosprávní činnost
1204	6843M002	Diplomatické služby a Public Relations	Dipl.služby a Publ.Relat.
1205	6843M003	Veřejná správa	Veřejná správa
1206	6843M004	Veřejně správní činnost	Veřejně správní činnost
1207	6843M005	Provoz diplomatických služeb	Provoz diplomat.služeb
1208	6843M01	Veřejnosprávní činnost	Veřejnosprávní činnost
1209	6843N001	Informatika ve státní správě	Informat.ve státní správě
1210	6843N002	Veřejná správa (regionální)	Veř.správa(regionální)
1211	6843N003	Diplomatické služby a Public Relations	Dipl.služby a Publ.Relat.
1212	6843N005	Veřejná správa	Veřejná správa
1213	6843N006	Územní správa a samospráva	Územ.správa a samospráva
1214	6843N007	Hospodářsko-správní činnost	Hosp.-správní činnost
1215	6843N008	Veřejná správa (územní)	Veřejná správa(územní)
1216	6843N009	Regionální správa a Evropská unie	Regionální správa a EU
1217	6843N01	Veřejnosprávní činnost	Veřejnosprávní činnost
1218	6843N02	Obnova a rozvoj venkova	Obnova a rozvoj venkova
1219	6843N03	Veřejná správa a regionální rozvoj	Veř.správa a reg.rozvoj
1220	6843N04	Veřejnosprávní činnosti	Veřejnosprávní činnosti
1221	6843N05	Veřejná správa	Veřejná správa
1222	6843N06	Sociálněsprávní činnost	Sociálněsprávní činnost
1223	6843N07	Diplomatické služby	Diplomatické služby
1224	6843N08	Public Relations	Public Relations
1225	6843N09	Veřejná správa (regionální)	Veřejná správa (region.)
1226	6843N10	Veřejnosprávní činnost s podporou ICT	Veřejnosp.činn., ICT
1227	6843N11	Public relations	Public relations
1228	6843N12	Krizové řízení a bezpečnost a ochrana zdraví při práci	Kriz.říz.,bezp.,ochr.zdr.
1229	6843N13	Správa chovu zvířat	Správa chovu zvířat
1230	6941L004	Kosmetička	Kosmetička
1231	6941L01	Kosmetické služby	Kosmetické služby
1232	6941L02	Masér sportovní a rekondiční	Masér sport.a rekondiční
1233	6941L502	Vlasová kosmetika	Vlasová kosmetika
1234	6941L503	Pleťová kosmetika	Pleťová kosmetika
1235	6941L51	Masér sportovní a rekondiční	Masér sport.,rekondiční
1236	6941L52	Vlasová kosmetika	Vlasová kosmetika
1237	6941M001	Masér sportovní a rekondiční	Masér sport.a rekondiční
1238	6942M01	Oční optik	Oční optik
1239	6951H001	Kadeřník	Kadeřník
1240	6951H01	Kadeřník	Kadeřník
1241	6953E001	Práce v autoservisu	Práce v autoservisu
1242	6953E502	Provoz domácnosti	Provoz domácnosti
1243	6953H001	Rekondiční a sportovní masér	Rekond.,sportovní masér
1244	6953H003	Provoz služeb	Provoz služeb
1245	6953H01	Rekondiční a sportovní masér	Rekondiční a sport.masér
1246	6954E002	Práce v čistírnách a prádelnách	Práce-čistírny,prádelny
1247	6954E01	Provozní služby	Provozní služby
1248	6955E003	Práce ve zdravotnických a sociálních zařízeních - provozní práce	Prov.práce-zdr.,soc.zař.
1249	6955E005	Práce ve zdravotnických a sociálních zařízeních - pečovatelské práce	Pečovatelské práce
1250	6955J001	Charitativní služby	Charitativní služby
1251	7241M001	Knihovnické a informační systémy a služby	Knihov.,inf.systémy,služ.
1252	7241M002	Metody a technika informační práce	Met.,techn.inform.práce
1253	7241M01	Informační služby	Informační služby
1254	7241N001	Informační management	Informační management
1255	7241N003	Informační systémy	Informační systémy
1256	7241N01	Informační management	Informační management
1257	7241N02	Informační služby a knihovnictví	Inf.služby a knihovnictví
1258	7241N03	Informační média a služby	Informační média a služby
1259	7241N04	Informační management služeb a médií	Info.manag.služeb a médií
1260	7242N001	Masová komunikace	Masová komunikace
1261	7242N002	Publicistika	Publicistika
1262	7242N003	Stylistika a její tvůrčí využití	Stylis.,její tvůrčí využ.
1263	7242N01	Mediální komunikace	Mediální komunikace
1264	7242N02	Publicistika	Publicistika
1265	7242N03	Žurnalistika a nová média	Žurnalistika a nová média
1266	7242N04	Mediální komunikace a žurnalistika	Mediální komunik.,žurnal.
1267	7441N01	Wellness - Balneo	Wellness - Balneo
1268	7441N02	Wellness specialista	Wellness specialista
1269	7441N03	Fotbalová studia	Fotbalová studia
1270	7531J001	Pedagogika pro asistenty ve školství	Pedagogika-asist.ve škol.
1271	7531J01	Pedagogika pro asistenty ve školství	Pedag.pro asistenty ve šk
1272	7531L501	Vychovatelství pro ústavy sociální péče	Vychov.-ústavy soc.péče
1273	7531M003	Speciální pedagogika ve vězeňské službě	Sp.pedagog.-vězeň.služba
1274	7531M004	Pedagogika volného času	Pedagogika volného času
1275	7531M005	Předškolní a mimoškolní pedagogika	Předšk.,mimošk.pedagogika
1276	7531M008	Výchova dětí předškolního a mladšího školního věku	Vých.dětí-předšk.,ml.š.v.
1277	7531M01	Předškolní a mimoškolní pedagogika	Předšk.,mimošk.pedagogika
1278	7531M010	Pedagogika pro asistenty ve školství	Pedagogika-asist.ve škol.
1279	7531M02	Pedagogika pro asistenty ve školství	Pedag.pro asistenty ve šk
1280	7531N001	Pedagogika specifických činností ve volném čase	Pedag.spec.čin.-volný čas
1281	7531N002	Pedagogika volného času	Pedagogika volného času
1282	7531N006	Pedagogika - vychovatelství	Pedagogika-vychovatelství
1283	7531N01	Pedagogika volného času a vychovatelství	Pedagog.volného času
1284	7531N02	Pedagogika specifických činností ve volném čase	Pedagog.specific.činností
1285	7531N03	Předškolní a mimoškolní pedagogika	Předšk.a mimošk.pedagog.
1286	7532N002	Charitní a sociální činnost	Charitní,sociální činnost
1287	7532N005	Sociální pedagogika a teologie	Sociál.pedagog.a teologie
1288	7532N007	Sociální pedagogika	Sociální pedagogika
1289	7532N008	Sociální a humanitární práce	Sociální,humanit.práce
1290	7532N01	Sociální práce	Sociální práce
1291	7532N02	Sociální pedagogika a teologie	Soc.pedagogika a teologie
1292	7532N03	Sociální a humanitární práce	Soc. a humanitární práce
1293	7532N04	Charitativní a sociální práce	Charitativ.a soc.práce
1294	7532N05	Sociálně právní činnost	Sociálně právní činnost
1295	7532N06	Sociální pedagogika	Sociální pedagogika
1296	7532N07	Pastorační a sociální práce	Pastorační a soc.práce
1297	7532N08	Sociální a diakonická práce	Sociální a diak.práce
1298	7533N01	Lektorská pedagogika	Lektorská pedagogika
1299	7533N02	Tlumočnictví českého znakového jazyka	Tlumoč.čes.znak.jazyka
1300	7533N03	Tlumočnictví českého znakového jazyka, pedagogické asistentství	Tlum.č.znak.j.,ped.asist.
1301	7541E01	Pečovatelské služby	Pečovatelské služby
1302	7541J002	Sociální činnost v prostředí etnických minorit	Soc.čin.-etnické minority
1303	7541J003	Sociální činnost	Sociální činnost
1304	7541J01	Pečovatelské služby	Pečovatelské služby
1305	7541L51	Sociální činnost	Sociální činnost
1306	7541M001	Sociální služby	Sociální služby
1307	7541M002	Sociální péče	Sociální péče
1308	7541M003	Sociální péče - pečovatelská činnost	Sociální péče-pečov.čin.
1309	7541M004	Sociální péče - sociálněsprávní činnost	Sociál.péče-soc.spr.čin.
1310	7541M005	Sociální péče - sociální činnost pro etnické skupiny	Soc.péče-soc.čin.-etn.sk.
1311	7541M006	Výchovná a humanitární činnost	Výchovná,humanit.činnost
1312	7541M007	Sociální činnost	Sociální činnost
1313	7541M008	Sociální činnost - sociální pečovatelství	Sociální pečovatelství
1314	7541M009	Sociální činnost - sociální vychovatelství	Sociální vychovatelství
1315	7541M01	Sociální činnost	Sociální činnost
1316	7541M010	Sociální činnost v prostředí etnických minorit	Soc.čin.-etnické minority
1317	7541M012	Výchovná a humanitární činnost - sociálně výchovná činnost	Sociálně výchovná činnost
1318	7541M013	Výchovná a humanitární činnost - sociálně administrativní činnost	Sociál.administr.činnost
1319	7541N001	Sociální a teologická činnost	Sociální a teolog.činnost
1320	7541N002	Sociální práce	Sociální práce
1321	7541N003	Sociálně právní činnost	Sociálně právní činnost
1322	7541N007	Charitní a sociální péče	Charitní a sociální péče
1323	7841J001	Rodinná škola	Rodinná škola
1324	7841M003	Rodinná škola - sociální služby	Rod.škola-sociál.služby
1325	7841M004	Rodinná škola - ekonomicko-administrativní služby	Rod.škola-ek.admin.služby
1326	7841M005	Rodinná škola - veřejnosprávní služby	Rod.škola-veř.spr.služby
1327	7842M001	Technické lyceum	Technické lyceum
1328	7842M002	Ekonomické lyceum	Ekonomické lyceum
1329	7842M003	Pedagogické lyceum	Pedagogické lyceum
1330	7842M004	Waldorfské lyceum	Waldorfské lyceum
1331	7842M005	Zdravotnické lyceum	Zdravotnické lyceum
1332	7842M006	Přírodovědné lyceum	Přírodovědné lyceum
1333	7842M01	Technické lyceum	Technické lyceum
1334	7842M02	Ekonomické lyceum	Ekonomické lyceum
1335	7842M03	Pedagogické lyceum	Pedagogické lyceum
1336	7842M04	Zdravotnické lyceum	Zdravotnické lyceum
1337	7842M05	Přírodovědné lyceum	Přírodovědné lyceum
1338	7842M06	Kombinované lyceum	Kombinované lyceum
1339	7842M07	Vojenské lyceum	Vojenské lyceum
1340	7842M08	Lyceum (režim pokusného ověřování)	Lyceum (pokus.ověřování)
1341	7851J001	Odborná škola	Odborná škola
1342	7861D001	Praktická škola tříletá	Praktická škola tříletá
1343	7862C001	Praktická škola jednoletá	Praktická škola jednoletá
1344	7862C002	Praktická škola dvouletá	Praktická škola dvouletá
1345	7862C01	Praktická škola jednoletá	Praktická škola jednoletá
1346	7862C02	Praktická škola dvouletá	Praktická škola dvouletá
1347	7901B01	Základní škola speciální	Základní škola speciální
1348	7901C01	Základní škola	Základní škola
1349	7941K401	Gymnázium - všeobecné (4leté)	G-všeobecné,4leté
1350	7941K402	Gymnázium - matematika (4leté)	G-matematika,4leté
1351	7941K403	Gymnázium - matematika a fyzika (4leté)	G-matematika a fyz.,4leté
1352	7941K404	Gymnázium - přírodovědné předměty (4leté)	G-přírodov.předm.,4leté
1353	7941K405	Gymnázium - programování (4leté)	G-programování,4leté
1354	7941K407	Gymnázium - estetickovýchovné předměty (4leté)	G-estet.vých.předm.,4leté
1355	7941K408	Gymnázium - živé jazyky (4eté)	G-živé jazyky,4leté
1356	7941K409	Gymnázium - klasické jazyky (4leté)	G-klasické jazyky,4leté
1358	7941K411	Gymnázium - humanitní předměty (4leté)	G-humanitní předm.,4leté
1359	7941K413	Gymnázium - tělesná výchova (4leté)	G-tělesná výchova,4leté
1360	7941K420	Gymnázium - sportovní příprava (4leté)	G-sport.příprava,4leté
1361	7941K601	Gymnázium - všeobecné (6leté)	G-všeobecné,6leté
1362	7941K602	Gymnázium - matematika (6leté)	G-matematika,6leté
1363	7941K603	Gymnázium - matematika a fyzika (6leté)	G-matematika a fyz.,6leté
1364	7941K604	Gymnázium - přírodovědné předměty (6leté)	G-přírodov.předm.,6leté
1365	7941K605	Gymnázium - programování (6leté)	G-programování,6leté
1366	7941K607	Gymnázium - estetickovýchovné předměty (6leté)	G-estet.vých.předm.,6leté
1367	7941K608	Gymnázium - živé jazyky (6leté)	G-živé jazyky,6leté
1368	7941K609	Gymnázium - klasické jazyky (6leté)	G-klasické jazyky,6leté
1370	7941K610	Gymnázium - vybrané předměty v cizím jazyce (6leté)	G-předm.v ciz.jaz.,6leté
1371	7941K611	Gymnázium - humanitní předměty (6leté)	G-humanitní předm.,6leté
1372	7941K613	Gymnázium - tělesná výchova (6leté)	G-tělesná výchova,6leté
1373	7941K620	Gymnázium - sportovní příprava (6leté)	G-sport.příprava,6leté
1374	7941K801	Gymnázium - všeobecné (8leté)	G-všeobecné,8leté
1375	7941K802	Gymnázium - matematika (8leté)	G-matematika,8leté
1376	7941K803	Gymnázium - matematika a fyzika (8leté)	G-matematika a fyz.,8leté
1377	7941K804	Gymnázium - přírodovědné předměty (8leté)	G-přírodov.předm.,8leté
1378	7941K805	Gymnázium - programování (8leté)	G-programování,8leté
1379	7941K807	Gymnázium - estetickovýchovné předměty (8leté)	G-estet.vých.předm.,8leté
1380	7941K808	Gymnázium - živé jazyky (8leté)	G-živé jazyky,8leté
1381	7941K809	Gymnázium - klasické jazyky (8leté)	G-klasické jazyky,8leté
1383	7941K810	Gymnázium - vybrané předměty v cizím jazyce (8leté)	G-předm.v ciz.jaz.,8leté
1384	7941K811	Gymnázium - humanitní předměty (8leté)	G-humanitní předm.,8leté
1385	7941K813	Gymnázium - tělesná výchova (8leté)	G-tělesná výchova,8leté
1386	7941K820	Gymnázium - sportovní příprava (8-leté)	G-sport.příprava,8leté
1387	7942K41	Gymnázium se sportovní přípravou	Gymnázium se sport.přípr.
1388	7942K61	Gymnázium se sportovní přípravou	Gymnázium se sport.přípr
1389	7942K81	Gymnázium se sportovní přípravou	Gymnázium se sport.přípr.
1390	7943K61	Dvojjazyčné gymnázium	Dvojjazyčné gymnázium
1391	8241L501	Textilní výtvarnictví	Textilní výtvarnictví
1392	8241L503	Výtvarné zpracování kovů a drahých kamenů - umělecké zámečnictví a kovářství	Umělec.zámečn.,kovářství
1393	8241M001	Užitá malba	Užitá malba
1394	8241M002	Užitá fotografie a média	Užitá fotografie a média
1395	8241M003	Scénická technika	Scénická technika
1396	8241M005	Tvarování průmyslových výrobků - tvarový a grafický design obalů	Tvar.a graf.design obalů
1397	8241M007	Propagační výtvarnictví - propagační grafika	Propagační grafika
1398	8241M008	Propagační výtvarnictví - výstavnictví	Výstavnictví
1399	8241M009	Propagační výtvarnictví - aranžování	Aranžování
1400	8241M01	Užitá malba	Užitá malba
1401	8241M010	Propagační výtvarnictví - vědecká kresba a ilustrace	Vědecká kresba,ilustrace
1402	8241M012	Výtvarné zpracování kovů a drahých kamenů - plošné a plastické rytí	Ploš.,plast.rytí-kov,kám.
1403	8241M013	Výtvarné zpracování kovů a drahých kamenů - umělecké zámečnictví a kovářství	Umělec.zámečn.,kovářství
1404	8241M014	Výtvarné zpracování kovů a drahých kamenů - zlatnictví a stříbrnictví	Zlatnictví a stříbrnictví
1405	8241M015	Výtvarné zpracování kovů a drahých kamenů - broušení a rytí drahých kamenů	Brouš.a rytí drah.kamenů
1406	8241M016	Výtvarné zpracování kovů a drahých kamenů - umělecké odlévání	Umělecké odlévání
1407	8241M018	Výtvarné zpracování keramiky a porcelánu - modelářství	Model.-keramika,porcelán
1408	8241M02	Užitá fotografie a média	Užitá fotografie a média
1409	8241M022	Modelářství a návrhářství oděvů	Modelář.,návrhářst.oděvů
1410	8241M023	Tvorba hraček a dekorativních předmětů	Tvorba hraček,dek.předm.
1411	8241M024	Design světelných objektů	Design světelných objektů
1412	8241M026	Konstrukce a tvorba nábytku	Konstr.,tvorba nábytku
1413	8241M028	Modelářství a návrhářství obuvi a módních doplňků	Model.,návrh.obuvi,doplň.
1414	8241M03	Scénická a výstavní tvorba	Scénická a výst.tvorba
1357	7941K41	Gymnázium - čtyřleté studium	Gymnázium
1369	7941K61	Gymnázium - šestileté studium	Gymnázium
1415	8241M030	Tvarování dřeva a řezbářství	Tvarování dřeva,řezbářst.
1416	8241M031	Uměleckořemeslná stavba varhan	Uměl.řem.stavba varhan
1417	8241M032	Grafika v reklamní praxi	Grafika v reklamní praxi
1418	8241M033	Design interiérů	Design interiérů
1419	8241M034	Tvarování průmyslových výrobků - průmyslový design	Průmyslový design
1420	8241M035	Propagační výtvarnictví - grafická úprava tiskovin	Grafická úprava tiskovin
1421	8241M036	Výtvarné zpracování keramiky a porcelánu - zdobení	Zdobení porcel.,keramiky
1422	8241M037	Výtvarné zpracování keramiky a porcelánu - vytváření keramiky	Vytváření keramiky
1423	8241M038	Výtvarné zpracování keramiky a porcelánu - kamnářství	Kamnářství
1424	8241M039	Výtvarné zpracování skla - modelářství lisovaného skla	Modelář.lisovaného skla
1425	8241M04	Průmyslový design	Průmyslový design
1426	8241M040	Výtvarné zpracování skla - broušení a vzorování broušeného skla	Brouš.,vzorov.brouš.skla
1427	8241M041	Výtvarné zpracování skla - hutní tvarování skla	Hutní tvarování skla
1428	8241M042	Výtvarné zpracování skla - tvarování, malování a leptání skla	Tvarov.,malov.,lept.skla
1429	8241M043	Výtvarné zpracování skla - rytí skla	Rytí skla
1430	8241M044	Výtvarné zpracování skla - tvorba a výroba skleněných figurek	Tvorba,výr.skleň.figurek
1431	8241M045	Výtvarné zpracování skla - vzorkařství skleněné bižuterie	Vzorkař.sklen.bižuterie
1432	8241M046	Textilní výtvarnictví - tkalcovská a tiskařská tvorba	Tkalc.,tiskařská tvorba
1433	8241M047	Textilní výtvarnictví - tkalcovská tvorba	Tkalcovská tvorba
1434	8241M048	Textilní výtvarnictví - tiskařská tvorba	Tiskařská tvorba
1435	8241M049	Textilní výtvarnictví - ruční výtvarné zpracování textilií	Ruční výtv.zprac.textilií
1436	8241M05	Grafický design	Grafický design
1437	8241M050	Textilní výtvarnictví - pletařská tvorba	Pletařská tvorba
1438	8241M051	Textilní výtvarnictví - krajkařská a vyšívačská tvorba	Krajkařská,vyšívač.tvorba
1439	8241M052	Textilní výtvarnictví - ruční tisk a ruční tkaní	Ruční tisk a tkaní
1440	8241M053	Textilní výtvarnictví - tvorba dekor. předm. z textilních a přírodních materiálů	Dekor.př.-text.,přír.mat.
1441	8241M054	Tvorba a vzorování bižutérie - tvarování a rytectví raznic	Tvarování,rytectví raznic
1442	8241M055	Tvorba a vzorování bižutérie - pasířství	Pasířství
1443	8241M056	Tvorba a vzorování bižutérie - povrchové zušlechťování	Povrch.zušlechťov.bižut.
1444	8241M057	Tvorba a vzorování bižutérie - uměleckoprůmyslové zpracování kovů	Uměl.prům.zprac.kovů
1445	8241M058	Kamenosochařství - kamenosochařská tvorba	Kamenosochařská tvorba
1446	8241M06	Výtvarné zpracování kovů a drahých kamenů	Výtv.zpr.kovů a dr.kamenů
1447	8241M061	Virtuální grafika	Virtuální grafika
1448	8241M07	Modelářství a návrhářství oděvů	Modelářství a návrh.oděvů
1449	8241M08	Tvorba hraček a herních předmětů	Tvorba hraček a hern.před
1450	8241M09	Modelářství a návrhářství obuvi a módních doplňků	Model.,návrh.obuvi,mod.d.
1451	8241M10	Řezbářství	Řezbářství
1452	8241M11	Design interiéru	Design interiéru
1453	8241M12	Výtvarné zpracování keramiky a porcelánu	Výtv.zp.keram.a porcelánu
1454	8241M13	Výtvarné zpracování skla a světelných objektů	Výtv.zp.skla a svět.obj.
1455	8241M14	Textilní výtvarnictví	Textilní výtvarnictví
1456	8241M15	Tvorba a vzorování bižuterie	Tvorba a vzorování bižut.
1457	8241M16	Kamenosochařství	Kamenosochařství
1458	8241M17	Multimediální tvorba	Multimediální tvorba
1459	8241M18	Uměleckořemeslná stavba varhan	Uměl.-řem.stavba varhan
1460	8241N004	Multimediální umělecká tvorba	Multimediál.uměl.tvorba
1461	8241N005	Reklamní tvorba	Reklamní tvorba
1462	8241N01	Design herních předmětů	Design herních předmětů
1463	8241N011	Užitá malba	Užitá malba
1464	8241N014	Ražená medaile a mince	Ražená medaile a mince
1465	8241N017	Tvorba uměleckého skla	Tvorba uměleckého skla
1466	8241N019	Textilní výtvarník	Textilní výtvarník
1467	8241N02	Interiérová tvorba	Interiérová tvorba
1468	8241N020	Grafický design a realizace tiskovin	Graf.design.,real.tiskov.
1469	8241N021	Obalový a grafický design	Obal.a grafický design
1470	8241N022	Oděvní návrhářství	Oděvní návrhářství
1471	8241N023	Design herních předmětů	Design herních předmětů
1472	8241N025	Malba a přidružené techniky	Malba,přidružené techniky
1473	8241N026	Sochařská tvorba	Sochařská tvorba
1474	8241N027	Grafická tvorba	Grafická tvorba
1475	8241N028	Interaktivní grafika	Interaktivní grafika
1476	8241N03	Oděvní a textilní design	Oděvní a textilní design
1477	8241N04	Malba a přidružené techniky	Malba a přidruž.techniky
1478	8241N05	Grafický design a realizace tiskovin	Grafický design
1479	8241N06	Ražená medaile a mince	Ražená medaile a mince
1480	8241N07	Kresba a ilustrace v médiích	Kresba a ilustr.v médiích
1481	8241N08	Oděvní návrhářství	Oděvní návrhářství
1482	8241N09	Obalový a grafický design	Obalový a grafický design
1483	8241N10	Textilní řemesla v oděvní tvobě	Textil.řemesla v oděv.tv.
1484	8241N11	Interaktivní grafika	Interaktivní grafika
1485	8241N12	Reklamní tvorba	Reklamní tvorba
1486	8241N13	Tvorba uměleckého skla	Tvorba uměleckého skla
1487	8241N14	Užitá malba	Užitá malba
1488	8241N15	Sochařská tvorba	Sochařská tvorba
1489	8241N16	Grafická tvorba	Grafická tvorba
1490	8241N17	Výtvarná fotografie a nová média	Výtvar.foto.,nová média
1491	8241N18	Vizuální komunikace	Vizuální komunikace
1492	8241N19	Interiérový design	Interiérový design
1493	8241N20	Design módních doplňků	Design módních doplňků
1494	8241N21	Produktový design	Produktový design
1495	8241N22	Design interiérů a zahrad	Design interiérů a zahrad
1496	8241N23	Průmyslový a produktový design	Průmysl.a produkt.design
1497	8242L501	Konzervátorství a restaurátorství	Konzervátor.,restaurátor.
1498	8242M001	Konzervátorství a restaurátorství	Konzervátor.,restaurátor.
1499	8242M002	Kamenosochařství - restaurování a konzervování kamene	Restaurování,konz.kamene
1500	8242M01	Konzervátorství a restaurátorství	Konzervátorství,restaur.
1501	8242N003	Konzervování a restaurování keramiky	Konzerv.,restaur.keramiky
1502	8242N004	Konzervování a restaurování nábytku a nepolychromované dřevořezby	Konz.,rest.náb,dřevořezby
1503	8242N005	Řezbářství a restaurování dřeva	Řezbářství,restaur.dřeva
1504	8242N009	Péče o památky	Péče o památky
1505	8242N01	Restaurování kovů	Restaurování kovů
1506	8242N010	Restaurování kovů	Restaurování kovů
1507	8242N011	Konzervování a restaurování textilií	Konzerv.restaur.textilií
1508	8242N012	Konzervování a restaurování malířských a dekorativních technik	Konz.,rest.mal.,dek.tech.
1509	8242N02	Řezbářství a restaurování dřeva	Řezbářství,restaur.dřeva
1510	8242N03	Konzervování a restaurování textilií	Konzer., rest.textilií
1511	8242N04	Restaurování nábytku a nepolychromované dřevořezby	Restaurování nábytku
1512	8242N05	Restaurování kovů, minerálů a organolitů	Rest.kovů,min. a organol.
1513	8242N06	Konzervování a restaurování keramiky	Konzer.,restaur.keramiky
1514	8242N07	Konzervování a restaurování malířských a dekorativních technik	Konz.,restaur.malíř.techn
1515	8242N08	Konzervování a restaurování nábytku a nepolychromované dřevořezby	Konzer.,restaurov.nábytku
1516	8242N09	Konzervace, opravy a restaurování předmětů ze dřeva	Konz.,rest.předm.ze dřeva
1517	8242N10	Konzervace a restaurování užité malby a kresby	Konz.,rest.už.malby,kr.
1518	8242N11	Konzervace a restaurování předmětů ze dřeva	Konz.a rest.předm.ze dř.
1519	8243M001	Foto-video reportér - producent	Foto-video reportér-prod.
1520	8243N004	Výtvarné zpracování animovaného filmu	Výtvar.zprac.animov.filmu
1521	8243N008	Obraz a zvuk ve filmové, televizní a rozhlasové tvorbě	Obr.,zvuk-film.,TV,rozhl.
1522	8243N009	Organizace filmové, televizní a rozhlasové tvorby	Org.-film,TV,rozhl.tvorba
1523	8243N01	Filmová, televizní a rozhlasová tvorba	Film.,TV a rozhl.tvorba
1524	8243N02	Obraz a zvuk ve filmové,televizní a rozhlasové tvorbě	Obraz a zvuk ve film.,TV
1525	8243N03	Multimediální umělecká tvorba	Multimediální um.tvorba
1526	8243N04	Organizace filmové,rozhlasové a televizní tvorby	Org.film.,rozh.,TV tvorby
1527	8243N05	Výtvarné zpracování animovaného filmu	Výtv.zprac.anim.filmu
1528	8243N06	Multimediální tvorba v reklamě	Multimed.tvorba,rekl.
1529	8243N07	Teorie a praxe multimediální tvorby	Teorie multimed.tvorby
1530	8243N08	Počítačová umění a design	Počítačová umění a design
1531	8243N09	Faktografická rozhlasová a televizní tvorba	Faktogr.rozhl.a TV tvorba
1532	8243N10	Multimediální tvorba	Multimediální tvorba
1533	8243N11	Multimediální tvorba v propagaci	Multimed.tvorba v propag.
1534	8244J001	Ladění klavíru	Ladění klavíru
1535	8244J01	Ladění klavírů a kulturní činnost	Ladění klavírů,kult.čin.
1536	8244M001	Hudba	Hudba
1537	8244M002	Ladění klavíru	Ladění klavíru
1538	8244M01	Hudba	Hudba
1539	8244M02	Ladění klavírů a příbuzných nástrojů	Ladění klavírů,příb.nást.
1540	8244N001	Hudba	Hudba
1541	8244N01	Hudba - zaměření Jazz	Hudba-zaměření Jazz
1542	8244P01	Hudba	Hudba
1543	8245M001	Zpěv	Zpěv
1544	8245M01	Zpěv	Zpěv
1545	8245N001	Zpěv	Zpěv
1546	8245N01	Zpěv	Zpěv
1547	8245P01	Zpěv	Zpěv
1548	8246M001	Tanec	Tanec
1549	8246M01	Tanec	Tanec
1550	8246M02	Současný tanec	Současný tanec
1551	8246N001	Tanec	Tanec
1552	8246N01	Tanec	Tanec
1553	8246P01	Tanec	Tanec
1554	8246P02	Současný tanec	Současný tanec
1555	8247M001	Hudebně dramatické umění	Hudebně dramatické umění
1556	8247M01	Hudebně dramatické umění	Hudebně dramatické umění
1557	8247N001	Hudebně dramatické umění	Hudebně dramatické umění
1558	8247N004	Tvorba textu a scénáře	Tvorba textu a scénáře
1559	8247N005	Dramatické umění a moderování	Dramat.umění a moderování
1560	8247N006	Loutkářské umění	Loutkářské umění
1561	8247N01	Herectví a moderování	Herectví a moderování
1562	8247N02	Tvorba textu a scénáře	Tvorba textu a scénáře
1563	8247N03	Herectví s loutkou	Herectví s loutkou
1564	8247N04	Hudebně dramatické umění	Hudebně dramatické umění
1565	8247P01	Hudebně dramatické umění	Hudebně dramatické umění
1566	8248L001	Starožitník	Starožitník
1567	8248L01	Starožitník	Starožitník
1568	8251H001	Umělecký kovář a zámečník	Umělecký kovář a zámečník
1569	8251H002	Umělecký pasíř	Umělecký pasíř
1570	8251H003	Zlatník a klenotník	Zlatník a klenotník
1571	8251H004	Umělecký štukatér	Umělecký štukatér
1572	8251H005	Umělecký řezbář	Umělecký řezbář
1573	8251H006	Umělecký truhlář	Umělecký truhlář
1574	8251H007	Umělecký pozlacovač	Umělecký pozlacovač
1575	8251H008	Ruční krajkářka	Ruční krajkářka
1576	8251H009	Umělecký keramik	Umělecký keramik
1577	8251H01	Umělecký kovář a zámečník, pasíř	Umělecký kovář a zámečník
1578	8251H010	Umělecký sklenář	Umělecký sklenář
1579	8251H011	Vlásenkář a maskér	Vlásenkář a maskér
1580	8251H012	Umělecký rytec	Umělecký rytec
1581	8251H013	Košíkář	Košíkář
1582	8251H014	Ruční vyšívačka	Ruční vyšívačka
1583	8251H015	Obuvník scénické obuvi	Obuvník scénické obuvi
1584	8251H02	Umělecký truhlář a řezbář	Umělecký truhlář a řezbář
1585	8251H03	Zlatník a klenotník	Zlatník a klenotník
1586	8251H04	Umělecký keramik	Umělecký keramik
1587	8251H05	Vlásenkář a maskér	Vlásenkář a maskér
1588	8251H06	Umělecký štukatér	Umělecký štukatér
1589	8251H07	Umělecký pozlacovač	Umělecký pozlacovač
1590	8251H08	Umělecký sklenář	Umělecký sklenář
1591	8251H09	Umělecký rytec	Umělecký rytec
1592	8251L003	Uměleckořemeslné zpracování kovů - práce kovářské a zámečnické	Um.řem.-práce kov.,zámeč.
1593	8251L004	Uměleckořemeslné zpracování kovů - práce pasířské	Um.řem.-práce pasířské
1594	8251L006	Uměleckořemeslné zpracování dřeva - práce truhlářské	Um.řem.-práce truhlářské
1595	8251L007	Uměleckořemeslné zpracování dřeva - práce řezbářské	Um.řem.-práce řezbářské
1596	8251L008	Uměleckořemeslné zpracování dřeva - práce čalounické a dekoratérské	Um.řem.-pr.čaloun.,dekor.
1597	8251L009	Uměleckořemeslná stavba hudebních nástrojů - strunné nástroje	Um.řem.stav.-strun.nástr.
1598	8251L01	Uměleckořemeslné zpracování kovů	Uměleckoř.zpracování kovů
1599	8251L010	Uměleckořemeslná stavba hudebních nástrojů - klávesové nástroje	Um.řem.stav.-kláv.nástroj
1600	8251L011	Uměleckořemeslné zpracování textilu - práce tkalcovské	Um.řem.-práce tkalcovské
1601	8251L012	Uměleckořemeslné zpracování textilu - ruční výšivka	Um.řem.-ruční výšivka
1602	8251L014	Uměleckořemeslné zpracování kamene a keramiky - práce keramické	Um.řem.-práce keramické
1603	8251L017	Uměleckořemeslné zpracování skla - hutní tvarování	Um.řem.-hutní tvarov.skla
1604	8251L018	Uměleckořemeslné zpracování skla - broušení a rytí	Um.řem.-brouš.,rytí skla
1605	8251L019	Uměleckořemeslné zpracování skla - umělecké vitráže	Um.řem.zprac.skla-vitráž
1606	8251L02	Uměleckořemeslné zpracování dřeva	Uměleckořeme.zp.dřeva
1607	8251L020	Uměleckořemeslné zpracování skla - malba skla	Um.řem.zprac.skla-malba
1608	8251L022	Uměleckořemeslné zpracování kamene a keramiky - práce kamenosochařské	Um.řem.-práce kamenosoch.
1609	8251L024	Uměleckořemeslné zpracování kovů - práce rytecké	Um.řem.-práce rytecké
1610	8251L027	Uměleckořemeslná stavba hudebních nástrojů - dechové a bicí nástroje	Um.řem.stav.dech.,bicí n.
1611	8251L029	Uměleckořemeslné zpracování textilu - práce gobelinářské	Um.řem.-práce gobelinář.
1612	8251L03	Uměleckořemeslné zpracování textilu	Uměleckoř.zpracov.textilu
1613	8251L04	Uměleckořemeslné zpracování kamene a keramiky	Um.-řem.zprac.kamene,ker.
1614	8251L05	Uměleckořemeslné zpracování skla	Um.-řem.zprac.skla
1615	8251L06	Uměleckořemeslná stavba hudebních nástrojů	Um.-řem.stavba hud.nástr.
1616	8251L501	Umělecké řemeslné práce	Umělecké řemeslné práce
1617	8251L51	Umělecké řemeslné práce	Umělecké řemeslné práce
1618	8251L536	Scénická tvorba	Scénická tvorba
1619	9111N01	Ochrana vojsk a obyvatelstva při krizových situacích	Ochr.vojsk,obyvatelstva
1382	7941K81	Gymnázium - osmileté studium	Gymnázium
\.


-- Completed on 2026-03-30 15:22:05 CEST

--
-- PostgreSQL database dump complete
--

