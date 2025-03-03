import styled from "styled-components";
import { theme } from "../../../../styles/Theme.ts";

type UsedSkillsPropsType = {
	skillsItems: Array<string>;
};

export const UsedSkills = (props: UsedSkillsPropsType) => {
	return (
		<UsedSkillsDiv>
			{props.skillsItems.map((skill, index) => (
				<SkillTablet key={index}>{skill}</SkillTablet>
			))}
		</UsedSkillsDiv>
	);
};

const UsedSkillsDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 11px;
	padding-top: 11px;
	padding-bottom: 19px;
`;

const SkillTablet = styled.span`
	background-color: ${theme.colors.accent};
	color: ${theme.colors.secondaryBg};
	padding: 8px 16px;
	border-radius: 4px;
	font-size: 10px;
	font-weight: 400;
	text-transform: uppercase;
`;