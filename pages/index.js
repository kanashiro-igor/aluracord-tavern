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
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundImage: 'url(https://wallpaperaccess.com/full/1886598.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
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
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        borderColor: appConfig.theme.colors.neutrals[999],
                        border: '1px solid',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundImage: 'url(https://image.freepik.com/free-photo/brown-wooden-flooring_53876-90802.jpg)'
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (event) {
                            event.preventDefault();
                            // window.location.href = '/chat';
                            roteamento.push('/chat');
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
                                border: '1px solid black',
                                backgroundImage: 'url(https://image.freepik.com/free-photo/wooden-textured-background_53876-14865.jpg)'
                            }}
                        />
                        <Button
                            type='submit'
                            label="Let's Drink !"
                            fullWidth
                            styleSheet={{
                                border: '1px solid black',
                                backgroundImage: 'url(https://image.freepik.com/free-photo/wooden-textured-background_53876-14865.jpg)'
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
                            backgroundImage: 'url(https://image.freepik.com/free-photo/wooden-background_24972-623.jpg)',
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                border: '1px solid black',
                                marginBottom: '16px',
                                backgroundColor: appConfig.theme.colors.custom.darkBrown
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.custom.darkBrown,
                                padding: '3px 10px',
                                borderRadius: '1000px',
                                border: '1px solid black',
                                fontSize: '18px',
                                fontFamily: 'Enchanted Land'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}
