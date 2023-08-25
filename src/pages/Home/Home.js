import { useEffect, useState } from 'react';
import axios from 'axios';
import * as H from './Home.styles';
import RecommendCard from '../../components/pages/Home/RecommendCard/RecommendCard';
import MentorCard from '../../components/@common/Card/Card';
import RollingSlider from './SlideBanner/SlideBanner';
import Slider from '../../components/@common/Slider/Slider';

function Home() {
	const [recommendedMentors, setRecommendedMentors] = useState([]);

	useEffect(() => {
		const getRecommendedMentors = async () => {
			try {
				const res = await axios.get(
					'http://localhost:8080/api/recommendMentor',
				);

				console.log(res);
				const recommendedMentors = res.data;
				setRecommendedMentors(recommendedMentors);
			} catch (err) {
				console.log(err);
			}
		};

		getRecommendedMentors();
	}, []);

	return (
		<H.Wrap>
			<H.Content>
				<RollingSlider />
				<H.RecommendMentor>
					<H.Title>👀 000님에게 추천하는 멘토</H.Title>
					<H.RecommendCards>
						{recommendedMentors.map((mentor, idx) => (
							<RecommendCard
								key={idx}
								postId={mentor.portfolioId}
								profileimage={mentor.profileimage}
								name={mentor.name}
								company={mentor.company}
								position={mentor.job}
								career={mentor.career}
							/>
						))}
					</H.RecommendCards>
				</H.RecommendMentor>
				<H.NewStudy>
					<H.TitleBox>
						<H.Title>🔥 방금 올라온 스터디/ 프로젝트</H.Title>
						<H.ViewAll href="/study">
							전체보기
							<img
								src="/assets/img/icons/bluearrow.svg"
								alt="파란화살표"
							/>
						</H.ViewAll>
					</H.TitleBox>
					<H.SlideStudyCard>
						<Slider
							background="lightBlueBackground"
							url={'/mock/studyInfo.json'}
						/>
					</H.SlideStudyCard>
				</H.NewStudy>
				<H.PopularMento>
					<H.TitleBox>
						<H.Title>✨ 지금 인기 있는 멘토</H.Title>
						<H.ViewAll href="/portfolio">
							전체보기
							<img
								src="/assets/img/icons/bluearrow.svg"
								alt="파란화살표"
							/>
						</H.ViewAll>
					</H.TitleBox>
					<H.PopularCards>
						<MentorCard
							variant={'white'}
							url={'/mock/bestMentor.json'}
						/>
					</H.PopularCards>
				</H.PopularMento>
			</H.Content>
		</H.Wrap>
	);
}

export default Home;
