'use client';

import { useExperienceStore } from './store';
type ExperienceCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardProps;

type CardProps = {
  id: number;
};

const ExperienceCard = ({ gradient, children, id }: ExperienceCardProps) => {
  const inViewFeature = useExperienceStore((state) => state.inViewFeature);
  return (
    <div
      className={`absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br transition-opacity ${gradient} ${
        inViewFeature === id ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export const Emergn = ({ id }: CardProps) => {
  return (
    <ExperienceCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <span />
    </ExperienceCard>
  );
};

export const Digicode = ({ id }: CardProps) => {
  return (
    <ExperienceCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <span />
    </ExperienceCard>
  );
};
