'use client';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useExperienceStore } from './store';

type Props = {
  children: React.ReactNode;
  id: number;
};

export const ExperienceTitle = ({ children, id }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });
  const setInViewExperience = useExperienceStore(
    (state) => state.setInViewExperience,
  );
  const inViewExperience = useExperienceStore(
    (state) => state.inViewExperience,
  );

  useEffect(() => {
    if (isInView) setInViewExperience(id);
    if (!isInView && inViewExperience === id) setInViewExperience(null);
  }, [isInView, setInViewExperience, id, inViewExperience]);

  return (
    <p
      ref={ref}
      className={`py-16 text-5xl ${
        isInView ? 'text-gray-50' : 'text-gray-500'
      } `}
    >
      {children}
    </p>
  );
};
