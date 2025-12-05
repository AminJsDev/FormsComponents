import { Box } from '@mui/material';

interface GridViewProps<T> {
  items: T[];
  columns?: number;
  gap?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

function GridView<T>({ items, columns = 1, gap = 1.5, renderItem }: GridViewProps<T>) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: gap,
      }}
    >
      {items.map((item, index) => (
        <Box key={index}>{renderItem(item, index)}</Box>
      ))}
    </Box>
  );
}

export default GridView;
