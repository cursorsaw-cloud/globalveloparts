import type { Meta, StoryObj } from "@storybook/react-vite";
import { LanguageProvider } from "@/lib/i18n";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import ProductsPage from "@/pages/products";
import GlobalNetworkPage from "@/pages/global";
import SabanciDxPage from "@/pages/sabancidx";

function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Layout>{children}</Layout>
    </LanguageProvider>
  );
}

const meta: Meta = {
  title: "Audit/Site Pages",
  parameters: {
    layout: "fullscreen",
    a11y: {
      test: "todo",
    },
  },
};

export default meta;

type Story = StoryObj;

export const HomeAudit: Story = {
  name: "01 Home audit",
  render: () => (
    <PageFrame>
      <Home />
    </PageFrame>
  ),
  parameters: {
    docs: {
      description: {
        story: "Audit the homepage for header balance, hero spacing, trust hierarchy, product card rhythm, and contact form conversion flow.",
      },
    },
  },
};

export const AboutAudit: Story = {
  name: "02 About audit",
  render: () => (
    <PageFrame>
      <AboutPage />
    </PageFrame>
  ),
  parameters: {
    docs: {
      description: {
        story: "Audit content hierarchy, sectional contrast, card spacing, and narrative clarity on the About page.",
      },
    },
  },
};

export const ProductsAudit: Story = {
  name: "03 Products audit",
  render: () => (
    <PageFrame>
      <ProductsPage />
    </PageFrame>
  ),
  parameters: {
    docs: {
      description: {
        story: "Audit accordion density, brand-grid readability, scan rhythm, and visual hierarchy across the product catalog experience.",
      },
    },
  },
};

export const GlobalNetworkAudit: Story = {
  name: "04 Global network audit",
  render: () => (
    <PageFrame>
      <GlobalNetworkPage />
    </PageFrame>
  ),
  parameters: {
    docs: {
      description: {
        story: "Audit the balance between messaging, market proof points, and imagery on the Global Network page.",
      },
    },
  },
};

export const SabanciDxAudit: Story = {
  name: "05 SabanciDx audit",
  render: () => (
    <PageFrame>
      <SabanciDxPage />
    </PageFrame>
  ),
  parameters: {
    docs: {
      description: {
        story: "Audit trust messaging, partnership presentation, icon consistency, and CTA prominence on the SabanciDx page.",
      },
    },
  },
};
