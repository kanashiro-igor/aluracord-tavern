import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';

function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Enchanted Land';
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
}

function Title(props) {
    const Tag = props.tag || "h1";
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx  >{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals["000"]};
                    font-size: 48px;
                    font-weight: 800;
                }
            `}
            </style>
        </>
    );
}

export default function HomePage() {
    const username = 'kanashiro-igor';

    return (
        <>
            <GlobalStyle />
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
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px'
                        }}
                    >
                        <Title tag="h1">Welcome traveler</Title>
                        <Text variant="body3" 
                            styleSheet={{ 
                                fontSize: '26px',
                                marginTop: '32px', 
                                marginBottom: '32px', 
                                color: appConfig.theme.colors.neutrals["000"], 
                                fontFamily: 'Enchanted Land'
                            }}
                        >
                            {appConfig.name}
                        </Text>

                        <TextField
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.brown.tan,
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.yellow.yellow,
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                }
                            }}
                            styleSheet={{
                                fontSize: '22px',
                                backgroundImage: 'url(https://as2.ftcdn.net/v2/jpg/03/59/71/73/1000_F_359717340_81GSpItqigxFujGnSnD9O7hDjpsz2ND1.jpg)'
                            }}
                        />
                        <Button
                            type='submit'
                            label="Let's drink"
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.yellow.lightYellow,
                                mainColorLight: appConfig.theme.colors.yellow.yellow,
                                mainColorStrong: appConfig.theme.colors.yellow.yellow,
                            }}
                            styleSheet={{
                                backgroundImage: 'url(https://as2.ftcdn.net/v2/jpg/03/59/71/73/1000_F_359717340_81GSpItqigxFujGnSnD9O7hDjpsz2ND1.jpg)'
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
                                marginBottom: '16px',
                                backgroundColor: appConfig.theme.colors.brown.darkBrown
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.brown.darkBrown,
                                padding: '3px 10px',
                                borderRadius: '1000px',
                                fontSize: '24px',
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

// React component
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Title tag="h1">Welcome traveler!</Title>
//             <h2>Discord - Alura Tavern</h2>
//         </div>
//     )
// }

// export default HomePage