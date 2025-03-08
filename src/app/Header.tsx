import { Button } from '@/shared/ui/button/Button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/shared/ui/hover-card/hover-card';
import { ModeToggle } from '@/shared/ui/theme-provider/togle';
import { CalendarIcon } from 'lucide-react';

export default function Header() {
  return (
    <div className="w-full flex justify-between p-4 border-b backdrop-blur">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">Тестовое задание</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Тестовое задание</h4>
              <p className="text-sm">
                Реализовать ПЕРЕИСПОЛЬЗУЕМОЕ модальное окно, используя
                библиотеку shad/cn и паттерны Render Props + Compound
                Components.
              </p>
              <div className="flex items-center pt-2">
                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                <span className="text-xs text-muted-foreground">МАРТ 2025</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <ModeToggle />
    </div>
  );
}
