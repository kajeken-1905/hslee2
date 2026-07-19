#!/usr/bin/env python3
"""Generate shopping place entries (fashion / outlet / grocery) for every city."""

from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "data" / "places-shopping.ts"

# cityId -> [(name, address, ko, en, rating, reviews), ...] ideally fashion, outlet, grocery
SHOPPING: dict[str, list[tuple[str, str, str, str, float, int]]] = {
    "london": [
        ("Selfridges Oxford Street", "Oxford Street, London", "플래그십 패션·럭셔리 백화점.", "Flagship fashion and luxury department store.", 4.5, 42000),
        ("Bicester Village", "Bicester, Oxfordshire", "런던 근교 프리미엄 아울렛.", "Premium designer outlet near London.", 4.4, 28000),
        ("Borough Market", "8 Southwark St, London", "식료품·식재료 마켓의 명소.", "Iconic food and grocery market.", 4.6, 35000),
    ],
    "edinburgh": [
        ("Multrees Walk / Harvey Nichols", "Multrees Walk, Edinburgh", "하이엔드 패션 거리.", "High-end fashion street.", 4.4, 3200),
        ("Livingston Designer Outlet", "Livingston", "스코틀랜드 대표 디자이너 아울렛.", "Scotland’s main designer outlet.", 4.3, 8600),
        ("Farmers Market / Stockbridge", "Stockbridge, Edinburgh", "로컬 식료품·델리 쇼핑.", "Local groceries and deli shopping.", 4.5, 2100),
    ],
    "manchester": [
        ("Selfridges Exchange Square", "Exchange Square, Manchester", "맨체스터 패션·라이프스타일 허브.", "Fashion and lifestyle hub.", 4.4, 12000),
        ("Cheshire Oaks Designer Outlet", "Ellesmere Port", "북서부 대형 디자이너 아울렛.", "Large designer outlet in the North West.", 4.3, 19000),
        ("Mackie Mayor / food hall groceries", "Swan Street, Manchester", "마켓·식료품 감성 쇼핑.", "Market-style food shopping.", 4.5, 4500),
    ],
    "bath": [
        ("SouthGate Bath", "SouthGate, Bath", "센터 패션·하이스트리트.", "City-centre fashion high street.", 4.3, 2800),
        ("Clarks Village (Street)", "Street, Somerset", "배스 근교 클래식 아울렛.", "Classic outlet village near Bath.", 4.2, 7400),
        ("Bath Guildhall Market", "High St, Bath", "로컬 식료품·특산품 마켓.", "Local groceries and speciality market.", 4.4, 1600),
    ],
    "oxford": [
        ("Westgate Oxford", "Westgate, Oxford", "현대 패션 쇼핑몰.", "Modern fashion shopping centre.", 4.3, 5200),
        ("Bicester Village", "Bicester", "옥스퍼드 접근 쉬운 프리미엄 아울렛.", "Premium outlet easy from Oxford.", 4.4, 28000),
        ("Covered Market Oxford", "Market St, Oxford", "센터 식료품·델리 마켓.", "Central groceries and deli market.", 4.5, 4800),
    ],
    "cambridge": [
        ("Grand Arcade", "St Andrew's St, Cambridge", "시내 패션·브랜드 몰.", "City fashion and brand mall.", 4.3, 3100),
        ("Freeport Braintree (day trip)", "Braintree", "캠브리지 권역 아울렛 데이트립.", "Outlet day trip from Cambridge.", 4.2, 6200),
        ("Cambridge Market Square", "Market Hill, Cambridge", "오픈에어 식료품·로컬 마켓.", "Open-air groceries and local market.", 4.4, 2900),
    ],
    "liverpool": [
        ("Liverpool ONE", "Liverpool ONE", "수변 패션·라이프스타일 몰.", "Waterfront fashion lifestyle mall.", 4.4, 15000),
        ("Freeport Fleetwood / Cheshire Oaks day trip", "North West", "근교 아울렛 데이트립.", "Nearby outlet day trips.", 4.2, 5000),
        ("Liverpool Market / Bold Street groceries", "Bold Street area", "로컬 식료품·독립 델리.", "Local groceries and indie delis.", 4.4, 1800),
    ],
    "brighton": [
        ("North Laine & Churchill Square", "Brighton", "인디 패션·하이스트리트.", "Indie fashion and high street.", 4.4, 6400),
        ("McArthurGlen Ashford / Designer Outlet day trip", "Kent/Sussex", "남부 아울렛 데이트립.", "Southern England outlet day trip.", 4.2, 4500),
        ("Brighton Open Market", "London Rd, Brighton", "로컬 식료품·프로듀스 마켓.", "Local groceries and produce market.", 4.5, 2200),
    ],
    "york": [
        ("Coppergate Shopping Centre", "Coppergate, York", "시내 패션·브랜드.", "City fashion and brands.", 4.2, 2100),
        ("McArthurGlen York Designer Outlet", "St Nicholas Ave, York", "요크 디자이너 아울렛.", "York designer outlet.", 4.3, 9800),
        ("York Shambles Market / food stalls", "Shambles, York", "식료품·특산 먹거리 쇼핑.", "Food and speciality grocery shopping.", 4.4, 5600),
    ],
    "bristol": [
        ("Cabot Circus", "Bond St, Bristol", "브리스틀 대표 패션 몰.", "Bristol’s main fashion mall.", 4.3, 8700),
        ("McArthurGlen Bristol Swindon day trip", "Swindon area", "근교 아울렛 옵션.", "Nearby outlet option.", 4.2, 7200),
        ("St Nicholas Market", "Corn St, Bristol", "식료품·스트리트푸드 마켓.", "Groceries and street-food market.", 4.5, 6100),
    ],
    "amsterdam": [
        ("De Bijenkorf Amsterdam", "Dam Square, Amsterdam", "네덜란드 대표 패션 백화점.", "Netherlands’ flagship fashion department store.", 4.4, 18000),
        ("Batavia Stad Fashion Outlet", "Lelystad", "암스테르담 근교 패션 아울렛.", "Fashion outlet near Amsterdam.", 4.3, 12000),
        ("Albert Cuyp Market", "Albert Cuypstraat, Amsterdam", "식료품·로컬 마켓의 명소.", "Famous local groceries market.", 4.5, 22000),
    ],
    "rotterdam": [
        ("Koopgoot / Beurstraverse", "Coolsingel, Rotterdam", "지하·센터 패션 쇼핑.", "Central fashion shopping arcade.", 4.2, 5400),
        ("Designer Outlet Roermond (day trip)", "Roermond", "네덜란드 대표 대형 아울렛.", "Netherlands’ major designer outlet.", 4.4, 21000),
        ("Markthal Rotterdam", "Dominee Jan Scharpstraat", "식료품·마켓홀.", "Food hall and groceries.", 4.5, 28000),
    ],
    "the-hague": [
        ("De Bijenkorf The Hague", "Wagenstraat, The Hague", "헤이그 패션 백화점.", "Fashion department store in The Hague.", 4.3, 4200),
        ("Designer Outlet Roermond (day trip)", "Roermond", "근교 프리미엄 아울렛.", "Nearby premium outlet.", 4.4, 21000),
        ("Haagse Market / local groceries", "Herman Costerstraat", "대형 로컬 식료품 마켓.", "Large local groceries market.", 4.4, 6800),
    ],
    "utrecht": [
        ("Hoog Catharijne", "Utrecht Centraal", "역세권 패션 쇼핑몰.", "Station-area fashion mall.", 4.3, 11000),
        ("Batavia Stad / Roermond day trip", "Netherlands", "근교 아울렛 데이트립.", "Outlet day trips nearby.", 4.3, 8000),
        ("Vredenburg Market", "Vredenburg, Utrecht", "주말 식료품 마켓.", "Weekend groceries market.", 4.4, 2400),
    ],
    "haarlem": [
        ("Grote Houtstraat shopping street", "Haarlem", "시내 패션 스트리트.", "City fashion street.", 4.4, 1800),
        ("Batavia Stad Fashion Outlet", "Lelystad", "하를렘에서 접근 가능한 아울렛.", "Outlet accessible from Haarlem.", 4.3, 12000),
        ("Grote Markt / local groceries", "Haarlem centre", "광장 권역 식료품·델리.", "Square-area groceries and delis.", 4.4, 1500),
    ],
    "delft": [
        ("City centre boutiques (Markt)", "Markt, Delft", "도심 부티크·패션.", "Centre boutiques and fashion.", 4.3, 1200),
        ("Designer Outlet Roermond (day trip)", "Roermond", "근교 아울렛.", "Nearby outlet.", 4.4, 21000),
        ("Local cheese & grocery shops", "Delft centre", "치즈·로컬 식료품점.", "Cheese and local grocery shops.", 4.5, 900),
    ],
    "maastricht": [
        ("Entre Deux / city boutiques", "Maastricht", "센터 패션·부티크.", "Centre fashion and boutiques.", 4.3, 2100),
        ("Designer Outlet Roermond", "Roermond", "마스트리흐트에서 가까운 대형 아울렛.", "Major outlet close to Maastricht.", 4.4, 21000),
        ("Markt groceries & specialty food", "Markt, Maastricht", "광장 식료품·특산품.", "Square groceries and specialities.", 4.4, 1600),
    ],
    "giethoorn": [
        ("Village craft & souvenir shops", "Giethoorn", "마을 공예·패션 소품 숍.", "Village craft and fashion-accessory shops.", 4.2, 800),
        ("Zwolle / nearby outlet day trip", "Overijssel", "근교 도시 아울렛·몰 데이트립.", "Nearby town outlet/mall day trip.", 4.1, 600),
        ("Local farm shops & groceries", "Giethoorn area", "농장·로컬 식료품점.", "Farm shops and local groceries.", 4.4, 500),
    ],
    "luxembourg-city": [
        ("Avenue de la Liberté / Grand Rue", "Luxembourg City", "시내 패션·럭셔리 거리.", "City fashion and luxury streets.", 4.4, 2800),
        ("Designer Outlet Zweibrücken (day trip)", "Germany", "근교 크로스보더 아울렛.", "Cross-border outlet day trip.", 4.3, 9000),
        ("Auchan Kirchberg / grocery hubs", "Kirchberg", "대형 식료품·하이퍼마켓.", "Large grocery hypermarkets.", 4.2, 3500),
    ],
    "vianden": [
        ("Old town boutiques", "Vianden", "구시가지 부티크·기념품 패션.", "Old-town boutiques and fashion souvenirs.", 4.2, 400),
        ("Luxembourg City outlet day trip", "Luxembourg", "수도·근교 아울렛 데이트립.", "Capital/outlet day trip.", 4.2, 1200),
        ("Local grocery & specialty shops", "Vianden", "로컬 식료품·특산품점.", "Local groceries and speciality shops.", 4.3, 350),
    ],
    "echternach": [
        ("Town centre shops", "Echternach", "타운 센터 패션·소품.", "Town-centre fashion and gifts.", 4.2, 380),
        ("Trier / Germany outlet day trip", "Trier area", "국경 넘어 아울렛·몰.", "Cross-border outlet/mall trip.", 4.2, 2100),
        ("Local groceries & bakeries supplies", "Echternach", "로컬 식료품점.", "Local grocery stores.", 4.3, 320),
    ],
    "remich": [
        ("Moselle promenade shops", "Remich", "모젤 강변 소품·패션.", "Moselle promenade shops and fashion.", 4.2, 360),
        ("Luxembourg / Trier shopping day trip", "Region", "근교 쇼핑·아울렛 데이트립.", "Regional shopping/outlet day trip.", 4.2, 1500),
        ("Wine & grocery specialty shops", "Remich", "와인·식료품 특산점.", "Wine and grocery speciality shops.", 4.4, 420),
    ],
    "brussels": [
        ("Avenue Louise / Rue Neuve", "Brussels", "패션 스트리트·하이스트리트.", "Fashion avenue and high street.", 4.3, 7600),
        ("Maasmechelen Village", "Maasmechelen", "벨기에 대표 디자이너 아울렛.", "Belgium’s flagship designer outlet.", 4.4, 14000),
        ("Place Sainte-Catherine / markets", "Brussels", "식료품·시푸드·로컬 마켓.", "Groceries, seafood and local markets.", 4.5, 5200),
    ],
    "bruges": [
        ("Steenstraat shopping street", "Bruges", "시내 패션·브랜드 거리.", "City fashion brand street.", 4.3, 2400),
        ("Maasmechelen Village (day trip)", "Maasmechelen", "근교 프리미엄 아울렛.", "Nearby premium outlet.", 4.4, 14000),
        ("Markt & chocolate/grocery shops", "Markt, Bruges", "식료품·초콜릿·특산품.", "Groceries, chocolate and specialities.", 4.5, 4800),
    ],
    "ghent": [
        ("Veldstraat shopping street", "Ghent", "겐트 메인 패션 거리.", "Ghent’s main fashion street.", 4.3, 2900),
        ("Maasmechelen Village (day trip)", "Maasmechelen", "근교 아울렛.", "Nearby outlet.", 4.4, 14000),
        ("Ghent Market / local groceries", "Groentenmarkt area", "로컬 식료품 마켓.", "Local groceries market.", 4.4, 2100),
    ],
    "antwerp": [
        ("Meir / Schuttershofstraat", "Antwerp", "앤트워프 패션 허브.", "Antwerp fashion hub.", 4.5, 6800),
        ("Maasmechelen Village", "Maasmechelen", "근교 디자이너 아울렛.", "Nearby designer outlet.", 4.4, 14000),
        ("Exotic Market / grocery halls", "Antwerp", "다국적 식료품 마켓.", "International groceries market.", 4.4, 3200),
    ],
    "leuven": [
        ("Bondgenotenlaan shopping", "Leuven", "시내 패션·학생가 쇼핑.", "City fashion and student shopping.", 4.3, 1800),
        ("Maasmechelen Village (day trip)", "Maasmechelen", "근교 아울렛.", "Nearby outlet.", 4.4, 14000),
        ("Weekly market groceries", "Leuven centre", "주간 식료품 마켓.", "Weekly groceries market.", 4.4, 1400),
    ],
    "dinant": [
        ("Town centre boutiques", "Dinant", "강변 타운 부티크.", "Riverside town boutiques.", 4.2, 420),
        ("Namur / regional outlet day trip", "Wallonia", "근교 도시 쇼핑·아울렛.", "Regional shopping/outlet day trip.", 4.1, 900),
        ("Local grocery & specialty food", "Dinant", "로컬 식료품·특산품.", "Local groceries and specialities.", 4.3, 380),
    ],
    "oslo": [
        ("Karl Johans gate / Paleet", "Oslo", "오슬로 메인 패션 거리.", "Oslo’s main fashion street.", 4.3, 5400),
        ("Oslo Fashion Outlet Vestby", "Vestby", "오슬로 근교 패션 아울렛.", "Fashion outlet near Oslo.", 4.3, 7200),
        ("Mathallen Oslo", "Vulkan, Oslo", "식료품·델리 푸드홀.", "Groceries and deli food hall.", 4.5, 8900),
    ],
    "bergen": [
        ("Strandgaten shopping", "Bergen", "시내 패션·브랜드.", "City fashion and brands.", 4.3, 2100),
        ("Oslo/Bergen regional outlet day trip", "Norway", "권역 아울렛·몰 데이트립.", "Regional outlet/mall day trip.", 4.1, 800),
        ("Bergen Fish Market / groceries", "Torget, Bergen", "수산·식료품 마켓.", "Fish and grocery market.", 4.4, 7600),
    ],
    "tromso": [
        ("Storgata shopping", "Tromsø", "시내 패션·아웃도어 숍.", "City fashion and outdoor shops.", 4.2, 1400),
        ("Regional mall shopping (Jekta)", "Tromsø", "시내 몰·할인 쇼핑.", "City mall and value shopping.", 4.2, 2200),
        ("Local grocery stores (Rema/Kiwi area)", "Tromsø", "로컬 식료품점.", "Local grocery stores.", 4.3, 900),
    ],
    "stavanger": [
        ("Kirkegata / centre fashion", "Stavanger", "센터 패션 거리.", "Centre fashion streets.", 4.3, 1600),
        ("Kvadrat Shopping (Sandnes)", "Sandnes", "스타방에르 권역 대형 몰·아울렛 감성.", "Large regional mall/outlet-style shopping.", 4.3, 4800),
        ("Fish Market & local groceries", "Stavanger", "수산·로컬 식료품.", "Fish market and local groceries.", 4.4, 2100),
    ],
    "trondheim": [
        ("Nordre gate shopping", "Trondheim", "시내 패션 메인 스트리트.", "Main city fashion street.", 4.3, 1900),
        ("City Syd / regional outlet-style mall", "Trondheim", "권역 몰·할인 쇼핑.", "Regional mall and value shopping.", 4.2, 2700),
        ("Ravnkloa Fish Market / groceries", "Trondheim", "수산·식료품 마켓.", "Fish and grocery market.", 4.4, 1800),
    ],
    "alesund": [
        ("Kongens gate boutiques", "Ålesund", "아르누보 거리 부티크·패션.", "Art Nouveau street boutiques.", 4.3, 900),
        ("Ålesund shopping centre / day trip malls", "Ålesund", "시내 몰·근교 쇼핑.", "City mall and nearby shopping.", 4.2, 1100),
        ("Local seafood & grocery shops", "Ålesund", "해산물·로컬 식료품점.", "Seafood and local groceries.", 4.4, 700),
    ],
    "flam": [
        ("Flåm village shops", "Flåm", "마을 기념품·아웃도어 패션.", "Village souvenirs and outdoor fashion.", 4.2, 1200),
        ("Bergen shopping day trip", "Bergen", "베르겐 몰·아울렛 데이트립.", "Bergen mall/outlet day trip.", 4.2, 1500),
        ("Local grocery & picnic supplies", "Flåm", "피크닉·로컬 식료품.", "Picnic and local groceries.", 4.3, 500),
    ],
    "helsinki": [
        ("Stockmann / Aleksanterinkatu", "Helsinki", "핀란드 대표 패션 백화점·거리.", "Flagship fashion department store and street.", 4.4, 9800),
        ("Designer Outlet Helsinki (Vanha Kauppala)", "Vantaa area", "헬싱키 권역 디자이너 아울렛.", "Designer outlet in Helsinki region.", 4.3, 5600),
        ("Vanha kauppahalli / Market Square", "Helsinki", "식료품·마켓홀.", "Grocery market hall and square.", 4.5, 7200),
    ],
    "turku": [
        ("Yliopistonkatu shopping", "Turku", "시내 패션 거리.", "City fashion street.", 4.3, 1600),
        ("Skanssi / regional outlet-style mall", "Turku", "권역 몰·할인 쇼핑.", "Regional mall and value shopping.", 4.2, 2400),
        ("Turku Market Hall", "Turku", "식료품 마켓홀.", "Grocery market hall.", 4.5, 2800),
    ],
    "tampere": [
        ("Hämeenkatu shopping", "Tampere", "메인 패션 스트리트.", "Main fashion street.", 4.3, 2100),
        ("Ideapark Lempäälä", "Lempäälä", "탐페레 근교 초대형 쇼핑·아울렛 감성.", "Huge nearby shopping/outlet-style complex.", 4.3, 6900),
        ("Kauppahalli Tampere", "Tampere", "식료품 마켓홀.", "Grocery market hall.", 4.5, 3200),
    ],
    "rovaniemi": [
        ("Santa Claus Village shops", "Rovaniemi", "관광·패션·기념품 쇼핑.", "Tourist fashion and souvenir shopping.", 4.2, 5400),
        ("Revontuli / city mall shopping", "Rovaniemi", "시내 몰·할인 쇼핑.", "City mall and value shopping.", 4.2, 1800),
        ("Local grocery stores & market", "Rovaniemi", "로컬 식료품점·마켓.", "Local groceries and market.", 4.3, 900),
    ],
    "porvoo": [
        ("Old Porvoo boutiques", "Porvoo", "구시가지 부티크·패션.", "Old town boutiques and fashion.", 4.4, 1600),
        ("Helsinki outlet day trip", "Helsinki region", "헬싱키 아울렛 데이트립.", "Helsinki outlet day trip.", 4.3, 3000),
        ("Porvoo Market Square groceries", "Porvoo", "광장 식료품·로컬 특산.", "Square groceries and local specialities.", 4.4, 1100),
    ],
    "stockholm": [
        ("Biblioteksgatan / NK Stockholm", "Stockholm", "럭셔리·패션 쇼핑 거리.", "Luxury and fashion shopping streets.", 4.5, 11000),
        ("Barkarby Outlet / Freeport", "Järfälla", "스톡홀름 근교 아울렛.", "Outlet near Stockholm.", 4.3, 8700),
        ("Östermalms Saluhall", "Östermalm, Stockholm", "프리미엄 식료품 홀.", "Premium grocery food hall.", 4.6, 9800),
    ],
    "gothenburg": [
        ("Avenyn / Nordstan", "Gothenburg", "패션 거리·대형 몰.", "Fashion avenue and major mall.", 4.3, 7600),
        ("Freeport / Torp shopping day trip", "West Sweden", "근교 아울렛·몰.", "Nearby outlet and mall options.", 4.2, 4200),
        ("Feskekörka / Saluhallen", "Gothenburg", "수산·식료품 홀.", "Fish and grocery halls.", 4.5, 6400),
    ],
    "malmo": [
        ("Södergatan / Emporia", "Malmö", "시내 패션·대형 몰.", "City fashion and major mall.", 4.4, 8900),
        ("Designer Outlet Helsingborg day trip", "Helsingborg", "근교 디자이너 아울렛.", "Nearby designer outlet.", 4.3, 5100),
        ("Möllevångstorget market groceries", "Malmö", "다문화 식료품 마켓.", "Multicultural groceries market.", 4.5, 3600),
    ],
    "uppsala": [
        ("Svartbäcksgatan shopping", "Uppsala", "시내 패션·학생가 쇼핑.", "City fashion and student shopping.", 4.3, 1700),
        ("Stockholm outlet day trip", "Stockholm region", "스톡홀름 아울렛 데이트립.", "Stockholm outlet day trip.", 4.3, 4000),
        ("Uppsala saluhall / groceries", "Uppsala", "식료품 홀·로컬 마켓.", "Grocery hall and local market.", 4.4, 1400),
    ],
    "kiruna": [
        ("City centre outdoor & fashion shops", "Kiruna", "아웃도어·시내 패션.", "Outdoor and city fashion shops.", 4.1, 600),
        ("Regional mall / Luleå day trip", "Norrbotten", "권역 몰·쇼핑 데이트립.", "Regional mall shopping day trip.", 4.1, 800),
        ("Local grocery stores", "Kiruna", "로컬 식료품점.", "Local grocery stores.", 4.2, 450),
    ],
    "copenhagen": [
        ("Strøget / Illum", "Copenhagen", "보행자 거리 패션·백화점.", "Pedestrian fashion street and department store.", 4.4, 16000),
        ("Designer Outlet Ringsted", "Ringsted", "코펜하겐 근교 디자이너 아울렛.", "Designer outlet near Copenhagen.", 4.3, 7800),
        ("Torvehallerne", "Israels Plads, Copenhagen", "식료품·델리 마켓홀.", "Grocery and deli market halls.", 4.6, 14000),
    ],
    "aarhus": [
        ("Søndergade shopping street", "Aarhus", "시내 메인 패션 거리.", "Main city fashion street.", 4.3, 2800),
        ("Designer Outlet Billund / regional outlets", "Jutland", "유틀란트 권역 아울렛.", "Jutland regional outlets.", 4.2, 3500),
        ("Aarhus Street Food / local groceries", "Aarhus", "푸드홀·로컬 식료품.", "Food hall and local groceries.", 4.5, 5200),
    ],
    "odense": [
        ("Vestergade shopping", "Odense", "시내 패션 거리.", "City fashion street.", 4.2, 1600),
        ("Rosengårdcentret / outlet-style mall", "Odense", "대형 몰·할인 쇼핑.", "Large mall and value shopping.", 4.2, 3100),
        ("Odense Market / groceries", "Odense", "로컬 식료품 마켓.", "Local groceries market.", 4.3, 1200),
    ],
    "aalborg": [
        ("Bispensgade shopping", "Aalborg", "시내 패션 스트리트.", "City fashion street.", 4.3, 1500),
        ("Aalborg Storcenter / regional outlets", "Aalborg", "몰·권역 아울렛 옵션.", "Mall and regional outlet options.", 4.2, 2400),
        ("Local market & grocery shops", "Aalborg", "로컬 마켓·식료품점.", "Local market and grocery shops.", 4.3, 900),
    ],
    "roskilde": [
        ("Town centre boutiques", "Roskilde", "타운 센터 패션·부티크.", "Town-centre fashion and boutiques.", 4.2, 700),
        ("Copenhagen outlet day trip", "Zealand", "코펜하겐 아울렛 데이트립.", "Copenhagen outlet day trip.", 4.3, 4000),
        ("Local grocery stores & market days", "Roskilde", "로컬 식료품·마켓 데이.", "Local groceries and market days.", 4.3, 550),
    ],
}


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def main() -> None:
    lines = [
        "import { place } from './placeFactory'",
        "import type { Place } from '../types'",
        "",
        "/** Fashion, outlet, and grocery picks per city (shopping category). */",
        "export const placesShopping: Place[] = [",
    ]
    labels = ("패션", "아울렛", "식료품")
    labels_en = ("Fashion", "Outlet", "Grocery")
    for city, entries in SHOPPING.items():
        lines.append(f"  // —— {city} ——")
        for i, (name, address, ko, en, rating, reviews) in enumerate(entries, start=1):
            tag_ko = labels[min(i - 1, 2)]
            tag_en = labels_en[min(i - 1, 2)]
            ko_full = f"[{tag_ko}] {ko}"
            en_full = f"[{tag_en}] {en}"
            lines.append(
                "  "
                + "place("
                + f"'{city}-shopping-{i}', '{city}', 'shopping', '{esc(name)}', {rating}, "
                + f"'{esc(address)}', '{esc(ko_full)}', '{esc(en_full)}', "
                + f"{{ reviewCount: {reviews} }}),"
            )
        lines.append("")
    lines.append("]")
    lines.append("")
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote {OUT} ({sum(len(v) for v in SHOPPING.values())} places, {len(SHOPPING)} cities)")


if __name__ == "__main__":
    main()
