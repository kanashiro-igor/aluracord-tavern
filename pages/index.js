import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

function Title(props) {
    const Tag = props.tag || "h1";
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx  >{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals["000"]};
                    font-size: 36px;
                    font-weight: 800;
                }
            `}
            </style>
        </>
    );
}

export default function HomePage() {
    // const username = 'kanashiro-igor';
    const [username, setUsername] = React.useState('kanashiro-igor');
    const roteamento = useRouter();

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',
                    },
                    backgroundImage: `url(/images/imagemBackground.png)`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                    backgroundBlendMode: 'multiply',

                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '70%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        backgroundImage: `url(/images/fundoLoginSemLuz.png)`,
                        backgroundSize: '100%',
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (event) {
                            event.preventDefault();
                            // window.location.href = '/chat';
                            roteamento.push(`/chat?username=${username}`);
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h1">Welcome traveler</Title>
                        <Text variant="body3"
                            styleSheet={{
                                fontSize: '22px',
                                marginTop: '32px',
                                marginBottom: '32px',
                                color: appConfig.theme.colors.neutrals["000"],
                                fontFamily: 'Enchanted Land'
                            }}
                        >
                            {appConfig.name}
                        </Text>

                        <TextField
                            value={username}
                            onChange={function (event) {
                                const valor = event.target.value;
                                setUsername(valor);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.custom.tan,
                                    mainColorHighlight: appConfig.theme.colors.custom.tan,
                                    mainColor: appConfig.theme.colors.custom.darkBrown,
                                }
                            }}
                            styleSheet={{
                                fontSize: '20px',
                                backgroundImage: `url(/images/quadroDigitarInfoLogin.png)`,
                            }}
                        />
                        <Button
                            type='submit'
                            label="Let's Drink !"
                            fullWidth
                            styleSheet={{
                                backgroundImage: `url(/images/quadroEntrarLogin.png)`,
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundImage: `url(/images/quadroAtrasImgPerfil.png)`,
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundImage: `url(/images/quadroComNomePerfil.png)`,
                                padding: '3px 10px',
                                borderRadius: '1000px',
                                fontSize: '18px',
                                fontFamily: 'Enchanted Land'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
                <Box
                    styleSheet={{
                        margin: "1rem",
                        padding: "1rem",
                        color: "white",
                        backgroundImage: `url(/images/quadroAtrasImgPerfil.png)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "18rem",
                        height: "24rem",
                        fontFamily: "Enchanted Land",
                        fontSize: "20px",
                        display: "flex",
                        position: "relative",
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                    }}

                >
                    <h2>Github Info</h2>
                </Box>
            </Box>
        </>
    );
}
