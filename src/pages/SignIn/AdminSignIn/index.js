import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './index.styles';
import Button from 'components/@common/Button';
import Input from 'components/@common/Input';
import useFooter from 'hooks/useFooter';
import useApi from 'hooks/useApi';

function AdminSignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	useFooter();
	const { trigger } = useApi({});

	const handleEmail = e => {
		const userEmail = e.target.value;
		setEmail(userEmail);
	};

	const handlePassword = e => {
		const userPassword = e.target.value;
		setPassword(userPassword);
	};

	const handleLogin = e => {
		e.preventDefault();
		trigger({
			path: '/auth/admin/login',
			method: 'post',
			data: {
				email,
				password,
			},
		});
		navigate('/admin');
	};

	return (
		<S.Wrap>
			<S.loginInfo>
				<p>관리자 로그인</p>
				<div>
					<label>이메일</label>
					<Input
						type="email"
						value={email}
						placeholder="이메일을 입력하세요."
						size={'medium'}
						onChange={handleEmail}
					/>
				</div>
				<div>
					<label htmlFor="">비밀번호</label>
					<Input
						type="password"
						value={password}
						placeholder="비밀번호를 입력하세요."
						size={'medium'}
						onChange={handlePassword}
					/>
				</div>
				<Button
					variant={'primary'}
					shape={'default'}
					size={'big'}
					onClick={handleLogin}
				>
					로그인 하기
				</Button>
			</S.loginInfo>
		</S.Wrap>
	);
}

export default AdminSignIn;
