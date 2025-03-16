import {Icon} from "../../../components/icon/Icon";
import {S} from "./Skills_Styles"

type SkillPropsType = {
    iconId: string,
    title: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <S.IconWrapper>
                <Icon iconId={props.iconId}/>
            </S.IconWrapper>
            <S.SkillTitle>{props.title}</S.SkillTitle>
        </S.Skill>
    );
};

