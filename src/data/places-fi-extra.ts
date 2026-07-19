import { place } from './placeFactory'
import type { Place } from '../types'

export const placesFIExtra: Place[] = [
  // —— turku ——
  place('turku-fine_dining-1', 'turku', 'fine_dining', 'Restaurant Smör', 4.6, 'Turku', '미슐랭 다이닝.', 'Michelin dining.', { reviewCount: 720 }),
  place('turku-fine_dining-2', 'turku', 'fine_dining', 'Kaskis', 4.5, 'Turku', '시즌 핀란드 요리.', 'Seasonal Finnish cooking.', { reviewCount: 860 }),
  place('turku-fine_dining-3', 'turku', 'fine_dining', 'Pinella', 4.4, 'Turku', '클래식.', 'Classic.', { reviewCount: 1100 }),
  place('turku-fine_dining-4', 'turku', 'fine_dining', 'Viikinkiravintola Harald', 4.2, 'Turku', '테마 다이닝.', 'Theme dining.', { reviewCount: 1600 }),
  place('turku-fine_dining-5', 'turku', 'fine_dining', 'Aura river restaurants', 4.3, 'Turku', '강변 식당.', 'Riverside restaurants.', { reviewCount: 1400 }),
  place('turku-bakery-1', 'turku', 'bakery', 'Cardemumma / local bakers', 4.4, 'Turku', '베이커리.', 'Bakery.', { reviewCount: 640 }),
  place('turku-bakery-2', 'turku', 'bakery', 'Fazer Café Turku', 4.3, 'Turku', '파제르.', 'Fazer.', { reviewCount: 980 }),
  place('turku-bakery-3', 'turku', 'bakery', 'Local cinnamon bun shops', 4.4, 'Turku', '시나몬롤.', 'Cinnamon buns.', { reviewCount: 860 }),
  place('turku-cafe-1', 'turku', 'cafe', 'Kuhukeitto cafés / specialty', 4.4, 'Turku', '스페셜티.', 'Specialty.', { reviewCount: 720 }),
  place('turku-cafe-2', 'turku', 'cafe', 'Café Staffeln', 4.3, 'Turku', '로컬 카페.', 'Local café.', { reviewCount: 680 }),
  place('turku-cafe-3', 'turku', 'cafe', 'River cafés', 4.3, 'Turku', '강변 카페.', 'River cafés.', { reviewCount: 1200 }),
  place('turku-cafe-4', 'turku', 'cafe', 'Market Square cafés', 4.2, 'Turku', '시장 카페.', 'Market cafés.', { reviewCount: 900 }),
  place('turku-starbucks-1', 'turku', 'starbucks', 'Starbucks (Turku)', 3.9, 'Turku', '센터.', 'Centre.', { reviewCount: 800 }),
  place('turku-korean-1', 'turku', 'korean', 'Korean Turku', 4.2, 'Turku', '제한적.', 'Limited.', { reviewCount: 280 }),

  // —— tampere ——
  place('tampere-fine_dining-1', 'tampere', 'fine_dining', 'Restaurant Bertha', 4.5, 'Tampere', '모던 다이닝.', 'Modern dining.', { reviewCount: 640 }),
  place('tampere-fine_dining-2', 'tampere', 'fine_dining', 'Tiiliholvi', 4.4, 'Tampere', '클래식.', 'Classic.', { reviewCount: 720 }),
  place('tampere-fine_dining-3', 'tampere', 'fine_dining', 'Henriks', 4.4, 'Tampere', '파인 캐주얼.', 'Fine-casual.', { reviewCount: 580 }),
  place('tampere-fine_dining-4', 'tampere', 'fine_dining', 'Pyynikki area dining', 4.3, 'Tampere', '전망 권역 식당.', 'Viewpoint-area dining.', { reviewCount: 860 }),
  place('tampere-fine_dining-5', 'tampere', 'fine_dining', 'Local bistros', 4.3, 'Tampere', '비스트로.', 'Bistros.', { reviewCount: 700 }),
  place('tampere-bakery-1', 'tampere', 'bakery', 'Pyynikki tower doughnut bakery', 4.5, 'Tampere', '도넛으로 유명.', 'Famous doughnuts.', { reviewCount: 2800 }),
  place('tampere-bakery-2', 'tampere', 'bakery', 'Local Tampere bakers', 4.4, 'Tampere', '베이커리.', 'Bakery.', { reviewCount: 860 }),
  place('tampere-bakery-3', 'tampere', 'bakery', 'Fazer / Gateau', 4.3, 'Tampere', '체인 파티세리.', 'Chain patisserie.', { reviewCount: 1100 }),
  place('tampere-cafe-1', 'tampere', 'cafe', 'Café Europa', 4.3, 'Tampere', '클래식 카페.', 'Classic café.', { reviewCount: 1200 }),
  place('tampere-cafe-2', 'tampere', 'cafe', 'Specialty coffee Tampere', 4.5, 'Tampere', '스페셜티.', 'Specialty.', { reviewCount: 980 }),
  place('tampere-cafe-3', 'tampere', 'cafe', 'Finlayson area cafés', 4.3, 'Tampere', '공장지구 카페.', 'Factory-area cafés.', { reviewCount: 860 }),
  place('tampere-cafe-4', 'tampere', 'cafe', 'Student cafés', 4.2, 'Tampere', '대학 카페.', 'Student cafés.', { reviewCount: 720 }),
  place('tampere-starbucks-1', 'tampere', 'starbucks', 'Starbucks (Tampere)', 3.9, 'Tampere', '센터.', 'Centre.', { reviewCount: 900 }),
  place('tampere-korean-1', 'tampere', 'korean', 'Korean Tampere', 4.3, 'Tampere', '캐주얼 한식.', 'Casual Korean.', { reviewCount: 420 }),
  place('tampere-korean-2', 'tampere', 'korean', 'Kimchi Tampere', 4.2, 'Tampere', '한식.', 'Korean.', { reviewCount: 320 }),

  // —— rovaniemi ——
  place('rovaniemi-fine_dining-1', 'rovaniemi', 'fine_dining', 'Arctic Boulevard restaurants', 4.4, 'Rovaniemi', '북극 테마 다이닝.', 'Arctic-themed dining.', { reviewCount: 980 }),
  place('rovaniemi-fine_dining-2', 'rovaniemi', 'fine_dining', 'Nili Restaurant', 4.5, 'Rovaniemi', '라플란드 요리.', 'Lapland cuisine.', { reviewCount: 1200 }),
  place('rovaniemi-fine_dining-3', 'rovaniemi', 'fine_dining', 'Sky Kitchen & View', 4.3, 'Rovaniemi', '전망 다이닝.', 'View dining.', { reviewCount: 720 }),
  place('rovaniemi-fine_dining-4', 'rovaniemi', 'fine_dining', 'Santa Claus Village restaurants', 4.2, 'Rovaniemi', '산타 마을 식당.', 'Santa Village restaurants.', { reviewCount: 2100 }),
  place('rovaniemi-bakery-1', 'rovaniemi', 'bakery', 'Local Rovaniemi bakery', 4.3, 'Rovaniemi', '베이커리.', 'Bakery.', { reviewCount: 540 }),
  place('rovaniemi-bakery-2', 'rovaniemi', 'bakery', 'Café bakery counters', 4.2, 'Rovaniemi', '베이크.', 'Bakes.', { reviewCount: 640 }),
  place('rovaniemi-cafe-1', 'rovaniemi', 'cafe', 'Café & Shop Arktikum', 4.3, 'Rovaniemi', '박물관 카페.', 'Museum café.', { reviewCount: 860 }),
  place('rovaniemi-cafe-2', 'rovaniemi', 'cafe', 'Town centre cafés', 4.3, 'Rovaniemi', '시내 카페.', 'Town cafés.', { reviewCount: 980 }),
  place('rovaniemi-cafe-3', 'rovaniemi', 'cafe', 'Santa Village cafés', 4.2, 'Rovaniemi', '산타 마을 카페.', 'Santa Village cafés.', { reviewCount: 1800 }),
  place('rovaniemi-starbucks-1', 'rovaniemi', 'starbucks', 'Limited Starbucks / transit coffee', 3.8, 'Rovaniemi', '체인 제한적.', 'Limited chain presence.', { reviewCount: 200 }),
  place('rovaniemi-korean-1', 'rovaniemi', 'korean', 'Korean Rovaniemi', 4.0, 'Rovaniemi', '한식 제한적.', 'Limited Korean.', { reviewCount: 140 }),

  // —— porvoo ——
  place('porvoo-fine_dining-1', 'porvoo', 'fine_dining', 'Restaurant Wanha Laamanni', 4.5, 'Porvoo', '역사 건물 다이닝.', 'Historic building dining.', { reviewCount: 860 }),
  place('porvoo-fine_dining-2', 'porvoo', 'fine_dining', 'Bistro Sinne', 4.4, 'Porvoo', '모던 비스트로.', 'Modern bistro.', { reviewCount: 640 }),
  place('porvoo-fine_dining-3', 'porvoo', 'fine_dining', 'Old Town restaurants', 4.3, 'Porvoo', '구시가 식당.', 'Old Town restaurants.', { reviewCount: 1200 }),
  place('porvoo-bakery-1', 'porvoo', 'bakery', 'Brunberg chocolate & sweets', 4.5, 'Porvoo', '초콜릿 명소.', 'Chocolate landmark.', { reviewCount: 2100 }),
  place('porvoo-bakery-2', 'porvoo', 'bakery', 'Old Town bakeries', 4.4, 'Porvoo', '구시가 베이커리.', 'Old Town bakeries.', { reviewCount: 860 }),
  place('porvoo-cafe-1', 'porvoo', 'cafe', 'Café Freese', 4.3, 'Porvoo', '로컬 카페.', 'Local café.', { reviewCount: 720 }),
  place('porvoo-cafe-2', 'porvoo', 'cafe', 'Riverside cafés', 4.3, 'Porvoo', '강변 카페.', 'Riverside cafés.', { reviewCount: 1100 }),
  place('porvoo-cafe-3', 'porvoo', 'cafe', 'Old Town cafés', 4.2, 'Porvoo', '구시가 카페.', 'Old Town cafés.', { reviewCount: 1400 }),

]
