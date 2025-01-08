import { View, Text, Alert } from 'react-native';
import React, { useEffect, useReducer } from 'react';
import SafeAreaView from '@/components/organism/SafeAreaView/SafeAreaView';
import { STRINGS } from '@/constants/Strings';
import { TextInput } from 'react-native-paper';
import CustomTextInput from '@/components/atoms/customTextinput/CustomTextInput';
import CustomButton from '@/components/atoms/customButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { loginHandler, userFromState, userSliceError, userSliceState } from '@/state/slices/login/LoginSlice';
import { AppDispatch } from '@/state/store';
import { useToast } from 'react-native-toast-notifications';

type IHomeStateProps = {
    username: string;
    password: string;
    usernameError: string;
    passwordError: string;
    isPasswordVisible: boolean;
};

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector(userFromState);
    const isLoading = useSelector(userSliceState) === 'loading';
    const isSuccess = useSelector(userSliceState) === 'success';
    const error = useSelector(userSliceError);
    const toast = useToast();

    const [state, updateState] = useReducer(
        (prev: IHomeStateProps, next: Partial<IHomeStateProps>) => {
            return { ...prev, ...next };
        },
        {
            username: '',
            password: '',
            usernameError: '',
            passwordError: '',
            isPasswordVisible: false
        }
    );

    useEffect(() => {
        if (error) {
            if (Object.keys(toast).length > 0) {
                toast.show(error?.message ?? '', {
                    type: 'danger'
                });
            }
        }
    }, [error]);

    useEffect(() => {
        if (isSuccess) {
            if (Object.keys(toast).length > 0) {
                toast.show(STRINGS.loginSuccess, {
                    type: 'success'
                });
            }
        }
    }, [isSuccess]);

    const onChangeState = (value: string, field: string) => {
        updateState({ ...state, [field]: value, [`${field}Error`]: '' });
    };

    const onSubmit = () => {
        let isValid = true;
        const username = state.username.trim();
        const password = state.password.trim();
        if (!password) {
            updateState({ ...state, passwordError: STRINGS.passwordError });
            isValid = false;
        }
        if (!username) {
            updateState({ ...state, usernameError: STRINGS.usernameError });
            isValid = false;
        }
        if (isValid) {
            dispatch(loginHandler({ username: username, password: password }));
        }
    };
    return (
        <SafeAreaView>
            <View className="bg-primary px-6">
                <Text className="text-ternary text-2xl font-bold text-background">{STRINGS.login}</Text>
                <Text className="text-ternary text-m mt-1  text-disabled">{STRINGS.fill_fields}</Text>
            </View>
            <View className="bg-background mt-6 gap-y-6 flex-1 p-6 rounded-tl-[56px]">
                <CustomTextInput
                    value={state.username}
                    autoCapitalize="none"
                    errorMessage={state.usernameError}
                    onChangeText={(val) => onChangeState(val, STRINGS.username)}
                    label={STRINGS.username}
                />
                <CustomTextInput
                    secureTextEntry={!state.isPasswordVisible}
                    value={state.password}
                    autoCapitalize="none"
                    errorMessage={state.passwordError}
                    onChangeText={(val) => onChangeState(val, STRINGS.passwordField)}
                    right={
                        <TextInput.Icon
                            onPress={() => updateState({ ...state, isPasswordVisible: !state.isPasswordVisible })}
                            icon={state.isPasswordVisible ? 'eye' : 'eye-off'}
                        />
                    }
                    label={STRINGS.password}
                />
                <View className="mt-2" />
                <CustomButton loading={isLoading} onPress={onSubmit}>
                    {STRINGS.login}
                </CustomButton>
            </View>
        </SafeAreaView>
    );
};

export default Home;
