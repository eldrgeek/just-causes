import { useForm } from 'react-hook-form';
import React from 'react';
import {
	FormErrorMessage,
	// FormLabel,
	FormControl,
	Box,
	Center,
	// Input,
	Button,
	Image
} from '@chakra-ui/react';
import TextPage from './TextPage';
const Fallback = () => {
	return <Image src="./img/jc-cover-125.png" alt="Just causes" />;
};
export default function HookForm() {
	const { handleSubmit, errors, formState } = useForm();

	// function validateName(value) {
	//   if (!value) {
	//     return "Name is required";
	//   } else if (value !== "Naruto") {
	//     return "Jeez! You're not a fan 😱";
	//   } else return true;
	// }

	function onSubmit(values) {
		window.location.href = 'https://revolution1x1.org';

		// return new Promise((resolve) => {
		// 	setTimeout(() => {
		// 		alert(JSON.stringify(values, null, 2));
		// 		resolve();
		// 	}, 3000);
		// });
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormControl isInvalid={errors.name}>
				<FormErrorMessage>
					{errors.name && errors.name.message}
				</FormErrorMessage>
			</FormControl>
			<Center>
				<Box m={2} maxW={700}>
					<Image
						fallback={<Fallback />}
						src="./img/JCMed.png"
						alt="Just causes"
					/>
				</Box>
			</Center>
			<Center>
				<Button
					my={5}
					colorScheme="teal"
					isLoading={formState.isSubmitting}
					type="submit"
				>
					I want to start a revolution
				</Button>
			</Center>
			<TextPage />
			<Center width="100%" maxW="900px">
				<iframe
					position="absolute"
					display="block"
					id="inlineFrameExample"
					title="Inline Frame Example"
					width="100%"
					height="1000px"
					maxWidth="700px"
					src="https://justcauses.hearnow.com/"
				/>
			</Center>
		</form>
	);
}
