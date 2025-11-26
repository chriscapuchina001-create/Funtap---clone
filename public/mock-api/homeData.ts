import {
  House,
  Gift,
  Database,
  Headset,
  UserRound,
  ChessQueen,
  Gem,
  Users,
  Gamepad2,
  CalendarDays,
  BadgeInfo,
  Swords,
  SunMoon,
  Sword,
} from "lucide-react";
import newGameImg1 from "@assets/newGamesImg/game.png";
import newGameImg2 from "@assets/newGamesImg/game1.png";
import newGameImg3 from "@assets/newGamesImg/game2.jpg";
import newGameImg4 from "@assets/newGamesImg/game3.jpg";
import newImg1 from "@assets/newImg/MOMO TẶNG 10K - CÙNG GAME THỦ CÀY RANK ĐUA TOP! (1).jpg";
import newImg2 from "@assets/newImg/MOMO TẶNG 10K - CÙNG GAME THỦ CÀY RANK ĐUA TOP!.jpg";
import newImg3 from "@assets/newImg/MOMO TẶNG BẠN CŨ 5K NẠP GAME!.jpg";
import gameImg1 from "@assets/recomendImg/game1.jpg";
import gameImg2 from "@assets/recomendImg/game2.png";
import gameImg3 from "@assets/recomendImg/game3.png";
import gameImg4 from "@assets/recomendImg/game4.png";
import gameImg5 from "@assets/recomendImg/game5.png";
import gameImg6 from "@assets/recomendImg/game6.png";
import bangHoiImg from "@assets/serviceNav/Bang-hoi.png";
import doiCodeImg from "@assets/serviceNav/Doi-code.png";
import gameH5Img from "@assets/serviceNav/Game-H5.png";
import hoTroImg from "@assets/serviceNav/Ho-tro.png";
import napGameImg from "@assets/serviceNav/Nap-game.png";
import nhanCodeImg from "@assets/serviceNav/Nhan-code.png";
import sukienImg from "@assets/serviceNav/Su-kien.png";

export interface QuickAccessItem {
  name: string;
  icon: string;
}

export interface Game {
  name: string;
  image: string;
}

export interface ServiceItem {
  name: string;
  icon: string;
}

export interface GameHomePage {
  name: string;
  image: string;
  releaseDate?: string;
  status?: string;
}

export interface NewsItem {
  title: string;
  image: string;
  author: string;
  category: string;
  date: string;
  isEnded?: boolean;
}

export interface CategoryItem {
  icon: any;
  name: string;
}

export type GiftcodeItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type GameItem = {
  id: number;
  name: string;
  image: string;
};

const IMAGES_BASE_PATH = "../images";

export const quickAccessItems: QuickAccessItem[] = [
  { name: "Nạp thóc", icon: `${IMAGES_BASE_PATH}/nav/nap-thoc.svg` },
  { name: "9Pay", icon: `${IMAGES_BASE_PATH}/nav/9-pay.svg` },
  { name: "Ví Voucher", icon: `${IMAGES_BASE_PATH}/nav/vi-voucher.svg` },
  { name: "Mua Funcard", icon: `${IMAGES_BASE_PATH}/nav/mua-funcard.svg` },
  { name: "Hướng dẫn", icon: `${IMAGES_BASE_PATH}/nav/huong-dan.svg` },
];

export const userGames: Game[] = [
  {
    name: "3Q Nghịch Chuyển Thời Không",
    image: `${IMAGES_BASE_PATH}/games/game-3q.jpg`,
  },
  {
    name: "Mobile Legends: Bang Bang",
    image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg`,
  },
  {
    name: "Tiểu Yêu Tầm Đạo",
    image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg`,
  },
  {
    name: "3Q Legend Danh Tướng Truyền Kỳ",
    image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg`,
  },
  {
    name: "Honkai Impact 3-VN",
    image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg`,
  },
  {
    name: "Đấu La Đại Lục: Hồn Sư Đối Quyết",
    image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`,
  },
  {
    name: "3Q Nghịch Chuyển Thời Không",
    image: `${IMAGES_BASE_PATH}/games/game-3q.jpg`,
  },
  {
    name: "Mobile Legends: Bang Bang",
    image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg`,
  },
  {
    name: "Tiểu Yêu Tầm Đạo",
    image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg`,
  },
  {
    name: "3Q Legend Danh Tướng Truyền Kỳ",
    image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg`,
  },
  {
    name: "Honkai Impact 3-VN",
    image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg`,
  },
  {
    name: "Đấu La Đại Lục: Hồn Sư Đối Quyết",
    image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`,
  },
  {
    name: "3Q Nghịch Chuyển Thời Không",
    image: `${IMAGES_BASE_PATH}/games/game-3q.jpg`,
  },
  {
    name: "Mobile Legends: Bang Bang",
    image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg`,
  },
  {
    name: "Tiểu Yêu Tầm Đạo",
    image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg`,
  },
  {
    name: "3Q Legend Danh Tướng Truyền Kỳ",
    image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg`,
  },
  {
    name: "Honkai Impact 3-VN",
    image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg`,
  },
  {
    name: "Đấu La Đại Lục: Hồn Sư Đối Quyết",
    image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`,
  },
  {
    name: "3Q Nghịch Chuyển Thời Không",
    image: `${IMAGES_BASE_PATH}/games/game-3q.jpg`,
  },
  {
    name: "Mobile Legends: Bang Bang",
    image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg`,
  },
  {
    name: "Tiểu Yêu Tầm Đạo",
    image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg`,
  },
  {
    name: "3Q Legend Danh Tướng Truyền Kỳ",
    image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg`,
  },
  {
    name: "Honkai Impact 3-VN",
    image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg`,
  },
  {
    name: "Đấu La Đại Lục: Hồn Sư Đối Quyết",
    image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`,
  },
];

export const allGames: Game[] = [
  {
    name: "3Q Nghịch Chuyển Thời Không",
    image: `${IMAGES_BASE_PATH}/games/game-3q.jpg`,
  },
  {
    name: "Mobile Legends: Bang Bang",
    image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg`,
  },
  {
    name: "Tiểu Yêu Tầm Đạo",
    image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg`,
  },
  {
    name: "3Q Legend Danh Tướng Truyền Kỳ",
    image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg`,
  },
  {
    name: "Honkai Impact 3-VN",
    image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg`,
  },
  {
    name: "Đấu La Đại Lục: Hồn Sư Đối Quyết",
    image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`,
  },
  {
    name: "3Q Nghịch Chuyển Thời Không",
    image: `${IMAGES_BASE_PATH}/games/game-3q.jpg`,
  },
  {
    name: "Mobile Legends: Bang Bang",
    image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg`,
  },
  {
    name: "Tiểu Yêu Tầm Đạo",
    image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg`,
  },
  {
    name: "3Q Legend Danh Tướng Truyền Kỳ",
    image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg`,
  },
  {
    name: "Honkai Impact 3-VN",
    image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg`,
  },
  {
    name: "Đấu La Đại Lục: Hồn Sư Đối Quyết",
    image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`,
  },
  {
    name: "3Q Nghịch Chuyển Thời Không",
    image: `${IMAGES_BASE_PATH}/games/game-3q.jpg`,
  },
  {
    name: "Mobile Legends: Bang Bang",
    image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg`,
  },
  {
    name: "Tiểu Yêu Tầm Đạo",
    image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg`,
  },
  {
    name: "3Q Legend Danh Tướng Truyền Kỳ",
    image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg`,
  },
  {
    name: "Honkai Impact 3-VN",
    image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg`,
  },
  {
    name: "Đấu La Đại Lục: Hồn Sư Đối Quyết",
    image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`,
  },
  {
    name: "3Q Nghịch Chuyển Thời Không",
    image: `${IMAGES_BASE_PATH}/games/game-3q.jpg`,
  },
  {
    name: "Mobile Legends: Bang Bang",
    image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg`,
  },
  {
    name: "Tiểu Yêu Tầm Đạo",
    image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg`,
  },
  {
    name: "3Q Legend Danh Tướng Truyền Kỳ",
    image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg`,
  },
  {
    name: "Honkai Impact 3-VN",
    image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg`,
  },
  {
    name: "Đấu La Đại Lục: Hồn Sư Đối Quyết",
    image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`,
  },
];

export const footerNavItems: any[] = [
  { name: "Playfun", icon: House, link: "/playfun" },
  { name: "Giftcode", icon: Gift, link: "/giftcode" },
  { name: "Nạp tiền", icon: Database, link: "/" },
  { name: "Hỗ trợ", icon: Headset, link: "/support" },
  { name: "Tài khoản", icon: UserRound, link: "/account" },
];

export const bannerImage = [
  { id: 1, image: `${IMAGES_BASE_PATH}/banners/banner-1.jpg` },
  { id: 2, image: `${IMAGES_BASE_PATH}/banners/banner-2.jpg` },
  { id: 3, image: `${IMAGES_BASE_PATH}/banners/banner-3.jpg` },
  { id: 4, image: `${IMAGES_BASE_PATH}/banners/banner-4.jpg` },
  { id: 5, image: `${IMAGES_BASE_PATH}/banners/banner-5.jpg` },
  { id: 6, image: `${IMAGES_BASE_PATH}/banners/banner-6.jpg` },
  { id: 7, image: `${IMAGES_BASE_PATH}/banners/banner-7.jpg` },
];

export const sheetHomeData = [
  {
    name: "Khách hàng thân thiết",
    icon: ChessQueen,
  },
  {
    name: "Giftcode",
    icon: Gem,
  },
  {
    name: "Bang hội",
    icon: Users,
  },
  {
    name: "Game H5",
    icon: Gamepad2,
  },
  {
    name: "Đổi quà",
    icon: Gift,
  },
  {
    name: "Sự kiện",
    icon: CalendarDays,
  },
  {
    name: "Hỗ trợ",
    icon: BadgeInfo,
  },
];

/* HomePage */

export const services: ServiceItem[] = [
  { name: "Nhận code", icon: nhanCodeImg },
  { name: "Hỗ trợ", icon: hoTroImg },
  { name: "Nạp game", icon: napGameImg },
  { name: "Bang hội", icon: bangHoiImg },
  { name: "Sự kiện", icon: sukienImg },
  { name: "Game H5", icon: gameH5Img },
  { name: "Đổi code", icon: doiCodeImg },
];

export const newGames: GameHomePage[] = [
  {
    name: "3Q Nghịch Chuyển Thời Không",
    image: newGameImg1,
    releaseDate: "09/11/2025",
  },
  {
    name: "Lữ Khách Đại Lục: Idle RPG",
    image: newGameImg2,
    releaseDate: "04/01/2025",
  },
  {
    name: "3Q Nghịch Chuyển Thời Không",
    image: newGameImg3,
    releaseDate: "04/10/2025",
  },
  {
    name: "Lữ Khách Đại Lục: Idle RPG",
    image: newGameImg4,
    releaseDate: "04/07/2024",
  },
];

export const recommendedGames: Game[] = [
  {
    name: "Call Of Dragon: Chúa Tể Của Rồng",
    image: gameImg1,
  },
  {
    name: "Phàm Nhân Tu Tiên: Duyên Khởi",
    image: gameImg2,
  },
  {
    name: "Đấu Phá Mobile",
    image: gameImg3,
  },
  {
    name: "Đại Hiệp Tap Tap",
    image: gameImg4,
  },
  {
    name: "Call Of Dragon: Chúa Tể Của Rồng",
    image: gameImg5,
  },
  {
    name: "Phàm Nhân Tu Tiên: Duyên Khởi",
    image: gameImg6,
  },
];

export const categories: CategoryItem[] = [
  {
    icon: Swords,
    name: "MMORPG",
  },
  {
    icon: SunMoon,
    name: "Tam Quốc",
  },
  {
    icon: Sword,
    name: "Kiếm Hiệp",
  },
  {
    icon: Swords,
    name: "MMORPG",
  },
  {
    icon: SunMoon,
    name: "Tam Quốc",
  },
  {
    icon: Sword,
    name: "Kiếm Hiệp",
  },
  {
    icon: Swords,
    name: "MMORPG",
  },
  {
    icon: SunMoon,
    name: "Tam Quốc",
  },
];

export const newsItems: NewsItem[] = [
  {
    title: "MOMO TẶNG BẠN CŨ 5K NẠP GAME!",
    image: newImg1,
    author: "Funtap",
    category: "Tin tức",
    date: "29/10/2025, 17:05",
  },
  {
    title: "MOMO TẶNG BẠN CŨ 5K NẠP GAME!",
    image: newImg2,
    author: "Funtap",
    category: "Tin tức",
    date: "29/10/2025, 17:05",
  },
  {
    title:
      "CHÀO MỪNG 80 NĂM NGÀY QUỐC KHÁNH NƯỚC CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM (2/9/1945 - 2/9/2025)",
    image: newImg3,
    author: "Funtap",
    category: "Tin tức",
    date: "29/10/2025 - 06/11/2025",
    isEnded: true,
  },
  {
    title: "MOMO TẶNG BẠN CŨ 5K NẠP GAME!",
    image: newImg1,
    author: "Funtap",
    category: "Tin tức",
    date: "29/10/2025, 17:05",
  },
  {
    title: "MOMO TẶNG BẠN CŨ 5K NẠP GAME!",
    image: newImg2,
    author: "Funtap",
    category: "Tin tức",
    date: "29/10/2025, 17:05",
  },
];

export const GiftcodeItems: GiftcodeItem[] = Array(5).fill({
  id: 1,
  title: "Đại hiệp 2025",
  description: "Đại hiệp Tap Tap",
  image: newGameImg1,
});

export const gameItems: GameItem[] = [
  { id: 1, name: "3Q Nghịch Chuyển Thời Không", image: newGameImg1 },
  { id: 2, name: "3Q Nghịch Chuyển Thời Không", image: newGameImg1 },
  { id: 3, name: "3Q Nghịch Chuyển Thời Không", image: newGameImg1 },
  { id: 4, name: "Siêu Đậu Tiến Công", image: newGameImg2 },
  { id: 5, name: "3Q Nghịch Chuyển Thời Không", image: newGameImg1 },
  { id: 6, name: "3Q Nghịch Chuyển Thời Không", image: newGameImg1 },
  { id: 7, name: "3Q Nghịch Chuyển Thời Không", image: newGameImg1 },
];

export const filterTabs = [
  { id: "all", label: "Tất cả" },
  { id: "received", label: "Đã nhận" },
  { id: "exchange", label: "Đổi code" },
];
