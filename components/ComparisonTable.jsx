// Generic table renderer for the source's own comparison/reference tables
// (MOOWR vs SEZ vs EPCG, SEZ vs FTWZ, AEO categories, baggage allowances,
// etc). Desktop renders a real <table>; mobile stacks each row as a
// labeled card so nothing forces horizontal page scroll.
export default function ComparisonTable({ caption, headers, rows }) {
  return (
    <div className="my-6">
      {caption && <p className="mb-3 text-sm font-semibold text-ink">{caption}</p>}

      {/* Desktop/tablet: real table */}
      <div className="hidden overflow-x-auto border-y border-hairline sm:block">
        <table className="w-full border-collapse text-base leading-relaxed">
          <thead>
            <tr className="bg-paper">
              {headers.map((h) => (
                <th key={h} scope="col" className="border-b border-hairline bg-navy-50/45 px-4 py-3.5 text-left font-semibold text-ink">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-hairline last:border-0">
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 py-3.5 align-top text-ink/80 ${j === 0 ? "font-medium text-ink" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked label/value cards */}
      <div className="space-y-3 sm:hidden">
        {rows.map((row, i) => (
          <div key={i} className="border-y border-hairline bg-white p-4 first:border-t last:border-b">
            {row.map((cell, j) => (
              <div key={j} className={j > 0 ? "mt-2 border-t border-hairline pt-2" : ""}>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-slatey">{headers[j]}</p>
                {/* !mt: beats .article-body p + p when the table sits in prose */}
                <p className="!mt-0.5 text-base leading-relaxed text-ink/85">{cell}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
