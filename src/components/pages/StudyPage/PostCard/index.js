import * as S from './index.styles';
import { Link } from 'react-router-dom';
import Chip from 'components/@common/Chip';

function PostCard({ data }) {
	const {
		_id,
		recruitsStatus,
		title,
		description,
		position,
		classification,
		deadline,
	} = data;

	return (
		<S.Container>
			<Link to={`/study/detail/${_id}`}>
				<S.ChipWrapper>
					<Chip classification={classification} />
					<S.ChipBox $recruitsStatus={recruitsStatus}>
						<S.ChipText $recruitsStatus={recruitsStatus}>
							{recruitsStatus}
						</S.ChipText>
					</S.ChipBox>
				</S.ChipWrapper>

				<S.Title>{title}</S.Title>
				<S.PostText>{description}</S.PostText>

				<S.BottomBox>
					<S.RightBox>
						{position &&
							position.length > 0 &&
							position.map((name, idx) => (
								<S.PositionBox key={idx}>
									<S.Position>{name}</S.Position>
								</S.PositionBox>
							))}
					</S.RightBox>

					<S.Day>
						<p>마감 기간</p>
						<p>
							{deadline &&
								deadline.split('T')[0].replace(/-/g, '. ')}
						</p>
					</S.Day>
				</S.BottomBox>
			</Link>
		</S.Container>
	);
}

export default PostCard;
