"use client";

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config'; // Ajuste o caminho até o seu sanity.config.ts

export function Studio() {
  return <NextStudio config={config} />;
}