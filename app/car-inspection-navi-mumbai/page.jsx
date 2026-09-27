import {
  CorridorPage,
  buildCorridorMetadata
} from "@/components/corridor-page";
import { getCorridor } from "@/app/data/corridors";

const corridor = getCorridor("car-inspection-navi-mumbai");

export const metadata = buildCorridorMetadata(corridor);

export default function NaviMumbaiCorridorPage() {
  return <CorridorPage corridor={corridor} />;
}
