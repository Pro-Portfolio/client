import styled, { css, keyframes } from 'styled-components';
import {
	bodyContainer,
	flexAlignCenter,
	flexColumn,
} from '../../../styles/common';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
	animation: ${fadeIn} 0.5s ease forwards;
	${bodyContainer}
	padding-top: 84px;
`;

export const TitleContainer = styled.div`
	${flexAlignCenter}
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
	font-size: 30px;
	margin-bottom: 42px;
`;

// 모집 상태
export const RecruitmentStatus = styled.h3`
	padding-right: 16px;
	border-right: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	color: ${({ theme }) => theme.PALETTE.mainColor};
	min-width: 100px;

	${props =>
		props.$recruitsStatus === '모집마감' &&
		css`
			color: ${({ theme }) => theme.PALETTE.gray[300]};
		`}
`;

export const PostTitle = styled.p`
	padding-left: 16px;
`;

export const PostInfoContainer = styled.div`
	${flexAlignCenter}
`;

export const UserProfileContainer = styled.div`
	${flexAlignCenter}
	gap: 16px;
`;

export const UserProfileImage = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 40px;
`;

export const UserName = styled.p`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	padding-right: 16px;
	border-right: 1px solid ${({ theme }) => theme.PALETTE.black};
`;

export const Date = styled.p`
	padding-left: 16px;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;

export const PostDetailTop = styled.div`
	padding-bottom: 32px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
`;

export const PostDetailBottom = styled.div`
	padding: 64px 0 128px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
`;

export const PostDetailBasic = styled.div`
	padding-bottom: 128px;
`;

export const PostDetailMainTextBox = styled.div`
	padding-bottom: 135px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	margin-bottom: 32px;
`;

export const PostDetailMainText = styled.p`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	line-height: 1.4;
	white-space: pre-line;
`;

export const PostDetailBottomTitle = styled.p`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	margin-bottom: 48px;
`;

export const PostDetailBasicContainer = styled.div`
	display: flex;
	gap: 368px;
`;

export const PostDetailBasicList = styled.ul`
	${flexColumn}
	gap: 27px;
`;

export const PostDetailBasicItem = styled.li`
	${flexAlignCenter}
	gap: 32px;

	p {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
		font-size: ${({ theme }) => theme.FONT_SIZE.big};

		word-break: keep-all;
		max-width: 425px;
		line-height: 1.2;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: end;
	gap: 8px;
`;

export const ContactBox = styled.div`
	${flexAlignCenter}
	gap: 5px;

	.material-symbols-outlined {
		padding-top: 3px;
		font-size: 20px;
		cursor: pointer;
	}
`;

export const ContactText = styled.p`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
`;

export const IconBox = styled.div``;

export const PostDetailBasicItemTitle = styled.div`
	> p {
		font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
		font-size: ${({ theme }) => theme.FONT_SIZE.big};
		min-width: 74px;
	}
`;

export const CommentContainer = styled.div`
	padding: 88px 0 64px;
`;
