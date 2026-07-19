import { place } from './placeFactory'
import type { Place } from '../types'

export const placesSEExtra: Place[] = [
  // —— gothenburg ——
  place('gothenburg-fine_dining-1', 'gothenburg', 'fine_dining', 'Project', 4.7, 'Gothenburg', '미슐랭 다이닝.', 'Michelin dining.', { reviewCount: 860 }),
  place('gothenburg-fine_dining-2', 'gothenburg', 'fine_dining', 'Koka', 4.6, 'Gothenburg', '뉴 노르딕.', 'New Nordic.', { reviewCount: 720 }),
  place('gothenburg-fine_dining-3', 'gothenburg', 'fine_dining', 'Sjömagasinet', 4.5, 'Gothenburg', '시푸드.', 'Seafood.', { reviewCount: 1400 }),
  place('gothenburg-fine_dining-4', 'gothenburg', 'fine_dining', 'Bhoga', 4.5, 'Gothenburg', '모던 다이닝.', 'Modern dining.', { reviewCount: 640 }),
  place('gothenburg-fine_dining-5', 'gothenburg', 'fine_dining', 'Feskekörka dining counters', 4.4, 'Gothenburg', '생선시장 다이닝.', 'Fish church dining.', { reviewCount: 1800 }),
  place('gothenburg-bakery-1', 'gothenburg', 'bakery', 'Pågen / local bakers', 4.3, 'Gothenburg', '로컬 브레드.', 'Local breads.', { reviewCount: 900 }),
  place('gothenburg-bakery-2', 'gothenburg', 'bakery', 'Da Matteo bakery', 4.6, 'Gothenburg', '사워도우·커피.', 'Sourdough and coffee.', { reviewCount: 1600 }),
  place('gothenburg-bakery-3', 'gothenburg', 'bakery', 'Conditori Nordstan peers', 4.3, 'Gothenburg', '파티세리.', 'Patisserie.', { reviewCount: 1100 }),
  place('gothenburg-bakery-4', 'gothenburg', 'bakery', 'Haga almond bun bakeries', 4.5, 'Gothenburg', '하가 아몬드번.', 'Haga almond buns.', { reviewCount: 2200 }),
  place('gothenburg-bakery-5', 'gothenburg', 'bakery', 'Local sourdough', 4.4, 'Gothenburg', '사워도우.', 'Sourdough.', { reviewCount: 720 }),
  place('gothenburg-cafe-1', 'gothenburg', 'cafe', 'Da Matteo', 4.6, 'Gothenburg', '스페셜티.', 'Specialty.', { reviewCount: 1800 }),
  place('gothenburg-cafe-2', 'gothenburg', 'cafe', 'Café Husaren', 4.4, 'Gothenburg', '거대 시나몬롤.', 'Giant cinnamon buns.', { reviewCount: 2800 }),
  place('gothenburg-cafe-3', 'gothenburg', 'cafe', 'Bar Italia', 4.3, 'Gothenburg', '에스프레소.', 'Espresso.', { reviewCount: 980 }),
  place('gothenburg-cafe-4', 'gothenburg', 'cafe', 'Linné cafés', 4.4, 'Gothenburg', '린네 지구 카페.', 'Linné district cafés.', { reviewCount: 1200 }),
  place('gothenburg-cafe-5', 'gothenburg', 'cafe', 'Haga cafés', 4.3, 'Gothenburg', '하가 카페.', 'Haga cafés.', { reviewCount: 1600 }),
  place('gothenburg-korean-1', 'gothenburg', 'korean', 'Korean Gothenburg', 4.4, 'Gothenburg', '캐주얼 한식.', 'Casual Korean.', { reviewCount: 720 }),
  place('gothenburg-korean-2', 'gothenburg', 'korean', 'Kimchi Göteborg', 4.3, 'Gothenburg', '한식.', 'Korean.', { reviewCount: 560 }),
  place('gothenburg-korean-3', 'gothenburg', 'korean', 'Korean BBQ Göteborg', 4.3, 'Gothenburg', '구이.', 'BBQ.', { reviewCount: 640 }),
  place('gothenburg-korean-4', 'gothenburg', 'korean', 'Bibimbap Göteborg', 4.2, 'Gothenburg', '볼.', 'Bowls.', { reviewCount: 420 }),

  // —— malmo ——
  place('malmo-fine_dining-1', 'malmo', 'fine_dining', 'Vollmers', 4.7, 'Malmö', '미슐랭 다이닝.', 'Michelin dining.', { reviewCount: 860 }),
  place('malmo-fine_dining-2', 'malmo', 'fine_dining', 'Bloom in the Room', 4.5, 'Malmö', '모던.', 'Modern.', { reviewCount: 640 }),
  place('malmo-fine_dining-3', 'malmo', 'fine_dining', 'Bastard', 4.5, 'Malmö', '와인바 다이닝.', 'Wine-bar dining.', { reviewCount: 1200 }),
  place('malmo-fine_dining-4', 'malmo', 'fine_dining', 'Lyran', 4.4, 'Malmö', '시즌 요리.', 'Seasonal cooking.', { reviewCount: 580 }),
  place('malmo-fine_dining-5', 'malmo', 'fine_dining', 'Dockan restaurants', 4.3, 'Malmö', '도크 다이닝.', 'Dock dining.', { reviewCount: 980 }),
  place('malmo-bakery-1', 'malmo', 'bakery', 'Scandinavian Bakehouse local', 4.4, 'Malmö', '베이커리.', 'Bakery.', { reviewCount: 720 }),
  place('malmo-bakery-2', 'malmo', 'bakery', 'Local sourdough bakers', 4.5, 'Malmö', '사워도우.', 'Sourdough.', { reviewCount: 860 }),
  place('malmo-bakery-3', 'malmo', 'bakery', 'Konditori', 4.3, 'Malmö', '파티세리.', 'Patisserie.', { reviewCount: 1100 }),
  place('malmo-bakery-4', 'malmo', 'bakery', 'Solde bakery items', 4.4, 'Malmö', '커피·베이크.', 'Coffee and bakes.', { reviewCount: 980 }),
  place('malmo-cafe-1', 'malmo', 'cafe', 'Solde Coffee', 4.5, 'Malmö', '스페셜티.', 'Specialty.', { reviewCount: 1200 }),
  place('malmo-cafe-2', 'malmo', 'cafe', 'Far i Hatten', 4.3, 'Malmö', '공원 카페.', 'Park café.', { reviewCount: 1400 }),
  place('malmo-cafe-3', 'malmo', 'cafe', 'Lilla Kafferosteriet', 4.5, 'Malmö', '로스터리.', 'Roastery.', { reviewCount: 1100 }),
  place('malmo-cafe-4', 'malmo', 'cafe', 'Stjärnor / centre cafés', 4.3, 'Malmö', '센터 카페.', 'Centre cafés.', { reviewCount: 860 }),
  place('malmo-cafe-5', 'malmo', 'cafe', 'Västra Hamnen cafés', 4.2, 'Malmö', '서항 카페.', 'Western Harbour cafés.', { reviewCount: 980 }),
  place('malmo-korean-1', 'malmo', 'korean', 'Korean Malmö', 4.3, 'Malmö', '다문화 한식.', 'Multicultural Korean scene.', { reviewCount: 640 }),
  place('malmo-korean-2', 'malmo', 'korean', 'Kimchi Malmö', 4.3, 'Malmö', '캐주얼.', 'Casual.', { reviewCount: 480 }),
  place('malmo-korean-3', 'malmo', 'korean', 'Korean BBQ Malmö', 4.2, 'Malmö', '구이.', 'BBQ.', { reviewCount: 520 }),

  // —— uppsala ——
  place('uppsala-fine_dining-1', 'uppsala', 'fine_dining', 'Domtrappkällaren', 4.5, 'Uppsala', '역사 지하 다이닝.', 'Historic cellar dining.', { reviewCount: 860 }),
  place('uppsala-fine_dining-2', 'uppsala', 'fine_dining', 'Hambergs Fisk', 4.4, 'Uppsala', '시푸드.', 'Seafood.', { reviewCount: 720 }),
  place('uppsala-fine_dining-3', 'uppsala', 'fine_dining', 'Lingon', 4.4, 'Uppsala', '스웨디시.', 'Swedish.', { reviewCount: 640 }),
  place('uppsala-fine_dining-4', 'uppsala', 'fine_dining', 'Campus / centre bistros', 4.2, 'Uppsala', '비스트로.', 'Bistros.', { reviewCount: 980 }),
  place('uppsala-bakery-1', 'uppsala', 'bakery', 'Ofvandahls', 4.5, 'Uppsala', '클래식 콘디토리.', 'Classic konditori.', { reviewCount: 1400 }),
  place('uppsala-bakery-2', 'uppsala', 'bakery', 'Local Uppsala bakers', 4.4, 'Uppsala', '베이커리.', 'Bakery.', { reviewCount: 720 }),
  place('uppsala-bakery-3', 'uppsala', 'bakery', 'Fabrique Uppsala', 4.4, 'Uppsala', '사워도우.', 'Sourdough.', { reviewCount: 860 }),
  place('uppsala-cafe-1', 'uppsala', 'cafe', 'Ofvandahls café', 4.5, 'Uppsala', '전통 카페.', 'Traditional café.', { reviewCount: 1600 }),
  place('uppsala-cafe-2', 'uppsala', 'cafe', 'Specialty coffee Uppsala', 4.4, 'Uppsala', '스페셜티.', 'Specialty.', { reviewCount: 900 }),
  place('uppsala-cafe-3', 'uppsala', 'cafe', 'Student cafés', 4.2, 'Uppsala', '대학 카페.', 'Student cafés.', { reviewCount: 1100 }),
  place('uppsala-cafe-4', 'uppsala', 'cafe', 'Cathedral cafés', 4.3, 'Uppsala', '대성당 권역.', 'Cathedral area.', { reviewCount: 860 }),
  place('uppsala-korean-1', 'uppsala', 'korean', 'Korean Uppsala', 4.2, 'Uppsala', '학생가 한식.', 'Student-area Korean.', { reviewCount: 360 }),

  // —— kiruna ——
  place('kiruna-fine_dining-1', 'kiruna', 'fine_dining', 'Icehotel restaurant (Jukkasjärvi)', 4.6, 'Jukkasjärvi', '아이스호텔 다이닝.', 'Icehotel dining.', { reviewCount: 1600 }),
  place('kiruna-fine_dining-2', 'kiruna', 'fine_dining', 'Local Lapland restaurants', 4.3, 'Kiruna', '라플란드 요리.', 'Lapland cuisine.', { reviewCount: 720 }),
  place('kiruna-fine_dining-3', 'kiruna', 'fine_dining', 'Camp Kiruna dining', 4.2, 'Kiruna', '투어 다이닝.', 'Tour dining.', { reviewCount: 540 }),
  place('kiruna-bakery-1', 'kiruna', 'bakery', 'Kiruna bakery', 4.2, 'Kiruna', '마을 베이커리.', 'Town bakery.', { reviewCount: 320 }),
  place('kiruna-cafe-1', 'kiruna', 'cafe', 'Town cafés', 4.2, 'Kiruna', '시내 카페.', 'Town cafés.', { reviewCount: 480 }),
  place('kiruna-cafe-2', 'kiruna', 'cafe', 'Icehotel cafés', 4.3, 'Jukkasjärvi', '아이스호텔 카페.', 'Icehotel cafés.', { reviewCount: 860 }),

]
