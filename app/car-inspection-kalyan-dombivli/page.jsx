import {
  CorridorPage,
  buildCorridorMetadata
} from "@/components/corridor-page";
import { getCorridor } from "@/app/data/corridors";

const corridor = getCorridor("car-inspection-kalyan-dombivli");

export const metadata = buildCorridorMetadata(corridor);

export default function KalyanDombivliCorridorPage() {
  return <CorridorPage corridor={corridor} />;
}
