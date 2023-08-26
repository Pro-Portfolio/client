import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './SignUp.styles';
import Button from '../../components/@common/Button/Button';
import Input from '../../components/@common/Input/Input';

function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [nickName, setNickName] = useState('');
	const [position, setPosition] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchUserData() {
			try {
				const cookies = document.cookie;
				const emailCookie = cookies
					.split(';')
					.find(cookie => cookie.includes('email'));
				const nameCookie = cookies
					.split(';')
					.find(cookie => cookie.includes('name'));

				const email = emailCookie ? emailCookie.split('=')[1] : '';
				const userName = nameCookie
					? decodeURIComponent(nameCookie.split('=')[1])
					: '';

				setEmail(email);
				setName(userName);
			} catch (error) {
				console.error('사용자 정보를 가져오는데 실패했습니다.', error);
			}
		}

		fetchUserData();
	}, []);

	function handleNicknameChange(event) {
		setNickName(event.target.value);
	}

	function handleJobChange(event) {
		setPosition(event.target.value);
	}

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const response = await axios.post(
				'http://localhost:8080/api/auth/signup',
				{
					name,
					email,
					nickName,
					position,
				},
			);

			if (response.status === 200 || response.status === 201) {
				alert('회원가입이 성공적으로 완료되었습니다!');
				navigate('/');
			} else {
				alert('회원가입에 실패하였습니다. 다시 시도해 주세요.');
			}
		} catch (error) {
			console.error('Error:', error);
			alert('회원가입에 실패하였습니다. 다시 시도해 주세요.');
		}
	}

	return (
		<S.Wrap>
			<S.RegisterForm onSubmit={handleSubmit}>
				<p>회원 가입</p>
				<div>
					<label>이름</label>
					<Input type="text" value={name} readOnly size={'medium'} />
				</div>
				<div>
					<label>이메일</label>
					<Input type="text" value={email} readOnly size={'medium'} />
				</div>
				<div>
					<label>닉네임</label>
					<Input
						type="text"
						value={nickName}
						onChange={handleNicknameChange}
						size={'medium'}
					/>
				</div>
				<div>
					<label>직무</label>
					<select value={position} onChange={handleJobChange}>
						<option value="">선택하세요</option>
						<option value="backend">백엔드 개발자</option>
						<option value="frontend">프론트엔드 개발자</option>
						<option value="android">안드로이드 개발자</option>
						<option value="ios">iOS 개발자</option>
						<option value="publisher">웹 퍼블리셔</option>
					</select>
				</div>
				<Button
					variant={'primary'}
					shape={'default'}
					size={'big'}
					type="submit"
				>
					가입 완료하기
				</Button>
			</S.RegisterForm>
		</S.Wrap>
	);
}

export default SignUp;
