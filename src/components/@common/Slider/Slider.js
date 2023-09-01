import React, { useState, useEffect } from 'react';
import StudyInfoCard from '../StudyInfoCard/StudyInfoCard';
import * as H from './Slider.styles';
import useApi from '../../../hooks/useApi';
import EmptyMessage from '../../@common/EmptyMessage/EmptyMessage';

function Slider({ $background, url, slidesToShow }) {
	const [slide, setSlide] = useState(0);
	const [studyInfoData, setStudyInfoData] = useState([]);

	const { result } = useApi({
		path: `${url}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result && result.length > 0) {
			setStudyInfoData([...result]);
		}
	}, [result]);

	const totalSlides = Math.ceil(studyInfoData.length / slidesToShow);
	const handlePrevClick = () => {
		setSlide((slide - 1 + totalSlides) % totalSlides);
	};

	const handleNextClick = () => {
		setSlide((slide + 1) % totalSlides);
	};

	return (
		<H.Wrap>
			<H.SliderWrapper>
				<H.SlideContainer>
					{studyInfoData.length > 0 ? (
						studyInfoData
							.slice(
								slide * slidesToShow,
								(slide + 1) * slidesToShow,
							)
							.map((studyInfo, index) => (
								<StudyInfoCard
									key={index}
									postId={studyInfo._id}
									classification={studyInfo.classification}
									$background={$background}
									title={studyInfo.title}
									process={studyInfo.process}
									recruits={studyInfo.recruits}
									position={studyInfo.position}
									deadline={studyInfo.deadline.split('T')[0]}
								/>
							))
					) : (
						<EmptyMessage />
					)}
				</H.SlideContainer>
			</H.SliderWrapper>
			{totalSlides > 1 && (
				<H.Controls>
					<H.Button onClick={handlePrevClick}>
						<img
							src="./assets/img/icons/leftarrow.png"
							alt="Previous"
						/>
					</H.Button>
					<H.Button onClick={handleNextClick}>
						<img
							src="./assets/img/icons/rightarrow.png"
							alt="Next"
						/>
					</H.Button>
				</H.Controls>
			)}
		</H.Wrap>
	);
}

export default Slider;

// 주석처리