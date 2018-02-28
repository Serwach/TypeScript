interface IEmployee {
	id: number;
	name: string;
}

function getInterfaceName() {
	return 'IEmployee';
}

export { IEmployee as IEmployeeInterface };