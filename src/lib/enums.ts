export enum Unit {
	KILOMETER = 'Kilometer',
	MILE = 'Mile'
}

export function getFactor(unit: Unit): number {
	return unit === Unit.KILOMETER ? 1000 : 1609
}
