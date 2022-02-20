import React, {useCallback, useMemo, useState} from 'react';
import {Alert} from 'react-native';
import {Container, InputButton, InputField, InputIcon} from './styles';

interface Props {
  handlePokemonSearch: (value: string) => void;
}

const InputHome: React.FC<Props> = ({handlePokemonSearch}) => {
  const [pokemon, setPokemon] = useState('');

  const isDisabled = useMemo(() => {
    return pokemon === '';
  }, [pokemon]);

  const handleSearch = useCallback(() => {
    if (pokemon === '') {
      Alert.alert(
        'Type a valid Name or a Number before confirming your search',
      );
      return;
    }

    setPokemon('');
    handlePokemonSearch(pokemon);
  }, [handlePokemonSearch, pokemon]);

  return (
    <Container>
      <InputField
        placeholder="Name or Number"
        value={pokemon}
        onChangeText={setPokemon}
        autoCapitalize="none"
        onSubmitEditing={handleSearch}
        returnKeyType="send"
      />

      <InputButton
        onPress={handleSearch}
        disabled={isDisabled}
        isDisabled={isDisabled}>
        <InputIcon name="search" size={20} />
      </InputButton>
    </Container>
  );
};

export default InputHome;
