// ReferenceTable — dense, table-first reference style for the source's own
// tables (allowances, document lists, scheme comparisons).
//
// USAGE
//   <ReferenceTable
//     caption="What the caption says"        // shown above the table, 15px semibold
//     headers={["Col A", "Col B", "Col C"]}  // <th scope="col">
//     rows={[["Row label", "cell", "cell"]]} // first cell = <th scope="row"> (rowHeaders)
//     id="anchor-id"                         // optional, for PageNav
//     stickyHead                             // optional: header row sticks while the
//                                            //   table scrolls inside a ~70vh box
//     density="dense" | "comfortable"        // default "dense"
//     rowHeaders={false}                     // optional: render first column as <td>
//   />
// - One semantic <table> at every width, real <caption>. Wrapper is role="region" tabIndex=0
//   (keyboard-scrollable) and scrolls inside itself; page never scrolls sideways.
// - First column is sticky on horizontal scroll. Ruled, no zebra, tabular-nums.
// - ComparisonTable is a thin wrapper over this (density="comfortable").
export default function ReferenceTable({
  caption,
  headers,
  rows,
  id,
  stickyHead = false,
  density = "dense",
  rowHeaders = true,
  className = "",
}) {
  const wide = headers.length > 2;
  const pad = density === "dense" ? "px-3.5 py-2.5 sm:px-4" : "px-4 py-3.5";
  const text = density === "dense" ? "text-[0.9375rem] leading-snug" : "text-base leading-relaxed";
  const headStick = stickyHead ? "sticky top-0 z-20" : "";

  return (
    <div className={`my-6 ${className}`} id={id}>
      <div
        className={`overflow-x-auto bg-white ${stickyHead ? "max-h-[70vh] overflow-y-auto" : ""} border-b border-hairline`}
        tabIndex={0}
        role="region"
        aria-label={caption || "Table"}
      >
        <table className={`w-full border-collapse tabular-nums ${text} ${wide ? "min-w-[34rem]" : ""}`}>
          {caption && (
            <caption className="caption px-1 pb-2.5 text-left font-semibold text-ink [caption-side:top]">{caption}</caption>
          )}
          <thead>
            <tr>
              {headers.map((h, j) => (
                <th
                  key={`${j}-${h}`}
                  scope="col"
                  className={`${pad} ${headStick} border-b border-t-2 border-b-ink/25 border-t-ink bg-white text-left align-bottom font-semibold text-ink ${
                    j === 0 ? "sticky left-0 z-30 shadow-[1px_0_0_#e2e6f2]" : ""
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-hairline last:border-0">
                {row.map((cell, j) =>
                  j === 0 && rowHeaders ? (
                    <th
                      key={j}
                      scope="row"
                      className={`${pad} sticky left-0 z-10 bg-white text-left align-top font-semibold text-ink shadow-[1px_0_0_#e2e6f2]`}
                    >
                      {cell}
                    </th>
                  ) : (
                    <td key={j} className={`${pad} align-top text-ink/85`}>
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
