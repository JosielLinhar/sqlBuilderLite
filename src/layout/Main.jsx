import { Card } from "../components/card";
import { CardContentLeft } from "../components/cardContent/CardContentLeft";
import { CardContentRight } from "../components/cardContent/CardContentRight";

export function Main() {
  return (
    <div className="px-5 grid grid-cols-2 gap-5">
      <Card title="SQL Builder" cardContent={CardContentLeft()} />
      <Card title="Generated SQL" cardContent={CardContentRight()} />
    </div>
  );
}
