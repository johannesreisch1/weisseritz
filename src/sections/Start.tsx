import { Card, CardContent, Container, Typography, Stack, Box, useTheme } from "@mui/material";
import bild1 from "../assets/Bild1.jpeg"; // Beispielbild
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Start() {
    const theme = useTheme();

    return (
        <Box id="start" sx={{ py: 10, backgroundColor: theme.palette.primary.light }}>
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={6}
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* Linke Seite: Card */}
                    <Stack spacing={5}>
                        <Card elevation={6}>
                            <CardContent>
                                <Typography variant="h4" gutterBottom color="primary">
                                    Über die Weißeritz
                                </Typography>
                                <Typography variant="body1">
                                    Jeder kennt die Elbe. Aber Dresden hat noch einen zweiten Fluss:
                                    die Weißeritz - ihre verborgene, wilde Schwester.
                                    Auf ihrem Weg durch die Stadt ist sie ein Ort der extremen Gegensätze:
                                    Einst romantisches Tal und Paradies der Maler, dann lautes Zentrum der
                                    Industrialisierung und heute oft nur noch eine Gefahr hinter hohen Mauern.
                                </Typography>
                                <Typography variant="body1">
                                    Ihre Geschichte erzählt von unbändiger Naturkraft, von Aufstieg und Vergessen,
                                    von Auseinandersetzungen zwischen Mensch und Umwelt.
                                    Dieser Audiowalk lädt Sie ein, genau diese verborgenen Geschichten zu entdecken und die Weißeritz mit neuen Augen zu sehen
                                    und Ohren zu hören.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card elevation={6}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom color="primary">
                                    Audiowalk an der Weißeritz
                                </Typography>
                                <Typography variant="body1">
                                    Ein Audiowalk ist ein Hörerlebnis für unterwegs.
                                    Sie folgen einer festgelegten Route, hören über Ihr Smartphone spannende Erzählungen,
                                    die Stimmen von Experten und eine atmosphärische Klangkulisse,
                                    die Sie tief in die Welt des Flusses eintauchen lässt. <br />
                                    Unser Ziel ist es, den Blick hinter die hohen Schutzmauern zu lenken.
                                    Der Walk führt Sie an Orte, an denen die verborgenen Geschichten der Weißeritz lebendig werden.
                                    Sie erleben den Fluss in seiner Zerrissenheit zwischen Beton und Natur,
                                    hören von seiner Vergangenheit als unermüdlicher „Arbeiter“
                                    und entdecken seine heutige Rolle als ungenutzter Freiraum. <br />
                                    Ein Spaziergang, der Ihre Wahrnehmung verändert und dem Fluss seine Stimme zurückgibt.
                                </Typography>
                            </CardContent>
                        </Card>

                    </Stack>

                    {/* Rechte Seite: Bild */}
                    <Box
                        component="img"
                        src={bild1}
                        alt="Weisseritz"
                        sx={{
                            width: "100%",
                            maxWidth: 700,
                            borderRadius: 3,
                            boxShadow: 4,
                        }}
                    />
                </Stack>
            </Container>
            <ScrollToTopButton />
        </Box>
    );
}
