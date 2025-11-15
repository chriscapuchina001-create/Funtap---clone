import { House, Gift, Database, Headset, UserRound, ChessQueen, Gem, Users, Gamepad2, CalendarDays, BadgeInfo } from "lucide-react";

export interface QuickAccessItem {
  name: string;
  icon: string;
}

export interface Game {
  name: string;
  image: string;
}

const IMAGES_BASE_PATH = '../images';

export const quickAccessItems: QuickAccessItem[] = [
  { name: "Nạp thóc", icon: `${IMAGES_BASE_PATH}/nav/nap-thoc.svg` },
  { name: "9Pay", icon: `${IMAGES_BASE_PATH}/nav/9-pay.svg` },
  { name: "Ví Voucher", icon: `${IMAGES_BASE_PATH}/nav/vi-voucher.svg` },
  { name: "Mua Funcard", icon: `${IMAGES_BASE_PATH}/nav/mua-funcard.svg` },
  { name: "Hướng dẫn", icon: `${IMAGES_BASE_PATH}/nav/huong-dan.svg` },
];

export const userGames: Game[] = [
  { name: "3Q Nghịch Chuyển Thời Không", image: `${IMAGES_BASE_PATH}/games/game-3q.jpg` },
  { name: "Mobile Legends: Bang Bang", image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg` },
  { name: "Tiểu Yêu Tầm Đạo", image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg` },
  { name: "3Q Legend Danh Tướng Truyền Kỳ", image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg` },
  { name: "Honkai Impact 3-VN", image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg` },
  {name: "Đấu La Đại Lục: Hồn Sư Đối Quyết", image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`},
  { name: "3Q Nghịch Chuyển Thời Không", image: `${IMAGES_BASE_PATH}/games/game-3q.jpg` },
  { name: "Mobile Legends: Bang Bang", image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg` },
  { name: "Tiểu Yêu Tầm Đạo", image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg` },
  { name: "3Q Legend Danh Tướng Truyền Kỳ", image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg` },
  { name: "Honkai Impact 3-VN", image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg` },
  {name: "Đấu La Đại Lục: Hồn Sư Đối Quyết", image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`},
  { name: "3Q Nghịch Chuyển Thời Không", image: `${IMAGES_BASE_PATH}/games/game-3q.jpg` },
  { name: "Mobile Legends: Bang Bang", image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg` },
  { name: "Tiểu Yêu Tầm Đạo", image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg` },
  { name: "3Q Legend Danh Tướng Truyền Kỳ", image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg` },
  { name: "Honkai Impact 3-VN", image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg` },
  {name: "Đấu La Đại Lục: Hồn Sư Đối Quyết", image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`},
  { name: "3Q Nghịch Chuyển Thời Không", image: `${IMAGES_BASE_PATH}/games/game-3q.jpg` },
  { name: "Mobile Legends: Bang Bang", image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg` },
  { name: "Tiểu Yêu Tầm Đạo", image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg` },
  { name: "3Q Legend Danh Tướng Truyền Kỳ", image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg` },
  { name: "Honkai Impact 3-VN", image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg` },
  {name: "Đấu La Đại Lục: Hồn Sư Đối Quyết", image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`},
];

export const allGames: Game[] = [
    { name: "3Q Nghịch Chuyển Thời Không", image: `${IMAGES_BASE_PATH}/games/game-3q.jpg` },
  { name: "Mobile Legends: Bang Bang", image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg` },
  { name: "Tiểu Yêu Tầm Đạo", image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg` },
  { name: "3Q Legend Danh Tướng Truyền Kỳ", image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg` },
  { name: "Honkai Impact 3-VN", image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg` },
  {name: "Đấu La Đại Lục: Hồn Sư Đối Quyết", image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`},
  { name: "3Q Nghịch Chuyển Thời Không", image: `${IMAGES_BASE_PATH}/games/game-3q.jpg` },
  { name: "Mobile Legends: Bang Bang", image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg` },
  { name: "Tiểu Yêu Tầm Đạo", image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg` },
  { name: "3Q Legend Danh Tướng Truyền Kỳ", image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg` },
  { name: "Honkai Impact 3-VN", image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg` },
  {name: "Đấu La Đại Lục: Hồn Sư Đối Quyết", image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`},
  { name: "3Q Nghịch Chuyển Thời Không", image: `${IMAGES_BASE_PATH}/games/game-3q.jpg` },
  { name: "Mobile Legends: Bang Bang", image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg` },
  { name: "Tiểu Yêu Tầm Đạo", image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg` },
  { name: "3Q Legend Danh Tướng Truyền Kỳ", image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg` },
  { name: "Honkai Impact 3-VN", image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg` },
  {name: "Đấu La Đại Lục: Hồn Sư Đối Quyết", image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`},
  { name: "3Q Nghịch Chuyển Thời Không", image: `${IMAGES_BASE_PATH}/games/game-3q.jpg` },
  { name: "Mobile Legends: Bang Bang", image: `${IMAGES_BASE_PATH}/games/game-mblg-bang.jpg` },
  { name: "Tiểu Yêu Tầm Đạo", image: `${IMAGES_BASE_PATH}/games/game-tytd.jpg` },
  { name: "3Q Legend Danh Tướng Truyền Kỳ", image: `${IMAGES_BASE_PATH}/games/game-3q-dttk.jpg` },
  { name: "Honkai Impact 3-VN", image: `${IMAGES_BASE_PATH}/games/game-hkip.jpg` },
  {name: "Đấu La Đại Lục: Hồn Sư Đối Quyết", image: `${IMAGES_BASE_PATH}/games/game-dldl-hsdq.jpg`},
]

export const footerNavItems: any[] = [
  {name: "Playfun", icon: House, link: "/playfun"},
  {name: "Gifcode", icon: Gift, link: "/gifcode"},
  {name: "Nạp tiền", icon: Database, link: "/"},
  {name: "Hỗ trợ", icon: Headset, link: "/ho-tro"},
  {name: "Tài khoản", icon: UserRound, link: "/profile"}
];


export const bannerImage = [
    {id: 1,
        image: `${IMAGES_BASE_PATH}/banners/banner-1.jpg`
    },
   {id: 2,
        image: `${IMAGES_BASE_PATH}/banners/banner-2.jpg`
    },
     {id: 3,
        image: `${IMAGES_BASE_PATH}/banners/banner-3.jpg`
    },
     {id: 4,
        image: `${IMAGES_BASE_PATH}/banners/banner-4.jpg`
    },
     {id: 5,
        image: `${IMAGES_BASE_PATH}/banners/banner-5.jpg`
    },
     {id: 6,
        image: `${IMAGES_BASE_PATH}/banners/banner-6.jpg`
    },
     {id: 7,
        image: `${IMAGES_BASE_PATH}/banners/banner-7.jpg`
    },
];


export const sheetHomeData = [
    {
        name: "Khách hàng thân thiết",
        icon: ChessQueen,
    },
    {
name: "Giftcode",
icon:  Gem,
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
]