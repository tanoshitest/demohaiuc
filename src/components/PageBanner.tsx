import heroImage from '@/assets/hero-home.jpg';

interface PageBannerProps {
  image?: string;
}

export default function PageBanner({ image }: PageBannerProps) {
  return (
    <section className="relative min-h-screen">
      <img
        src={image || heroImage}
        alt="Banner"
        className="w-full h-full absolute inset-0 object-cover"
      />
      <div className="gradient-overlay" />
    </section>
  );
}
