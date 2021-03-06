import React from 'react'

import Center from '@components/Center'
import Background from '@components/Background'
import Image from '@components/Image'
import ListItems from '@components/ListItems'

import {
  Container,
  Title,
  Content,
  ImageWrapper,
  TextWrapper,
  Text,
  Items,
  Equipaments,
  Equipament,
  EquipamentIcon,
  EquipamentTitle,
  EquipamentText,
} from './styles'

const items = [
  'Diminuir custos de produção',
  'Aumentar a capacidade de produção',
  'Fazer com que os equipamentos cheguem aos hospitais e postos de saúde',
]

const MakerCycle = () => {
  return (
    <Container>
      <Background color='pink' full>
        <Center>
          <Title>Um ciclo solidário</Title>

          <Content>
            <ImageWrapper>
              <Image src='ciclo-maker.png' alt='Ciclo Maker' />
            </ImageWrapper>

            <TextWrapper>
              <Text>
                Inspirados na notícia de que engenheiros italianos estavam se
                mobilizando para ajudar os hospitais durante a crise de COVID-19
                com o auxílio da impressão 3D, vimos que poderíamos fazer o
                mesmo no Brasil antes de chegar ao estado em que a Itália
                chegou. Movimentamos as nossas redes de contatos de makers,
                fablabs, cientistas, movimentos e indústrias, então começamos a
                pensar em alternativas para ajudar a saúde do país nesse
                momento. Identificamos duas classes principais de equipamentos
                que precisam ser produzidos com urgência: EPIs e Ventiladores
                Pulmonares.
              </Text>

              <Items>
                <ListItems items={items} />
              </Items>
            </TextWrapper>

            <Equipaments>
              <Equipament>
                <EquipamentIcon>
                  <Image src='icons/bed.png' alt='Ícone' />
                </EquipamentIcon>
                <EquipamentTitle>Suportes ventilatórios</EquipamentTitle>
                <EquipamentText>
                  O exemplo de outros países demonstra o alto risco de
                  sobrecarga dos hospitais.
                </EquipamentText>
              </Equipament>
              <Equipament>
                <EquipamentIcon>
                  <Image src='icons/specialist.png' alt='Ícone' />
                </EquipamentIcon>
                <EquipamentTitle>EPIs</EquipamentTitle>
                <EquipamentText>
                  Garantir a segurança e presença dos profissionais de saúde é
                  fundamental nesse momento.
                </EquipamentText>
              </Equipament>
            </Equipaments>
          </Content>
        </Center>
      </Background>
    </Container>
  )
}

export default MakerCycle
