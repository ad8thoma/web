'use client';

import Title from 'apps/web/src/components/base-org/typography/Title';
import { TitleLevel } from 'apps/web/src/components/base-org/typography/Title/types';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import agentKit from 'apps/web/src/components/Developers/Tools/agentKit.svg';
import baseNet from 'apps/web/src/components/Developers/Tools/baseNet.svg';
import miniKit from 'apps/web/src/components/Developers/Tools/miniKit.svg';
import baseWallet from 'apps/web/src/components/Developers/Tools/baseWallet.svg';
import onchainKit from 'apps/web/src/components/Developers/Tools/onchainKit.svg';
import verification from 'apps/web/src/components/Developers/Tools/verification.svg';

type CardProps = {
  title: string;
  description: string;
  icon: StaticImageData;
  href: string;
};

export function Tools() {
  return (
    <section className="h-full w-full">
      <Title level={TitleLevel.Title1} as="h2" className="mb-9 mt-32">
        The easiest and most rewarding way to build world-class onchain products.
      </Title>
      <div className="grid grid-cols-2 gap-4">
        <Card
          title="AgentKit"
          description="Build and deploy AI agents that can interact with blockchain data and smart contracts."
          icon={agentKit as StaticImageData}
          href="https://docs.cdp.coinbase.com/agentkit/docs/welcome"
        />
        <Card
          title="Base Nets"
          description="Unlock fast and cheap transactions at scale with dedicated blockspace."
          icon={baseNet as StaticImageData}
          href="/coming-soon"
        />
        <Card
          title="MiniKit"
          description="Build once. Deploy anywhere. A tool to help you easily deploy your app on Warpcast and Base App."
          icon={miniKit as StaticImageData}
          href="/coming-soon"
        />
        <Card
          title="Smart Wallet"
          description="A passkey-based, self-custodial, global wallet for seamless experiences."
          icon={baseWallet as StaticImageData}
          href="https://www.smartwallet.dev/why"
        />
        <Card
          title="OnchainKit"
          description="An all-in-one toolkit to make building onchain faster, easier, and more profitable."
          icon={onchainKit as StaticImageData}
          href="https://onchainkit.xyz/"
        />
        <Card
          title="Verifications"
          description="Add identity verification and compliance features to your applications."
          icon={verification as StaticImageData}
          href="https://vocs-migration-mvp-one.vercel.app/dev-tools/identity/verifications/quickstart"
        />
      </div>
    </section>
  );
}

function Card({ title, description, icon, href }: CardProps) {
  return (
    <Link
      href={href}
      className="flex cursor-pointer flex-col gap-4 rounded-xl bg-dark-palette-backgroundAlternate p-6 transition-all duration-200 hover:bg-dark-gray-10"
    >
      <div className="flex items-center gap-8">
        <Image src={icon} alt={title} width={64} height={64} className="h-16 w-16" />
        <div>
          <Title level={TitleLevel.Title3} as="h3" className="font-bold text-white">
            {title}
          </Title>
          <Title level={TitleLevel.Title4} as="p" className="text-dark-palette-foregroundMuted">
            {description}
          </Title>
        </div>
      </div>
    </Link>
  );
}
