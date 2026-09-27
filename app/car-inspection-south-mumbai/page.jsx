import {
  CorridorPage,
  buildCorridorMetadata
} from "@/components/corridor-page";
import { getCorridor } from "@/app/data/corridors";

const corridor = getCorridor("car-inspection-south-mumbai");

export const metadata = buildCorridorMetadata(corridor);

export default function SouthMumbaiCorridorPage() {
  return <CorridorPage corridor={corridor} />;
}
