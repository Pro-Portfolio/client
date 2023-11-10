import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './index.styles';
import Button from 'components/@common/Button';
import Input from 'components/@common/Input';
import useFooter from 'hooks/useFooter';
import useApi from 'hooks/useApi';
import VALIDATE from 'constants/regex';

function AdminSignIn() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	return <S.Wrap>관리자 로그인입니다.</S.Wrap>;
}

export default AdminSignIn;
