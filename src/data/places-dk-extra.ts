import { place } from './placeFactory'
import type { Place } from '../types'

export const placesDKExtra: Place[] = [
  // —— aarhus ——
  place('aarhus-fine_dining-1', 'aarhus', 'fine_dining', 'Domestic', 4.6, 'Aarhus', '미슐랭 다이닝.', 'Michelin dining.', { reviewCount: 720 }),
  place('aarhus-fine_dining-2', 'aarhus', 'fine_dining', 'Frederikshøj', 4.6, 'Aarhus', '파인 다이닝.', 'Fine dining.', { reviewCount: 860 }),
  place('aarhus-fine_dining-3', 'aarhus', 'fine_dining', 'Substans', 4.5, 'Aarhus', '모던.', 'Modern.', { reviewCount: 640 }),
  place('aarhus-fine_dining-4', 'aarhus', 'fine_dining', 'Gastromé', 4.5, 'Aarhus', '시즌 요리.', 'Seasonal cooking.', { reviewCount: 700 }),
  place('aarhus-fine_dining-5', 'aarhus', 'fine_dining', 'Aarhus Street Food dining', 4.3, 'Aarhus', '스트리트푸드.', 'Street food hall.', { reviewCount: 2100 }),
  place('aarhus-bakery-1', 'aarhus', 'bakery', 'Lagkagehuset Aarhus', 4.3, 'Aarhus', '베이커리 체인.', 'Bakery chain.', { reviewCount: 1600 }),
  place('aarhus-bakery-2', 'aarhus', 'bakery', 'Local sourdough bakers', 4.5, 'Aarhus', '사워도우.', 'Sourdough.', { reviewCount: 980 }),
  place('aarhus-bakery-3', 'aarhus', 'bakery', 'Hart Bageri peer / local', 4.4, 'Aarhus', '아티산.', 'Artisan.', { reviewCount: 720 }),
  place('aarhus-bakery-4', 'aarhus', 'bakery', 'Latin Quarter bakeries', 4.4, 'Aarhus', '라틴쿼터 베이커리.', 'Latin Quarter bakeries.', { reviewCount: 860 }),
  place('aarhus-cafe-1', 'aarhus', 'cafe', 'La Cabra Coffee', 4.6, 'Aarhus', '스페셜티.', 'Specialty.', { reviewCount: 1400 }),
  place('aarhus-cafe-2', 'aarhus', 'cafe', 'Café Faust', 4.3, 'Aarhus', '클래식.', 'Classic.', { reviewCount: 1100 }),
  place('aarhus-cafe-3', 'aarhus', 'cafe', 'Latin Quarter cafés', 4.4, 'Aarhus', '라틴쿼터 카페.', 'Latin Quarter cafés.', { reviewCount: 1600 }),
  place('aarhus-cafe-4', 'aarhus', 'cafe', 'ARoS café', 4.2, 'Aarhus', '미술관 카페.', 'Museum café.', { reviewCount: 1200 }),
  place('aarhus-cafe-5', 'aarhus', 'cafe', 'Harbor cafés', 4.3, 'Aarhus', '항구 카페.', 'Harbour cafés.', { reviewCount: 980 }),
  place('aarhus-korean-1', 'aarhus', 'korean', 'Korean Aarhus', 4.3, 'Aarhus', '캐주얼 한식.', 'Casual Korean.', { reviewCount: 480 }),
  place('aarhus-korean-2', 'aarhus', 'korean', 'Kimchi Aarhus', 4.2, 'Aarhus', '한식.', 'Korean.', { reviewCount: 360 }),

  // —— odense ——
  place('odense-fine_dining-1', 'odense', 'fine_dining', 'Under Lindetræet', 4.5, 'Odense', '파인 다이닝.', 'Fine dining.', { reviewCount: 640 }),
  place('odense-fine_dining-2', 'odense', 'fine_dining', 'Restaurant Kvægtorvet', 4.4, 'Odense', '모던.', 'Modern.', { reviewCount: 720 }),
  place('odense-fine_dining-3', 'odense', 'fine_dining', 'Andersen Quarter restaurants', 4.3, 'Odense', '안데르센 지구.', 'Andersen quarter.', { reviewCount: 1100 }),
  place('odense-fine_dining-4', 'odense', 'fine_dining', 'Local bistros', 4.3, 'Odense', '비스트로.', 'Bistros.', { reviewCount: 680 }),
  place('odense-bakery-1', 'odense', 'bakery', 'Lagkagehuset Odense', 4.3, 'Odense', '베이커리.', 'Bakery.', { reviewCount: 1200 }),
  place('odense-bakery-2', 'odense', 'bakery', 'Local bakers', 4.4, 'Odense', '로컬.', 'Local.', { reviewCount: 640 }),
  place('odense-bakery-3', 'odense', 'bakery', 'Old Town pastry shops', 4.3, 'Odense', '페이스트리.', 'Pastries.', { reviewCount: 860 }),
  place('odense-cafe-1', 'odense', 'cafe', 'Specialty coffee Odense', 4.4, 'Odense', '스페셜티.', 'Specialty.', { reviewCount: 720 }),
  place('odense-cafe-2', 'odense', 'cafe', 'Café Biografen', 4.3, 'Odense', '시네마 카페.', 'Cinema café.', { reviewCount: 980 }),
  place('odense-cafe-3', 'odense', 'cafe', 'Old Town cafés', 4.3, 'Odense', '구시가 카페.', 'Old Town cafés.', { reviewCount: 1100 }),
  place('odense-cafe-4', 'odense', 'cafe', 'River cafés', 4.2, 'Odense', '강변 카페.', 'River cafés.', { reviewCount: 800 }),
  place('odense-korean-1', 'odense', 'korean', 'Korean Odense', 4.2, 'Odense', '제한적.', 'Limited.', { reviewCount: 280 }),

  // —— aalborg ——
  place('aalborg-fine_dining-1', 'aalborg', 'fine_dining', 'Restaurant Fusion', 4.4, 'Aalborg', '모던 다이닝.', 'Modern dining.', { reviewCount: 720 }),
  place('aalborg-fine_dining-2', 'aalborg', 'fine_dining', 'Mortens Kro', 4.5, 'Aalborg', '로컬 파인 다이닝.', 'Local fine dining.', { reviewCount: 860 }),
  place('aalborg-fine_dining-3', 'aalborg', 'fine_dining', 'Waterfront restaurants', 4.3, 'Aalborg', '워터프론트.', 'Waterfront.', { reviewCount: 1200 }),
  place('aalborg-fine_dining-4', 'aalborg', 'fine_dining', 'Local bistros', 4.3, 'Aalborg', '비스트로.', 'Bistros.', { reviewCount: 640 }),
  place('aalborg-bakery-1', 'aalborg', 'bakery', 'Lagkagehuset Aalborg', 4.3, 'Aalborg', '베이커리.', 'Bakery.', { reviewCount: 1100 }),
  place('aalborg-bakery-2', 'aalborg', 'bakery', 'Local bakers', 4.4, 'Aalborg', '로컬.', 'Local.', { reviewCount: 580 }),
  place('aalborg-cafe-1', 'aalborg', 'cafe', 'Specialty coffee Aalborg', 4.4, 'Aalborg', '스페셜티.', 'Specialty.', { reviewCount: 720 }),
  place('aalborg-cafe-2', 'aalborg', 'cafe', 'Waterfront cafés', 4.3, 'Aalborg', '워터프론트 카페.', 'Waterfront cafés.', { reviewCount: 980 }),
  place('aalborg-cafe-3', 'aalborg', 'cafe', 'Jomfru Ane cafés', 4.2, 'Aalborg', '나이트라이프 거리.', 'Nightlife street cafés.', { reviewCount: 1400 }),
  place('aalborg-korean-1', 'aalborg', 'korean', 'Korean Aalborg', 4.2, 'Aalborg', '제한적.', 'Limited.', { reviewCount: 260 }),

  // —— roskilde ——
  place('roskilde-fine_dining-1', 'roskilde', 'fine_dining', 'Restaurant Store Børs', 4.4, 'Roskilde', '로컬 다이닝.', 'Local dining.', { reviewCount: 640 }),
  place('roskilde-fine_dining-2', 'roskilde', 'fine_dining', 'Fjord-area restaurants', 4.3, 'Roskilde', '피오르 권역.', 'Fjord-area restaurants.', { reviewCount: 720 }),
  place('roskilde-fine_dining-3', 'roskilde', 'fine_dining', 'Cathedral-area dining', 4.3, 'Roskilde', '대성당 권역.', 'Cathedral-area dining.', { reviewCount: 860 }),
  place('roskilde-bakery-1', 'roskilde', 'bakery', 'Local Roskilde bakery', 4.4, 'Roskilde', '베이커리.', 'Bakery.', { reviewCount: 540 }),
  place('roskilde-bakery-2', 'roskilde', 'bakery', 'Lagkagehuset / local', 4.3, 'Roskilde', '베이크.', 'Bakes.', { reviewCount: 720 }),
  place('roskilde-cafe-1', 'roskilde', 'cafe', 'Museum cafés', 4.3, 'Roskilde', '박물관 카페.', 'Museum cafés.', { reviewCount: 980 }),
  place('roskilde-cafe-2', 'roskilde', 'cafe', 'Town square cafés', 4.3, 'Roskilde', '광장 카페.', 'Town square cafés.', { reviewCount: 860 }),
  place('roskilde-cafe-3', 'roskilde', 'cafe', 'Fjord cafés', 4.2, 'Roskilde', '피오르 카페.', 'Fjord cafés.', { reviewCount: 640 }),

]
