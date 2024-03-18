import {
  AboutMe,
  ContactMe,
  Header,
  Hero,
  MyExperience,
  MyPortfolio,
  MyService,
} from "./components";

export default function Home() {
  return (
    <main className="bg-white max-w-[1440px]">
      <Header />
      <Hero />
      <AboutMe />
      <MyService />
      <MyPortfolio />
      <MyExperience />
      <ContactMe />
    </main>
  );
}
