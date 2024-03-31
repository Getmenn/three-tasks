declare module '*.module.scss' {
	type IClassNames = Record<string, string>;
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.svg' {
	// const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	const content: any;
	export default content;
}

declare module '*.png' {
	const value: any;
	export = value;
}

declare module '*.jpg' {
	const value: any;
	export = value;
}