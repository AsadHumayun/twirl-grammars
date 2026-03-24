interface Pattern {
	name: string;
	includes: string[];
}

interface TextMatePattern {
	name: string;
	patterns: Pattern[];
}

interface TextMateLanguage {
	["$schema"]: string;
	name: string;
	scopeName: string;
	fileTypes: string[];
}


