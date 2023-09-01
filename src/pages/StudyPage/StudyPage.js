import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './StudyPage.styles';
import Slider from '../../components/@common/Slider/Slider';
import StudySlider from '../../components/pages/StudyPage/StudySlider/StudySlider';
import SignupModal from '../../components/pages/SignUp/Modal/SignUpModal';
import Button from '../../components/@common/Button/Button';
import { checkToken } from '../../utils/cookie';
import StudyCategory from '../../components/pages/StudyPage/StudyCategory/StudyCategory';

function StudyPage() {
	const navigate = useNavigate();
	const [openModal, setOpenModal] = useState(false);
	const [userNickName, setUserNickName] = useState('');

	const isLoggedIn = checkToken();
	// console.log('로그인 유무', checkToken());

	const onClickAddPost = () => {
		if (!isLoggedIn) {
			alert('로그인이 필요합니다.\n로그인 후 글을 작성해주세요!');
			setOpenModal(true);
		} else {
			navigate('/study/post');
		}
	};

	const handleSignupClose = () => {
		setOpenModal(false);
	};

	// useEffect(() => {
	// 	getData();
	// }, [page]);

	// const handleObserver = entries => {
	// 	const target = entries[0];
	// 	if (target.isIntersecting) {
	// 		setPage(prevPage => prevPage + 1);
	// 	}
	// };

	// useEffect(() => {
	// 	const options = {
	// 		root: null,
	// 		rootMargin: '0px',
	// 		threshold: 1.0,
	// 	};

	// 	if (loading) return;
	// 	observer.current = new IntersectionObserver(handleObserver, options);

	// 	if (observer.current && observerElement.current) {
	// 		observer.current.observe(observerElement.current);
	// 	}

	// 	return () => {
	// 		if (observer.current) {
	// 			observer.current.disconnect();
	// 		}
	// 	};
	// }, [loading]);

	return (
		<>
			<S.Container>
				<S.PopularContents>
					{/* 인기 스터디, 프로젝트 */}
					<S.TitleWrapper>
						<S.TopBox>
							<S.Title>
								{isLoggedIn
									? `🔥 ${userNickName}님 추천 스터디/ 프로젝트`
									: '🔥 추천 스터디/ 프로젝트'}
							</S.Title>
							<S.SubTitle>
								{isLoggedIn
									? '포지션에 맞는 스터디, 프로젝트를 확인해보세요!'
									: '로그인하고 스터디, 프로젝트에 참여해보세요!'}
							</S.SubTitle>
						</S.TopBox>
						{/*  */}
						<Button
							variant={'add'}
							shape={'default'}
							size={'normal'}
							onClick={onClickAddPost}
						>
							글쓰기
						</Button>
					</S.TitleWrapper>

					<S.PopularCardWrapper>
						<StudySlider
							setUserNickName={setUserNickName}
							$background="whiteBackground"
							url={
								isLoggedIn
									? '/projectStudy/recommend/recommendProjectStudy'
									: '/projectStudy/recommend/recommendProjectStudyForGuest'
							}
							slidesToShow={4}
						/>
					</S.PopularCardWrapper>
				</S.PopularContents>

				<S.StudyContents>
					<S.TitleWrapper>
						<S.Title>✨ 함께 성장할 동료를 찾아보세요!</S.Title>
					</S.TitleWrapper>

					{/* 필터 카테고리 버튼 영역 */}
					<S.CategoryContainer>
						<StudyCategory />
					</S.CategoryContainer>
				</S.StudyContents>
			</S.Container>

			{openModal && <SignupModal onClose={handleSignupClose} />}
		</>
	);
}

export default StudyPage;
