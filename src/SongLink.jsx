import React from 'react';
import { Text, Wrap, Box, Link } from '@chakra-ui/react';

export default function SongLink({ title, author, pub, charity, link }) {
	return (
		<Box py={2}>
			<Box>
				<Text fontWeight="extrabold" mr="6px" fontSize="l">
					{title}{' '}
				</Text>
			</Box>
			<Wrap ml={4}>
				<Text mr="2" fontSize="sm">
					{author}{' '}
				</Text>
				<Text fontStyle="italic" fontSize="sm">
					{pub}{' '}
				</Text>
			</Wrap>
			<Wrap>
				<Text ml={4} mr={2} fontSize="l">
					{charity}{' '}
				</Text>
				<Link href={link} fontSize="l">
					{' '}
					{link}
				</Link>
			</Wrap>
		</Box>
	);
}
