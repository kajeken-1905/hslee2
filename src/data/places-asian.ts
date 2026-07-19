import { place } from './placeFactory'
import type { Place } from '../types'

/** Asian restaurants (Thai, Japanese, Chinese, Vietnamese, Indian, etc.). */
export const placesAsian: Place[] = [
  // —— london ——
  place('london-asian-1', 'london', 'asian', 'Dishoom Covent Garden', 4.6, '12 Upper St Martin\'s Lane, London', '봄베이 카페 스타일 인디안 요리.', 'Bombay café-style Indian cooking.', { reviewCount: 18000 }),
  place('london-asian-2', 'london', 'asian', 'Kanada-Ya', 4.5, '64 St Giles High St, London', '돈코츠 라멘 인기 지점.', 'Popular tonkotsu ramen spot.', { reviewCount: 5200 }),
  place('london-asian-3', 'london', 'asian', 'Bao Soho', 4.4, '53 Lexington St, London', '대만식 바오·스낵.', 'Taiwanese bao and snacks.', { reviewCount: 4100 }),

  // —— edinburgh ——
  place('edinburgh-asian-1', 'edinburgh', 'asian', 'Mother India\'s Cafe', 4.5, '3-5 Infirmary St, Edinburgh', '스코틀랜드 인기 인디안.', 'Popular Indian in Edinburgh.', { reviewCount: 2800 }),
  place('edinburgh-asian-2', 'edinburgh', 'asian', 'Hanedan / Turkish-Asian mix locals', 4.3, 'Edinburgh', '미들이스턴·아시안 캐주얼.', 'Middle Eastern and Asian casual.', { reviewCount: 900 }),
  place('edinburgh-asian-3', 'edinburgh', 'asian', 'Yeni Meze Bar (Asian sides) / ramen locals', 4.2, 'Edinburgh', '아시안 사이드·라멘 옵션.', 'Asian sides and ramen options.', { reviewCount: 700 }),

  // —— manchester ——
  place('manchester-asian-1', 'manchester', 'asian', 'Almost Famous / Pacific Rim', 4.3, 'Manchester', '아시안 퓨전·스트리트푸드.', 'Asian fusion and street food.', { reviewCount: 2100 }),
  place('manchester-asian-2', 'manchester', 'asian', 'Try Thai', 4.4, 'Manchester', '태국 요리.', 'Thai cooking.', { reviewCount: 1600 }),
  place('manchester-asian-3', 'manchester', 'asian', 'Japaneiro / ramen spots', 4.3, 'Manchester', '일식·라멘.', 'Japanese and ramen.', { reviewCount: 1200 }),

  // —— bath ——
  place('bath-asian-1', 'bath', 'asian', 'Yak Yeti Yak', 4.5, '12 Pierrepont St, Bath', '네팔·히말라야 요리.', 'Nepalese Himalayan cooking.', { reviewCount: 1800 }),
  place('bath-asian-2', 'bath', 'asian', 'Thai Barn', 4.3, 'Bath', '태국 요리.', 'Thai restaurant.', { reviewCount: 900 }),
  place('bath-asian-3', 'bath', 'asian', 'Local Japanese / sushi', 4.2, 'Bath', '스시·일식 캐주얼.', 'Casual sushi and Japanese.', { reviewCount: 700 }),

  // —— oxford ——
  place('oxford-asian-1', 'oxford', 'asian', 'Thaikhun Oxford', 4.3, 'Oxford', '태국 스트리트푸드 스타일.', 'Thai street-food style.', { reviewCount: 1400 }),
  place('oxford-asian-2', 'oxford', 'asian', 'My Sichuan / Chinese', 4.3, 'Oxford', '시츄안·중식.', 'Sichuan and Chinese.', { reviewCount: 1100 }),
  place('oxford-asian-3', 'oxford', 'asian', 'Kokoro / Japanese casual', 4.2, 'Oxford', '일식 캐주얼.', 'Casual Japanese.', { reviewCount: 800 }),

  // —— cambridge ——
  place('cambridge-asian-1', 'cambridge', 'asian', 'Aromi / Asian options nearby', 4.2, 'Cambridge', '시내 아시안 옵션.', 'City Asian options.', { reviewCount: 900 }),
  place('cambridge-asian-2', 'cambridge', 'asian', 'Dojo / noodle bars', 4.3, 'Cambridge', '누들·일식 캐주얼.', 'Noodle and Japanese casual.', { reviewCount: 1200 }),
  place('cambridge-asian-3', 'cambridge', 'asian', 'Thai restaurants on Mill Road', 4.4, 'Mill Road, Cambridge', '밀로드 태국 식당가.', 'Thai restaurants on Mill Road.', { reviewCount: 1600 }),

  // —— liverpool ——
  place('liverpool-asian-1', 'liverpool', 'asian', 'Yuet Ben', 4.3, 'Liverpool', '클래식 중식.', 'Classic Chinese.', { reviewCount: 1100 }),
  place('liverpool-asian-2', 'liverpool', 'asian', 'Thai Café Liverpool', 4.3, 'Liverpool', '태국 요리.', 'Thai cooking.', { reviewCount: 900 }),
  place('liverpool-asian-3', 'liverpool', 'asian', 'Japanese / ramen locals', 4.2, 'Liverpool', '일식·라멘.', 'Japanese and ramen.', { reviewCount: 800 }),

  // —— brighton ——
  place('brighton-asian-1', 'brighton', 'asian', 'Food for Friends Asian plates / Thai locals', 4.3, 'Brighton', '아시안 플레이트·태국.', 'Asian plates and Thai.', { reviewCount: 1400 }),
  place('brighton-asian-2', 'brighton', 'asian', 'Bincho Yakitori', 4.4, 'Brighton', '야키토리·일식.', 'Yakitori and Japanese.', { reviewCount: 1600 }),
  place('brighton-asian-3', 'brighton', 'asian', 'Indian / South Asian on Preston Street', 4.3, 'Brighton', '남아시아 요리.', 'South Asian cooking.', { reviewCount: 1200 }),

  // —— york ——
  place('york-asian-1', 'york', 'asian', 'Khao San Road York', 4.4, 'York', '태국 요리.', 'Thai cooking.', { reviewCount: 1300 }),
  place('york-asian-2', 'york', 'asian', 'Il Paradiso del Cibo / Asian nearby', 4.2, 'York', '아시안 캐주얼 옵션.', 'Casual Asian options.', { reviewCount: 700 }),
  place('york-asian-3', 'york', 'asian', 'Japanese / sushi locals', 4.2, 'York', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 650 }),

  // —— bristol ——
  place('bristol-asian-1', 'bristol', 'asian', 'Thali Group / Indian', 4.4, 'Bristol', '인디안 탈리·커리.', 'Indian thali and curry.', { reviewCount: 2100 }),
  place('bristol-asian-2', 'bristol', 'asian', 'Woky Ko / Asian street food', 4.3, 'Bristol', '아시안 스트리트푸드.', 'Asian street food.', { reviewCount: 1500 }),
  place('bristol-asian-3', 'bristol', 'asian', 'No.1 Harbourside Asian options', 4.2, 'Bristol', '하버사이드 아시안.', 'Harbourside Asian options.', { reviewCount: 900 }),

  // —— amsterdam ——
  place('amsterdam-asian-1', 'amsterdam', 'asian', 'Restaurant Blauw', 4.5, 'Amsterdam', '인기 인도네시아 라이스타펠.', 'Popular Indonesian rijsttafel.', { reviewCount: 4200 }),
  place('amsterdam-asian-2', 'amsterdam', 'asian', 'Takumi Ramen', 4.4, 'Amsterdam', '라멘 전문.', 'Ramen specialist.', { reviewCount: 2800 }),
  place('amsterdam-asian-3', 'amsterdam', 'asian', 'Bird / Thai', 4.4, 'Amsterdam', '태국 요리.', 'Thai cooking.', { reviewCount: 3100 }),

  // —— rotterdam ——
  place('rotterdam-asian-1', 'rotterdam', 'asian', 'Asian Glories', 4.4, 'Rotterdam', '중식·딤섬.', 'Chinese and dim sum.', { reviewCount: 1800 }),
  place('rotterdam-asian-2', 'rotterdam', 'asian', 'Takumi / ramen', 4.3, 'Rotterdam', '라멘.', 'Ramen.', { reviewCount: 1400 }),
  place('rotterdam-asian-3', 'rotterdam', 'asian', 'Thai Street Food locals', 4.3, 'Rotterdam', '태국 스트리트푸드.', 'Thai street food.', { reviewCount: 1100 }),

  // —— the-hague ——
  place('the-hague-asian-1', 'the-hague', 'asian', 'Garuda / Indonesian', 4.4, 'The Hague', '인도네시아 요리.', 'Indonesian cooking.', { reviewCount: 1600 }),
  place('the-hague-asian-2', 'the-hague', 'asian', 'Asian restaurants around Chinatown', 4.3, 'The Hague', '차이나타운 아시안.', 'Chinatown Asian spots.', { reviewCount: 1200 }),
  place('the-hague-asian-3', 'the-hague', 'asian', 'Sushi / Japanese locals', 4.2, 'The Hague', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 900 }),

  // —— utrecht ——
  place('utrecht-asian-1', 'utrecht', 'asian', 'Seb\'s / Asian fusion', 4.3, 'Utrecht', '아시안 퓨전.', 'Asian fusion.', { reviewCount: 1000 }),
  place('utrecht-asian-2', 'utrecht', 'asian', 'Thai / Vietnamese locals', 4.3, 'Utrecht', '태국·베트남 요리.', 'Thai and Vietnamese.', { reviewCount: 1100 }),
  place('utrecht-asian-3', 'utrecht', 'asian', 'Ramen / Japanese', 4.2, 'Utrecht', '라멘·일식.', 'Ramen and Japanese.', { reviewCount: 800 }),

  // —— haarlem ——
  place('haarlem-asian-1', 'haarlem', 'asian', 'Asian Kitchen / Thai', 4.3, 'Haarlem', '태국·아시안.', 'Thai and Asian.', { reviewCount: 700 }),
  place('haarlem-asian-2', 'haarlem', 'asian', 'Sushi / Japanese locals', 4.2, 'Haarlem', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 600 }),
  place('haarlem-asian-3', 'haarlem', 'asian', 'Indian restaurants', 4.3, 'Haarlem', '인디안 요리.', 'Indian cooking.', { reviewCount: 650 }),

  // —— delft ——
  place('delft-asian-1', 'delft', 'asian', 'Asian / Chinese locals', 4.2, 'Delft', '중식·아시안.', 'Chinese and Asian.', { reviewCount: 500 }),
  place('delft-asian-2', 'delft', 'asian', 'Thai restaurants', 4.3, 'Delft', '태국 요리.', 'Thai cooking.', { reviewCount: 550 }),
  place('delft-asian-3', 'delft', 'asian', 'Sushi bars', 4.2, 'Delft', '스시 바.', 'Sushi bars.', { reviewCount: 480 }),

  // —— maastricht ——
  place('maastricht-asian-1', 'maastricht', 'asian', 'Asian Palace / Chinese', 4.3, 'Maastricht', '중식.', 'Chinese restaurant.', { reviewCount: 800 }),
  place('maastricht-asian-2', 'maastricht', 'asian', 'Thai / Indonesian locals', 4.3, 'Maastricht', '태국·인도네시아.', 'Thai and Indonesian.', { reviewCount: 700 }),
  place('maastricht-asian-3', 'maastricht', 'asian', 'Japanese / sushi', 4.2, 'Maastricht', '일식·스시.', 'Japanese and sushi.', { reviewCount: 600 }),

  // —— giethoorn ——
  place('giethoorn-asian-1', 'giethoorn', 'asian', 'Asian dishes at canal restaurants', 4.1, 'Giethoorn', '운하 식당의 아시안 메뉴.', 'Asian dishes at canal restaurants.', { reviewCount: 400 }),
  place('giethoorn-asian-2', 'giethoorn', 'asian', 'Nearby Zwolle Asian restaurants', 4.2, 'Zwolle', '근교 도시 아시안 식당.', 'Asian restaurants in nearby Zwolle.', { reviewCount: 600 }),
  place('giethoorn-asian-3', 'giethoorn', 'asian', 'Thai / Chinese day-trip options', 4.1, 'Overijssel', '권역 태국·중식.', 'Regional Thai and Chinese.', { reviewCount: 350 }),

  // —— luxembourg-city ——
  place('luxembourg-city-asian-1', 'luxembourg-city', 'asian', 'Bazaar / Asian fusion', 4.3, 'Luxembourg City', '아시안 퓨전.', 'Asian fusion.', { reviewCount: 900 }),
  place('luxembourg-city-asian-2', 'luxembourg-city', 'asian', 'Thai / Vietnamese locals', 4.3, 'Luxembourg City', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 800 }),
  place('luxembourg-city-asian-3', 'luxembourg-city', 'asian', 'Japanese / sushi', 4.2, 'Luxembourg City', '일식·스시.', 'Japanese and sushi.', { reviewCount: 700 }),

  // —— vianden ——
  place('vianden-asian-1', 'vianden', 'asian', 'Local restaurants with Asian menus', 4.1, 'Vianden', '아시안 메뉴 제공 식당.', 'Restaurants with Asian menus.', { reviewCount: 250 }),
  place('vianden-asian-2', 'vianden', 'asian', 'Luxembourg City Asian day trip', 4.2, 'Luxembourg City', '수도 아시안 식당 데이트립.', 'Capital Asian restaurant day trip.', { reviewCount: 500 }),
  place('vianden-asian-3', 'vianden', 'asian', 'Thai / Chinese regional', 4.1, 'Region', '권역 태국·중식.', 'Regional Thai and Chinese.', { reviewCount: 220 }),

  // —— echternach ——
  place('echternach-asian-1', 'echternach', 'asian', 'Town restaurants Asian options', 4.1, 'Echternach', '타운 식당 아시안 옵션.', 'Town restaurant Asian options.', { reviewCount: 200 }),
  place('echternach-asian-2', 'echternach', 'asian', 'Trier Asian restaurants day trip', 4.2, 'Trier', '트리어 아시안 데이트립.', 'Trier Asian day trip.', { reviewCount: 450 }),
  place('echternach-asian-3', 'echternach', 'asian', 'Thai / Chinese regional', 4.1, 'Region', '권역 태국·중식.', 'Regional Thai and Chinese.', { reviewCount: 180 }),

  // —— remich ——
  place('remich-asian-1', 'remich', 'asian', 'Moselle restaurants Asian sides', 4.1, 'Remich', '모젤 식당 아시안 사이드.', 'Moselle restaurants with Asian sides.', { reviewCount: 200 }),
  place('remich-asian-2', 'remich', 'asian', 'Luxembourg City Asian day trip', 4.2, 'Luxembourg City', '수도 아시안 데이트립.', 'Capital Asian day trip.', { reviewCount: 450 }),
  place('remich-asian-3', 'remich', 'asian', 'Thai / sushi regional', 4.1, 'Region', '권역 태국·스시.', 'Regional Thai and sushi.', { reviewCount: 180 }),

  // —— brussels ——
  place('brussels-asian-1', 'brussels', 'asian', 'Yamato / Japanese', 4.4, 'Brussels', '일식.', 'Japanese restaurant.', { reviewCount: 1600 }),
  place('brussels-asian-2', 'brussels', 'asian', 'Henri / Asian & beyond', 4.3, 'Brussels', '아시안 포함 모던 다이닝.', 'Modern dining including Asian.', { reviewCount: 1200 }),
  place('brussels-asian-3', 'brussels', 'asian', 'Chinatown / Rue de la Vierge Noire Thai-Chinese', 4.3, 'Brussels', '차이나타운 태국·중식.', 'Chinatown Thai and Chinese.', { reviewCount: 2100 }),

  // —— bruges ——
  place('bruges-asian-1', 'bruges', 'asian', 'Tanuki / Japanese', 4.3, 'Bruges', '일식.', 'Japanese restaurant.', { reviewCount: 900 }),
  place('bruges-asian-2', 'bruges', 'asian', 'Thai restaurants near Markt', 4.3, 'Bruges', '마르크트 인근 태국.', 'Thai near the Markt.', { reviewCount: 800 }),
  place('bruges-asian-3', 'bruges', 'asian', 'Chinese / Asian locals', 4.2, 'Bruges', '중식·아시안.', 'Chinese and Asian.', { reviewCount: 650 }),

  // —— ghent ——
  place('ghent-asian-1', 'ghent', 'asian', 'Mokagon / Asian', 4.3, 'Ghent', '아시안 요리.', 'Asian cooking.', { reviewCount: 900 }),
  place('ghent-asian-2', 'ghent', 'asian', 'Thai / Vietnamese locals', 4.3, 'Ghent', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 850 }),
  place('ghent-asian-3', 'ghent', 'asian', 'Sushi / Japanese', 4.2, 'Ghent', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 700 }),

  // —— antwerp ——
  place('antwerp-asian-1', 'antwerp', 'asian', 'The Jane nearby Asian / Chinatown', 4.3, 'Antwerp', '차이나타운·아시안.', 'Chinatown and Asian spots.', { reviewCount: 1400 }),
  place('antwerp-asian-2', 'antwerp', 'asian', 'Thai / Vietnamese', 4.3, 'Antwerp', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 1100 }),
  place('antwerp-asian-3', 'antwerp', 'asian', 'Japanese / ramen', 4.3, 'Antwerp', '일식·라멘.', 'Japanese and ramen.', { reviewCount: 1000 }),

  // —— leuven ——
  place('leuven-asian-1', 'leuven', 'asian', 'Asian / Thai locals', 4.3, 'Leuven', '태국·아시안.', 'Thai and Asian.', { reviewCount: 700 }),
  place('leuven-asian-2', 'leuven', 'asian', 'Sushi / Japanese', 4.2, 'Leuven', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 600 }),
  place('leuven-asian-3', 'leuven', 'asian', 'Indian / South Asian', 4.3, 'Leuven', '인디안·남아시아.', 'Indian and South Asian.', { reviewCount: 650 }),

  // —— dinant ——
  place('dinant-asian-1', 'dinant', 'asian', 'Local Asian menu restaurants', 4.1, 'Dinant', '아시안 메뉴 식당.', 'Restaurants with Asian menus.', { reviewCount: 220 }),
  place('dinant-asian-2', 'dinant', 'asian', 'Namur Asian day trip', 4.2, 'Namur', '나뮈르 아시안 데이트립.', 'Namur Asian day trip.', { reviewCount: 400 }),
  place('dinant-asian-3', 'dinant', 'asian', 'Thai / Chinese regional', 4.1, 'Wallonia', '권역 태국·중식.', 'Regional Thai and Chinese.', { reviewCount: 200 }),

  // —— oslo ——
  place('oslo-asian-1', 'oslo', 'asian', 'Asia Aker Brygge / Asian hubs', 4.3, 'Oslo', '아시안 다이닝 허브.', 'Asian dining hubs.', { reviewCount: 1800 }),
  place('oslo-asian-2', 'oslo', 'asian', 'Sushi / Japanese locals', 4.3, 'Oslo', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 1500 }),
  place('oslo-asian-3', 'oslo', 'asian', 'Thai / Vietnamese', 4.3, 'Oslo', '태국·베트남.', 'Thai and Vietnamese.', { reviewCount: 1400 }),

  // —— bergen ——
  place('bergen-asian-1', 'bergen', 'asian', 'Asian / Thai locals', 4.2, 'Bergen', '태국·아시안.', 'Thai and Asian.', { reviewCount: 700 }),
  place('bergen-asian-2', 'bergen', 'asian', 'Sushi / Japanese', 4.2, 'Bergen', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 650 }),
  place('bergen-asian-3', 'bergen', 'asian', 'Indian restaurants', 4.3, 'Bergen', '인디안 요리.', 'Indian cooking.', { reviewCount: 700 }),

  // —— tromso ——
  place('tromso-asian-1', 'tromso', 'asian', 'Asian / Thai locals', 4.2, 'Tromsø', '태국·아시안.', 'Thai and Asian.', { reviewCount: 450 }),
  place('tromso-asian-2', 'tromso', 'asian', 'Sushi bars', 4.2, 'Tromsø', '스시 바.', 'Sushi bars.', { reviewCount: 400 }),
  place('tromso-asian-3', 'tromso', 'asian', 'Indian / Chinese', 4.2, 'Tromsø', '인디안·중식.', 'Indian and Chinese.', { reviewCount: 380 }),

  // —— stavanger ——
  place('stavanger-asian-1', 'stavanger', 'asian', 'Asian / Thai locals', 4.2, 'Stavanger', '태국·아시안.', 'Thai and Asian.', { reviewCount: 550 }),
  place('stavanger-asian-2', 'stavanger', 'asian', 'Sushi / Japanese', 4.2, 'Stavanger', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 500 }),
  place('stavanger-asian-3', 'stavanger', 'asian', 'Indian restaurants', 4.3, 'Stavanger', '인디안.', 'Indian.', { reviewCount: 520 }),

  // —— trondheim ——
  place('trondheim-asian-1', 'trondheim', 'asian', 'Asian / Thai locals', 4.2, 'Trondheim', '태국·아시안.', 'Thai and Asian.', { reviewCount: 500 }),
  place('trondheim-asian-2', 'trondheim', 'asian', 'Sushi / Japanese', 4.2, 'Trondheim', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 450 }),
  place('trondheim-asian-3', 'trondheim', 'asian', 'Vietnamese / Chinese', 4.2, 'Trondheim', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 420 }),

  // —— alesund ——
  place('alesund-asian-1', 'alesund', 'asian', 'Asian menu restaurants', 4.1, 'Ålesund', '아시안 메뉴 식당.', 'Restaurants with Asian menus.', { reviewCount: 280 }),
  place('alesund-asian-2', 'alesund', 'asian', 'Sushi / Thai locals', 4.2, 'Ålesund', '스시·태국.', 'Sushi and Thai.', { reviewCount: 300 }),
  place('alesund-asian-3', 'alesund', 'asian', 'Chinese / Indian', 4.1, 'Ålesund', '중식·인디안.', 'Chinese and Indian.', { reviewCount: 260 }),

  // —— flam ——
  place('flam-asian-1', 'flam', 'asian', 'Hotel restaurants Asian options', 4.1, 'Flåm', '호텔 식당 아시안 옵션.', 'Hotel restaurants with Asian options.', { reviewCount: 250 }),
  place('flam-asian-2', 'flam', 'asian', 'Bergen Asian day trip', 4.2, 'Bergen', '베르겐 아시안 데이트립.', 'Bergen Asian day trip.', { reviewCount: 500 }),
  place('flam-asian-3', 'flam', 'asian', 'Thai / sushi regional', 4.1, 'Sogn', '권역 태국·스시.', 'Regional Thai and sushi.', { reviewCount: 200 }),

  // —— helsinki ——
  place('helsinki-asian-1', 'helsinki', 'asian', 'Passio / Asian-influenced & Thai locals', 4.3, 'Helsinki', '아시안 인플루언스·태국.', 'Asian-influenced and Thai.', { reviewCount: 1400 }),
  place('helsinki-asian-2', 'helsinki', 'asian', 'Sushi / Japanese', 4.3, 'Helsinki', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 1600 }),
  place('helsinki-asian-3', 'helsinki', 'asian', 'Vietnamese / Chinese', 4.3, 'Helsinki', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 1200 }),

  // —— turku ——
  place('turku-asian-1', 'turku', 'asian', 'Asian / Thai locals', 4.2, 'Turku', '태국·아시안.', 'Thai and Asian.', { reviewCount: 500 }),
  place('turku-asian-2', 'turku', 'asian', 'Sushi / Japanese', 4.2, 'Turku', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 450 }),
  place('turku-asian-3', 'turku', 'asian', 'Chinese / Indian', 4.2, 'Turku', '중식·인디안.', 'Chinese and Indian.', { reviewCount: 420 }),

  // —— tampere ——
  place('tampere-asian-1', 'tampere', 'asian', 'Asian / Thai locals', 4.2, 'Tampere', '태국·아시안.', 'Thai and Asian.', { reviewCount: 550 }),
  place('tampere-asian-2', 'tampere', 'asian', 'Sushi / Japanese', 4.2, 'Tampere', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 500 }),
  place('tampere-asian-3', 'tampere', 'asian', 'Vietnamese / Chinese', 4.2, 'Tampere', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 480 }),

  // —— rovaniemi ——
  place('rovaniemi-asian-1', 'rovaniemi', 'asian', 'Asian / Chinese locals', 4.1, 'Rovaniemi', '중식·아시안.', 'Chinese and Asian.', { reviewCount: 350 }),
  place('rovaniemi-asian-2', 'rovaniemi', 'asian', 'Sushi / Thai', 4.1, 'Rovaniemi', '스시·태국.', 'Sushi and Thai.', { reviewCount: 320 }),
  place('rovaniemi-asian-3', 'rovaniemi', 'asian', 'Indian restaurants', 4.2, 'Rovaniemi', '인디안.', 'Indian.', { reviewCount: 300 }),

  // —— porvoo ——
  place('porvoo-asian-1', 'porvoo', 'asian', 'Local Asian menu restaurants', 4.1, 'Porvoo', '아시안 메뉴 식당.', 'Restaurants with Asian menus.', { reviewCount: 250 }),
  place('porvoo-asian-2', 'porvoo', 'asian', 'Helsinki Asian day trip', 4.2, 'Helsinki', '헬싱키 아시안 데이트립.', 'Helsinki Asian day trip.', { reviewCount: 600 }),
  place('porvoo-asian-3', 'porvoo', 'asian', 'Thai / sushi regional', 4.1, 'Region', '권역 태국·스시.', 'Regional Thai and sushi.', { reviewCount: 220 }),

  // —— stockholm ——
  place('stockholm-asian-1', 'stockholm', 'asian', 'Sturekatten nearby Asian / Thai Town vibes', 4.3, 'Stockholm', '태국·아시안 씬.', 'Thai and Asian scene.', { reviewCount: 1800 }),
  place('stockholm-asian-2', 'stockholm', 'asian', 'Sushi / Japanese', 4.4, 'Stockholm', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 2200 }),
  place('stockholm-asian-3', 'stockholm', 'asian', 'Vietnamese / Chinese', 4.3, 'Stockholm', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 1600 }),

  // —— gothenburg ——
  place('gothenburg-asian-1', 'gothenburg', 'asian', 'Asian / Thai locals', 4.3, 'Gothenburg', '태국·아시안.', 'Thai and Asian.', { reviewCount: 1200 }),
  place('gothenburg-asian-2', 'gothenburg', 'asian', 'Sushi / Japanese', 4.3, 'Gothenburg', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 1100 }),
  place('gothenburg-asian-3', 'gothenburg', 'asian', 'Vietnamese / Chinese', 4.2, 'Gothenburg', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 900 }),

  // —— malmo ——
  place('malmo-asian-1', 'malmo', 'asian', 'Asian / Thai locals', 4.3, 'Malmö', '태국·아시안.', 'Thai and Asian.', { reviewCount: 1000 }),
  place('malmo-asian-2', 'malmo', 'asian', 'Sushi / Japanese', 4.3, 'Malmö', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 950 }),
  place('malmo-asian-3', 'malmo', 'asian', 'Vietnamese / Middle-Asian mix', 4.3, 'Malmö', '베트남·아시안 믹스.', 'Vietnamese and Asian mix.', { reviewCount: 1100 }),

  // —— uppsala ——
  place('uppsala-asian-1', 'uppsala', 'asian', 'Asian / Thai locals', 4.2, 'Uppsala', '태국·아시안.', 'Thai and Asian.', { reviewCount: 500 }),
  place('uppsala-asian-2', 'uppsala', 'asian', 'Sushi / Japanese', 4.2, 'Uppsala', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 450 }),
  place('uppsala-asian-3', 'uppsala', 'asian', 'Chinese / Indian', 4.2, 'Uppsala', '중식·인디안.', 'Chinese and Indian.', { reviewCount: 420 }),

  // —— kiruna ——
  place('kiruna-asian-1', 'kiruna', 'asian', 'Asian / Chinese locals', 4.1, 'Kiruna', '중식·아시안.', 'Chinese and Asian.', { reviewCount: 220 }),
  place('kiruna-asian-2', 'kiruna', 'asian', 'Thai / sushi regional', 4.1, 'Kiruna', '태국·스시.', 'Thai and sushi.', { reviewCount: 200 }),
  place('kiruna-asian-3', 'kiruna', 'asian', 'Luleå Asian day trip', 4.2, 'Luleå', '룰레오 아시안 데이트립.', 'Luleå Asian day trip.', { reviewCount: 350 }),

  // —— copenhagen ——
  place('copenhagen-asian-1', 'copenhagen', 'asian', 'Restaurant Kiin Kiin', 4.6, 'Copenhagen', '미슐랭 태국 파인 다이닝.', 'Michelin Thai fine dining.', { reviewCount: 2100 }),
  place('copenhagen-asian-2', 'copenhagen', 'asian', 'Sticks\'n\'Sushi', 4.3, 'Copenhagen', '스시·야키토리 체인.', 'Sushi and yakitori.', { reviewCount: 4800 }),
  place('copenhagen-asian-3', 'copenhagen', 'asian', 'Vietnamese / Chinese locals', 4.3, 'Copenhagen', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 1600 }),

  // —— aarhus ——
  place('aarhus-asian-1', 'aarhus', 'asian', 'Asian / Thai locals', 4.3, 'Aarhus', '태국·아시안.', 'Thai and Asian.', { reviewCount: 800 }),
  place('aarhus-asian-2', 'aarhus', 'asian', 'Sushi / Japanese', 4.2, 'Aarhus', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 700 }),
  place('aarhus-asian-3', 'aarhus', 'asian', 'Vietnamese / Chinese', 4.2, 'Aarhus', '베트남·중식.', 'Vietnamese and Chinese.', { reviewCount: 650 }),

  // —— odense ——
  place('odense-asian-1', 'odense', 'asian', 'Asian / Thai locals', 4.2, 'Odense', '태국·아시안.', 'Thai and Asian.', { reviewCount: 450 }),
  place('odense-asian-2', 'odense', 'asian', 'Sushi / Japanese', 4.2, 'Odense', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 400 }),
  place('odense-asian-3', 'odense', 'asian', 'Chinese / Indian', 4.2, 'Odense', '중식·인디안.', 'Chinese and Indian.', { reviewCount: 380 }),

  // —— aalborg ——
  place('aalborg-asian-1', 'aalborg', 'asian', 'Asian / Thai locals', 4.2, 'Aalborg', '태국·아시안.', 'Thai and Asian.', { reviewCount: 420 }),
  place('aalborg-asian-2', 'aalborg', 'asian', 'Sushi / Japanese', 4.2, 'Aalborg', '스시·일식.', 'Sushi and Japanese.', { reviewCount: 380 }),
  place('aalborg-asian-3', 'aalborg', 'asian', 'Chinese / Indian', 4.2, 'Aalborg', '중식·인디안.', 'Chinese and Indian.', { reviewCount: 360 }),

  // —— roskilde ——
  place('roskilde-asian-1', 'roskilde', 'asian', 'Asian menu restaurants', 4.1, 'Roskilde', '아시안 메뉴 식당.', 'Restaurants with Asian menus.', { reviewCount: 250 }),
  place('roskilde-asian-2', 'roskilde', 'asian', 'Copenhagen Asian day trip', 4.3, 'Copenhagen', '코펜하겐 아시안 데이트립.', 'Copenhagen Asian day trip.', { reviewCount: 800 }),
  place('roskilde-asian-3', 'roskilde', 'asian', 'Thai / sushi regional', 4.1, 'Zealand', '권역 태국·스시.', 'Regional Thai and sushi.', { reviewCount: 220 }),

]
