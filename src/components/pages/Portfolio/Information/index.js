import * as S from './index.styles';

import Position from 'components/@common/Position';
import Input from 'components/@common/Input';

function Information(props) {
	const {
		handleChange,
		handlePositionChange,
		user,
		mentorPost,
		portfolioId,
	} = props;
	const { name, career, company } = user;

	return (
		<S.InfoBox>
			<S.Contents>
				<S.ContentsTitle>직무</S.ContentsTitle>

				<S.PositionBox>
					<Position
						value={mentorPost.position}
						onChange={handlePositionChange}
					/>
				</S.PositionBox>
			</S.Contents>

			<S.Contents>
				<S.ContentsTitle>이름</S.ContentsTitle>
				<Input
					size={'regular'}
					name="name"
					value={portfolioId ? mentorPost.name : name}
					readOnly
				/>
			</S.Contents>

			<S.Contents>
				<S.ContentsTitle>재직 회사</S.ContentsTitle>
				<Input
					maxLength="30"
					size={'regular'}
					placeholder="회사명을 입력해 주세요."
					name="company"
					defaultValue={portfolioId ? mentorPost.company : company}
					onChange={handleChange}
				/>
			</S.Contents>

			<S.Contents>
				<S.ContentsTitle>경력</S.ContentsTitle>
				<Input
					size={'regular'}
					placeholder="경력을 입력해 주세요."
					name="career"
					defaultValue={portfolioId ? mentorPost.career : career}
					onChange={handleChange}
					type="number"
				/>
			</S.Contents>
		</S.InfoBox>
	);
}

export default Information;
