import {
  CorridorPage,
  buildCorridorMetadata
} from "@/components/corridor-page";
import { getCorridor } from "@/app/data/corridors";

const corridor = getCorridor("car-inspection-bandra-andheri");

export const metadata = buildCorridorMetadata(corridor);

export default function BandraAndheriCorridorPage() {
  return <CorridorPage corridor={corridor} />;
}
