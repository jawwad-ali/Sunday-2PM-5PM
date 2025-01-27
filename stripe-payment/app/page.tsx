import dynamic from "next/dynamic";
import LearnUseEffect from "./components/LearnUseEffect";
// import StripePayment from "./components/StripePayment";

const DynamicComponentWithNoSSR = dynamic(
  () => import('./components/StripePayment'),
  { ssr: false }
)

export default function Home() {
  return (
    <main>
      <DynamicComponentWithNoSSR />

      <LearnUseEffect />
    </main>
  );
}
