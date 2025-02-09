import React, { ReactNode } from 'react';
import { Pressable, Text, PressableProps } from 'react-native';
import Colors from '../hooks/Colors';

interface MyButtonProps extends PressableProps {
    children?: ReactNode;
    onPress: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ children, onPress, ...rest }) => {
    return (
        <Pressable
            style={{ height: 70, width: 70, borderRadius: 15, backgroundColor: Colors.gray.d, alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}
            onPress={onPress}
            {...rest}
        >
            <Text
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={{ fontFamily: 'OpenSans-Regular', color: Colors.text.b, fontSize: 32, fontWeight: 'bold' }}
            >
                {children || ''}
            </Text>
        </Pressable>
    );
};

export default MyButton;
