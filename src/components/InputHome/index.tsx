import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Alert, TextInput} from 'react-native';
import {Container, InputButton, InputField, InputIcon} from './styles';

interface Props {
  handlePokemonSearch: (value: string) => void;
}

const InputHome: React.FC<Props> = ({handlePokemonSearch}) => {
  const [pokemon, setPokemon] = useState('');
  const inputRef = useRef<TextInput>(null);

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

    inputRef.current!.blur();
    setPokemon('');
    handlePokemonSearch(pokemon);
  }, [handlePokemonSearch, pokemon]);

  return (
    <Container>
      <InputField
        ref={inputRef}
        placeholder="Name or Number"
        value={pokemon}
        onChangeText={setPokemon}
        autoCapitalize="none"
        onSubmitEditing={handleSearch}
        autoCorrect={false}
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
