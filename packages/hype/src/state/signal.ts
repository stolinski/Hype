// signal.ts
type Listener<T> = (value: T) => void;

function createSignal<T>(initialValue: T) {
	let value = initialValue;
	const listeners: Listener<T>[] = [];

	const subscribe = (listener: Listener<T>) => {
		listeners.push(listener);
		return () => {
			const index = listeners.indexOf(listener);
			if (index > -1) {
				listeners.splice(index, 1);
			}
		};
	};

	const setValue = (newValue: T) => {
		if (newValue !== value) {
			value = newValue;
			listeners.forEach((listener) => listener(value));
		}
	};

	const getValue = () => value;

	return { subscribe, setValue, getValue };
}

export { createSignal };
