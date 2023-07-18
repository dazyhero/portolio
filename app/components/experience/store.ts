import { create } from 'zustand';

type ExperienceStore = {
  inViewexperience: number | null;
  setInViewExperience: (experience: number | null) => void;
};

export const useExperienceStore = create<ExperienceStore>((set) => ({
  inViewExperience: null,
  setInViewExperience: (experience: number | null) =>
    set({ inViewExperience: experience }),
}));
