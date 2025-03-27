import { describe, expect, it } from "vitest";
import { calculateBowlingScore } from "./bowling";

describe("calculateBowlingScore", () => {
	it("should return 0", () => {
		const score = calculateBowlingScore();
		expect(score).toBe(0);
	});
});
