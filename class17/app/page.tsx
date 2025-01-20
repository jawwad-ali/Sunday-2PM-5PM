import FormValidation from "./components/FormValidation";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <FormValidation />
      <Link href='/payment'>Payment</Link>
    </>
  );
}