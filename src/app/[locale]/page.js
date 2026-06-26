import './favicon.ico'
import Hero from "./components/hero";
import FeaturedIn from "./components/featured_in";
import Features from "./components/features";

import { getMessages, getTranslations } from 'next-intl/server';
import How from "./components/how";
import { notFound, redirect } from "next/navigation";

export default async function Home({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  const thero = await getTranslations({ locale, namespace: 'hero' });
  const hero = {
    title: thero('title'),
    subtitle: thero('subtitle'),
    description: thero('description'),
    search_btn: thero('search_btn'),
    placeholder: thero('placeholder'),
    span: thero('span'),
    download_btn: thero('download_btn'),
    download_mp4: thero('download_mp4')
  };

  const tfeatured_in = await getTranslations({ locale, namespace: 'featured_in' });
  const featured_in = {
    info: tfeatured_in('info')
  }

  const tfeatures = await getTranslations({ locale, namespace: 'features' });
  const featuresLiSt = await messages.features.list;
  const features = {
    title: tfeatures('title'),
    description: tfeatures('description'),
    list: featuresLiSt
  }

  const thow = await getTranslations({ locale, namespace: 'how' });
  const howLiSt = await messages.how.list;
  const how = {
    title: thow('title'),
    description: thow('description'),
    list: howLiSt
  }

  if (locale !== 'en' && locale !== 'ar') {

    notFound()
  }

  return (
    <div>
      <Hero content={hero} />
      <FeaturedIn content={featured_in} />
      <Features content={features} />
      <How content={how} />
    </div>
  );
}
