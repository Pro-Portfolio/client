import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './StudyEditPost.styles';
import { STUDYOPTIONS } from '../../../constants/study';
import Select from '../../../components/@common/Select/Select';
import MultiSelectDropdown from '../../../components/pages/StudyPage/StudyEditPost/MultiSelectDropdown/MultiSelectDropdown';
import PostForm from '../../../components/pages/StudyPage/StudyEditPost/PostForm/PostForm';
import useApi from '../../../hooks/useApi';

function StudyEditPost() {
	const defaultSelectProps = {
		size: 'large',
		font: 'regular',
		variant: 'default',
	};
	const [userData, setUserData] = useState(null);
	const [selectedOptions, setSelectedOptions] = useState({
		classification: '',
		process: '',
		position: [],
		recruits: '',
		howContactTitle: '',
		howContactContent: '',
		deadline: new Date(),
		nickName: '',
		name: '',
		recruitsStatus: '모집중',
		profileImageUrl: '',
	});
	const { postId } = useParams();

	// 유저 정보
	const { result, trigger, isLoading, error } = useApi({
		path: '/user',
		shouldFetch: true,
	});

	useEffect(() => {
		if (result) {
			setUserData(result);
			console.log(error);
		}
	}, [result]);

	useEffect(() => {
		if (userData) {
			console.log('USERDATA', userData);
			setSelectedOptions(prevOptions => ({
				...prevOptions,
				nickName: userData.nickName,
				name: userData.name,
				ownerId: userData._id,
				profileImageUrl: userData.profileImageUrl,
			}));
			console.log('확인', selectedOptions);
		}
	}, [userData]);

	const {
		trigger: updatePost,
		isLoading: isUpdating,
		error: updateError,
	} = useApi({
		path: `/projectStudy/${postId}`,
		shouldFetch: false,
	});

	// 게시글 수정 요청 함수
	const handleUpdatePost = async () => {
		try {
			await updatePost({
				method: 'put',
				data: selectedOptions,
			});
			console.log('게시글 수정 완료');
		} catch (error) {
			console.error('게시글 수정 오류', error);
		}
	};

	const handleOptionChange = (name, value) => {
		setSelectedOptions(prevOptions => ({
			...prevOptions,
			[name]: value,
		}));
	};

	const SelectWithDefault = ({
		options,
		selectedValue,
		defaultValue,
		onChange,
	}) => {
		return (
			<Select
				{...defaultSelectProps}
				onChange={onChange}
				value={selectedValue}
			>
				<option hidden>{defaultValue}을 선택해주세요.</option>
				{options.map(el => (
					<option key={el.value}>{el.name}</option>
				))}
			</Select>
		);
	};

	return (
		<S.Container>
			<S.BasicInfoBox>
				<S.Title>✨ 프로젝트/스터디 기본 정보를 작성 해주세요.</S.Title>
				<S.SelectContainer>
					<S.SelectWrapper>
						<S.SelectBox>
							<S.SelectTitle>모집 구분</S.SelectTitle>
							<SelectWithDefault
								options={STUDYOPTIONS.CLASSIFICATION}
								selectedValue={selectedOptions.classification}
								defaultValue="모집 구분"
								onChange={e =>
									handleOptionChange(
										'classification',
										e.target.value,
									)
								}
							/>
						</S.SelectBox>

						<S.SelectBox>
							<S.SelectTitle>진행 방식</S.SelectTitle>
							<SelectWithDefault
								options={STUDYOPTIONS.PROCESS}
								selectedValue={selectedOptions.process}
								defaultValue="진행 방식"
								onChange={e =>
									handleOptionChange(
										'process',
										e.target.value,
									)
								}
							/>
						</S.SelectBox>
					</S.SelectWrapper>

					<S.SelectWrapper>
						<S.SelectBox>
							<S.SelectTitle>모집 직무</S.SelectTitle>
							<MultiSelectDropdown
								onPositionsChange={position => {
									handleOptionChange('position', position);
								}}
								name="position"
							/>
						</S.SelectBox>

						<S.SelectBox>
							<S.SelectTitle>모집 인원</S.SelectTitle>
							<SelectWithDefault
								options={STUDYOPTIONS.RECRUITS}
								selectedValue={selectedOptions.recruits}
								defaultValue="모집 인원"
								onChange={e =>
									handleOptionChange(
										'recruits',
										e.target.value,
									)
								}
							/>
						</S.SelectBox>
					</S.SelectWrapper>

					<S.SelectWrapper>
						<S.SelectBox>
							<S.Deadline>모집 마감일</S.Deadline>
							<DatePicker
								selected={new Date(selectedOptions.deadline)}
								onChange={date =>
									handleOptionChange('deadline', date)
								}
								dateFormat="yyyy-MM-dd"
								minDate={new Date()}
								popperPlacement="bottom"
								name="deadline"
							/>
						</S.SelectBox>

						<S.SelectBox>
							<S.SelectTitle>연락 방법</S.SelectTitle>
							<SelectWithDefault
								options={STUDYOPTIONS.CONTACT}
								selectedValue={selectedOptions.howContactTitle}
								defaultValue="연락 방법"
								onChange={e =>
									handleOptionChange(
										'howContactTitle',
										e.target.value,
									)
								}
							/>
						</S.SelectBox>
					</S.SelectWrapper>
					<S.Input
						placeholder="연락 가능한 링크를 입력해주세요. ex) 오픈채팅 링크"
						onChange={e =>
							handleOptionChange(
								'howContactContent',
								e.target.value,
							)
						}
						required
					/>
				</S.SelectContainer>
			</S.BasicInfoBox>

			{/* 상세 설명 */}
			<S.PostBox>
				<S.Title>✨ 프로젝트/스터디를 소개 해주세요.</S.Title>
				<PostForm selectedOptions={selectedOptions} />
			</S.PostBox>
		</S.Container>
	);
}

export default StudyEditPost;
