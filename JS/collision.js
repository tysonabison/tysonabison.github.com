function rectCollide(r1, r2){
  const top_diff = r2.y + r2.h - r1.y;
	const bottom_diff = r1.y + r1.h - r2.y;
	const left_diff = r2.x + r2.w - r1.x;
  const right_diff = r1.x + r1.w - r2.x;
  
	const min = Math.min(bottom_diff, top_diff, left_diff, right_diff);
  
	return {
		bottom: bottom_diff == min,
		right: right_diff == min,
		left: left_diff == min,
		top: top_diff == min
	}
	return null;
}
