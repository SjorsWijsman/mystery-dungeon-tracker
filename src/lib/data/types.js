export const typeList = [
	{
		id: 0,
		type: 'normal',
		superEffective: [],
		notVeryEffective: ['rock', 'steel'],
		littleEffect: ['ghost']
	},
	{
		id: 1,
		type: 'fire',
		superEffective: ['grass', 'ice', 'bug', 'steel'],
		notVeryEffective: ['fire', 'water', 'rock', 'dragon'],
		littleEffect: []
	},
	{
		id: 2,
		type: 'water',
		superEffective: ['fire', 'ground', 'rock'],
		notVeryEffective: ['water', 'grass', 'dragon'],
		littleEffect: []
	},
	{
		id: 3,
		type: 'grass',
		superEffective: ['water', 'ground', 'rock'],
		notVeryEffective: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'],
		littleEffect: []
	},
	{
		id: 4,
		type: 'electric',
		superEffective: ['water', 'flying'],
		notVeryEffective: ['grass', 'electric', 'dragon'],
		littleEffect: ['ground']
	},
	{
		id: 5,
		type: 'ice',
		superEffective: ['grass', 'ground', 'flying', 'dragon'],
		notVeryEffective: ['fire', 'water', 'ice', 'steel'],
		littleEffect: []
	},
	{
		id: 6,
		type: 'fighting',
		superEffective: ['normal', 'ice', 'rock', 'dark', 'steel'],
		notVeryEffective: ['poison', 'flying', 'psychic', 'bug'],
		littleEffect: ['ghost']
	},
	{
		id: 7,
		type: 'poison',
		superEffective: ['grass', 'bug'],
		notVeryEffective: ['poison', 'ground', 'rock', 'ghost'],
		littleEffect: ['steel']
	},
	{
		id: 8,
		type: 'ground',
		superEffective: ['fire', 'electric', 'poison', 'rock', 'steel'],
		notVeryEffective: ['grass', 'bug'],
		littleEffect: ['flying']
	},
	{
		id: 9,
		type: 'flying',
		superEffective: ['grass', 'fighting', 'bug'],
		notVeryEffective: ['electric', 'rock', 'steel'],
		littleEffect: []
	},
	{
		id: 10,
		type: 'psychic',
		superEffective: ['fighting', 'poison'],
		notVeryEffective: ['psychic', 'steel'],
		littleEffect: ['dark']
	},
	{
		id: 11,
		type: 'bug',
		superEffective: ['grass', 'psychic', 'dark'],
		notVeryEffective: ['fire', 'fighting', 'poison', 'flying', 'ghost', 'steel'],
		littleEffect: []
	},
	{
		id: 12,
		type: 'rock',
		superEffective: ['fire', 'ice', 'flying', 'bug'],
		notVeryEffective: ['fighting', 'ground', 'steel'],
		littleEffect: []
	},
	{
		id: 13,
		type: 'ghost',
		superEffective: ['psychic', 'ghost'],
		notVeryEffective: ['dark', 'steel'],
		littleEffect: ['normal']
	},
	{
		id: 14,
		type: 'dragon',
		superEffective: ['dragon'],
		notVeryEffective: ['steel'],
		littleEffect: []
	},
	{
		id: 15,
		type: 'dark',
		superEffective: ['psychic', 'ghost'],
		notVeryEffective: ['fighting', 'dark', 'steel'],
		littleEffect: []
	},
	{
		id: 16,
		type: 'steel',
		superEffective: ['ice', 'rock'],
		notVeryEffective: ['fire', 'water', 'electric', 'steel'],
		littleEffect: []
	}
];
