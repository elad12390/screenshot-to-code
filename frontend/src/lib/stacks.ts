// Keep in sync with backend (prompts/types.py)
// Order here determines order in dropdown
export enum Stack {
  HTML_TAILWIND = "html_tailwind",
  HTML_CSS = "html_css",
  REACT_TAILWIND = "react_tailwind",
  BOOTSTRAP = "bootstrap",
  VUE_TAILWIND = "vue_tailwind",
  IONIC_TAILWIND = "ionic_tailwind",
  SVG = "svg",
  HTML_CSS_TEMPLATE = "html_css_template",
  ANGULAR_IONIC = "angular_ionic",
}

export const STACK_DESCRIPTIONS: {
  [key in Stack]: { components: string[]; inBeta: boolean };
} = {
  html_css: { components: ["HTML", "CSS"], inBeta: false },
  html_tailwind: { components: ["HTML", "Tailwind"], inBeta: false },
  react_tailwind: { components: ["React", "Tailwind"], inBeta: false },
  bootstrap: { components: ["Bootstrap"], inBeta: false },
  vue_tailwind: { components: ["Vue", "Tailwind"], inBeta: true },
  ionic_tailwind: { components: ["Ionic", "Tailwind"], inBeta: true },
  svg: { components: ["SVG"], inBeta: true },
  html_css_template: { components: ["HTML", "CSS", "Template Variables"], inBeta: false },
  angular_ionic: { components: ["Angular 18", "Ionic 17", "Signals"], inBeta: true },
};
