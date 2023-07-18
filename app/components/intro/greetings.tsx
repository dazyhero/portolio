'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
};

const TextBlock = ({ children }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });
  return (
    <div
      ref={ref}
      className={`transition-opacity  ${
        isInView ? 'text-gray-50' : 'text-gray-500'
      } `}
    >
      {children}
    </div>
  );
};
export const Greetings = () => {
  return (
    <div className="flex self-end flex-col border-red-500 pb-16 relative">
      <TextBlock>
        <p className="text-[#50dfb9] xl:text-lg text-sm">Hi, my name is</p>
      </TextBlock>
      <TextBlock>
        <h1 className="font-bold xl:text-6xl md:text-4xl sm:text-2xl">
          John Doe.
        </h1>
      </TextBlock>
      <TextBlock>
        <h1 className="font-bold xl:text-6xl md:text-4xl sm:text-2xl">
          I build things for the web
        </h1>
      </TextBlock>
      <TextBlock>
        <p className="pt-8 xl:text-2xl md:text-xl sm:text-lg">
          I&apos;m a software engineer based in Ukraine specializing in building
          (and occasionally designing) exceptional websites, applications, and
          everything in between.
        </p>
      </TextBlock>
      <TextBlock>
        <p className="text-2xl pt-6">
          Since graduating from the Kyiv Polytechnic Institute with a degree in
          Computer Science, I&apos;ve been building web applications for over 5
          years, and have worked with clients ranging from startups to Fortune
          500 companies.
        </p>
      </TextBlock>
    </div>
  );
};
