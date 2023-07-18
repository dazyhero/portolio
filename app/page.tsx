import { Digicode, Emergn } from './components/experience/card';
import { ExperienceTitle } from './components/experience/title';
import { Greetings } from './components/intro/greetings';

const experiences = [
  {
    title: 'Emergn',
    id: 1,
    card: Emergn,
  },
  {
    title: 'Digicode',
    id: 2,
    card: Digicode,
  },
];
export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <div className="flex flex-row h-screen w-full bottom-0">
        <Greetings />
      </div>
      <div className="flex flex-row items-start gap-20 w-full">
        <div className="w-full py-[50vh]">
          <ul>
            {experiences.map((experience) => (
              <li key={experience.id}>
                <ExperienceTitle id={experience.id}>
                  {experience.title}
                </ExperienceTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen items-center w-full">
          <div className="relative w-full aspect-square bg-gray-500 rounded-2xl">
            {experiences.map((experience) => (
              <experience.card key={experience.id} id={experience.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </main>
  );
}
