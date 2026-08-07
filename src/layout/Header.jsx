import { Database } from "lucide-react";

export function Header() {
  return (
    <header className="bg-[#18181B] border-b border-[#27272A] xl:mb-20">
      <nav className="flex gap-2 items-center py-4 px-8">
        <Database size={26} color="#3B82F6" />
        <h2 className="text-sm">SQL Builder</h2>
      </nav>
    </header>
  )
}