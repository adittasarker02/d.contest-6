function longestIncreasingStreak(nums) {
  if (nums.length === 0) return 0;

  let best = 1;
  let current = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      current++;
    } else {
      current = 1;
    }
    if (current > best) best = current;
  }

  return best;
}