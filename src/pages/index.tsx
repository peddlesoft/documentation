import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroSection from "@site/src/components/organisms/o-hero-section";
import FeaturesSection from "../components/organisms/o-features-section";
import DocsCategoriesSection from "../components/organisms/o-docs-categories";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Docs for Peddlesoft"
    >
      <HeroSection />
      <FeaturesSection />
      <DocsCategoriesSection />
    </Layout>
  );
}
