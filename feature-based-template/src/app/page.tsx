/**
 * I'm a page, I'm a thin wrapper around all of that JSX crap
 * my job is to call api and pass data, and SEO tags
 * I DON'T OWN ANY JSX OR ANY LOGIC
 *
 * import { Home } from '@features/home'
 * import { getHomeData } from '@features/home/api'
 * 
 * export const metadata = {}
 * and any next JS value that needs to be at this level
 * 
 * const HomePage = async () => {
 *  const homeData = await getHomeData();
 *  return <Home data={homeData} />;
 * };
 * 
 * export default HomePage; // am forced here bcs of the framework
*/

