import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  output: 'hybrid' //! Es un híbrido para que haga un pre render (la parte que es estática) y tú le puedes indicar que parte se van a renderizar de manera dinámicamente
});