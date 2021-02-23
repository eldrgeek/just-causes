import { useForm } from 'react-hook-form';
import React from 'react';
import {
	FormErrorMessage,
	// FormLabel,
	FormControl,
	Box,
	// Input,
	Button,
	Image
} from '@chakra-ui/react';

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
		return new Promise((resolve) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				resolve();
			}, 3000);
		});
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormControl isInvalid={errors.name}>
				<FormErrorMessage>
					{errors.name && errors.name.message}
				</FormErrorMessage>
			</FormControl>
			<Box boxSize="sm">
				<Image src="./img/JustCausesCover.png" alt="Just causes" />
			</Box>
			<Button
				mt={4}
				colorScheme="teal"
				isLoading={formState.isSubmitting}
				type="submit"
			>
				Give me my button
			</Button>
		</form>
	);
}
