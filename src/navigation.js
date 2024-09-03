import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


//screens
import TodoList from './screens/todoList';
import Tasks from './screens/tasks';



const StackNavigation = props => {

    return (
        <Stack.Navigator screenOptions={{
            animationTypeForReplace: 'push',
        }}>
            <Stack.Screen name='Tasks' component={Tasks}/>
            <Stack.Screen name='TodoList' component={TodoList} />
        </Stack.Navigator>
    )
}

export default StackNavigation

