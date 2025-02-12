'use client';

import { ReactNode } from 'react';
import Title from 'apps/web/src/components/base-org/typography/Title';
import { TitleLevel } from 'apps/web/src/components/base-org/typography/Title/types';

type CtaBannerProps = {
  title: string;
  description?: string;
  cta?: ReactNode;
};

export function CtaBanner({ title, description, cta }: CtaBannerProps) {
  return (
    <section className="w-full bg-black">
      <div className="flex flex-col rounded-2xl bg-dark-palette-backgroundAlternate px-8 py-8 sm:items-center sm:py-16">
        <Title level={TitleLevel.Title1} as="h2" className="max-w-2xl sm:text-center max-sm:hidden">
          {title}
        </Title>
        <Title level={TitleLevel.Title3} as="h2" className="max-w-2xl sm:text-center sm:hidden font-bold">
          {title}
        </Title>
        {description && (
          <Title level={TitleLevel.Title4} as="p" className="mt-2 sm:text-center">
            {description}
          </Title>
        )}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">{cta}</div>
      </div>
    </section>
  );
}
