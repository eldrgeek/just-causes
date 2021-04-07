import React from 'react';
import ReactDOM from 'react-dom';
import HookForm from './HookForm';
import { ChakraProvider, CSSReset, Center } from '@chakra-ui/react';

function App() {
	return (
		<ChakraProvider>
			<CSSReset />
			<Center m="auto" p={4} maxW={700}>
				<HookForm />
			</Center>
		</ChakraProvider>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
