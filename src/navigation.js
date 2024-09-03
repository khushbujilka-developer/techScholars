import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


//screens
import Todo from './screens/todo';
import Tasks from './screens/tasks';
import DisplayApiData from './screens/displayApiData';
import CustomModal from './screens/customModal';
import Home from './screens/home';
import Detail from './screens/detail';
import Form from './screens/form';


const StackNavigation = props => {

    return (
        <Stack.Navigator screenOptions={{
            animationTypeForReplace: 'push',
        }}>
            <Stack.Screen name='Tasks' component={Tasks}/>
            <Stack.Screen name='Todo' component={Todo} />
            <Stack.Screen name='DisplayApiData' component={DisplayApiData}/>
            <Stack.Screen name='CustomModal' component={CustomModal}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Detail' component={Detail}/>
            <Stack.Screen name='Form' component={Form}/>
        </Stack.Navigator>
    )
}

export default StackNavigation

