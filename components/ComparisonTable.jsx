import ReferenceTable from "./ReferenceTable";

// Generic table renderer for the source's own comparison/reference tables
// (MOOWR vs SEZ vs EPCG, SEZ vs FTWZ, AEO categories, baggage allowances…).
// Props: caption, headers, rows, id (unchanged) + optional stickyHead.
// Thin wrapper: ONE semantic <table> (caption, column <th scope="col">, first
// column <th scope="row">), ruled, tabular-nums, sticky first column, wide
// tables scroll inside their own region. Shares its styling with
// ReferenceTable (comfortable density here; ReferenceTable defaults to dense).
export default function ComparisonTable({ caption, headers, rows, id, stickyHead = false }) {
  return (
    <ReferenceTable
      caption={caption}
      headers={headers}
      rows={rows}
      id={id}
      stickyHead={stickyHead}
      density="comfortable"
    />
  );
}
