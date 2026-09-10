/**
 * Hi am feature specific component!
 * I live in `features/[feature-name]/components/use-example-hook.ts`
 * 
 * Why am here? Readability
 * Yes I may be not re-usable, but sometimes you want to isolate some chunks 
 * so the final parent can be more readable and doesn't have 1000 lines of JSX 
 * Downsides: 
 * 1. Tag levels, for AI agents, thats a piece of cake, for humans, that means 
 *    I have to click to see what <h> tag level this have, sucks
 *    so the solution here is to avoid giving any of these sup components important tags
*/

export const Hero = () => {
  return <div>
    <p>Im some what a component for home feature only</p>
  </div>;
};
