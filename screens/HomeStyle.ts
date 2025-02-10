import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// Resources
import Colors from '../hooks/Colors';

const HomeStyles = StyleSheet.create({
    Header: {
        width: screenWidth,
        height: screenHeight * 0.15,
        paddingTop: screenHeight * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.gray.d,
    },
    Hr: {
        width: screenWidth * 0.90,
        marginHorizontal: 'auto',
        marginVertical: 5,
        borderBottomColor: Colors.gray.d,
        borderBottomWidth: 1,
    },
    Container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ContainerResults: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    ContainerButtons: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

// Export
export default HomeStyles;