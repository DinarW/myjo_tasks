import React, { useMemo } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Alert,
  FlatList,
  Text,
  Pressable,
} from 'react-native';
import { useTasksData } from './hooks/useTasksData';
import { addCard } from './helpers/addCard';
import { ICard } from './types/models';

interface ICardProps extends ICard {
  onCardPress: () => void;
}

const Card = React.memo(({ name, description, onCardPress, ...rest }: ICardProps) => {
  return (
    <Pressable onPress={onCardPress}>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </Pressable>
  )
});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const data = useTasksData();
  const filteredTasks = useMemo(() => {
    return data.filter(curr => curr.type === 'TASKS');
  }, [data]);

  const onCardPress = React.useCallback((item: ICard) => () => {
    Alert.alert(item.name, item.description || '');
    addCard({ ...item });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <FlatList
        data={filteredTasks}
        renderItem={({ item }) => (
          <Card
            key={item.card_id}
            onCardPress={onCardPress(item)}
            {...item}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default App;
