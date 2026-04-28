import React from "react";

interface ComparisonTableProps {
  caption?: string;
  headers: string[];
  rows: (string | React.ReactNode)[][];
  dir?: "ltr" | "rtl";
}

export function ComparisonTable({
  caption,
  headers,
  rows,
  dir = "ltr",
}: ComparisonTableProps) {
  return (
    <div className='my-6 overflow-x-auto rounded-xl border border-white/10 bg-brand-950/40'>
      <table className='w-full text-sm' dir={dir}>
        {caption && (
          <caption className='text-start text-xs text-white/50 px-4 py-2 border-b border-white/10'>
            {caption}
          </caption>
        )}
        <thead>
          <tr className='bg-white/[0.03] border-b border-white/10'>
            {headers.map((h, i) => (
              <th
                key={i}
                scope='col'
                className='px-4 py-3 text-start font-semibold text-white/80 whitespace-nowrap'
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className='border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors'
            >
              {row.map((cell, ci) => (
                <td key={ci} className='px-4 py-3 text-white/70 align-top'>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
