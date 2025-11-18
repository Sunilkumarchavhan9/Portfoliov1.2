
import Mywork from "@/components/ui/mywork";
import JinxPortfolio from "./home";
import MyLinks from "@/components/ui/mylinks";
import TechStack from "@/components/ui/toolsand tech";
import JinxSunilChavhn from "./JinxSunilChavhn";
import Projects from "@/components/ui/project";
import AllTimeProject from "@/components/ui/pprjs";

export default function Home() {
  return (
    <div>
      <JinxSunilChavhn/>
      <JinxPortfolio/>
      {/* <Mywork/> */}
      <MyLinks/>
      <TechStack/>
      <Projects/>
      <AllTimeProject/>
    </div>
  );
}
