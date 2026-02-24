'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useMessages } from '@/i18n/context';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const m = useMessages();

  useEffect(() => setMounted(true), []);

  const current = theme === 'system' ? resolvedTheme : theme;

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label={m.theme.toggleLabel}
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
    >
      {mounted && current === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}
