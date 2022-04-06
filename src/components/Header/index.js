import logoImg from '../../assets/Logo.svg'
import { ContainerHeader, Content } from './styles'

export const Header = () => {
    return (
        <ContainerHeader>
            <Content>
                <img src={logoImg} alt="logo dt money" />
                <button type='button'>
                    Nova transação
                </button>
            </Content>
        </ContainerHeader>
    )
}