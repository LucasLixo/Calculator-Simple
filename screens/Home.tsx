import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

// Components
import MyText from '../components/MyText';
import MyButton from '../components/MyButton';

// Hooks
import Styles from '../hooks/Styles';
import { Operator } from '../hooks/Operator';
import { APP_TITLE } from '../hooks/Constants';

// Style
import HomeStyles from './HomeStyle';

const Home: React.FC = ({ }) => {
    const [equation, setEquation] = useState((): string => '0');

    const [numberX, setNumberX] = useState((): string | undefined => undefined);
    const [numberY, setNumberY] = useState((): string | undefined => undefined);

    const [oper, setOper] = useState((): Operator | undefined => undefined);
    const [result, setResult] = useState((): number | undefined => undefined);

    const logger = (): void => {
        // console.log(`Number X: ${numberX}, Operator: ${oper}, Number Y: ${numberY}, Result: ${result}`);
    }

    useEffect(() => {
        setEquation(getResultString());
        logger();
    }, [numberX, numberY, oper, result]);

    const getOperator = (): string => {
        switch (oper) {
            case Operator.addition:
                return '+';
            case Operator.subtraction:
                return '-';
            case Operator.multiplication:
                return '*';
            case Operator.division:
                return '/';
            default:
                return '';
        }
    }

    const getResultString = (): string => {
        if (
            numberX != undefined &&
            oper != undefined &&
            numberY != undefined &&
            result != undefined) {
            return `${numberX} ${getOperator()} ${numberY} = ${result}`;
        }
        if (
            numberX != undefined &&
            oper != undefined &&
            numberY != undefined) {
            return `${numberX} ${getOperator()} ${numberY}`;
        }
        if (
            numberX != undefined &&
            oper != undefined) {
            return `${numberX} ${getOperator()}`;
        }
        if (numberX != undefined) {
            return numberX;
        }
        return '0';
    }

    const setClear = (): void => {
        setEquation('0');
        setNumberX(undefined);
        setNumberY(undefined);
        setOper(undefined);
        setResult(undefined);
    }

    const setCalculate = (): void => {
        if (numberX != undefined && numberY != undefined) {
            switch (oper) {
                case Operator.addition:
                    setResult(parseFloat(numberX) + parseFloat(numberY));
                    break;
                case Operator.subtraction:
                    setResult(parseFloat(numberX) - parseFloat(numberY));
                    break;
                case Operator.multiplication:
                    setResult(parseFloat(numberX) * parseFloat(numberY));
                    break;
                case Operator.division:
                    if (numberY !== '0') {
                        setResult(parseFloat(numberX) / parseFloat(numberY));
                    } else {
                        setResult(0);
                    }
                    break;
            }
        } else {
            if (numberX != undefined) {
            } else {
                setClear();
            }
        }
    }

    const setNumber = (num: number): void => {
        if (result != undefined) {
            setClear();
            setNumberX(num.toString());
            return;
        }
        if (oper === undefined) {
            setNumberX(prev => (prev !== undefined ? `${prev}${num}` : num.toString()));
        } else {
            setNumberY(prev => (prev !== undefined ? `${prev}${num}` : num.toString()));
        }
    };

    const setOperator = (operator: Operator): void => {
        if (numberX !== '') {
            setOper(operator);
        }
    }

    return (
        <View style={Styles.ContainerView}>
            <View style={HomeStyles.Header}>
                <MyText
                    style={{ fontSize: 26 }}
                    type='subtitle'
                >
                    {APP_TITLE}
                </MyText>
            </View>
            <View style={HomeStyles.Container}>
                <View style={HomeStyles.Hr}>
                    <MyText
                        style={{ fontSize: 34 }}
                        type='subtitle'>
                        {equation}
                    </MyText>
                </View>
                <View style={HomeStyles.ContainerButtons}>
                    <MyButton onPress={() => setNumber(7)}>
                        {`7`}
                    </MyButton>
                    <MyButton onPress={() => setNumber(8)}>
                        {`8`}
                    </MyButton>
                    <MyButton onPress={() => setNumber(9)}>
                        {`9`}
                    </MyButton>
                    <MyButton onPress={() => setOperator(Operator.division)}>
                        {`/`}
                    </MyButton>
                    <MyButton onPress={() => setNumber(4)}>
                        {`4`}
                    </MyButton>
                    <MyButton onPress={() => setNumber(5)}>
                        {`5`}
                    </MyButton>
                    <MyButton onPress={() => setNumber(6)}>
                        {`6`}
                    </MyButton>
                    <MyButton onPress={() => setOperator(Operator.multiplication)}>
                        {`*`}
                    </MyButton>
                    <MyButton onPress={() => setNumber(1)}>
                        {`1`}
                    </MyButton>
                    <MyButton onPress={() => setNumber(2)}>
                        {`2`}
                    </MyButton>
                    <MyButton onPress={() => setNumber(3)}>
                        {`3`}
                    </MyButton>
                    <MyButton onPress={() => setOperator(Operator.subtraction)}>
                        {`-`}
                    </MyButton>
                    <MyButton onPress={() => setClear()}>
                        {`AC`}
                    </MyButton>
                    <MyButton onPress={() => setNumber(0)}>
                        {`0`}
                    </MyButton>
                    <MyButton onPress={() => setCalculate()}>
                        {`=`}
                    </MyButton>
                    <MyButton onPress={() => setOperator(Operator.addition)}>
                        {`+`}
                    </MyButton>
                </View>
            </View>
        </View>
    );
};

export default Home;
