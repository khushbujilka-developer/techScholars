import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


//screens
import TodoList from './screens/todoList';
import Tasks from './screens/tasks';
import DisplayApiData from './screens/displayApiData';



const StackNavigation = props => {

    return (
        <Stack.Navigator screenOptions={{
            animationTypeForReplace: 'push',
        }}>

            <Stack.Screen name='Tasks' component={Tasks}/>
            <Stack.Screen name='TodoList' component={TodoList} />
            <Stack.Screen name='DisplayApiData' component={DisplayApiData}/>

        </Stack.Navigator>
    )
}

export default StackNavigation

