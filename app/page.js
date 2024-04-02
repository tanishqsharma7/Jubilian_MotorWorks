import Home_2 from "./(home)/home-2/page";
import Wrapper from "./layout/wrapper";

export const metadata = {
  title: "Jubilian MotorWorks | Automobiles",
  description: `Used Car Dealer `,
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_2 />
    </Wrapper>
  );
}
