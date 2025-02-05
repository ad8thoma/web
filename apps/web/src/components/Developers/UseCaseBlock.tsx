'use client';

import { ButtonWithLinkAndEventLogging } from 'apps/web/src/components/Button/ButtonWithLinkAndEventLogging';
import { ButtonVariants } from 'apps/web/src/components/base-org/Button/types';
import Title from 'apps/web/src/components/base-org/typography/Title';
import { TitleLevel } from 'apps/web/src/components/base-org/typography/Title/types';

export function UseCaseBlock({
  children,
  title,
  description,
  href,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex h-[320px] w-[580px] flex-col items-center rounded-2xl bg-dark-palette-backgroundAlternate">
        {children}
      </div>
      <div className="flex flex-col gap-2">
        <Title level={TitleLevel.Title3} as="h3" className="text-white">
          {title}
        </Title>
        <Title level={TitleLevel.Title4} className="text-palette-foregroundMuted">
          {description}
        </Title>
      </div>
      <ButtonWithLinkAndEventLogging
        variant={ButtonVariants.SecondaryOutline}
        iconName="arrowRight"
        iconSize="24"
        buttonClassNames="flex w-40 items-center justify-between px-4 py-3"
        href={href}
        eventName={`developers_build-scale-monetize_${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        Get started
      </ButtonWithLinkAndEventLogging>
    </div>
  );
}
