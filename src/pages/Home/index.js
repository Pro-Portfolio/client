import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as H from './index.styles';
import RecommendCard from 'components/pages/Home/RecommendCard';
import MentorCard from 'components/@common/Card';
import RollingSlider from './SlideBanner';
import Slider from 'components/@common/Slider';
import useApi from 'hooks/useApi';
import EmptyMessage from 'components/@common/EmptyMessage';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'recoil/atoms/index.atom';
import LoadingBar from 'components/@common/Loading';

function Home() {
	const [recommendedMentors, setRecommendedMentors] = useState([]);
	const { isAuth, nickName } = useRecoilValue(userAtom);
	const [loading, setLoading] = useState(true);

	const { trigger: recommendTrigger } = useApi({
		path: '/portfolios/recommend/recommendMentor',
		shouldFetch: false,
	});

	const getRecommendMentors = async () => {
		const getResult = await recommendTrigger({ applyResult: false });

		if (getResult && getResult.portfolios && getResult.portfolios.length) {
			setRecommendedMentors([...getResult.portfolios]);
		}
		setLoading(false);
	};

	useEffect(() => {
		if (isAuth) {
			getRecommendMentors();
		}
	}, [isAuth]);

	return (
		<H.Wrap>
			<H.Content>
				<RollingSlider />
				{isAuth && (
					<H.RecommendMentor>
						<H.TitleWrap>
							<img
								src="/assets/img/icons/eyes.svg"
								alt="눈아이콘"
							/>
							<H.Title>{nickName} 님에게 추천하는 멘토</H.Title>
						</H.TitleWrap>
						{loading ? (
							<LoadingBar />
						) : recommendedMentors.length > 0 ? (
							<H.RecommendCards>
								{recommendedMentors.map((mentor, idx) => (
									<RecommendCard
										key={idx}
										id={mentor._id}
										profileImageUrl={mentor.profileImageUrl}
										nickName={mentor.nickName}
										company={mentor.company}
										position={mentor.position}
										career={mentor.career}
									/>
								))}
							</H.RecommendCards>
						) : (
							<EmptyMessage />
						)}
					</H.RecommendMentor>
				)}
				<H.NewStudy>
					<H.TitleWrap>
						<img src="/assets/img/icons/fire.svg" alt="불아이콘" />
						<H.TitleBox>
							<H.Title>방금 올라온 스터디 / 프로젝트</H.Title>
							<Link to="/study">
								{' '}
								<H.ViewAll>
									전체보기
									<img
										src="/assets/img/icons/bluearrow.svg"
										alt="파란화살표"
									/>
								</H.ViewAll>
							</Link>
						</H.TitleBox>
					</H.TitleWrap>
					<H.SlideStudyCard>
						<Slider
							$background="lightBlueBackground"
							url={'/projectStudies/recommend/latestProjectStudy'}
							slidesToShow={2}
						/>
					</H.SlideStudyCard>
				</H.NewStudy>
				<H.PopularMento>
					<H.TitleWrap>
						<img src="/assets/img/icons/star.svg" alt="별아이콘" />
						<H.TitleBox>
							<H.Title>지금 인기 있는 멘토</H.Title>
							<Link to="/portfolio">
								<H.ViewAll>
									전체보기
									<img
										src="/assets/img/icons/bluearrow.svg"
										alt="파란화살표"
									/>
								</H.ViewAll>
							</Link>
						</H.TitleBox>
					</H.TitleWrap>
					<H.PopularCards>
						<MentorCard
							$variant={'white'}
							url={'/portfolios/recommend/topMentor'}
						/>
					</H.PopularCards>
				</H.PopularMento>
			</H.Content>
		</H.Wrap>
	);
}

export default Home;
