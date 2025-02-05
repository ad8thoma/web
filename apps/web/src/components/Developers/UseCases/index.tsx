import Title from 'apps/web/src/components/base-org/typography/Title';
import { TitleLevel } from 'apps/web/src/components/base-org/typography/Title/types';
import { UseCaseBlock } from 'apps/web/src/components/Developers/UseCases/UseCaseBlock';
import { AnimatedOnboarding } from 'apps/web/src/components/Developers/UseCases/Onboarding';
import { AnimatedPayment } from 'apps/web/src/components/Developers/UseCases/Payments';
import { AnimatedBaseAgent } from 'apps/web/src/components/Developers/UseCases/BaseAgent';
import { AnimatedSocial } from 'apps/web/src/components/Developers/UseCases/Social';
import { AnimatedDefi } from 'apps/web/src/components/Developers/UseCases/Defi';
import { AnimatedGasless } from 'apps/web/src/components/Developers/UseCases/Gassless';

export async function UseCases() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-row gap-2">
        <Title level={TitleLevel.Title1} as="h2">
          Build, scale, and monetize.
        </Title>
        <Title level={TitleLevel.Title1} as="h2" className="text-gray-50">
          Everything you need to launch onchain products.
        </Title>
      </div>
      <div className="mt-9 grid grid-cols-2 gap-9">
        <UseCaseBlock
          title="Onboard your users"
          description="Create seamless onboarding experiences with smart wallerts and social authentication."
          href="https://vocs-migration-mvp-one.vercel.app/dev-tools/identity/smart-wallet/quick-start"
        >
          <div className="flex h-[320px] w-[50%] flex-col items-center justify-center">
            <AnimatedOnboarding />
          </div>
        </UseCaseBlock>
        <UseCaseBlock
          title="Accept crypto payments"
          description="Integrate secure and efficient crypto payment solutions for your applications."
          href="https://vocs-migration-mvp-one.vercel.app/dev-tools/kits/onchainkit/checkout/checkout"
        >
          <AnimatedPayment />
        </UseCaseBlock>
        <UseCaseBlock
          title="Launch AI agents"
          description="Build and deploy AI agents that can interact with onchain data and smart contracts."
          href="https://docs.cdp.coinbase.com/agentkit/docs/welcome"
        >
          <AnimatedBaseAgent />
        </UseCaseBlock>
        <UseCaseBlock
          title="Onchain social"
          description="Create engaging social experiences with decentralized identity and content."
          href="https://vocs-migration-mvp-one.vercel.app/dev-tools/kits/onchainkit/mint/nft-mint-card"
        >
          <AnimatedSocial />
        </UseCaseBlock>
        <UseCaseBlock
          title="In-app defi"
          description="Add powerful DeFi protocols and services directly into your applications."
          href="https://vocs-migration-mvp-one.vercel.app/dev-tools/kits/onchainkit/swap/swap"
        >
          <AnimatedDefi />
        </UseCaseBlock>
        <UseCaseBlock
          title="Gasless experience"
          description="Provide frictionless transactions with gasless and account abstraction solutions."
          href="https://vocs-migration-mvp-one.vercel.app/dev-tools/identity/smart-wallet/base-gasless-campaign"
        >
          <AnimatedGasless />
        </UseCaseBlock>
      </div>
    </div>
  );
}
