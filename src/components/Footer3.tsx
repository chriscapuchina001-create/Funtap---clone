const footerLinks = [
  { label: "Trang chủ", href: "#" },
  { label: "Funtap", href: "#" },
  { label: "Báo lỗi", href: "#" },
  { label: "Điều khoản", href: "#" },
  { label: "Liên hệ", href: "#" },
];

export default function Footer3() {
  return (
    <footer className="w-full h-12 bg-[#F0F0F0] border-t! border-[#e4e4e4]! mt-auto">
      <div className="w-full max-w-[660px] mx-auto h-full">
        <ul className="flex items-center flex-row gap-4 h-full px-4! overflow-x-auto">
          {footerLinks.map((link, index) => (
            <li key={index} className="list-none shrink-0">
              <a
                href={link.href}
                className="text-[#8e8e8e] hover:text-orange-600 transition-colors duration-200 last:mr-0 text-[13px] font-roboto font-normal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
