import { Skeleton } from "./ui/skeleton";
import { TableCell, TableRow } from "./ui/table";

type TableLoadingDataProps = {
  amountOfRows: number;
  amountOfCols: number;
};

export function TableLoadingData({
  amountOfRows,
  amountOfCols,
}: TableLoadingDataProps) {
  const rows = Array.from({ length: amountOfRows }, (_, rowIndex) => (
    <TableRow key={rowIndex}>
      {Array.from({ length: amountOfCols }, (_, colIndex) => (
        <TableCell key={colIndex}>
          <Skeleton className="h-5 w-full" />
        </TableCell>
      ))}
    </TableRow>
  ));

  return <>{rows}</>;
}
