import React, { ReactNode } from 'react';
import { Pressable, Text, PressableProps, Dimensions } from 'react-native';
import Colors from '../hooks/Colors';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

interface MyButtonProps extends PressableProps {
    children?: ReactNode;
    onPress: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ children, onPress, ...rest }) => {
    return (
        <Pressable
            style={{ height: screenWidth * 0.20, width: screenWidth * 0.20, borderRadius: 15, backgroundColor: Colors.gray.d, alignItems: 'center', justifyContent: 'center', margin:  screenWidth * 0.01 }}
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
