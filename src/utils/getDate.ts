export const getDate = (): string => {
	const date: string = new Date().toLocaleDateString();

	return date;
};
