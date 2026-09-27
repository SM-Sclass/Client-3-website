import {
  CorridorPage,
  buildCorridorMetadata
} from "@/components/corridor-page";
import { getCorridor } from "@/app/data/corridors";

const corridor = getCorridor("car-inspection-palghar");

export const metadata = buildCorridorMetadata(corridor);

export default function PalgharCorridorPage() {
  return <CorridorPage corridor={corridor} />;
}
