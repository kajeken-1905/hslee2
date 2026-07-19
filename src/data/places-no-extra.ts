import { place } from './placeFactory'
import type { Place } from '../types'

export const placesNOExtra: Place[] = [
  // —— bergen ——
  place('bergen-fine_dining-1', 'bergen', 'fine_dining', 'Restaurant 1877', 4.6, 'Bergen', '미슐랭 다이닝.', 'Michelin dining.', { reviewCount: 860 }),
  place('bergen-fine_dining-2', 'bergen', 'fine_dining', 'Bare Restaurant', 4.5, 'Bergen', '뉴 노르딕.', 'New Nordic.', { reviewCount: 720 }),
  place('bergen-fine_dining-3', 'bergen', 'fine_dining', 'Lysverket', 4.5, 'Bergen', '아트뮤지엄 다이닝.', 'Art museum dining.', { reviewCount: 980 }),
  place('bergen-fine_dining-4', 'bergen', 'fine_dining', 'Enhance', 4.4, 'Bergen', '모던 다이닝.', 'Modern dining.', { reviewCount: 540 }),
  place('bergen-fine_dining-5', 'bergen', 'fine_dining', 'Fish Market restaurants', 4.3, 'Bergen', '생선시장 시푸드.', 'Fish Market seafood.', { reviewCount: 2400 }),
  place('bergen-bakery-1', 'bergen', 'bakery', 'Godt Brød Bergen', 4.4, 'Bergen', '유기농 브레드.', 'Organic breads.', { reviewCount: 1200 }),
  place('bergen-bakery-2', 'bergen', 'bakery', 'Bakeriet', 4.5, 'Bergen', '로컬 베이커리.', 'Local bakery.', { reviewCount: 860 }),
  place('bergen-bakery-3', 'bergen', 'bakery', 'Café Opera bakery items', 4.3, 'Bergen', '베이크.', 'Bakes.', { reviewCount: 980 }),
  place('bergen-bakery-4', 'bergen', 'bakery', 'Local sourdough', 4.4, 'Bergen', '사워도우.', 'Sourdough.', { reviewCount: 640 }),
  place('bergen-bakery-5', 'bergen', 'bakery', 'Pastry shops Bryggen area', 4.3, 'Bergen', '페이스트리.', 'Pastries.', { reviewCount: 1100 }),
  place('bergen-cafe-1', 'bergen', 'cafe', 'Kaffevarelset', 4.5, 'Bergen', '스페셜티.', 'Specialty.', { reviewCount: 1100 }),
  place('bergen-cafe-2', 'bergen', 'cafe', 'Café Opera', 4.4, 'Bergen', '클래식 카페.', 'Classic café.', { reviewCount: 1600 }),
  place('bergen-cafe-3', 'bergen', 'cafe', 'Det Lille Kaffe Kompaniet', 4.5, 'Bergen', '작은 커피 바.', 'Tiny coffee bar.', { reviewCount: 980 }),
  place('bergen-cafe-4', 'bergen', 'cafe', 'Blom', 4.3, 'Bergen', '캐주얼.', 'Casual.', { reviewCount: 720 }),
  place('bergen-cafe-5', 'bergen', 'cafe', 'Fløyen café', 4.2, 'Bergen', '산 정상 카페.', 'Mountain café.', { reviewCount: 2100 }),
  place('bergen-korean-1', 'bergen', 'korean', 'Korean Bergen', 4.2, 'Bergen', '제한적 한식.', 'Limited Korean.', { reviewCount: 360 }),
  place('bergen-korean-2', 'bergen', 'korean', 'Asian-Korean kitchens', 4.1, 'Bergen', '캐주얼.', 'Casual.', { reviewCount: 280 }),

  // —— tromso ——
  place('tromso-fine_dining-1', 'tromso', 'fine_dining', 'Restaurant Smak', 4.6, 'Tromsø', '북극 미식.', 'Arctic fine dining.', { reviewCount: 720 }),
  place('tromso-fine_dining-2', 'tromso', 'fine_dining', 'Fiskekompaniet', 4.5, 'Tromsø', '시푸드.', 'Seafood.', { reviewCount: 1100 }),
  place('tromso-fine_dining-3', 'tromso', 'fine_dining', 'Mathallen Tromsø dining', 4.4, 'Tromsø', '마켓 다이닝.', 'Market dining.', { reviewCount: 860 }),
  place('tromso-fine_dining-4', 'tromso', 'fine_dining', 'Hilde’s restaurant peers', 4.3, 'Tromsø', '로컬.', 'Local.', { reviewCount: 540 }),
  place('tromso-fine_dining-5', 'tromso', 'fine_dining', 'Raketten / casual iconic', 4.2, 'Tromsø', '핫도그 스탠드 아이콘.', 'Iconic hotdog stand.', { reviewCount: 1800 }),
  place('tromso-bakery-1', 'tromso', 'bakery', 'Bakeri Tromsø', 4.4, 'Tromsø', '베이커리.', 'Bakery.', { reviewCount: 640 }),
  place('tromso-bakery-2', 'tromso', 'bakery', 'Local cinnamon bun bakeries', 4.4, 'Tromsø', '시나몬롤.', 'Cinnamon buns.', { reviewCount: 860 }),
  place('tromso-bakery-3', 'tromso', 'bakery', 'Café bakeries centre', 4.3, 'Tromsø', '센터 베이크.', 'Centre bakes.', { reviewCount: 720 }),
  place('tromso-cafe-1', 'tromso', 'cafe', 'KaffeTromsø specialty', 4.5, 'Tromsø', '스페셜티.', 'Specialty.', { reviewCount: 980 }),
  place('tromso-cafe-2', 'tromso', 'cafe', 'Ølhallen café vibe nearby', 4.3, 'Tromsø', '로컬 명소.', 'Local landmark vibe.', { reviewCount: 1400 }),
  place('tromso-cafe-3', 'tromso', 'cafe', 'City centre cafés', 4.3, 'Tromsø', '시내 카페.', 'City cafés.', { reviewCount: 1100 }),
  place('tromso-cafe-4', 'tromso', 'cafe', 'Cable car cafés', 4.2, 'Tromsø', '케이블카 카페.', 'Cable car cafés.', { reviewCount: 1600 }),
  place('tromso-korean-1', 'tromso', 'korean', 'Korean Tromsø', 4.1, 'Tromsø', '한식 제한적.', 'Limited Korean.', { reviewCount: 200 }),

  // —— stavanger ——
  place('stavanger-fine_dining-1', 'stavanger', 'fine_dining', 'RE-NAA', 4.8, 'Stavanger', '3스타급 노르딕.', 'Top-tier Nordic dining.', { reviewCount: 980 }),
  place('stavanger-fine_dining-2', 'stavanger', 'fine_dining', 'Sabi Omakase / peers', 4.5, 'Stavanger', '파인 다이닝.', 'Fine dining.', { reviewCount: 640 }),
  place('stavanger-fine_dining-3', 'stavanger', 'fine_dining', 'Bare Vestland', 4.5, 'Stavanger', '로컬 재료.', 'Local produce.', { reviewCount: 720 }),
  place('stavanger-fine_dining-4', 'stavanger', 'fine_dining', 'Renaa Sølvberget', 4.4, 'Stavanger', '캐주얼 파인.', 'Casual fine dining.', { reviewCount: 1100 }),
  place('stavanger-fine_dining-5', 'stavanger', 'fine_dining', 'Fish restaurants harbour', 4.3, 'Stavanger', '항구 시푸드.', 'Harbour seafood.', { reviewCount: 1400 }),
  place('stavanger-bakery-1', 'stavanger', 'bakery', 'Godt Brød Stavanger', 4.4, 'Stavanger', '베이커리.', 'Bakery.', { reviewCount: 860 }),
  place('stavanger-bakery-2', 'stavanger', 'bakery', 'Local bakers Old Town', 4.4, 'Stavanger', '올드타운 베이커.', 'Old Town bakers.', { reviewCount: 640 }),
  place('stavanger-bakery-3', 'stavanger', 'bakery', 'Café bakery counters', 4.3, 'Stavanger', '카페 베이크.', 'Café bakes.', { reviewCount: 720 }),
  place('stavanger-cafe-1', 'stavanger', 'cafe', 'Røst Kaffibar', 4.5, 'Stavanger', '스페셜티.', 'Specialty.', { reviewCount: 980 }),
  place('stavanger-cafe-2', 'stavanger', 'cafe', 'Café Sting', 4.3, 'Stavanger', '로컬 카페.', 'Local café.', { reviewCount: 1100 }),
  place('stavanger-cafe-3', 'stavanger', 'cafe', 'Harbour cafés', 4.3, 'Stavanger', '항구 카페.', 'Harbour cafés.', { reviewCount: 1200 }),
  place('stavanger-cafe-4', 'stavanger', 'cafe', 'Gamle Stavanger cafés', 4.2, 'Stavanger', '올드타운 카페.', 'Old Town cafés.', { reviewCount: 860 }),
  place('stavanger-korean-1', 'stavanger', 'korean', 'Korean Stavanger', 4.2, 'Stavanger', '제한적.', 'Limited.', { reviewCount: 280 }),

  // —— trondheim ——
  place('trondheim-fine_dining-1', 'trondheim', 'fine_dining', 'Credo', 4.7, 'Trondheim', '미슐랭 다이닝.', 'Michelin dining.', { reviewCount: 860 }),
  place('trondheim-fine_dining-2', 'trondheim', 'fine_dining', 'Speilsalen', 4.5, 'Trondheim', '클래식 파인 다이닝.', 'Classic fine dining.', { reviewCount: 640 }),
  place('trondheim-fine_dining-3', 'trondheim', 'fine_dining', 'FAUSKEN', 4.4, 'Trondheim', '모던.', 'Modern.', { reviewCount: 520 }),
  place('trondheim-fine_dining-4', 'trondheim', 'fine_dining', 'Bakklandet restaurants', 4.3, 'Trondheim', '바이든 식당.', 'Bakklandet restaurants.', { reviewCount: 1400 }),
  place('trondheim-fine_dining-5', 'trondheim', 'fine_dining', 'Harbour dining', 4.3, 'Trondheim', '항구 다이닝.', 'Harbour dining.', { reviewCount: 980 }),
  place('trondheim-bakery-1', 'trondheim', 'bakery', 'Bakeriet i Trondheim', 4.5, 'Trondheim', '베이커리.', 'Bakery.', { reviewCount: 860 }),
  place('trondheim-bakery-2', 'trondheim', 'bakery', 'Godt Brød', 4.4, 'Trondheim', '유기농.', 'Organic.', { reviewCount: 1100 }),
  place('trondheim-bakery-3', 'trondheim', 'bakery', 'Local sourdough', 4.4, 'Trondheim', '사워도우.', 'Sourdough.', { reviewCount: 640 }),
  place('trondheim-cafe-1', 'trondheim', 'cafe', 'Cocoro / specialty peers', 4.5, 'Trondheim', '스페셜티.', 'Specialty.', { reviewCount: 980 }),
  place('trondheim-cafe-2', 'trondheim', 'cafe', 'Café Dromedar', 4.4, 'Trondheim', '로컬 카페.', 'Local café.', { reviewCount: 1200 }),
  place('trondheim-cafe-3', 'trondheim', 'cafe', 'Bakklandet cafés', 4.3, 'Trondheim', '컬러풀 카페.', 'Colourful cafés.', { reviewCount: 1600 }),
  place('trondheim-cafe-4', 'trondheim', 'cafe', 'Student cafés', 4.2, 'Trondheim', '대학 카페.', 'Student cafés.', { reviewCount: 860 }),
  place('trondheim-korean-1', 'trondheim', 'korean', 'Korean Trondheim', 4.2, 'Trondheim', '학생가 한식.', 'Student-area Korean.', { reviewCount: 360 }),

  // —— alesund ——
  place('alesund-fine_dining-1', 'alesund', 'fine_dining', 'Hotel Brosundet restaurant', 4.5, 'Ålesund', '항구 파인 다이닝.', 'Harbour fine dining.', { reviewCount: 720 }),
  place('alesund-fine_dining-2', 'alesund', 'fine_dining', 'XL Diner / peers', 4.3, 'Ålesund', '시푸드.', 'Seafood.', { reviewCount: 860 }),
  place('alesund-fine_dining-3', 'alesund', 'fine_dining', 'Fjellstua dining', 4.4, 'Ålesund', '악슬라 전망 다이닝.', 'Aksla viewpoint dining.', { reviewCount: 1400 }),
  place('alesund-fine_dining-4', 'alesund', 'fine_dining', 'Apotekergata dining', 4.3, 'Ålesund', '시내 다이닝.', 'Town dining.', { reviewCount: 640 }),
  place('alesund-bakery-1', 'alesund', 'bakery', 'Local Ålesund bakery', 4.4, 'Ålesund', '베이커리.', 'Bakery.', { reviewCount: 540 }),
  place('alesund-bakery-2', 'alesund', 'bakery', 'Café bakery counters', 4.3, 'Ålesund', '베이크.', 'Bakes.', { reviewCount: 480 }),
  place('alesund-cafe-1', 'alesund', 'cafe', 'Invit Espressobar', 4.5, 'Ålesund', '스페셜티.', 'Specialty.', { reviewCount: 860 }),
  place('alesund-cafe-2', 'alesund', 'cafe', 'Fjellstua café', 4.3, 'Ålesund', '전망 카페.', 'Viewpoint café.', { reviewCount: 1600 }),
  place('alesund-cafe-3', 'alesund', 'cafe', 'Art Nouveau cafés', 4.3, 'Ålesund', '아르누보 거리 카페.', 'Art Nouveau street cafés.', { reviewCount: 720 }),
  place('alesund-korean-1', 'alesund', 'korean', 'Korean Ålesund', 4.0, 'Ålesund', '한식 매우 제한적.', 'Very limited Korean.', { reviewCount: 120 }),

  // —— flam ——
  place('flam-fine_dining-1', 'flam', 'fine_dining', 'Ægir Bryggeri restaurant', 4.4, 'Flåm', '브루어리 레스토랑.', 'Brewery restaurant.', { reviewCount: 1600 }),
  place('flam-fine_dining-2', 'flam', 'fine_dining', 'Flåmsbrygga dining', 4.3, 'Flåm', '피오르 뷰 식당.', 'Fjord-view dining.', { reviewCount: 1200 }),
  place('flam-fine_dining-3', 'flam', 'fine_dining', 'Hotel Fretheim restaurant', 4.3, 'Flåm', '호텔 다이닝.', 'Hotel dining.', { reviewCount: 720 }),
  place('flam-bakery-1', 'flam', 'bakery', 'Flåm bakery / café bakes', 4.2, 'Flåm', '관광 시즌 베이크.', 'Seasonal tourist bakes.', { reviewCount: 480 }),
  place('flam-cafe-1', 'flam', 'cafe', 'Station cafés', 4.2, 'Flåm', '역·부두 카페.', 'Station and pier cafés.', { reviewCount: 1100 }),
  place('flam-cafe-2', 'flam', 'cafe', 'Fjord-side cafés', 4.2, 'Flåm', '피오르 카페.', 'Fjord cafés.', { reviewCount: 860 }),

]
