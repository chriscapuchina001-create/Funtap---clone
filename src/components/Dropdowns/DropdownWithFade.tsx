import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { CheckCheck } from "lucide-react";
import React from "react";

interface DropdownItem {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  destructive?: boolean;
}

interface DropdownWithFadeProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  label?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
}

export function DropdownWithFade({
  trigger,
  items,
  label,
  align = "end",
  side = "bottom",
  className,
}: DropdownWithFadeProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        side={side}
        className={cn(
          "w-[365px] h-[667px] rounded-[5px] border! border-[#f4f4f4]! bg-white shadow-md z-50",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          className
        )}
      >
        <div className="flex flex-row items-center justify-between px-5! py-4! border-b! border-[#e5e5ea]!">
          <p
            className="text-[#1a1a1a]"
            style={{
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Thông báo
          </p>
          <div className="flex flex-row items-center gap-1">
            <CheckCheck size={20} color="#c7c7cc" />
            <p
              className="text-[#c7c7cc]"
              style={{
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Đánh dấu đã đọc
            </p>
          </div>
        </div>
        {label && (
          <>
            <DropdownMenuLabel className="text-sm font-medium text-gray-900">
              {label}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={item.onClick}
            disabled={item.disabled}
            className={cn(
              "flex cursor-pointer items-center gap-2 rounded-sm px-3! py-3! text-sm outline-none transition-colors",
              "focus:bg-gray-100 focus:text-gray-900",
              "data-disabled:pointer-events-none data-disabled:opacity-50",
              item.destructive
                ? "text-red-600 focus:bg-red-50 focus:text-red-700"
                : "text-gray-700"
            )}
          >
            <span className="flex-1">{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownWithFade;
