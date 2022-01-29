import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { ButtonSendSticker } from '../src/components/ButtonSendSticker';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI4NjYyMCwiZXhwIjoxOTU4ODYyNjIwfQ.8CGsf-FI7b0nGy_TMECVGKxnew0if7FH3mvvFzjMUFY';
const SUPABASE_URL = 'https://byhjlsixdqcjkdqjxshw.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function escutaMensagensEmTempoReal(adicionaMensagem) {
    return supabaseClient
        .from('mensagens')
        .on('INSERT', (respostaLive) => {
            adicionaMensagem(respostaLive.new);
        })
        .subscribe();
}

export default function ChatPage() {
    const roteamento = useRouter();
    const usuarioLogado = roteamento.query.username;
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);
        // {
        // id: 1,
        // de: 'kanashiro-Igor',
        // texto: `:sticker: https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png`
        // },
        // {
        //     id: 2,
        //     de: 'peas',
        //     texto: 'ternario triste'
        // }
    

    React.useEffect(() => {
        supabaseClient
            .from('mensagens')
            .select('*')
            .order("id", { ascending: false })
            .then(({ data }) => {
                setListaDeMensagens(data);
            });
        escutaMensagensEmTempoReal((novaMensagem)=>{
            // console.log('Nova mensagem', novaMensagem);
            // console.log('lista de mensagens: ', listaDeMensagens);
            setListaDeMensagens((valorAtualDaLista)=>{
                // console.log('Valor da lista atualizado: ', valorAtualDaLista);
                return [
                    novaMensagem,
                    ...valorAtualDaLista,
                ]
            })
        });
    }, []);

    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            de: usuarioLogado,
            texto: novaMensagem,
        };

        supabaseClient
            .from('mensagens')
            .insert([mensagem])
            .then(({data}) => {
                // console.log('Criando mensagem:', data)
            });
        setMensagem('');
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.custom.darkLiver,
                backgroundImage: `url(https://cutewallpaper.org/25/anime-tavern-wallpaper/94183687.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        backgroundImage: `url(https://images.unsplash.com/photo-1546962339-5ff89552b8ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGF2ZXJufGVufDB8fDB8fA%3D%3D&w=1000&q=80)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listaDeMensagens} />

                    {/* Lista de Mensagens: {listaDeMensagens.map((mensagemAtual) => {
                        console.log(mensagemAtual)
                        return (
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de}: {mensagemAtual.texto}
                            </li>
                        )
                    })} */}

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event) => {
                                const valor = event.target.value;
                                setMensagem(valor);
                            }}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter' && mensagem.length > 0) {
                                    event.preventDefault();
                                    // console.log(event);
                                    handleNovaMensagem(mensagem);
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                                fontSize: '20px'
                            }}
                        />
                        <ButtonSendSticker
                            onStickerClick={(sticker) => {
                                // console.log('[USANDO O COMPONENTE] Salva esse sticker no banco de dados', sticker);
                                handleNovaMensagem(`:sticker:${sticker}`);
                            }}
                        />
                        <Image
                            styleSheet={{
                                width: '50px',
                                height: '50px',
                                display: 'inline-block',
                                marginRight: '8px',
                            }}
                            src={`/images/sendMessage.png`}
                            onClick={() => {
                                if (mensagem.length > 0) {
                                    handleNovaMensagem(mensagem);
                                }
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }} >
                <Text
                    variant='heading5'
                    styleSheet={{
                        fontFamily: 'Enchanted Land',
                        fontSize: '24px',
                    }}
                >
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {/* {console.log('Antes do map', props.mensagens)} */}
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagem.de}.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>
                        {/* {console.log('Antes de startsWith', mensagem.texto)} */}
                        {mensagem.texto.startsWith(':sticker:')
                            ? (
                                <Image src={mensagem.texto.replace(':sticker:','')} />
                            )
                            : (
                                mensagem.texto
                            )
                        }

                        {/* {mensagem.texto} */}
                    </Text>
                );
            })}
        </Box>
    )
}