import React, { ReactNode } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import Colors from '../hooks/Colors';

type TextType = 'default' | 'subtitle' | 'topic' | 'description' | 'title';

interface MyTextProps extends TextProps {
    type?: TextType;
    style?: TextStyle;
    children?: ReactNode;
}

const MyText: React.FC<MyTextProps> = ({ type = 'default', style, children, ...rest }) => {
    const textStyles: Record<TextType, TextStyle> = {
        default: { fontFamily: 'OpenSans-Regular', color: Colors.text.a, fontSize: 14, fontWeight: 'normal' },
        subtitle: { fontFamily: 'OpenSans-Regular', color: Colors.text.a, fontSize: 14, fontWeight: 'normal' },
        topic: { fontFamily: 'OpenSans-Regular', color: Colors.text.a, fontSize: 14, fontWeight: 'bold' },
        description: { fontFamily: 'OpenSans-Regular', color: Colors.text.b, fontSize: 14, fontWeight: 'normal' },
        title: { fontFamily: 'OpenSans-Regular', color: Colors.text.a, fontSize: 18, fontWeight: 'bold' },
    };

    return (
        <Text
            numberOfLines={type === 'title' ? 1 : undefined}
            ellipsizeMode={type === 'title' ? 'tail' : undefined}
            style={[textStyles[type], style]}
            {...rest}
        >
            {children || ''}
        </Text>
    );
};

export default MyText;
