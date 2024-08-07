import Link from 'apps/web/node_modules/next/link';
import Image from 'apps/web/node_modules/next/image';
import { StaticImport } from 'apps/web/node_modules/next/dist/shared/lib/get-img-props';
import { whyBaseSharedClassNames } from '../../../app/(base-org)/why-base/page';
import section2 from '../TableOfContents/sectionNumbers/section2.svg';

type Stat = {
  value: string;
  description: string;
  footnote?: number;
  units?: string;
};

const stats: Stat[] = [
  {
    value: '$0.002',
    description: 'Lowest cost per txs (among L2s)',
    footnote: 1,
  },
  {
    value: '49.5',
    units: 'TPS',
    description: 'Best txn efficiency (among L2s)',
    footnote: 2,
  },
  {
    value: '9.14',
    units: 'Mgas/Sec',
    description: 'Highest throughput (among L2s)',
    footnote: 2,
  },
];

export const PERFORMANCE_AND_COST_SECTION_ID = 'performanceAndCost';

export default async function PerformanceAndCost() {
  return (
    <div id={PERFORMANCE_AND_COST_SECTION_ID} className={whyBaseSharedClassNames.section}>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
        <div className="flex flex-row">
          <span className={whyBaseSharedClassNames.sectionNumberIcon}>
            <Image src={section2 as StaticImport} alt="section three" />
          </span>
          <div className="ml-4 w-full max-w-[750px]">
            <h2 className={whyBaseSharedClassNames.title}>
              Best-in-class performance & cost efficiency
            </h2>
            <p className={whyBaseSharedClassNames.bodyText}>
              Base leads the way with the lowest transaction costs, highest throughput, and top TPS
              among Layer 2 solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-10 mt-4 flex flex-col justify-center sm:mt-6 sm:divide-y-2 md:flex-row md:divide-x-2 md:divide-y-0 lg:mt-8">
        {stats.map((stat, index) => (
          <div
            key={stat.description}
            className={`flex w-full flex-col items-center justify-center gap-2 p-4 sm:gap-4 sm:p-6 lg:p-8 ${
              index !== 0 ? 'border-t-2 sm:border-t-0' : ''
            }`}
          >
            <div className="flex flex-col items-start">
              <span className="text-5xl text-gray-40 sm:text-5xl lg:text-6xl xl:text-8xl">
                {stat.value}
                <span className="ml-1 text-2xl sm:text-3xl lg:ml-2 lg:text-4xl">
                  {stat.units ?? ''}
                </span>
              </span>
              <p className="mt-1 text-sm sm:text-base lg:mt-2">
                {stat.description}
                <span className="ml-1 align-super text-xs">{stat.footnote ?? ''}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="mt-6 text-xs text-palette-backgroundAlternate sm:mt-8">
        Figures as of 7/30/2024. Sources:{' '}
        <Link href="https://l2beat.com/scaling/costs" className="underline">
          L2Beat
        </Link>
        {' , '}
        <Link href="https://rollup.wtf/" className="underline">
          Rollup.wtf
        </Link>
      </span>
    </div>
  );
}
