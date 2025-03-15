import PlanDetails from "../components/PlanDetails.mjs";
import { Suspense } from "react";

export default function PlansPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PlanDetails />
    </Suspense>
  );
}