import { View, Text, Modal, ModalProps, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Header';
import { useState } from 'react';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopping, setIsCopyng] = useState(false);

  async function handleCopyDiscordToClipboard() {
    setIsCopyng(true);

    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord Copiado', 'Usuário copiado, agora é só procurar pelo usuário no Discord');

    setIsCopyng(false);
  }
  return (
    <Modal {...rest} transparent statusBarTranslucent animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons name="close" size={20} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>
          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />
          <Heading
            title="Let's play"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: 'center', marginTop: 24 }}
          />
          <Text style={styles.label}>Adicone seu discord</Text>
          <TouchableOpacity style={styles.discordButton} onPress={handleCopyDiscordToClipboard} disabled={isCopping}>
            <Text style={styles.discord}>{isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
