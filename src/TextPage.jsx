import React from 'react';
import { Box, Text, Center } from '@chakra-ui/react';
import SongLink from './SongLink';

export default function TextPage({ title, author, pub, charity, link }) {
	const prolog = `JUST CAUSES owes its conception primarily 
  to two people: the actor Paul Newman 
  and the Australian singer-songwriter Gary Shearston. 
  To my knowledge, they never met but, 
  were it not for Shearston's creation of TOM QUICK - 
  a musical confession to the injustices inflicted on 
  America's indigenous peoples in the morally vacant name 
  of revenge - and Newman's creation of a food distribution 
  system that assigns 100% of its profits to charities, I 
  might not have recognized the opportunity to link these 15
  songs (spanning almost 50 years of songwriting and performance) 
  to their relevant nonprofits. It comes perhaps as little
  or no surprise to recognize music of social change playing 
  such a significant role in the gathering of our
  hearts and minds around mutually held community concerns. 
  Particularly in an era of misinformation, it is refreshing
  to reconnect with one another on that deeper emotional 
  level that music provides. It is my hope that this collection 
  might reawaken and reinspire your commitment and support 
  for the charities associated with each song.
  `;
	const epilog = `
With thanks as always for the NEWORLD family
Joyce, David, Jim and Sally as well as the 
continual encouragement from my 'real' family 
- my wife and best friend, Betty.
Kudos and credits for: electric guitar - 
tom harris, michael lewis, 
jimmy nalls / bass - jim mason, 
kent palmer / cello - rufus cappadocia / violin
 - doug cameron / guitar - ed mottau / keyboards - steven errante, 
 ken bichel, michael mcinnis, denny bouchard / drums and percussion 
 - ed mottau jr, michael epstein, joe england, 
 alan diaz / additional vocals - karla thibodeau, 
 eddie mottau, jim mason, john boit / 
 orchestral arrangements – steven errante, 
 robert decormier / bangor symphony orchestra – conducted by lucas richman
  / engineering – shelly yakus, john stuart, jay michaud/ 
  production – bob milstein, eddie mottau, jim mason, 
  john stuart, stu davis, jim brady, yasu nagai / 
  photos and graphics – sally farr
`;

	const text = `In These Times|Noel Paul Stookey|Neworld Multimedia Publishing|The Nature Conservancy|support.nature.org
Danny's Downs|Michael Blanchard  Diadem Sky|Gotz Music|National Down Syndrome Congress|ndsccenter.org
Jean Claude|Stookey Okun, Unsworth|Neworld Multimedia Publishing| Dallas Holocaust & Human Rights Museum|dhhrm.org
Tom Quick|Mason, Lewis, Shearston|Neworld Multimedia Publishing|First Nations Development Institute|firstnations.org
Not That Kind of Music|Stookey, Mason|Neworld Multimedia Publishing|Music To Life|musictolife.org
Juice|Stookey, Wilk|Neworld Multimedia Publishing|Interfaith Power & Light|massipl.org
Familia Del Corazon|Stookey, Lardner, Hill|Neworld Multimedia Publishing|Immigrant Legal Advocacy Project|ilapmaine.org
America, The Beautiful|Stookey, Ward, Bates|Neworld Multimedia Publishing|People for the American Way|www.pfaw.org
The Winner|Noel Paul Stookey|Public Domain Foundation / Music Media International|Southern Poverty Law Center|splcenter.org
Nukes R Nuts|Stookey, Kreiger|Neworld Multimedia Publishing|Nuclear Age Peace Foundation|wagingpeace.org
All My Life|Stookey, Bouchard, Clarkson, Thibideau, Palmer|Neworld Multimedia Publishing|Religious Coalition for Reproductive Rights|rcrc.org
El Salvador|Stookey, Wallis|Neworld Multimedia Publishing|Oxfam International|oxfam.org
The Connection|Stookey, Boit, Zee|Neworld Multimedia Publishing|National Center on Addiction and Substance Abuse|drugfree.org
Song For Megumi|Stookey, Nagai, Yokota|Neworld Multimedia Publishing / YesYas Publishing|National Center for Missing and Exploited Children|missingkids.org
Revolution (1x1)|Noel Paul Stookey|Neworld Multimedia Publishing|Sojourners|sojo.net`;
	const list = text.split('\n').map((line, i) => {
		const [title, author, pub, charity, link] = line.split('|');
		console.log(link);
		return { title, author, pub, charity, link };
	});
	return (
		<Center>
			<Box maxW={700}>
				<Text lineHeight="110%" fontSize="md">
					{prolog}
				</Text>
				{list.map((entry, i) => (
					<SongLink key={i} {...entry} />
				))}
				<Text lineHeight="110%" fontSize="md">
					{epilog}
				</Text>
			</Box>
		</Center>
	);
}
