import React, {  useState } from 'react';
import { View } from 'react-native';

// Components
import MyText from '../components/MyText';
import MyButton from '../components/MyButton';

// Hooks
import Styles from '../hooks/Styles';
import { Calculator, Operator } from '../hooks/Calculator';
import { APP_TITLE } from '../hooks/Constants';

// Style
import HomeStyles from './HomeStyle';

const Home: React.FC = ({ }) => {
    const calc = new Calculator();

    const [equation, setEquation] = useState(() : string => calc.getResultString());

    const updateEquation = () => {
        console.log(calc.getResultString());
        setEquation(calc.getResultString());
    };

    const setClear = () => {
        calc.clear();
        updateEquation();
    }

    const setCalculate = () => {
        calc.calculate();
        updateEquation();
    }

    const setNumber = (number: number) => {
        calc.setNumber(number);
        updateEquation();
    }

    const setOperator = (operator: Operator) => {
        calc.setOperator(operator);
        updateEquation();
    }

    return (
        <View style={Styles.ContainerView}>
            <View style={HomeStyles.Header}>
                <MyText
                    style={{ fontSize: 22 }}
                    type='subtitle'
                >
                    {APP_TITLE}
                </MyText>
            </View>
            <View style={HomeStyles.Container}>
                <View style={HomeStyles.ContainerResults}>
                    <MyText
                        style={{ fontSize: 34 }}
                        type='subtitle'>
                        {equation}
                    </MyText>
                </View>
                <View style={Styles.Hr} />
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
