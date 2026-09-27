import {
  CorridorPage,
  buildCorridorMetadata
} from "@/components/corridor-page";
import { getCorridor } from "@/app/data/corridors";

const corridor = getCorridor("car-inspection-goregaon-borivali");

export const metadata = buildCorridorMetadata(corridor);

export default function GoregaonBorivaliCorridorPage() {
  return <CorridorPage corridor={corridor} />;
}
