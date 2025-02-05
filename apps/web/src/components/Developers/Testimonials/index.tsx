'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import { ButtonWithLinkAndEventLogging } from 'apps/web/src/components/Button/ButtonWithLinkAndEventLogging';
import { ButtonVariants } from 'apps/web/src/components/base-org/Button/types';
import Title from 'apps/web/src/components/base-org/typography/Title';
import { TitleLevel } from 'apps/web/src/components/base-org/typography/Title/types';

type Tab = 'build' | 'scale' | 'monetize';

type Testimonial = {
  text: string;
  author: string;
  role: string;
  tab: Tab;
};

const testimonials: Testimonial[] = [
  {
    text: "Base's developer platform helped us launch our NFT marketplace in days instead of months.",
    author: 'Sarah Chen',
    role: 'CTO at ArtBlock',
    tab: 'build',
  },
  {
    text: 'We scaled from 100 to 100k daily active users without changing our infrastructure.',
    author: 'Michael Rodriguez',
    role: 'Founder at GameFi',
    tab: 'scale',
  },
  {
    text: 'Implementing Base Pay increased our revenue by 300% in the first month.',
    author: 'David Kim',
    role: 'CEO at DeFiPro',
    tab: 'monetize',
  },
];

export function Testimonials() {
  const [activeTab, setActiveTab] = useState<Tab>('build');

  const testimonialAnimation = useMemo(
    () => ({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.3 },
    }),
    [],
  );

  return (
    <section className="mt-16 h-full w-full">
      <div className="rounded-xl border border-palette-line/50 px-8 pb-8 pt-6">
        <div className="mb-8 flex space-x-6">
          {(['build', 'scale', 'monetize'] as const).map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={classNames(
                'rounded px-2 py-0.5 transition-colors',
                activeTab === tab
                  ? 'text-white'
                  : 'text-dark-palette-foregroundMuted hover:bg-dark-gray-10 hover:text-white',
              )}
            >
              <Title level={TitleLevel.Title3}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</Title>
            </button>
          ))}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {testimonials
              .filter((testimonial) => testimonial.tab === activeTab)
              .map((testimonial) => (
                <motion.div
                  key={testimonial.tab}
                  initial={testimonialAnimation.initial}
                  animate={testimonialAnimation.animate}
                  exit={testimonialAnimation.exit}
                  transition={testimonialAnimation.transition}
                  className="space-y-8"
                >
                  <blockquote className="space-y-4">
                    <Title level={TitleLevel.Display3}>&ldquo;{testimonial.text}&rdquo;</Title>
                    <div className="text-dark-palette-foregroundMuted">
                      <Title level={TitleLevel.Title4}>{testimonial.author}</Title>
                      <Title level={TitleLevel.Title4}>{testimonial.role}</Title>
                    </div>
                  </blockquote>
                  <ButtonWithLinkAndEventLogging
                    variant={ButtonVariants.SecondaryOutline}
                    iconName="arrowRight"
                    iconSize="24"
                    linkClassNames="px-4 py-2 text-base font-bold text-white"
                    buttonClassNames="flex w-40 items-center justify-between px-4 py-3"
                    href="/stories"
                    target="_blank"
                    eventName="testimonials"
                  >
                    More stories
                  </ButtonWithLinkAndEventLogging>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
