import styled, { css, keyframes } from 'styled-components';
import { flexAlignCenter, flexCenter, flexColumn } from 'styles/common';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;

	&:visited {
		color: ${({ theme }) => theme.PALETTE.black};
	}
`;

export const PopularCard = styled.div`
	background-color: ${({ theme }) => theme.PALETTE.hover};
	${flexColumn}
	width: 255px;
	height: 320px;
	padding: 20px;
	justify-content: center;
	gap: 16px;
	border-radius: 10px;
	color: ${({ theme }) => theme.PALETTE.black};
	animation: ${fadeIn} 1s ease forwards;

	&:hover {
		transform: scale(1.05);
		transition: 0.5s;
	}
`;

export const CoachNumBox = styled.div`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};

	> span {
		${flexAlignCenter}

		> img {
			height: 18px;
			margin-right: 4px;
		}
	}
`;

export const ImgBox = styled.div`
	${flexCenter}

	& img {
		width: 80px;
		height: 80px;
		border-radius: 80px;
	}
`;

export const ContentsBox = styled.div`
	${flexColumn}
	gap: 16px;
	align-items: center;
`;

export const Name = styled.span`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;

export const Contents = styled(ContentsBox)`
	gap: 8px;
`;

export const ContentSpan = styled.span`
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	color: ${({ theme }) => theme.PALETTE.gray[400]};
`;

export const TitleBox = styled.div`
	${flexCenter}

	& span {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-family: ${({ theme }) => theme.FONT_WEIGHT.light};
		color: ${({ theme }) => theme.PALETTE.black};
	}
`;
