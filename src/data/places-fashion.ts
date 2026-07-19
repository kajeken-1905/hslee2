import { place } from './placeFactory'
import type { Place } from '../types'

/** Fashion & outlet picks per city. */
export const placesFashion: Place[] = [
  // —— london ——
  place('london-fashion-1', 'london', 'fashion', 'Selfridges Oxford Street', 4.5, 'Oxford Street, London', '[패션] 플래그십 패션·럭셔리 백화점.', '[Fashion] Flagship fashion and luxury department store.', { reviewCount: 42000 }),
  place('london-fashion-2', 'london', 'fashion', 'Bicester Village', 4.4, 'Bicester, Oxfordshire', '[아울렛] 런던 근교 프리미엄 아울렛.', '[Outlet] Premium designer outlet near London.', { reviewCount: 28000 }),

  // —— edinburgh ——
  place('edinburgh-fashion-1', 'edinburgh', 'fashion', 'Multrees Walk / Harvey Nichols', 4.4, 'Multrees Walk, Edinburgh', '[패션] 하이엔드 패션 거리.', '[Fashion] High-end fashion street.', { reviewCount: 3200 }),
  place('edinburgh-fashion-2', 'edinburgh', 'fashion', 'Livingston Designer Outlet', 4.3, 'Livingston', '[아울렛] 스코틀랜드 대표 디자이너 아울렛.', '[Outlet] Scotland’s main designer outlet.', { reviewCount: 8600 }),

  // —— manchester ——
  place('manchester-fashion-1', 'manchester', 'fashion', 'Selfridges Exchange Square', 4.4, 'Exchange Square, Manchester', '[패션] 맨체스터 패션·라이프스타일 허브.', '[Fashion] Fashion and lifestyle hub.', { reviewCount: 12000 }),
  place('manchester-fashion-2', 'manchester', 'fashion', 'Cheshire Oaks Designer Outlet', 4.3, 'Ellesmere Port', '[아울렛] 북서부 대형 디자이너 아울렛.', '[Outlet] Large designer outlet in the North West.', { reviewCount: 19000 }),

  // —— bath ——
  place('bath-fashion-1', 'bath', 'fashion', 'SouthGate Bath', 4.3, 'SouthGate, Bath', '[패션] 센터 패션·하이스트리트.', '[Fashion] City-centre fashion high street.', { reviewCount: 2800 }),
  place('bath-fashion-2', 'bath', 'fashion', 'Clarks Village (Street)', 4.2, 'Street, Somerset', '[아울렛] 배스 근교 클래식 아울렛.', '[Outlet] Classic outlet village near Bath.', { reviewCount: 7400 }),

  // —— oxford ——
  place('oxford-fashion-1', 'oxford', 'fashion', 'Westgate Oxford', 4.3, 'Westgate, Oxford', '[패션] 현대 패션 쇼핑몰.', '[Fashion] Modern fashion shopping centre.', { reviewCount: 5200 }),
  place('oxford-fashion-2', 'oxford', 'fashion', 'Bicester Village', 4.4, 'Bicester', '[아울렛] 옥스퍼드 접근 쉬운 프리미엄 아울렛.', '[Outlet] Premium outlet easy from Oxford.', { reviewCount: 28000 }),

  // —— cambridge ——
  place('cambridge-fashion-1', 'cambridge', 'fashion', 'Grand Arcade', 4.3, 'St Andrew\'s St, Cambridge', '[패션] 시내 패션·브랜드 몰.', '[Fashion] City fashion and brand mall.', { reviewCount: 3100 }),
  place('cambridge-fashion-2', 'cambridge', 'fashion', 'Freeport Braintree (day trip)', 4.2, 'Braintree', '[아울렛] 캠브리지 권역 아울렛 데이트립.', '[Outlet] Outlet day trip from Cambridge.', { reviewCount: 6200 }),

  // —— liverpool ——
  place('liverpool-fashion-1', 'liverpool', 'fashion', 'Liverpool ONE', 4.4, 'Liverpool ONE', '[패션] 수변 패션·라이프스타일 몰.', '[Fashion] Waterfront fashion lifestyle mall.', { reviewCount: 15000 }),
  place('liverpool-fashion-2', 'liverpool', 'fashion', 'Freeport Fleetwood / Cheshire Oaks day trip', 4.2, 'North West', '[아울렛] 근교 아울렛 데이트립.', '[Outlet] Nearby outlet day trips.', { reviewCount: 5000 }),

  // —— brighton ——
  place('brighton-fashion-1', 'brighton', 'fashion', 'North Laine & Churchill Square', 4.4, 'Brighton', '[패션] 인디 패션·하이스트리트.', '[Fashion] Indie fashion and high street.', { reviewCount: 6400 }),
  place('brighton-fashion-2', 'brighton', 'fashion', 'McArthurGlen Ashford / Designer Outlet day trip', 4.2, 'Kent/Sussex', '[아울렛] 남부 아울렛 데이트립.', '[Outlet] Southern England outlet day trip.', { reviewCount: 4500 }),

  // —— york ——
  place('york-fashion-1', 'york', 'fashion', 'Coppergate Shopping Centre', 4.2, 'Coppergate, York', '[패션] 시내 패션·브랜드.', '[Fashion] City fashion and brands.', { reviewCount: 2100 }),
  place('york-fashion-2', 'york', 'fashion', 'McArthurGlen York Designer Outlet', 4.3, 'St Nicholas Ave, York', '[아울렛] 요크 디자이너 아울렛.', '[Outlet] York designer outlet.', { reviewCount: 9800 }),

  // —— bristol ——
  place('bristol-fashion-1', 'bristol', 'fashion', 'Cabot Circus', 4.3, 'Bond St, Bristol', '[패션] 브리스틀 대표 패션 몰.', '[Fashion] Bristol’s main fashion mall.', { reviewCount: 8700 }),
  place('bristol-fashion-2', 'bristol', 'fashion', 'McArthurGlen Bristol Swindon day trip', 4.2, 'Swindon area', '[아울렛] 근교 아울렛 옵션.', '[Outlet] Nearby outlet option.', { reviewCount: 7200 }),

  // —— amsterdam ——
  place('amsterdam-fashion-1', 'amsterdam', 'fashion', 'De Bijenkorf Amsterdam', 4.4, 'Dam Square, Amsterdam', '[패션] 네덜란드 대표 패션 백화점.', '[Fashion] Netherlands’ flagship fashion department store.', { reviewCount: 18000 }),
  place('amsterdam-fashion-2', 'amsterdam', 'fashion', 'Batavia Stad Fashion Outlet', 4.3, 'Lelystad', '[아울렛] 암스테르담 근교 패션 아울렛.', '[Outlet] Fashion outlet near Amsterdam.', { reviewCount: 12000 }),

  // —— rotterdam ——
  place('rotterdam-fashion-1', 'rotterdam', 'fashion', 'Koopgoot / Beurstraverse', 4.2, 'Coolsingel, Rotterdam', '[패션] 지하·센터 패션 쇼핑.', '[Fashion] Central fashion shopping arcade.', { reviewCount: 5400 }),
  place('rotterdam-fashion-2', 'rotterdam', 'fashion', 'Designer Outlet Roermond (day trip)', 4.4, 'Roermond', '[아울렛] 네덜란드 대표 대형 아울렛.', '[Outlet] Netherlands’ major designer outlet.', { reviewCount: 21000 }),

  // —— the-hague ——
  place('the-hague-fashion-1', 'the-hague', 'fashion', 'De Bijenkorf The Hague', 4.3, 'Wagenstraat, The Hague', '[패션] 헤이그 패션 백화점.', '[Fashion] Fashion department store in The Hague.', { reviewCount: 4200 }),
  place('the-hague-fashion-2', 'the-hague', 'fashion', 'Designer Outlet Roermond (day trip)', 4.4, 'Roermond', '[아울렛] 근교 프리미엄 아울렛.', '[Outlet] Nearby premium outlet.', { reviewCount: 21000 }),

  // —— utrecht ——
  place('utrecht-fashion-1', 'utrecht', 'fashion', 'Hoog Catharijne', 4.3, 'Utrecht Centraal', '[패션] 역세권 패션 쇼핑몰.', '[Fashion] Station-area fashion mall.', { reviewCount: 11000 }),
  place('utrecht-fashion-2', 'utrecht', 'fashion', 'Batavia Stad / Roermond day trip', 4.3, 'Netherlands', '[아울렛] 근교 아울렛 데이트립.', '[Outlet] Outlet day trips nearby.', { reviewCount: 8000 }),

  // —— haarlem ——
  place('haarlem-fashion-1', 'haarlem', 'fashion', 'Grote Houtstraat shopping street', 4.4, 'Haarlem', '[패션] 시내 패션 스트리트.', '[Fashion] City fashion street.', { reviewCount: 1800 }),
  place('haarlem-fashion-2', 'haarlem', 'fashion', 'Batavia Stad Fashion Outlet', 4.3, 'Lelystad', '[아울렛] 하를렘에서 접근 가능한 아울렛.', '[Outlet] Outlet accessible from Haarlem.', { reviewCount: 12000 }),

  // —— delft ——
  place('delft-fashion-1', 'delft', 'fashion', 'City centre boutiques (Markt)', 4.3, 'Markt, Delft', '[패션] 도심 부티크·패션.', '[Fashion] Centre boutiques and fashion.', { reviewCount: 1200 }),
  place('delft-fashion-2', 'delft', 'fashion', 'Designer Outlet Roermond (day trip)', 4.4, 'Roermond', '[아울렛] 근교 아울렛.', '[Outlet] Nearby outlet.', { reviewCount: 21000 }),

  // —— maastricht ——
  place('maastricht-fashion-1', 'maastricht', 'fashion', 'Entre Deux / city boutiques', 4.3, 'Maastricht', '[패션] 센터 패션·부티크.', '[Fashion] Centre fashion and boutiques.', { reviewCount: 2100 }),
  place('maastricht-fashion-2', 'maastricht', 'fashion', 'Designer Outlet Roermond', 4.4, 'Roermond', '[아울렛] 마스트리흐트에서 가까운 대형 아울렛.', '[Outlet] Major outlet close to Maastricht.', { reviewCount: 21000 }),

  // —— giethoorn ——
  place('giethoorn-fashion-1', 'giethoorn', 'fashion', 'Village craft & souvenir shops', 4.2, 'Giethoorn', '[패션] 마을 공예·패션 소품 숍.', '[Fashion] Village craft and fashion-accessory shops.', { reviewCount: 800 }),
  place('giethoorn-fashion-2', 'giethoorn', 'fashion', 'Zwolle / nearby outlet day trip', 4.1, 'Overijssel', '[아울렛] 근교 도시 아울렛·몰 데이트립.', '[Outlet] Nearby town outlet/mall day trip.', { reviewCount: 600 }),

  // —— luxembourg-city ——
  place('luxembourg-city-fashion-1', 'luxembourg-city', 'fashion', 'Avenue de la Liberté / Grand Rue', 4.4, 'Luxembourg City', '[패션] 시내 패션·럭셔리 거리.', '[Fashion] City fashion and luxury streets.', { reviewCount: 2800 }),
  place('luxembourg-city-fashion-2', 'luxembourg-city', 'fashion', 'Designer Outlet Zweibrücken (day trip)', 4.3, 'Germany', '[아울렛] 근교 크로스보더 아울렛.', '[Outlet] Cross-border outlet day trip.', { reviewCount: 9000 }),

  // —— vianden ——
  place('vianden-fashion-1', 'vianden', 'fashion', 'Old town boutiques', 4.2, 'Vianden', '[패션] 구시가지 부티크·기념품 패션.', '[Fashion] Old-town boutiques and fashion souvenirs.', { reviewCount: 400 }),
  place('vianden-fashion-2', 'vianden', 'fashion', 'Luxembourg City outlet day trip', 4.2, 'Luxembourg', '[아울렛] 수도·근교 아울렛 데이트립.', '[Outlet] Capital/outlet day trip.', { reviewCount: 1200 }),

  // —— echternach ——
  place('echternach-fashion-1', 'echternach', 'fashion', 'Town centre shops', 4.2, 'Echternach', '[패션] 타운 센터 패션·소품.', '[Fashion] Town-centre fashion and gifts.', { reviewCount: 380 }),
  place('echternach-fashion-2', 'echternach', 'fashion', 'Trier / Germany outlet day trip', 4.2, 'Trier area', '[아울렛] 국경 넘어 아울렛·몰.', '[Outlet] Cross-border outlet/mall trip.', { reviewCount: 2100 }),

  // —— remich ——
  place('remich-fashion-1', 'remich', 'fashion', 'Moselle promenade shops', 4.2, 'Remich', '[패션] 모젤 강변 소품·패션.', '[Fashion] Moselle promenade shops and fashion.', { reviewCount: 360 }),
  place('remich-fashion-2', 'remich', 'fashion', 'Luxembourg / Trier shopping day trip', 4.2, 'Region', '[아울렛] 근교 쇼핑·아울렛 데이트립.', '[Outlet] Regional shopping/outlet day trip.', { reviewCount: 1500 }),

  // —— brussels ——
  place('brussels-fashion-1', 'brussels', 'fashion', 'Avenue Louise / Rue Neuve', 4.3, 'Brussels', '[패션] 패션 스트리트·하이스트리트.', '[Fashion] Fashion avenue and high street.', { reviewCount: 7600 }),
  place('brussels-fashion-2', 'brussels', 'fashion', 'Maasmechelen Village', 4.4, 'Maasmechelen', '[아울렛] 벨기에 대표 디자이너 아울렛.', '[Outlet] Belgium’s flagship designer outlet.', { reviewCount: 14000 }),

  // —— bruges ——
  place('bruges-fashion-1', 'bruges', 'fashion', 'Steenstraat shopping street', 4.3, 'Bruges', '[패션] 시내 패션·브랜드 거리.', '[Fashion] City fashion brand street.', { reviewCount: 2400 }),
  place('bruges-fashion-2', 'bruges', 'fashion', 'Maasmechelen Village (day trip)', 4.4, 'Maasmechelen', '[아울렛] 근교 프리미엄 아울렛.', '[Outlet] Nearby premium outlet.', { reviewCount: 14000 }),

  // —— ghent ——
  place('ghent-fashion-1', 'ghent', 'fashion', 'Veldstraat shopping street', 4.3, 'Ghent', '[패션] 겐트 메인 패션 거리.', '[Fashion] Ghent’s main fashion street.', { reviewCount: 2900 }),
  place('ghent-fashion-2', 'ghent', 'fashion', 'Maasmechelen Village (day trip)', 4.4, 'Maasmechelen', '[아울렛] 근교 아울렛.', '[Outlet] Nearby outlet.', { reviewCount: 14000 }),

  // —— antwerp ——
  place('antwerp-fashion-1', 'antwerp', 'fashion', 'Meir / Schuttershofstraat', 4.5, 'Antwerp', '[패션] 앤트워프 패션 허브.', '[Fashion] Antwerp fashion hub.', { reviewCount: 6800 }),
  place('antwerp-fashion-2', 'antwerp', 'fashion', 'Maasmechelen Village', 4.4, 'Maasmechelen', '[아울렛] 근교 디자이너 아울렛.', '[Outlet] Nearby designer outlet.', { reviewCount: 14000 }),

  // —— leuven ——
  place('leuven-fashion-1', 'leuven', 'fashion', 'Bondgenotenlaan shopping', 4.3, 'Leuven', '[패션] 시내 패션·학생가 쇼핑.', '[Fashion] City fashion and student shopping.', { reviewCount: 1800 }),
  place('leuven-fashion-2', 'leuven', 'fashion', 'Maasmechelen Village (day trip)', 4.4, 'Maasmechelen', '[아울렛] 근교 아울렛.', '[Outlet] Nearby outlet.', { reviewCount: 14000 }),

  // —— dinant ——
  place('dinant-fashion-1', 'dinant', 'fashion', 'Town centre boutiques', 4.2, 'Dinant', '[패션] 강변 타운 부티크.', '[Fashion] Riverside town boutiques.', { reviewCount: 420 }),
  place('dinant-fashion-2', 'dinant', 'fashion', 'Namur / regional outlet day trip', 4.1, 'Wallonia', '[아울렛] 근교 도시 쇼핑·아울렛.', '[Outlet] Regional shopping/outlet day trip.', { reviewCount: 900 }),

  // —— oslo ——
  place('oslo-fashion-1', 'oslo', 'fashion', 'Karl Johans gate / Paleet', 4.3, 'Oslo', '[패션] 오슬로 메인 패션 거리.', '[Fashion] Oslo’s main fashion street.', { reviewCount: 5400 }),
  place('oslo-fashion-2', 'oslo', 'fashion', 'Oslo Fashion Outlet Vestby', 4.3, 'Vestby', '[아울렛] 오슬로 근교 패션 아울렛.', '[Outlet] Fashion outlet near Oslo.', { reviewCount: 7200 }),

  // —— bergen ——
  place('bergen-fashion-1', 'bergen', 'fashion', 'Strandgaten shopping', 4.3, 'Bergen', '[패션] 시내 패션·브랜드.', '[Fashion] City fashion and brands.', { reviewCount: 2100 }),
  place('bergen-fashion-2', 'bergen', 'fashion', 'Oslo/Bergen regional outlet day trip', 4.1, 'Norway', '[아울렛] 권역 아울렛·몰 데이트립.', '[Outlet] Regional outlet/mall day trip.', { reviewCount: 800 }),

  // —— tromso ——
  place('tromso-fashion-1', 'tromso', 'fashion', 'Storgata shopping', 4.2, 'Tromsø', '[패션] 시내 패션·아웃도어 숍.', '[Fashion] City fashion and outdoor shops.', { reviewCount: 1400 }),
  place('tromso-fashion-2', 'tromso', 'fashion', 'Regional mall shopping (Jekta)', 4.2, 'Tromsø', '[아울렛] 시내 몰·할인 쇼핑.', '[Outlet] City mall and value shopping.', { reviewCount: 2200 }),

  // —— stavanger ——
  place('stavanger-fashion-1', 'stavanger', 'fashion', 'Kirkegata / centre fashion', 4.3, 'Stavanger', '[패션] 센터 패션 거리.', '[Fashion] Centre fashion streets.', { reviewCount: 1600 }),
  place('stavanger-fashion-2', 'stavanger', 'fashion', 'Kvadrat Shopping (Sandnes)', 4.3, 'Sandnes', '[아울렛] 스타방에르 권역 대형 몰·아울렛 감성.', '[Outlet] Large regional mall/outlet-style shopping.', { reviewCount: 4800 }),

  // —— trondheim ——
  place('trondheim-fashion-1', 'trondheim', 'fashion', 'Nordre gate shopping', 4.3, 'Trondheim', '[패션] 시내 패션 메인 스트리트.', '[Fashion] Main city fashion street.', { reviewCount: 1900 }),
  place('trondheim-fashion-2', 'trondheim', 'fashion', 'City Syd / regional outlet-style mall', 4.2, 'Trondheim', '[아울렛] 권역 몰·할인 쇼핑.', '[Outlet] Regional mall and value shopping.', { reviewCount: 2700 }),

  // —— alesund ——
  place('alesund-fashion-1', 'alesund', 'fashion', 'Kongens gate boutiques', 4.3, 'Ålesund', '[패션] 아르누보 거리 부티크·패션.', '[Fashion] Art Nouveau street boutiques.', { reviewCount: 900 }),
  place('alesund-fashion-2', 'alesund', 'fashion', 'Ålesund shopping centre / day trip malls', 4.2, 'Ålesund', '[아울렛] 시내 몰·근교 쇼핑.', '[Outlet] City mall and nearby shopping.', { reviewCount: 1100 }),

  // —— flam ——
  place('flam-fashion-1', 'flam', 'fashion', 'Flåm village shops', 4.2, 'Flåm', '[패션] 마을 기념품·아웃도어 패션.', '[Fashion] Village souvenirs and outdoor fashion.', { reviewCount: 1200 }),
  place('flam-fashion-2', 'flam', 'fashion', 'Bergen shopping day trip', 4.2, 'Bergen', '[아울렛] 베르겐 몰·아울렛 데이트립.', '[Outlet] Bergen mall/outlet day trip.', { reviewCount: 1500 }),

  // —— helsinki ——
  place('helsinki-fashion-1', 'helsinki', 'fashion', 'Stockmann / Aleksanterinkatu', 4.4, 'Helsinki', '[패션] 핀란드 대표 패션 백화점·거리.', '[Fashion] Flagship fashion department store and street.', { reviewCount: 9800 }),
  place('helsinki-fashion-2', 'helsinki', 'fashion', 'Designer Outlet Helsinki (Vanha Kauppala)', 4.3, 'Vantaa area', '[아울렛] 헬싱키 권역 디자이너 아울렛.', '[Outlet] Designer outlet in Helsinki region.', { reviewCount: 5600 }),

  // —— turku ——
  place('turku-fashion-1', 'turku', 'fashion', 'Yliopistonkatu shopping', 4.3, 'Turku', '[패션] 시내 패션 거리.', '[Fashion] City fashion street.', { reviewCount: 1600 }),
  place('turku-fashion-2', 'turku', 'fashion', 'Skanssi / regional outlet-style mall', 4.2, 'Turku', '[아울렛] 권역 몰·할인 쇼핑.', '[Outlet] Regional mall and value shopping.', { reviewCount: 2400 }),

  // —— tampere ——
  place('tampere-fashion-1', 'tampere', 'fashion', 'Hämeenkatu shopping', 4.3, 'Tampere', '[패션] 메인 패션 스트리트.', '[Fashion] Main fashion street.', { reviewCount: 2100 }),
  place('tampere-fashion-2', 'tampere', 'fashion', 'Ideapark Lempäälä', 4.3, 'Lempäälä', '[아울렛] 탐페레 근교 초대형 쇼핑·아울렛 감성.', '[Outlet] Huge nearby shopping/outlet-style complex.', { reviewCount: 6900 }),

  // —— rovaniemi ——
  place('rovaniemi-fashion-1', 'rovaniemi', 'fashion', 'Santa Claus Village shops', 4.2, 'Rovaniemi', '[패션] 관광·패션·기념품 쇼핑.', '[Fashion] Tourist fashion and souvenir shopping.', { reviewCount: 5400 }),
  place('rovaniemi-fashion-2', 'rovaniemi', 'fashion', 'Revontuli / city mall shopping', 4.2, 'Rovaniemi', '[아울렛] 시내 몰·할인 쇼핑.', '[Outlet] City mall and value shopping.', { reviewCount: 1800 }),

  // —— porvoo ——
  place('porvoo-fashion-1', 'porvoo', 'fashion', 'Old Porvoo boutiques', 4.4, 'Porvoo', '[패션] 구시가지 부티크·패션.', '[Fashion] Old town boutiques and fashion.', { reviewCount: 1600 }),
  place('porvoo-fashion-2', 'porvoo', 'fashion', 'Helsinki outlet day trip', 4.3, 'Helsinki region', '[아울렛] 헬싱키 아울렛 데이트립.', '[Outlet] Helsinki outlet day trip.', { reviewCount: 3000 }),

  // —— stockholm ——
  place('stockholm-fashion-1', 'stockholm', 'fashion', 'Biblioteksgatan / NK Stockholm', 4.5, 'Stockholm', '[패션] 럭셔리·패션 쇼핑 거리.', '[Fashion] Luxury and fashion shopping streets.', { reviewCount: 11000 }),
  place('stockholm-fashion-2', 'stockholm', 'fashion', 'Barkarby Outlet / Freeport', 4.3, 'Järfälla', '[아울렛] 스톡홀름 근교 아울렛.', '[Outlet] Outlet near Stockholm.', { reviewCount: 8700 }),

  // —— gothenburg ——
  place('gothenburg-fashion-1', 'gothenburg', 'fashion', 'Avenyn / Nordstan', 4.3, 'Gothenburg', '[패션] 패션 거리·대형 몰.', '[Fashion] Fashion avenue and major mall.', { reviewCount: 7600 }),
  place('gothenburg-fashion-2', 'gothenburg', 'fashion', 'Freeport / Torp shopping day trip', 4.2, 'West Sweden', '[아울렛] 근교 아울렛·몰.', '[Outlet] Nearby outlet and mall options.', { reviewCount: 4200 }),

  // —— malmo ——
  place('malmo-fashion-1', 'malmo', 'fashion', 'Södergatan / Emporia', 4.4, 'Malmö', '[패션] 시내 패션·대형 몰.', '[Fashion] City fashion and major mall.', { reviewCount: 8900 }),
  place('malmo-fashion-2', 'malmo', 'fashion', 'Designer Outlet Helsingborg day trip', 4.3, 'Helsingborg', '[아울렛] 근교 디자이너 아울렛.', '[Outlet] Nearby designer outlet.', { reviewCount: 5100 }),

  // —— uppsala ——
  place('uppsala-fashion-1', 'uppsala', 'fashion', 'Svartbäcksgatan shopping', 4.3, 'Uppsala', '[패션] 시내 패션·학생가 쇼핑.', '[Fashion] City fashion and student shopping.', { reviewCount: 1700 }),
  place('uppsala-fashion-2', 'uppsala', 'fashion', 'Stockholm outlet day trip', 4.3, 'Stockholm region', '[아울렛] 스톡홀름 아울렛 데이트립.', '[Outlet] Stockholm outlet day trip.', { reviewCount: 4000 }),

  // —— kiruna ——
  place('kiruna-fashion-1', 'kiruna', 'fashion', 'City centre outdoor & fashion shops', 4.1, 'Kiruna', '[패션] 아웃도어·시내 패션.', '[Fashion] Outdoor and city fashion shops.', { reviewCount: 600 }),
  place('kiruna-fashion-2', 'kiruna', 'fashion', 'Regional mall / Luleå day trip', 4.1, 'Norrbotten', '[아울렛] 권역 몰·쇼핑 데이트립.', '[Outlet] Regional mall shopping day trip.', { reviewCount: 800 }),

  // —— copenhagen ——
  place('copenhagen-fashion-1', 'copenhagen', 'fashion', 'Strøget / Illum', 4.4, 'Copenhagen', '[패션] 보행자 거리 패션·백화점.', '[Fashion] Pedestrian fashion street and department store.', { reviewCount: 16000 }),
  place('copenhagen-fashion-2', 'copenhagen', 'fashion', 'Designer Outlet Ringsted', 4.3, 'Ringsted', '[아울렛] 코펜하겐 근교 디자이너 아울렛.', '[Outlet] Designer outlet near Copenhagen.', { reviewCount: 7800 }),

  // —— aarhus ——
  place('aarhus-fashion-1', 'aarhus', 'fashion', 'Søndergade shopping street', 4.3, 'Aarhus', '[패션] 시내 메인 패션 거리.', '[Fashion] Main city fashion street.', { reviewCount: 2800 }),
  place('aarhus-fashion-2', 'aarhus', 'fashion', 'Designer Outlet Billund / regional outlets', 4.2, 'Jutland', '[아울렛] 유틀란트 권역 아울렛.', '[Outlet] Jutland regional outlets.', { reviewCount: 3500 }),

  // —— odense ——
  place('odense-fashion-1', 'odense', 'fashion', 'Vestergade shopping', 4.2, 'Odense', '[패션] 시내 패션 거리.', '[Fashion] City fashion street.', { reviewCount: 1600 }),
  place('odense-fashion-2', 'odense', 'fashion', 'Rosengårdcentret / outlet-style mall', 4.2, 'Odense', '[아울렛] 대형 몰·할인 쇼핑.', '[Outlet] Large mall and value shopping.', { reviewCount: 3100 }),

  // —— aalborg ——
  place('aalborg-fashion-1', 'aalborg', 'fashion', 'Bispensgade shopping', 4.3, 'Aalborg', '[패션] 시내 패션 스트리트.', '[Fashion] City fashion street.', { reviewCount: 1500 }),
  place('aalborg-fashion-2', 'aalborg', 'fashion', 'Aalborg Storcenter / regional outlets', 4.2, 'Aalborg', '[아울렛] 몰·권역 아울렛 옵션.', '[Outlet] Mall and regional outlet options.', { reviewCount: 2400 }),

  // —— roskilde ——
  place('roskilde-fashion-1', 'roskilde', 'fashion', 'Town centre boutiques', 4.2, 'Roskilde', '[패션] 타운 센터 패션·부티크.', '[Fashion] Town-centre fashion and boutiques.', { reviewCount: 700 }),
  place('roskilde-fashion-2', 'roskilde', 'fashion', 'Copenhagen outlet day trip', 4.3, 'Zealand', '[아울렛] 코펜하겐 아울렛 데이트립.', '[Outlet] Copenhagen outlet day trip.', { reviewCount: 4000 }),

  // —— extras (fashion-3) ——
  place('london-fashion-3', 'london', 'fashion', 'Liberty London', 4.5, 'Regent St, London', '[패션] 리버티 백화점·패션 아이콘.', '[Fashion] Liberty department store fashion icon.', { reviewCount: 12000 }),
  place('edinburgh-fashion-3', 'edinburgh', 'fashion', 'Jenners / Princes Street fashion', 4.3, 'Princes Street, Edinburgh', '[패션] 프린시스 스트리트 패션.', '[Fashion] Princes Street fashion shopping.', { reviewCount: 2800 }),
  place('manchester-fashion-3', 'manchester', 'fashion', 'Arndale / Market Street fashion', 4.2, 'Market Street, Manchester', '[패션] 마켓 스트리트 패션 몰.', '[Fashion] Market Street fashion mall.', { reviewCount: 6500 }),
  place('bath-fashion-3', 'bath', 'fashion', 'Milsom Street boutiques', 4.4, 'Milsom St, Bath', '[패션] 밀섬 스트리트 부티크.', '[Fashion] Milsom Street boutiques.', { reviewCount: 1600 }),
  place('oxford-fashion-3', 'oxford', 'fashion', 'Cornmarket Street fashion', 4.2, 'Cornmarket St, Oxford', '[패션] 콘마켓 하이스트리트 패션.', '[Fashion] Cornmarket high-street fashion.', { reviewCount: 2100 }),
  place('cambridge-fashion-3', 'cambridge', 'fashion', 'Lion Yard shopping', 4.2, 'Lion Yard, Cambridge', '[패션] 라이언 야드 패션 몰.', '[Fashion] Lion Yard fashion mall.', { reviewCount: 1800 }),
  place('liverpool-fashion-3', 'liverpool', 'fashion', 'Metquarter / Church Street fashion', 4.3, 'Church Street, Liverpool', '[패션] 처치 스트리트 패션.', '[Fashion] Church Street fashion.', { reviewCount: 3200 }),
  place('brighton-fashion-3', 'brighton', 'fashion', 'The Lanes boutiques', 4.5, 'The Lanes, Brighton', '[패션] 레인즈 인디 부티크.', '[Fashion] Indie boutiques in The Lanes.', { reviewCount: 4100 }),
  place('york-fashion-3', 'york', 'fashion', 'Stonegate fashion boutiques', 4.3, 'Stonegate, York', '[패션] 스톤게이트 부티크.', '[Fashion] Stonegate fashion boutiques.', { reviewCount: 1900 }),
  place('bristol-fashion-3', 'bristol', 'fashion', 'Cribbs Causeway fashion (day trip)', 4.2, 'Cribbs Causeway', '[패션] 대형 패션 몰 데이트립.', '[Fashion] Large fashion mall day trip.', { reviewCount: 7800 }),
  place('amsterdam-fashion-3', 'amsterdam', 'fashion', 'Nine Streets / 9 Straatjes', 4.5, 'Jordaan, Amsterdam', '[패션] 나인 스트리트 부티크.', '[Fashion] Nine Streets boutiques.', { reviewCount: 5600 }),
  place('rotterdam-fashion-3', 'rotterdam', 'fashion', 'Lijnbaan shopping street', 4.3, 'Lijnbaan, Rotterdam', '[패션] 라인반 패션 거리.', '[Fashion] Lijnbaan fashion street.', { reviewCount: 3400 }),
  place('the-hague-fashion-3', 'the-hague', 'fashion', 'Grote Marktstraat fashion', 4.3, 'Grote Marktstraat, The Hague', '[패션] 그로테 마르크트스트라트 패션.', '[Fashion] Grote Marktstraat fashion.', { reviewCount: 2600 }),
  place('utrecht-fashion-3', 'utrecht', 'fashion', 'Oudegracht boutiques', 4.4, 'Oudegracht, Utrecht', '[패션] 아우데흐라흐트 부티크.', '[Fashion] Oudegracht boutiques.', { reviewCount: 1700 }),
  place('haarlem-fashion-3', 'haarlem', 'fashion', 'Barteljorisstraat fashion', 4.3, 'Haarlem', '[패션] 바르텔요리스스트라트 패션.', '[Fashion] Barteljorisstraat fashion.', { reviewCount: 1100 }),
  place('delft-fashion-3', 'delft', 'fashion', 'Choorstraat boutiques', 4.2, 'Delft', '[패션] 시내 부티크 거리.', '[Fashion] City boutique street.', { reviewCount: 700 }),
  place('maastricht-fashion-3', 'maastricht', 'fashion', 'Stokstraat / fashion quarter', 4.4, 'Maastricht', '[패션] 스토크스트라트 패션 지구.', '[Fashion] Stokstraat fashion quarter.', { reviewCount: 1400 }),
  place('giethoorn-fashion-3', 'giethoorn', 'fashion', 'Nearby Zwolle fashion mall', 4.2, 'Zwolle', '[패션] 즈볼러 근교 패션 몰.', '[Fashion] Nearby Zwolle fashion mall.', { reviewCount: 900 }),
  place('luxembourg-city-fashion-3', 'luxembourg-city', 'fashion', 'Royal-Hamilius shopping', 4.3, 'Luxembourg City', '[패션] 로열-하밀리우스 패션 몰.', '[Fashion] Royal-Hamilius fashion mall.', { reviewCount: 2100 }),
  place('vianden-fashion-3', 'vianden', 'fashion', 'Diekirch / regional fashion day trip', 4.1, 'Diekirch', '[패션] 권역 패션 데이트립.', '[Fashion] Regional fashion day trip.', { reviewCount: 400 }),
  place('echternach-fashion-3', 'echternach', 'fashion', 'Luxembourg City fashion day trip', 4.2, 'Luxembourg City', '[패션] 수도 패션 데이트립.', '[Fashion] Capital fashion day trip.', { reviewCount: 600 }),
  place('remich-fashion-3', 'remich', 'fashion', 'Mondorf / regional fashion', 4.1, 'Mondorf-les-Bains', '[패션] 권역 패션·스파 타운 쇼핑.', '[Fashion] Regional fashion shopping.', { reviewCount: 350 }),
  place('brussels-fashion-3', 'brussels', 'fashion', 'Galeries Royales Saint-Hubert', 4.5, 'Brussels', '[패션] 생튀베르 갤러리 패션.', '[Fashion] Galeries Royales fashion arcade.', { reviewCount: 8900 }),
  place('bruges-fashion-3', 'bruges', 'fashion', 'Zilverpand shopping', 4.3, 'Bruges', '[패션] 질버판트 패션 코트.', '[Fashion] Zilverpand fashion court.', { reviewCount: 1500 }),
  place('ghent-fashion-3', 'ghent', 'fashion', 'Korenmarkt fashion area', 4.3, 'Ghent', '[패션] 코렌마르크트 패션 권역.', '[Fashion] Korenmarkt fashion area.', { reviewCount: 1700 }),
  place('antwerp-fashion-3', 'antwerp', 'fashion', 'Nationalestraat fashion district', 4.5, 'Antwerp', '[패션] 내셔널스트라트 패션 지구.', '[Fashion] Nationalestraat fashion district.', { reviewCount: 3200 }),
  place('leuven-fashion-3', 'leuven', 'fashion', 'Diestsestraat fashion', 4.3, 'Leuven', '[패션] 디스트세스트라트 패션.', '[Fashion] Diestsestraat fashion.', { reviewCount: 1200 }),
  place('dinant-fashion-3', 'dinant', 'fashion', 'Namur fashion day trip', 4.2, 'Namur', '[패션] 나뮈르 패션 데이트립.', '[Fashion] Namur fashion day trip.', { reviewCount: 700 }),
  place('oslo-fashion-3', 'oslo', 'fashion', 'Byporten / Oslo City fashion', 4.2, 'Oslo', '[패션] 비포르텐·오슬로 시티 패션.', '[Fashion] Byporten and Oslo City fashion.', { reviewCount: 4100 }),
  place('bergen-fashion-3', 'bergen', 'fashion', 'Galleries / Xhibition fashion', 4.2, 'Bergen', '[패션] 갤러리·엑시비션 패션 몰.', '[Fashion] Galleries and Xhibition fashion mall.', { reviewCount: 1800 }),
  place('tromso-fashion-3', 'tromso', 'fashion', 'Jekta Storsenter fashion', 4.2, 'Tromsø', '[패션] 젝타 몰 패션.', '[Fashion] Jekta mall fashion.', { reviewCount: 1600 }),
  place('stavanger-fashion-3', 'stavanger', 'fashion', 'Arkaden / centre fashion', 4.2, 'Stavanger', '[패션] 아르카덴 센터 패션.', '[Fashion] Arkaden centre fashion.', { reviewCount: 1200 }),
  place('trondheim-fashion-3', 'trondheim', 'fashion', 'Mercur / Thomas Angells gate fashion', 4.2, 'Trondheim', '[패션] 머큐르·센터 패션.', '[Fashion] Mercur and centre fashion.', { reviewCount: 1100 }),
  place('alesund-fashion-3', 'alesund', 'fashion', 'Amfi Moa fashion (day trip)', 4.2, 'Ålesund area', '[패션] 암피 모아 패션 몰.', '[Fashion] Amfi Moa fashion mall.', { reviewCount: 1400 }),
  place('flam-fashion-3', 'flam', 'fashion', 'Flåm Railway shop / outdoor fashion', 4.1, 'Flåm', '[패션] 아웃도어·기념품 패션.', '[Fashion] Outdoor and souvenir fashion.', { reviewCount: 800 }),
  place('helsinki-fashion-3', 'helsinki', 'fashion', 'Kamppi Centre fashion', 4.3, 'Kamppi, Helsinki', '[패션] 캄피 센터 패션.', '[Fashion] Kamppi Centre fashion.', { reviewCount: 6700 }),
  place('turku-fashion-3', 'turku', 'fashion', 'Hansakortteli fashion', 4.2, 'Turku', '[패션] 한사코르텔리 패션.', '[Fashion] Hansakortteli fashion.', { reviewCount: 1900 }),
  place('tampere-fashion-3', 'tampere', 'fashion', 'Ratina shopping centre fashion', 4.3, 'Tampere', '[패션] 라티나 몰 패션.', '[Fashion] Ratina mall fashion.', { reviewCount: 2800 }),
  place('rovaniemi-fashion-3', 'rovaniemi', 'fashion', 'Sampokeskus fashion', 4.1, 'Rovaniemi', '[패션] 삼포케스쿠스 패션.', '[Fashion] Sampokeskus fashion.', { reviewCount: 900 }),
  place('porvoo-fashion-3', 'porvoo', 'fashion', 'Old Porvoo design shops', 4.4, 'Porvoo', '[패션] 구시가지 디자인·패션 숍.', '[Fashion] Old town design and fashion shops.', { reviewCount: 1200 }),
  place('stockholm-fashion-3', 'stockholm', 'fashion', 'Gallerian / Hamngatan fashion', 4.3, 'Stockholm', '[패션] 갈레리안·함가탄 패션.', '[Fashion] Gallerian and Hamngatan fashion.', { reviewCount: 7200 }),
  place('gothenburg-fashion-3', 'gothenburg', 'fashion', 'NK Gothenburg / Fredsgatan', 4.3, 'Gothenburg', '[패션] NK·프레드스가탄 패션.', '[Fashion] NK and Fredsgatan fashion.', { reviewCount: 3100 }),
  place('malmo-fashion-3', 'malmo', 'fashion', 'Triangeln / Södra Förstadsgatan fashion', 4.3, 'Malmö', '[패션] 트리앙겔른 패션.', '[Fashion] Triangeln fashion.', { reviewCount: 2900 }),
  place('uppsala-fashion-3', 'uppsala', 'fashion', 'Forumgallerian fashion', 4.2, 'Uppsala', '[패션] 포럼갈레리안 패션.', '[Fashion] Forumgallerian fashion.', { reviewCount: 1400 }),
  place('kiruna-fashion-3', 'kiruna', 'fashion', 'Galleria / centre fashion', 4.1, 'Kiruna', '[패션] 시내 갤러리아 패션.', '[Fashion] Centre galleria fashion.', { reviewCount: 400 }),
  place('copenhagen-fashion-3', 'copenhagen', 'fashion', 'Illum / Magasin du Nord fashion', 4.4, 'Copenhagen', '[패션] 일룸·마가쟁 백화점 패션.', '[Fashion] Illum and Magasin fashion.', { reviewCount: 9800 }),
  place('aarhus-fashion-3', 'aarhus', 'fashion', 'Bruuns Galleri fashion', 4.3, 'Aarhus', '[패션] 브룬스 갤러리 패션.', '[Fashion] Bruuns Galleri fashion.', { reviewCount: 3600 }),
  place('odense-fashion-3', 'odense', 'fashion', 'Magasin / centre fashion', 4.2, 'Odense', '[패션] 마가쟁·센터 패션.', '[Fashion] Magasin and centre fashion.', { reviewCount: 1600 }),
  place('aalborg-fashion-3', 'aalborg', 'fashion', 'Friis shopping centre fashion', 4.2, 'Aalborg', '[패션] 프리스 몰 패션.', '[Fashion] Friis mall fashion.', { reviewCount: 2100 }),
  place('roskilde-fashion-3', 'roskilde', 'fashion', 'Ro\'s Torv fashion', 4.2, 'Roskilde', '[패션] 로스 토르브 패션 몰.', '[Fashion] Ro\'s Torv fashion mall.', { reviewCount: 1100 }),
]
