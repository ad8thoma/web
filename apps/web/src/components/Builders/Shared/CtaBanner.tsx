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
    <section className="w-full bg-black ">
      <div className="flex flex-col items-center rounded-2xl bg-dark-palette-backgroundAlternate px-16 py-20 text-center ">
        <Title level={TitleLevel.Title1} as="h2" className="max-w-2xl">
          {title}
        </Title>
        {description && (
          <Title level={TitleLevel.Title4} as="p" className="mt-2 sm:text-center ">
            {description}
          </Title>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 max-sm:w-full sm:flex-row">
          {cta}
        </div>
      </div>
    </section>
  );
}
