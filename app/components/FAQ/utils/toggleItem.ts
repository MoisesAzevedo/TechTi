export function computeNextOpenSet(
  prev: Set<number>,
  index: number,
  singleOpen: boolean
): Set<number> {
  const next = new Set<number>(prev);

  if (singleOpen) {
    if (next.has(index)) {
      next.clear();
    } else {
      next.clear();
      next.add(index);
    }
  } else {
    if (next.has(index)) next.delete(index);
    else next.add(index);
  }

  return next;
}

export default computeNextOpenSet;
