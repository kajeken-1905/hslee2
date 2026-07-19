#!/usr/bin/env python3
"""Expand city highlights (max 7) and ensure royal palaces are included."""

from __future__ import annotations

import re
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]


def maps(query: str) -> str:
    return f"https://www.google.com/maps/search/?api=1&query={quote(query)}"


def H(
    city_id: str,
    n: int,
    ko: str,
    en: str,
    dko: str,
    den: str,
    q: str | None = None,
) -> dict:
    query = q or f"{en} {city_id.replace('-', ' ')}"
    return {
        "id": f"{city_id}-h{n}",
        "name": {"ko": ko, "en": en},
        "description": {"ko": dko, "en": den},
        "image": f"/highlights/{city_id}-{n}.jpg",
        "mapsUrl": maps(query),
    }


HIGHLIGHTS: dict[str, list[dict]] = {
    "london": [
        H("london", 1, "버킹엄 궁전", "Buckingham Palace", "영국 왕실의 공식 런던 거처로, 근위병 교대식이 유명합니다.", "The official London residence of the British monarch, famous for the Changing of the Guard.", "Buckingham Palace London"),
        H("london", 2, "빅벤·웨스트민스터", "Big Ben & Westminster", "영국 의회와 시계탑이 상징하는 런던의 정치·관광 중심지입니다.", "The political and tourist heart of London, marked by Parliament and the clock tower."),
        H("london", 3, "대영박물관", "British Museum", "세계 유물을 무료로 관람할 수 있는 대표 박물관입니다.", "A world-class museum of global artifacts with free general admission."),
        H("london", 4, "타워 브리지", "Tower Bridge", "템스강 위의 네오고딕 도개교로, 야경이 특히 아름답습니다.", "An iconic neo-Gothic bascule bridge over the Thames, stunning at night."),
        H("london", 5, "세인트 폴 대성당", "St Paul's Cathedral", "돔이 인상적인 바로크 성당으로 런던 스카이라인을 대표합니다.", "A landmark Baroque cathedral whose dome defines the London skyline.", "St Paul's Cathedral London"),
        H("london", 6, "코벤트 가든", "Covent Garden", "시장·공연·쇼핑이 어우러진 활기찬 광장 지구입니다.", "A lively plaza of markets, street performers, and shopping."),
        H("london", 7, "하이드 파크", "Hyde Park", "도심의 넓은 녹지로 산책과 피크닉에 좋습니다.", "A vast central park perfect for walks and picnics."),
    ],
    "edinburgh": [
        H("edinburgh", 1, "홀리루드 궁전", "Palace of Holyroodhouse", "스코틀랜드 왕실의 공식 거처로, 로열 마일 끝에 있습니다.", "The official Scottish residence of the monarch, at the end of the Royal Mile.", "Palace of Holyroodhouse Edinburgh"),
        H("edinburgh", 2, "에든버러 성", "Edinburgh Castle", "바위 언덕 위의 성으로, 도시 전망과 스코틀랜드 역사가 함께합니다.", "A castle on volcanic rock with sweeping views and Scottish history."),
        H("edinburgh", 3, "로열 마일", "Royal Mile", "성과 홀리루드를 잇는 구시가 중심 거리입니다.", "The historic spine linking the castle and Holyrood."),
        H("edinburgh", 4, "아서스 시트", "Arthur's Seat", "도심에서 가까운 언덕 산책으로 탁 트인 전망을 즐길 수 있습니다.", "A nearby hill walk with open views over Edinburgh."),
        H("edinburgh", 5, "칼튼 힐", "Calton Hill", "기념비와 함께 올드타운·뉴타운 전망을 볼 수 있습니다.", "Monuments and panoramic views over Old and New Town."),
        H("edinburgh", 6, "스코틀랜드 국립박물관", "National Museum of Scotland", "역사·과학·문화를 아우르는 무료 국립 박물관입니다.", "A free national museum covering history, science, and culture."),
        H("edinburgh", 7, "그래스마켓", "Grassmarket", "성 아래의 분위기 좋은 광장과 펍 거리입니다.", "A lively square and pub street beneath the castle."),
    ],
    "manchester": [
        H("manchester", 1, "노던 쿼터", "Northern Quarter", "거리 예술과 독립 상점·카페가 모인 힙한 지구입니다.", "A hip district of street art, indie shops, and cafés."),
        H("manchester", 2, "사이언스 앤 인더스트리 뮤지엄", "Science and Industry Museum", "산업혁명을 이해할 수 있는 대표 과학·산업 박물관입니다.", "A major museum of science and the Industrial Revolution."),
        H("manchester", 3, "올드 트래포드", "Old Trafford", "맨체스터 유나이티드의 홈구장으로 축구 팬의 성지입니다.", "Home of Manchester United and a pilgrimage for football fans."),
        H("manchester", 4, "캐슬필드", "Castlefield", "운하와 벽돌 창고가 어우러진 산업유산 지구입니다.", "An industrial-heritage district of canals and brick warehouses."),
        H("manchester", 5, "맨체스터 대성당", "Manchester Cathedral", "고딕 양식의 도심 성당으로 고요한 산책을 선사합니다.", "A Gothic city cathedral offering a quiet pause downtown."),
        H("manchester", 6, "존 라일랜즈 도서관", "John Rylands Library", "빅토리아 고딕 양식의 아름다운 도서관입니다.", "A stunning Victorian Gothic library interior."),
        H("manchester", 7, "미디어시티", "MediaCityUK", "솔퍼드 키의 방송·문화 복합 단지와 수변 산책로입니다.", "A waterfront media and culture hub at Salford Quays.", "MediaCityUK Salford"),
    ],
    "bath": [
        H("bath", 1, "로마 목욕탕", "Roman Baths", "고대 로마 온천 유적을 가까이에서 볼 수 있는 명소입니다.", "Ancient Roman spa ruins you can explore up close."),
        H("bath", 2, "로열 크레센트", "Royal Crescent", "조지안 건축의 상징인 초승달형 저택 거리입니다.", "The iconic crescent of Georgian townhouses."),
        H("bath", 3, "바스 애비", "Bath Abbey", "고딕 성당과 시내 중심 광장의 랜드마크입니다.", "A Gothic abbey landmark on the main square."),
        H("bath", 4, "펌프 룸", "The Pump Room", "온천수를 맛보고 애프터눈 티를 즐기는 클래식 살롱입니다.", "A classic salon for spa water tasting and afternoon tea.", "Pump Room Bath"),
        H("bath", 5, "프라이어 파크", "Prior Park", "팔라디오 다리와 정원 전망이 아름다운 언덕 공원입니다.", "A hillside park with a Palladian bridge and garden views.", "Prior Park Landscape Garden"),
        H("bath", 6, "서커스", "The Circus", "원형으로 배치된 조지안 타운하우스 광장입니다.", "A circular plaza of Georgian townhouses.", "The Circus Bath"),
    ],
    "oxford": [
        H("oxford", 1, "크라이스트 처치", "Christ Church", "해리포터 촬영지로도 알려진 대표 칼리지입니다.", "A famous college, also known from Harry Potter filming."),
        H("oxford", 2, "보들리언 도서관", "Bodleian Library", "옥스퍼드의 역사적인 대학 도서관입니다.", "Oxford's historic university library."),
        H("oxford", 3, "래드클리프 카메라", "Radcliffe Camera", "원형 돔의 상징적 열람실·도서관 건물입니다.", "An iconic circular reading room and library."),
        H("oxford", 4, "애쉬몰리언 박물관", "Ashmolean Museum", "미술과 고고학을 아우르는 영국 최고(最古) 공공 박물관입니다.", "Britain's oldest public museum of art and archaeology."),
        H("oxford", 5, "커버드 마켓", "The Covered Market", "먹거리와 독립 상점이 모인 실내 시장입니다.", "A covered market of food stalls and indie shops.", "Covered Market Oxford"),
        H("oxford", 6, "대학 식물원", "University of Oxford Botanic Garden", "영국에서 가장 오래된 식물원 중 하나입니다.", "One of Britain's oldest botanic gardens."),
    ],
    "cambridge": [
        H("cambridge", 1, "킹스 칼리지 채플", "King's College Chapel", "고딕 채플과 합창으로 유명합니다.", "Famous for its Gothic chapel and choir."),
        H("cambridge", 2, "수학 다리", "Mathematical Bridge", "퀸스 칼리지를 잇는 독특한 목조 다리입니다.", "A distinctive wooden bridge at Queens' College."),
        H("cambridge", 3, "피츠윌리엄 박물관", "Fitzwilliam Museum", "미술·유물 컬렉션이 풍부한 대학 박물관입니다.", "A rich university museum of art and antiquities."),
        H("cambridge", 4, "백스", "The Backs", "칼리지 뒤편 캠강변의 잔디와 풍경이 아름답습니다.", "Lawn and river views behind the colleges along the Cam.", "The Backs Cambridge"),
        H("cambridge", 5, "시장 광장", "Market Square", "도심 시장의 활기찬 중심 광장입니다.", "The lively central market square.", "Market Square Cambridge"),
        H("cambridge", 6, "라운드 처치", "Round Church", "원형 노르만 성당으로 독특한 건축이 인상적입니다.", "A distinctive round Norman church.", "Round Church Cambridge"),
    ],
    "liverpool": [
        H("liverpool", 1, "알버트 도크", "Albert Dock", "창고를 개조한 수변 문화·박물관 단지입니다.", "A waterfront dock of museums and converted warehouses."),
        H("liverpool", 2, "비틀즈 스토리", "The Beatles Story", "비틀즈의 역사를 체험하는 대표 전시관입니다.", "The city's flagship Beatles exhibition."),
        H("liverpool", 3, "리버풀 대성당", "Liverpool Cathedral", "거대한 고딕 리바이벌 성당입니다.", "A vast Gothic Revival cathedral."),
        H("liverpool", 4, "해양 박물관", "Merseyside Maritime Museum", "해운·해양 역사를 다루는 도크 박물관입니다.", "A dockside museum of maritime history."),
        H("liverpool", 5, "리버풀 원", "Liverpool ONE", "쇼핑과 수변이 이어지는 현대적 도심 단지입니다.", "A modern shopping and waterfront district."),
        H("liverpool", 6, "로열 리버풀 필하모닉", "Royal Liverpool Philharmonic", "클래식 공연으로 유명한 콘서트홀입니다.", "A renowned concert hall for classical performances.", "Liverpool Philharmonic Hall"),
    ],
    "brighton": [
        H("brighton", 1, "로열 파빌리온", "Royal Pavilion", "이국적 양식의 왕실 별궁으로 브라이턴의 상징입니다.", "An exotic former royal palace and Brighton's emblem."),
        H("brighton", 2, "브라이턴 피어", "Brighton Pier", "산책과 놀이가 있는 클래식 해변 피어입니다.", "The classic pleasure pier for seaside walks and fun.", "Brighton Palace Pier"),
        H("brighton", 3, "더 레인즈", "The Lanes", "빈티지·주얼리 숍이 늘어선 미로 같은 골목입니다.", "A maze of narrow lanes with vintage and jewellery shops."),
        H("brighton", 4, "브라이턴 해변", "Brighton Beach", "자갈 해변과 해안가 풍경이 매력적입니다.", "A pebble beach with classic seafront views."),
        H("brighton", 5, "아이 360", "British Airways i360", "해안 전망 타워에서 시내와 바다를 한눈에 봅니다.", "A seaside viewing tower over the city and Channel.", "Brighton i360"),
        H("brighton", 6, "노스 레인", "North Laine", "독립 상점과 카페가 많은 보헤미안 지구입니다.", "A bohemian district of indie shops and cafés."),
    ],
    "york": [
        H("york", 1, "요크 민스터", "York Minster", "영국을 대표하는 고딕 대성당 중 하나입니다.", "One of Britain's great Gothic cathedrals."),
        H("york", 2, "샴블즈", "The Shambles", "중세 분위기가 남은 그림 같은 골목입니다.", "A picturesque street with lingering medieval character."),
        H("york", 3, "성벽 산책", "City walls walk", "중세 성벽을 따라 도시 전망을 즐기며 걷습니다.", "A walk along medieval walls with city views.", "York city walls"),
        H("york", 4, "클리포드 타워", "Clifford's Tower", "성 유적에서 시내를 내려다볼 수 있습니다.", "A castle keep with views over the city."),
        H("york", 5, "요크셔 박물관", "Yorkshire Museum", "로마·바이킹 유물을 볼 수 있는 박물관과 정원입니다.", "A museum and gardens of Roman and Viking finds."),
        H("york", 6, "국립철도박물관", "National Railway Museum", "세계적 규모의 철도 박물관입니다.", "One of the world's great railway museums."),
    ],
    "bristol": [
        H("bristol", 1, "클리프턴 현수교", "Clifton Suspension Bridge", "에이본 협곡을 가로지르는 상징적 다리입니다.", "The iconic bridge spanning the Avon Gorge."),
        H("bristol", 2, "하버사이드", "Harbourside", "박물관·카페·산책로가 있는 수변 지구입니다.", "A waterfront of museums, cafés, and promenades.", "Bristol Harbour"),
        H("bristol", 3, "거리 예술", "Street art", "뱅크시를 비롯한 거리 예술이 도시 곳곳에 있습니다.", "Street art across the city, including Banksy works.", "Banksy Bristol"),
        H("bristol", 4, "브리스톨 대성당", "Bristol Cathedral", "노르만·고딕이 섞인 도심 성당입니다.", "A city cathedral mixing Norman and Gothic styles."),
        H("bristol", 5, "캐보트 타워", "Cabot Tower", "브랜든 힐에서 시내 전망을 볼 수 있는 탑입니다.", "A tower on Brandon Hill with city views."),
        H("bristol", 6, "SS 그레이트 브리튼", "SS Great Britain", "브루넬의 역사적 증기선을 복원한 전시관입니다.", "Brunel's restored historic steamship museum."),
    ],
    "amsterdam": [
        H("amsterdam", 1, "왕궁(담 광장)", "Royal Palace Amsterdam", "담 광장의 왕실 궁전으로, 시내 중심의 랜드마크입니다.", "The royal palace on Dam Square—a central city landmark.", "Royal Palace Amsterdam"),
        H("amsterdam", 2, "운하 크루즈", "Canal cruise", "운하를 따라 도시 풍경을 감상하는 고전 코스입니다.", "A classic way to see the city from the canals.", "Canals of Amsterdam"),
        H("amsterdam", 3, "반 고흐 미술관", "Van Gogh Museum", "반 고흐 작품을 가장 풍부하게 볼 수 있는 곳입니다.", "The richest collection of Van Gogh's work."),
        H("amsterdam", 4, "요르단 지구", "Jordaan district", "운하와 카페·소품숍이 매력적인 거주지 지구입니다.", "A charming district of canals, cafés, and boutiques.", "Jordaan Amsterdam"),
        H("amsterdam", 5, "앤 프랭크 하우스", "Anne Frank House", "역사적 은신처를 보존한 감동적인 박물관입니다.", "A moving museum preserving the historic hiding place."),
        H("amsterdam", 6, "레이크스 미술관", "Rijksmuseum", "렘브란트 등 네덜란드 거장을 만나는 국립미술관입니다.", "The national museum of Dutch masters including Rembrandt."),
        H("amsterdam", 7, "꽃시장", "Bloemenmarkt", "운하 위 수상 꽃시장으로 튤립 구근이 유명합니다.", "A floating flower market famous for tulip bulbs.", "Bloemenmarkt Amsterdam"),
    ],
    "rotterdam": [
        H("rotterdam", 1, "마르크탈", "Markthal", "아치형 주거 지붕 아래의 푸드홀입니다.", "A food hall under a striking arched residential roof."),
        H("rotterdam", 2, "에라스무스 다리", "Erasmus Bridge", "로테르담 스카이라인을 상징하는 하얀 다리입니다.", "The white bridge that defines Rotterdam's skyline.", "Erasmusbrug"),
        H("rotterdam", 3, "큐브 하우스", "Cube Houses", "기울어진 큐브형 주택의 독특한 건축 명소입니다.", "Tilted cube houses and a unique architecture stop.", "Cube Houses Rotterdam"),
        H("rotterdam", 4, "항구 투어", "Harbour tour", "유럽 최대급 항구의 풍경을 배에서 봅니다.", "A boat view of one of Europe's great ports.", "Rotterdam harbour"),
        H("rotterdam", 5, "보임만스 미술관", "Museum Boijmans Van Beuningen", "현대·고전이 공존하는 대표 미술관입니다.", "A major museum of modern and classic art."),
        H("rotterdam", 6, "유로마스트", "Euromast", "전망대에서 시내와 항구를 한눈에 담습니다.", "An observation tower over the city and harbour."),
    ],
    "the-hague": [
        H("the-hague", 1, "노르다인데 궁전", "Noordeinde Palace", "네덜란드 국왕의 업무용 왕궁입니다.", "The working palace of the Dutch monarch.", "Noordeinde Palace The Hague"),
        H("the-hague", 2, "평화궁", "Peace Palace", "국제사법재판소가 있는 상징적 건물입니다.", "Home of the International Court of Justice."),
        H("the-hague", 3, "마우리츠하위스", "Mauritshuis", "진주 귀걸이를 한 소녀 등 명작이 있는 미술관입니다.", "Home to Girl with a Pearl Earring and other masterpieces."),
        H("the-hague", 4, "스헤베닝언", "Scheveningen", "해변과 피어가 있는 덴 하흐의 휴양지입니다.", "The Hague's beach and pier resort.", "Scheveningen"),
        H("the-hague", 5, "비넨호프", "Binnenhof", "네덜란드 정치의 중심인 역사적 의회 단지입니다.", "The historic seat of Dutch politics."),
        H("the-hague", 6, "마뒤로담", "Madurodam", "네덜란드 명소의 미니어처 테마파크입니다.", "A miniature park of Dutch landmarks."),
        H("the-hague", 7, "에셔 미술관", "Escher in The Palace", "착시 예술로 유명한 에셔 작품을 감상합니다.", "A museum dedicated to M.C. Escher's optical art.", "Escher in Het Paleis"),
    ],
    "utrecht": [
        H("utrecht", 1, "돔 타워", "Dom Tower", "네덜란드에서 가장 높은 교회탑으로 시내를 조망합니다.", "The Netherlands' tallest church tower with city views."),
        H("utrecht", 2, "아우데흐라흐트", "Oudegracht", "상점과 카페가 늘어선 운하 산책 코스입니다.", "A canal walk lined with shops and cafés."),
        H("utrecht", 3, "중앙역 지구", "Station area", "현대적 쇼핑·교통 허브인 역세권입니다.", "A modern shopping and transit hub.", "Utrecht Centraal"),
        H("utrecht", 4, "자동악기 박물관", "Museum Speelklok", "자동악기·오르골을 체험하는 독특한 박물관입니다.", "A unique museum of musical clocks and automata."),
        H("utrecht", 5, "돔 교회", "Dom Church", "돔 타워와 연결된 고딕 성당 유적입니다.", "Gothic cathedral remains linked to the Dom Tower.", "Dom Church Utrecht"),
        H("utrecht", 6, "흐리프트파크", "Griftpark", "도심 녹지에서 여유로운 산책을 즐깁니다.", "A green city park for easy strolls."),
    ],
    "haarlem": [
        H("haarlem", 1, "흐로테 마르크트", "Grote Markt", "성당과 시청이 있는 활기찬 중앙 광장입니다.", "A lively main square with church and town hall.", "Grote Markt Haarlem"),
        H("haarlem", 2, "프란스 할스 미술관", "Frans Hals Museum", "황금시대 초상화의 거장 작품을 만납니다.", "Works by the Golden Age portrait master."),
        H("haarlem", 3, "하를럼 역", "Haarlem station", "네덜란드에서 가장 아름다운 역사 중 하나입니다.", "One of the Netherlands' most beautiful stations.", "Haarlem railway station"),
        H("haarlem", 4, "성 바보 교회", "St Bavo's Church", "거대한 오르간이 있는 고딕 교회입니다.", "A Gothic church with a famous organ.", "Grote Kerk Haarlem"),
        H("haarlem", 5, "타일러스 박물관", "Teylers Museum", "네덜란드 최고(最古) 박물관으로 과학·미술을 봅니다.", "The oldest museum in the Netherlands—science and art."),
        H("haarlem", 6, "스파르네 강변", "Spaarne riverfront", "강변 카페와 보트 풍경이 여유롭습니다.", "Cafés and boats along the Spaarne.", "Spaarne Haarlem"),
    ],
    "delft": [
        H("delft", 1, "니우커르크", "Nieuwe Kerk", "오라녜 가문의 묘가 있는 높은 첨탑의 교회입니다.", "A tall-spired church with the House of Orange crypt.", "Nieuwe Kerk Delft"),
        H("delft", 2, "델프트 블루", "Delft Blue", "전통 청화 도자기를 만나는 공방·박물관입니다.", "Workshops and museums of classic blue-and-white pottery.", "Royal Delft"),
        H("delft", 3, "마르크트 광장", "Markt square", "시청과 교회가 마주한 아름다운 광장입니다.", "A beautiful square facing town hall and church.", "Markt Delft"),
        H("delft", 4, "아우더커르크", "Oude Kerk", "기울어진 탑으로 유명한 구시가 교회입니다.", "The old church known for its leaning tower.", "Oude Kerk Delft"),
        H("delft", 5, "베르메르 센터", "Vermeer Centrum Delft", "델프트의 거장 베르메르를 조명하는 센터입니다.", "A centre devoted to Delft's master Vermeer."),
        H("delft", 6, "운하 산책", "Delft canals", "벽돌 집과 다리가 이어진 운하를 거닙니다.", "A walk along brick houses and canal bridges."),
    ],
    "maastricht": [
        H("maastricht", 1, "프레이토프", "Vrijthof", "성당과 카페가 둘러싼 대표적인 광장입니다.", "The main square ringed by churches and cafés."),
        H("maastricht", 2, "마스트리히트 동굴", "Caves of Maastricht", "석회암 지하 통로를 탐험하는 독특한 체험입니다.", "A unique tour through limestone underground passages.", "Sint Pietersberg Maastricht"),
        H("maastricht", 3, "대학 지구", "University", "유럽적인 분위기의 대학 도시 골목을 거닙니다.", "European-feeling university lanes.", "Maastricht city centre"),
        H("maastricht", 4, "성 세르바티우스 성당", "Basilica of Saint Servatius", "네덜란드에서 가장 오래된 교회 중 하나입니다.", "One of the oldest churches in the Netherlands."),
        H("maastricht", 5, "헬푸르트", "Helpoort", "현존하는 중세 성문으로 구시가 입구입니다.", "A surviving medieval city gate."),
        H("maastricht", 6, "마스 강변", "Meuse riverfront", "강변 산책과 카페 테라스가 여유롭습니다.", "A relaxed riverside walk and café terraces.", "Maastricht Meuse"),
    ],
    "giethoorn": [
        H("giethoorn", 1, "보트 투어", "Boat tour", "차로 대신 보트로 마을을 누비는 대표 체험입니다.", "The classic way to explore—by boat, not car.", "Giethoorn boat"),
        H("giethoorn", 2, "운하 산책", "Canal walk", "작은 다리와 운하를 따라 걷는 한적한 코스입니다.", "A quiet walk along tiny bridges and canals.", "Giethoorn canals"),
        H("giethoorn", 3, "초가 지붕 집", "Thatched houses", "전통 초가 가옥이 그림처럼 이어집니다.", "Picture-perfect thatched cottages.", "Giethoorn"),
        H("giethoorn", 4, "마을 박물관", "Museum Giethoorn", "전통 가옥을 복원한 마을 생활 박물관입니다.", "A village-life museum in a traditional farmhouse.", "Museum Giethoorn"),
    ],
    "luxembourg-city": [
        H("luxembourg-city", 1, "대공 궁전", "Grand Ducal Palace", "룩셈부르크 대공가의 도심 왕궁입니다.", "The city-centre palace of the Grand Ducal family.", "Grand Ducal Palace Luxembourg"),
        H("luxembourg-city", 2, "구시가 UNESCO", "Old Town UNESCO", "성벽과 계곡이 어우러진 유네스코 구시가입니다.", "UNESCO old town of walls and dramatic valleys.", "Luxembourg City old town"),
        H("luxembourg-city", 3, "보크 카즈마트", "Bock Casemates", "바위 속 방어 터널을 탐험하는 명소입니다.", "Historic defensive tunnels carved into the rock."),
        H("luxembourg-city", 4, "키르히베르크", "Kirchberg", "EU 기관과 현대 건축이 모인 지구입니다.", "A district of EU institutions and modern architecture.", "Kirchberg Luxembourg"),
        H("luxembourg-city", 5, "노트르담 대성당", "Notre-Dame Cathedral", "도심의 후기 고딕·르네상스 성당입니다.", "The city's late Gothic and Renaissance cathedral.", "Notre-Dame Cathedral Luxembourg"),
        H("luxembourg-city", 6, "아돌프 다리", "Adolphe Bridge", "구시가와 신시가를 잇는 상징적 고가교입니다.", "The iconic bridge linking old and new districts."),
        H("luxembourg-city", 7, "그룬트", "Grund", "강변 아래 마을의 분위기 있는 산책 코스입니다.", "Atmospheric walks in the valley village below.", "Grund Luxembourg"),
    ],
    "vianden": [
        H("vianden", 1, "비앙덴 성", "Vianden Castle", "언덕 위의 중세 성으로 룩셈부르크 최고의 성 중 하나입니다.", "A hilltop medieval castle—among Luxembourg's finest."),
        H("vianden", 2, "우르 강", "Our river", "성 아래로 흐르는 강변 산책이 아름답습니다.", "A scenic riverside walk beneath the castle.", "Vianden"),
        H("vianden", 3, "케이블카", "Chairlift", "케이블카로 성·계곡 전망을 즐깁니다.", "A chairlift with castle and valley views.", "Vianden chairlift"),
        H("vianden", 4, "빅토르 위고 박물관", "Victor Hugo Museum", "위고가 머물렀던 집을 재현한 작은 박물관입니다.", "A small museum in the house where Victor Hugo stayed.", "Victor Hugo Museum Vianden"),
    ],
    "echternach": [
        H("echternach", 1, "에히터나흐 호수", "Echternach Lake", "호숫가 산책과 자전거 코스가 인기입니다.", "Popular lakeside walks and bike paths.", "Echternach"),
        H("echternach", 2, "바실리카", "Basilica", "성 윌리브로르드와 관련된 역사적 성당입니다.", "A historic basilica linked to Saint Willibrord.", "Basilica of Saint Willibrord"),
        H("echternach", 3, "뮐러탈 입구", "Müllerthal gateway", "록앤리브 트레일의 관문 마을입니다.", "Gateway town to the Müllerthal rock trails.", "Müllerthal"),
        H("echternach", 4, "중세 시가", "Medieval streets", "작은 광장과 돌길이 이어지는 구시가입니다.", "Old streets and small squares of stone.", "Echternach old town"),
    ],
    "remich": [
        H("remich", 1, "모젤 강변", "Moselle riverfront", "강변 산책과 보트 투어의 거점입니다.", "A base for riverside walks and boat trips.", "Remich"),
        H("remich", 2, "와인 루트", "Wine route", "모젤 와인 양조장을 따라가는 드라이브·자전거 코스입니다.", "A drive or bike route along Moselle wineries.", "Moselle Luxembourg wine"),
        H("remich", 3, "프로미나드", "Promenade", "카페 테라스가 늘어선 강변 산책로입니다.", "A riverside promenade lined with café terraces.", "Remich promenade"),
        H("remich", 4, "나비 정원", "Butterfly Garden", "근교의 열대 나비 온실 명소입니다.", "A nearby tropical butterfly greenhouse.", "Jardins des Papillons Grevenmacher"),
    ],
    "brussels": [
        H("brussels", 1, "왕궁", "Royal Palace of Brussels", "벨기에 왕실의 공식 브뤼셀 궁전입니다.", "The official Brussels palace of the Belgian royal family.", "Royal Palace of Brussels"),
        H("brussels", 2, "그랑플라스", "Grand-Place", "유네스코 광장으로 길드하우스와 시청이 장관입니다.", "A UNESCO square of guildhalls and the town hall.", "Grand-Place Brussels"),
        H("brussels", 3, "아토미움", "Atomium", "만국박람회 유산의 미래형 전망 구조물입니다.", "A futuristic Expo landmark with viewing decks."),
        H("brussels", 4, "생트카트린", "Sainte-Catherine", "해산물과 카페가 있는 분위기 좋은 지구입니다.", "A lively seafood and café district.", "Sainte-Catherine Brussels"),
        H("brussels", 5, "마네켄피스", "Manneken Pis", "작은 동상으로 유명한 브뤼셀의 상징입니다.", "The tiny statue that became a city symbol."),
        H("brussels", 6, "마그리트 미술관", "Magritte Museum", "초현실주의 거장 마그리트 작품을 만납니다.", "A museum devoted to Magritte's surrealism."),
        H("brussels", 7, "몽데자르", "Mont des Arts", "미술관과 정원·전망이 있는 문화 언덕입니다.", "A cultural hill of museums, gardens, and views."),
    ],
    "bruges": [
        H("bruges", 1, "마르크트", "Markt", "종탑과 마차 풍경이 있는 중앙 광장입니다.", "The main square with belfry and horse carriages.", "Markt Bruges"),
        H("bruges", 2, "벨프리", "Belfry", "광장 위 종탑에서 도시 전망을 봅니다.", "Climb the square's belfry for city views.", "Belfry of Bruges"),
        H("bruges", 3, "운하 보트", "Canal boat", "중세 운하를 따라가는 클래식 보트 투어입니다.", "A classic boat tour along medieval canals.", "Canals of Bruges"),
        H("bruges", 4, "민워터", "Minnewater", "호수와 공원이 아름다운 '사랑의 호수'입니다.", "The scenic Lake of Love and park."),
        H("bruges", 5, "성혈 성당", "Basilica of the Holy Blood", "성혈 유물로 유명한 광장의 성당입니다.", "A square-side basilica famed for a holy relic."),
        H("bruges", 6, "그루닝에 미술관", "Groeningemuseum", "플랑드르 거장 회화를 소장한 미술관입니다.", "A museum of Flemish master paintings."),
    ],
    "ghent": [
        H("ghent", 1, "흐라슬레이", "Graslei", "운하변 길드하우스가 늘어선 가장 아름다운 풍경입니다.", "The loveliest canal front of guildhouses."),
        H("ghent", 2, "성 바보 대성당", "St Bavo's Cathedral", "신비의 양털을 볼 수 있는 대성당입니다.", "Cathedral home to the Ghent Altarpiece.", "Saint Bavo's Cathedral Ghent"),
        H("ghent", 3, "흐라븐스텐", "Gravensteen", "도심의 중세 성채로 전망과 역사가 함께합니다.", "A medieval castle in the city centre."),
        H("ghent", 4, "종탑", "Belfry of Ghent", "유네스코 종탑에서 시내를 조망합니다.", "UNESCO belfry with panoramic city views."),
        H("ghent", 5, "파트르스홀", "Patershol", "좁은 골목과 식당이 모인 분위기 지구입니다.", "An atmospheric maze of lanes and restaurants."),
        H("ghent", 6, "SMAK", "SMAK", "현대미술을 다루는 시립 미술관입니다.", "The city's museum of contemporary art.", "SMAK Ghent"),
    ],
    "antwerp": [
        H("antwerp", 1, "중앙역", "Central Station", "유럽에서 가장 아름다운 역 중 하나로 꼽힙니다.", "Often ranked among Europe's most beautiful stations.", "Antwerpen-Centraal"),
        H("antwerp", 2, "성모 대성당", "Cathedral", "높은 첨탑의 고딕 대성당입니다.", "A Gothic cathedral with a soaring spire.", "Cathedral of Our Lady Antwerp"),
        H("antwerp", 3, "스헬더 강변", "Scheldt waterfront", "강변 산책과 항구 풍경이 시원합니다.", "Open walks and harbour views on the Scheldt.", "Antwerp Scheldt"),
        H("antwerp", 4, "흐로터 마르크트", "Grote Markt", "시청과 길드하우스가 늘어선 광장입니다.", "A square of town hall and guildhouses.", "Grote Markt Antwerp"),
        H("antwerp", 5, "MAS", "MAS", "현대적 박물관 건물에서 항구 역사를 봅니다.", "A striking museum of the city's port history.", "MAS Antwerp"),
        H("antwerp", 6, "루벤스 하우스", "Rubenshuis", "화가 루벤스의 집과 작업실 박물관입니다.", "The home and studio museum of Rubens."),
    ],
    "leuven": [
        H("leuven", 1, "시청사", "Town Hall", "고딕 조각으로 덮인 화려한 시청 건물입니다.", "A lavish Gothic town hall covered in statues.", "Leuven Town Hall"),
        H("leuven", 2, "대학 도서관", "University Library", "종탑이 인상적인 대학 도서관입니다.", "The university library with a landmark tower.", "University Library KU Leuven"),
        H("leuven", 3, "아우더 마르크트", "Oude Markt", "'세계 최장의 바'로 불리는 활기찬 광장입니다.", "A lively square nicknamed the longest bar in the world."),
        H("leuven", 4, "성 피터 교회", "St Peter's Church", "시청 옆의 고딕 교회와 광장입니다.", "A Gothic church beside the town hall square.", "St Peter's Church Leuven"),
        H("leuven", 5, "대베긴호프", "Grand Beguinage", "유네스코 베긴 공동체의 고요한 골목입니다.", "A UNESCO beguinage of quiet lanes.", "Grand Beguinage Leuven"),
        H("leuven", 6, "식물원", "Botanic Garden", "도심의 작은 식물원에서 휴식을 취합니다.", "A small city botanic garden for a pause.", "Leuven Botanic Garden"),
    ],
    "dinant": [
        H("dinant", 1, "시타델", "Citadel", "절벽 위 요새에서 뮤즈강 전망을 봅니다.", "A clifftop fortress with Meuse views.", "Citadel of Dinant"),
        H("dinant", 2, "노트르담", "Notre-Dame", "강변의 양파 돔 성당이 상징입니다.", "The riverside church with onion domes.", "Church of Our Lady Dinant"),
        H("dinant", 3, "뮤즈 강", "River Meuse", "카약·유람선으로 즐기는 강변 풍경입니다.", "River scenery by kayak or cruise boat.", "Dinant Meuse"),
        H("dinant", 4, "색소폰 다리", "Charles de Gaulle Bridge", "색색의 색소폰 조형이 있는 강변 다리입니다.", "A river bridge with colourful saxophone sculptures.", "Dinant bridge saxophones"),
    ],
    "oslo": [
        H("oslo", 1, "왕궁", "Royal Palace", "오슬로 중심의 노르웨이 왕실 궁전입니다.", "The Norwegian royal palace in central Oslo.", "Royal Palace Oslo"),
        H("oslo", 2, "오페라 하우스", "Opera House", "지붕 위로 올라가 피오르 전망을 즐기는 건축 명소입니다.", "Walk the roof for fjord views—an architecture icon.", "Oslo Opera House"),
        H("oslo", 3, "비겔란 공원", "Vigeland Park", "조각 작품이 가득한 독특한 도시 공원입니다.", "A unique city park filled with sculptures.", "Frogner Park"),
        H("oslo", 4, "아커 브뤼게", "Aker Brygge", "수변 식당과 산책로가 있는 현대적 항구 지구입니다.", "A modern harbour of restaurants and promenades."),
        H("oslo", 5, "바이킹 선박 박물관", "Viking Ship Museum", "바이킹 선박 유적을 만나는 대표 박물관입니다.", "Home to extraordinary Viking ship finds.", "Viking Ship Museum Oslo"),
        H("oslo", 6, "뭉크 미술관", "Munch Museum", "절규로 유명한 뭉크의 작품을 감상합니다.", "A museum devoted to Munch, including The Scream.", "MUNCH Oslo"),
        H("oslo", 7, "홀멘콜렌", "Holmenkollen", "스키 점프대와 시내·피오르 전망이 있는 언덕입니다.", "A ski jump hill with city and fjord views."),
    ],
    "bergen": [
        H("bergen", 1, "브리겐", "Bryggen", "한자 상인의 색색 목조 창고가 늘어선 유네스코 지구입니다.", "UNESCO wharf of colourful Hanseatic wooden warehouses."),
        H("bergen", 2, "플로이엔 산", "Mount Fløyen", "플로이반엔으로 올라 도시 전망을 봅니다.", "Take the Fløibanen for city views.", "Fløyen Bergen"),
        H("bergen", 3, "생선 시장", "Fish Market", "해산물과 현지 먹거리를 만나는 수변 시장입니다.", "A waterfront market of seafood and local food.", "Bergen Fishmarket"),
        H("bergen", 4, "트롤하우겐", "Troldhaugen", "그리그가 살았던 집과 연주 홀입니다.", "Edvard Grieg's home and concert venue."),
        H("bergen", 5, "코데 미술관", "KODE Museums", "미술·디자인 박물관이 모인 문화 단지입니다.", "A cluster of art and design museums.", "KODE Bergen"),
        H("bergen", 6, "울리켄", "Mount Ulriken", "케이블카로 오르는 더 높은 전망 산입니다.", "A higher viewpoint reached by cable car."),
    ],
    "tromso": [
        H("tromso", 1, "북극 대성당", "Arctic Cathedral", "얼음 형상의 현대 성당으로 트롬쇠의 상징입니다.", "An ice-inspired modern church and city symbol."),
        H("tromso", 2, "케이블카", "Cable car", "피엘헤이센으로 올라가 피오르 전망을 봅니다.", "Ride Fjellheisen for fjord views.", "Fjellheisen Tromsø"),
        H("tromso", 3, "피오르 크루즈", "Fjord cruise", "북극 피오르 풍경을 배로 감상합니다.", "Boat views of Arctic fjord scenery.", "Tromsø fjord"),
        H("tromso", 4, "폴라리아", "Polaria", "북극 자연과 물개를 만나는 체험형 박물관입니다.", "An Arctic experience centre with seals and exhibits."),
        H("tromso", 5, "트롬쇠 구시가", "Tromsø centre", "목조 상점가와 항구가 이어지는 도심입니다.", "Wooden shop streets and harbour downtown.", "Tromsø city centre"),
    ],
    "stavanger": [
        H("stavanger", 1, "프라이케스톨렌", "Preikestolen", "뤼세피오르 위 절벽 바위 전망이 장관입니다.", "The cliff-top Pulpit Rock above Lysefjord."),
        H("stavanger", 2, "감레 스타방에르", "Gamle Stavanger", "흰 목조 가옥이 늘어선 구시가입니다.", "An old town of white wooden houses."),
        H("stavanger", 3, "석유 박물관", "Petroleum Museum", "노르웨이 석유 산업을 다루는 현대 박물관입니다.", "A modern museum of Norway's oil industry.", "Norwegian Petroleum Museum"),
        H("stavanger", 4, "대성당", "Stavanger Cathedral", "노르웨이에서 가장 오래된 대성당 중 하나입니다.", "One of Norway's oldest cathedrals."),
        H("stavanger", 5, "항구 지구", "Harbour", "카페와 보트 풍경이 있는 수변입니다.", "A waterfront of cafés and boats.", "Stavanger harbour"),
    ],
    "trondheim": [
        H("trondheim", 1, "니다로스 대성당", "Nidaros Cathedral", "북유럽 고딕의 걸작으로 순례의 목적지입니다.", "A Gothic masterpiece and pilgrimage destination."),
        H("trondheim", 2, "올드 타운 브리지", "Old Town Bridge", "빨간 문이 인상적인 강변 다리입니다.", "The riverside bridge with a famous red portal.", "Old Town Bridge Trondheim"),
        H("trondheim", 3, "바클란데트", "Bakklandet", "컬러풀 목조 집과 카페가 있는 언덕 지구입니다.", "A hillside of colourful wooden houses and cafés."),
        H("trondheim", 4, "항구 창고", "Wharves", "니델바 강변의 역사적 목조 창고입니다.", "Historic wooden warehouses on the Nidelva.", "Trondheim wharves"),
        H("trondheim", 5, "록펜덴 박물관", "Rockheim", "노르웨이 대중음악 박물관입니다.", "Norway's national museum of pop and rock."),
    ],
    "alesund": [
        H("alesund", 1, "악슬라 전망대", "Aksla viewpoint", "418계단을 올라 아르누보 시내 전망을 봅니다.", "Climb 418 steps for Art Nouveau city views.", "Ålesund Aksla"),
        H("alesund", 2, "아르누보 센터", "Art Nouveau Centre", "재건 도시의 건축 양식을 소개하는 센터입니다.", "A centre explaining the rebuilt city's style.", "Jugendstilsenteret"),
        H("alesund", 3, "주변 섬", "Nearby islands", "보트나 도보로 이어지는 항구 섬들입니다.", "Harbour islands linked by boat or foot.", "Ålesund islands"),
        H("alesund", 4, "항구 산책", "Harbour walk", "아르누보 파사드가 늘어선 수변 산책입니다.", "A waterfront walk of Art Nouveau façades.", "Ålesund harbour"),
    ],
    "flam": [
        H("flam", 1, "플롬 철도", "Flåm Railway", "피오르 협곡을 오르는 세계적 풍경 열차입니다.", "A world-famous scenic railway through fjord valleys.", "Flåm Line"),
        H("flam", 2, "피오르 크루즈", "Fjord cruise", "아우를란스피오르의 절벽을 배로 감상합니다.", "Boat views of Aurlandsfjord cliffs.", "Aurlandsfjord"),
        H("flam", 3, "아우를란", "Aurland", "피오르 마을과 전망대 드라이브 코스입니다.", "A fjord village and viewpoint drive.", "Aurland"),
        H("flam", 4, "플롬 마을", "Flåm village", "기차·유람선이 모이는 작은 피오르 거점입니다.", "A tiny fjord hub for trains and cruises.", "Flåm"),
    ],
    "helsinki": [
        H("helsinki", 1, "헬싱키 대성당", "Helsinki Cathedral", "흰 돔의 신고전주의 성당으로 시의 상징입니다.", "The white neoclassical cathedral and city emblem."),
        H("helsinki", 2, "수오멘린나", "Suomenlinna", "섬 위의 유네스코 해상 요새입니다.", "A UNESCO sea fortress on linked islands."),
        H("helsinki", 3, "디자인 디스트릭트", "Design District", "핀란드 디자인을 만나는 상점·갤러리 지구입니다.", "Shops and galleries of Finnish design.", "Design District Helsinki"),
        H("helsinki", 4, "마켓 스퀘어", "Market Square", "항구 앞 활기찬 노천 시장입니다.", "A lively open-air harbour market.", "Helsinki Market Square"),
        H("helsinki", 5, "템펠리아우키오", "Temppeliaukio Church", "바위를 깎아 만든 독특한 교회입니다.", "A striking church carved into solid rock."),
        H("helsinki", 6, "우르호 케코넨 박물관", "Seurasaari", "야외 민속 박물관이 있는 숲 섬입니다.", "A forest island with an open-air folk museum.", "Seurasaari"),
    ],
    "turku": [
        H("turku", 1, "투르쿠 성", "Turku Castle", "핀란드 중세 역사의 상징인 항구 성입니다.", "A harbour castle symbolising medieval Finland."),
        H("turku", 2, "대성당", "Cathedral", "핀란드 루터교의 모(母)성당입니다.", "The mother church of Finnish Lutheranism.", "Turku Cathedral"),
        H("turku", 3, "아우라 강", "Aura River", "강변 카페와 배 산책이 매력적입니다.", "Riverside cafés and boat walks."),
        H("turku", 4, "루오스티살미", "Luostarinmäki", "목조 가옥을 보존한 수공업 박물관 지구입니다.", "A handicraft museum quarter of wooden houses.", "Luostarinmäki"),
        H("turku", 5, "포르룸 마리눔", "Forum Marinum", "해양 박물관과 박물관 선박이 있는 항구입니다.", "A maritime museum and museum ships.", "Forum Marinum Turku"),
    ],
    "tampere": [
        H("tampere", 1, "피니키 전망탑", "Pyynikki tower", "호수 전망과 도넛으로 유명한 전망탑입니다.", "A viewpoint tower famous for lake views and doughnuts.", "Pyynikki Observation Tower"),
        H("tampere", 2, "무민 박물관", "Moomin Museum", "무민 세계를 만나는 독특한 박물관입니다.", "A unique museum devoted to the Moomins."),
        H("tampere", 3, "탐메르코스키", "Tammerkoski", "도심을 가르는 급류와 공장 경관입니다.", "Rapids and industrial scenery cutting through the city."),
        H("tampere", 4, "시라쿠세 대성당", "Tampere Cathedral", "국민낭만주의 벽화가 유명한 성당입니다.", "A cathedral famed for National Romantic murals."),
        H("tampere", 5, "사라스톤니에미", "Särkänniemi", "전망대·박물관·공원이 있는 호숫가 단지입니다.", "A lakeside complex of tower, museums, and park."),
    ],
    "rovaniemi": [
        H("rovaniemi", 1, "산타클로스 마을", "Santa Claus Village", "산타를 만나고 북극권 인증을 받는 명소입니다.", "Meet Santa and cross the Arctic Circle line."),
        H("rovaniemi", 2, "북극권", "Arctic Circle", "북극권 선이 지나는 상징적 지점입니다.", "The symbolic line of the Arctic Circle.", "Rovaniemi Arctic Circle"),
        H("rovaniemi", 3, "아르크티쿰", "Arktikum", "북극 자연과 라플란드 문화를 다루는 박물관입니다.", "A museum of Arctic nature and Lapland culture."),
        H("rovaniemi", 4, "오우나스바르라", "Ounasvaara", "하이킹과 전망이 있는 시내 옆 언덕입니다.", "A city-side hill for hiking and views."),
    ],
    "porvoo": [
        H("porvoo", 1, "구시가", "Old Town", "색색 목조 집과 돌길이 이어지는 중세 마을입니다.", "A medieval town of colourful wooden houses.", "Porvoo"),
        H("porvoo", 2, "포르보 대성당", "Porvoo Cathedral", "언덕 위의 역사적 성당입니다.", "A historic hilltop cathedral."),
        H("porvoo", 3, "강변 창고", "Riverside warehouses", "빨간 목조 창고가 늘어선 강변 풍경입니다.", "The famous row of red wooden riverside warehouses.", "Porvoo river warehouses"),
        H("porvoo", 4, "장인 거리", "Craft streets", "수제 상점과 카페가 모인 구시가 골목입니다.", "Old lanes of craft shops and cafés.", "Porvoo old town shops"),
    ],
    "stockholm": [
        H("stockholm", 1, "왕궁", "Royal Palace", "감라스탄의 스웨덴 왕실 공식 궁전입니다.", "The official Swedish royal palace in Gamla Stan.", "Stockholm Palace"),
        H("stockholm", 2, "감라스탄", "Gamla Stan", "중세 골목과 광장이 이어지는 구시가입니다.", "The old town of medieval lanes and squares.", "Gamla stan"),
        H("stockholm", 3, "바사 박물관", "Vasa Museum", "17세기 전쟁선을 통째로 보존한 박물관입니다.", "A museum built around a preserved 17th-century warship."),
        H("stockholm", 4, "포토그라피스카", "Fotografiska", "수변의 현대 사진 미술관입니다.", "A contemporary photography museum on the waterfront."),
        H("stockholm", 5, "시청사", "Stockholm City Hall", "노벨 만찬으로 유명한 붉은 벽돌 시청입니다.", "The red-brick hall famous for the Nobel banquet."),
        H("stockholm", 6, "스칸센", "Skansen", "야외 민속 박물관과 동물원이 있는 공원입니다.", "An open-air museum and zoo on Djurgården."),
        H("stockholm", 7, "쇠데르말름", "Södermalm", "전망과 카페·독립 상점이 많은 힙한 섬 지구입니다.", "A hip island district of views, cafés, and indie shops."),
    ],
    "gothenburg": [
        H("gothenburg", 1, "페스케코르카", "Feskekörka", "교회처럼 생긴 해산물 시장입니다.", "A seafood market that looks like a church."),
        H("gothenburg", 2, "리세베리", "Liseberg", "북유럽 대표 놀이공원입니다.", "One of Northern Europe's great amusement parks."),
        H("gothenburg", 3, "하가", "Haga", "목조 집과 카페가 있는 분위기 좋은 지구입니다.", "A charming district of wooden houses and cafés.", "Haga Gothenburg"),
        H("gothenburg", 4, "운하 크루즈", "Paddan cruise", "운하를 따라 도시를 보는 클래식 보트 투어입니다.", "A classic canal boat tour of the city.", "Paddan Gothenburg"),
        H("gothenburg", 5, "우주과학관", "Universeum", "과학·수족관이 결합된 체험형 센터입니다.", "A hands-on science centre and aquarium."),
        H("gothenburg", 6, "스카넨스 레바탄", "Skansen Kronan", "언덕 위 요새에서 시내 전망을 봅니다.", "A hilltop fort with city views."),
    ],
    "malmo": [
        H("malmo", 1, "터닝 토르소", "Turning Torso", "트위스트 형태의 초고층 랜드마크입니다.", "The twisting skyscraper landmark."),
        H("malmo", 2, "구시가", "Old Town", "광장과 벽돌 거리가 이어지는 감멜라스탄입니다.", "Squares and brick streets of Gamla Staden.", "Malmö Gamla Staden"),
        H("malmo", 3, "외레순드 전망", "Öresund views", "덴마크를 잇는 외레순드 다리 풍경입니다.", "Views toward the Øresund Bridge to Denmark.", "Øresund Bridge Malmö"),
        H("malmo", 4, "말뫼 성", "Malmöhus Castle", "북유럽 최남단의 역사적 요새·박물관입니다.", "A historic fortress museum in southern Scandinavia.", "Malmöhus"),
        H("malmo", 5, "리보스크스", "Ribersborg", "도심에서 가까운 해변과 목욕탕입니다.", "A city beach and cold-bath house.", "Ribersborg Malmö"),
    ],
    "uppsala": [
        H("uppsala", 1, "웁살라 대성당", "Uppsala Cathedral", "스칸디나비아에서 가장 큰 성당 중 하나입니다.", "One of the largest churches in Scandinavia."),
        H("uppsala", 2, "식물원", "Botanical Garden", "린네와 관련된 역사적 식물원입니다.", "Historic gardens linked to Linnaeus.", "Linnaean Garden"),
        H("uppsala", 3, "강변", "Riverside", "퓌리스강 변의 카페와 산책로입니다.", "Cafés and paths along the Fyris.", "Uppsala Fyris"),
        H("uppsala", 4, "웁살라 성", "Uppsala Castle", "언덕 위의 르네상스 성과 전망입니다.", "A hilltop Renaissance castle with views."),
        H("uppsala", 5, "구시가", "Old Uppsala lanes", "대학 도시 특유의 자전거·카페 골목입니다.", "University-town lanes of bikes and cafés.", "Uppsala city centre"),
    ],
    "kiruna": [
        H("kiruna", 1, "키루나 교회", "Kiruna Church", "붉은 목조 교회로 Lapland의 상징적 건축입니다.", "A red wooden church and Lapland landmark."),
        H("kiruna", 2, "아이스호텔", "Icehotel (Jukkasjärvi)", "얼음으로 만든 호텔·예술 공간을 견학합니다.", "Visit the ice hotel and art spaces in Jukkasjärvi."),
        H("kiruna", 3, "북극광", "Northern lights", "겨울밤 오로라를 기다리는 대표 거점입니다.", "A classic base for winter aurora watching.", "aurora borealis Kiruna"),
        H("kiruna", 4, "LKAB 광산 투어", "Mine tour", "철광 도시로서의 역사를 체험하는 투어입니다.", "A tour into the town's iron-ore mining story.", "Kiruna mine tour"),
    ],
    "copenhagen": [
        H("copenhagen", 1, "아말리엔보르 궁전", "Amalienborg Palace", "덴마크 왕실의 겨울 거처와 근위병 교대식입니다.", "The royal winter residence and Changing of the Guard.", "Amalienborg"),
        H("copenhagen", 2, "뉘하운", "Nyhavn", "색색 가옥과 배가 늘어선 상징적 운하입니다.", "The iconic canal of colourful houses and boats."),
        H("copenhagen", 3, "티볼리", "Tivoli", "도심 한가운데의 클래식 놀이공원입니다.", "A classic amusement park in the city centre.", "Tivoli Gardens"),
        H("copenhagen", 4, "크리스티안스하운", "Christianshavn", "운하와 카페가 있는 분위기 지구입니다.", "A canal district of cafés and atmosphere."),
        H("copenhagen", 5, "인어공주상", "The Little Mermaid", "해안의 작은 동상으로 코펜하겐의 상징입니다.", "The tiny harbour statue and city symbol."),
        H("copenhagen", 6, "크리스찬스보르", "Christiansborg Palace", "의회·왕실 공간이 있는 섬의 궁전입니다.", "The island palace of parliament and royal halls.", "Christiansborg Palace"),
        H("copenhagen", 7, "라운드 타워", "Round Tower", "나선형 경사로로 올라가는 전망 탑입니다.", "A viewing tower climbed by a spiral ramp.", "Rundetaarn"),
    ],
    "aarhus": [
        H("aarhus", 1, "ARoS", "ARoS", "무지개 파노라마 루프가 유명한 미술관입니다.", "An art museum famous for its rainbow panorama walk.", "ARoS Aarhus"),
        H("aarhus", 2, "덴 감레 뷔", "Den Gamle By", "덴마크 옛 거리를 재현한 야외 박물관입니다.", "An open-air museum of historic Danish streets.", "The Old Town Aarhus"),
        H("aarhus", 3, "라틴 쿼터", "Latin Quarter", "독립 상점과 카페가 모인 구시가입니다.", "An old quarter of indie shops and cafés.", "Aarhus Latin Quarter"),
        H("aarhus", 4, "오르후스 대성당", "Aarhus Cathedral", "덴마크에서 가장 긴 성당 중 하나입니다.", "One of Denmark's longest cathedrals."),
        H("aarhus", 5, "도크란드", "Dokk1", "항구의 현대적 도서관·문화 센터입니다.", "A modern harbour library and culture house."),
    ],
    "odense": [
        H("odense", 1, "안데르센 박물관", "Andersen Museum", "동화 작가 안데르센의 생가·박물관입니다.", "The museum and birthplace of Hans Christian Andersen.", "Hans Christian Andersen Museum Odense"),
        H("odense", 2, "구시가", "Old Town", "코블스톤과 목조 집이 이어지는 거리입니다.", "Cobbled streets of timber-framed houses.", "Odense old town"),
        H("odense", 3, "오덴세 강", "Odense River", "강변 공원과 보트 산책이 여유롭습니다.", "Riverside parks and easy boat walks."),
        H("odense", 4, "오덴세 대성당", "Odense Cathedral", "성 크누드와 관련된 고딕 성당입니다.", "A Gothic cathedral linked to Saint Canute.", "Saint Canute's Cathedral"),
    ],
    "aalborg": [
        H("aalborg", 1, "웃손 센터", "Utzon Center", "웃손의 건축 철학을 만나는 수변 센터입니다.", "A waterfront centre on Utzon's architecture."),
        H("aalborg", 2, "워터프론트", "Waterfront", "현대적 산책로와 문화 시설이 있는 항구입니다.", "A modern harbour promenade and culture strip.", "Aalborg waterfront"),
        H("aalborg", 3, "욤프루 아네 가데", "Jomfru Ane Gade", "식당과 바가 늘어선 유명한 밤거리입니다.", "A famous street of restaurants and nightlife.", "Aalborg"),
        H("aalborg", 4, "알보르 성", "Aalborghus Castle", "피오르 옆의 르네상스 성입니다.", "A Renaissance castle by the fjord.", "Aalborghus"),
    ],
    "roskilde": [
        H("roskilde", 1, "바이킹 선박 박물관", "Viking Ship Museum", "피오르에서 인양한 바이킹선을 전시합니다.", "Viking ships raised from the fjord.", "Viking Ship Museum Roskilde"),
        H("roskilde", 2, "로스킬레 대성당", "Roskilde Cathedral", "덴마크 왕들의 안치지로 유명한 유네스코 성당입니다.", "UNESCO cathedral and royal burial church."),
        H("roskilde", 3, "피오르", "Fjord", "박물관과 이어지는 피오르 산책 코스입니다.", "Fjord walks linked to the museum area.", "Roskilde Fjord"),
        H("roskilde", 4, "시내 광장", "Town square", "카페와 시장이 있는 아담한 중심 광장입니다.", "A compact square of cafés and market life.", "Roskilde centre"),
    ],
}


def js_str(s: str) -> str:
    return json_dumps_str(s)


def json_dumps_str(s: str) -> str:
    # Match existing cities.ts style: double quotes with escaped quotes
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n") + '"'


def format_highlight(h: dict, indent: str = "      ") -> str:
    lines = [
        f"{indent}{{",
        f'{indent}  id: {js_str(h["id"])},',
        f'{indent}  name: {{ ko: {js_str(h["name"]["ko"])}, en: {js_str(h["name"]["en"])} }},',
        f'{indent}  description: {{ ko: {js_str(h["description"]["ko"])}, en: {js_str(h["description"]["en"])} }},',
        f'{indent}  image: {js_str(h["image"])},',
        f'{indent}  mapsUrl: {js_str(h["mapsUrl"])},',
        f"{indent}}},",
    ]
    return "\n".join(lines)


def main() -> None:
    path = ROOT / "src/data/cities.ts"
    text = path.read_text(encoding="utf-8")

    city_ids = [
        m.group(1)
        for m in re.finditer(r'{\n\s+id: "([^"]+)",\n\s+countryId:', text)
    ]

    for cid in city_ids:
        if cid not in HIGHLIGHTS:
            raise SystemExit(f"No highlights defined for {cid}")

    out = text
    for cid in city_ids:
        pattern = (
            rf'(id: "{re.escape(cid)}",\n\s+countryId:[\s\S]*?)'
            rf"highlights: \[[\s\S]*?\],"
        )
        hl_block = (
            "highlights: [\n"
            + "\n".join(format_highlight(h) for h in HIGHLIGHTS[cid])
            + "\n    ],"
        )
        out2, count = re.subn(pattern, r"\1" + hl_block, out, count=1)
        if count != 1:
            raise SystemExit(f"Failed to replace highlights for {cid} (count={count})")
        out = out2

    path.write_text(out, encoding="utf-8")
    total = sum(len(v) for v in HIGHLIGHTS.values())
    print(f"updated {len(city_ids)} cities, {total} highlights")
    for cid in city_ids:
        print(f"  {cid}: {len(HIGHLIGHTS[cid])}")


if __name__ == "__main__":
    main()
