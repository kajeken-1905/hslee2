import { place } from './placeFactory'
import type { Place } from '../types'

export const placesLUExtra: Place[] = [
  // —— vianden ——
  place('vianden-fine_dining-1', 'vianden', 'fine_dining', 'Restaurant Victor Hugo', 4.5, 'Vianden', '성 전망 다이닝.', 'Castle-view dining.', { reviewCount: 720 }),
  place('vianden-fine_dining-2', 'vianden', 'fine_dining', 'Hotel Heintz restaurant', 4.4, 'Vianden', '호텔 레스토랑.', 'Hotel restaurant.', { reviewCount: 540 }),
  place('vianden-fine_dining-3', 'vianden', 'fine_dining', 'Castle-area bistros', 4.3, 'Vianden', '캐슬 주변 비스트로.', 'Castle-area bistros.', { reviewCount: 860 }),
  place('vianden-bakery-1', 'vianden', 'bakery', 'Boulangerie Vianden', 4.3, 'Vianden', '마을 베이커리.', 'Village bakery.', { reviewCount: 320 }),
  place('vianden-cafe-1', 'vianden', 'cafe', 'Café du Pont', 4.3, 'Vianden', '강변 카페.', 'Riverside café.', { reviewCount: 680 }),
  place('vianden-cafe-2', 'vianden', 'cafe', 'Old town cafés', 4.2, 'Vianden', '구시가 카페.', 'Old-town cafés.', { reviewCount: 540 }),

  // —— echternach ——
  place('echternach-fine_dining-1', 'echternach', 'fine_dining', 'Restaurant La Grappe d’Or', 4.4, 'Echternach', '로컬 파인 캐주얼.', 'Local fine-casual.', { reviewCount: 480 }),
  place('echternach-fine_dining-2', 'echternach', 'fine_dining', 'Lake-area restaurants', 4.3, 'Echternach', '호수 주변 식당.', 'Lake-area restaurants.', { reviewCount: 720 }),
  place('echternach-fine_dining-3', 'echternach', 'fine_dining', 'Abbey-area dining', 4.2, 'Echternach', '수도원 권역 식당.', 'Abbey-area dining.', { reviewCount: 560 }),
  place('echternach-bakery-1', 'echternach', 'bakery', 'Boulangerie Echternach', 4.3, 'Echternach', '베이커리.', 'Bakery.', { reviewCount: 360 }),
  place('echternach-cafe-1', 'echternach', 'cafe', 'Lake cafés', 4.3, 'Echternach', '호수 카페.', 'Lake cafés.', { reviewCount: 640 }),
  place('echternach-cafe-2', 'echternach', 'cafe', 'Town square cafés', 4.2, 'Echternach', '광장 카페.', 'Town square cafés.', { reviewCount: 580 }),

  // —— remich ——
  place('remich-fine_dining-1', 'remich', 'fine_dining', 'Moselle wine terrace restaurants', 4.4, 'Remich', '와인 테라스 다이닝.', 'Wine-terrace dining.', { reviewCount: 860 }),
  place('remich-fine_dining-2', 'remich', 'fine_dining', 'Quai restaurants', 4.3, 'Remich', '강변 식당.', 'Quay restaurants.', { reviewCount: 720 }),
  place('remich-fine_dining-3', 'remich', 'fine_dining', 'Local wineries with dining', 4.3, 'Remich', '와이너리 다이닝.', 'Winery dining.', { reviewCount: 540 }),
  place('remich-bakery-1', 'remich', 'bakery', 'Boulangerie Remich', 4.3, 'Remich', '베이커리.', 'Bakery.', { reviewCount: 300 }),
  place('remich-cafe-1', 'remich', 'cafe', 'Promenade cafés', 4.3, 'Remich', '산책로 카페.', 'Promenade cafés.', { reviewCount: 680 }),
  place('remich-cafe-2', 'remich', 'cafe', 'Wine-bar cafés', 4.2, 'Remich', '와인바 카페.', 'Wine-bar cafés.', { reviewCount: 520 }),

]
