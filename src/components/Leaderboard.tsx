import { Box, Card, CircularProgress, List, ListItem, Typography } from "@mui/joy";
import React, { JSX } from "react";

// ============================================
// КОМПОНЕНТ ТАБЛИЦІ ЛІДЕРІВ
// ============================================

interface LeaderboardProps {
    limit?: number;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ limit = 10 }) => {
    const { data, isLoading, error } = useLeaderboard(limit);

    if (isLoading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Card variant='soft' color='danger' sx={{ p: 2 }}>
                <Typography level='body-md'>Помилка завантаження таблиці лідерів</Typography>
            </Card>
        );
    }

    if (!data || data.length === 0) {
        return (
            <Card variant='soft' sx={{ p: 2 }}>
                <Typography level='body-md'>Таблиця лідерів порожня. Будьте першими!</Typography>
            </Card>
        );
    }

    return (
        <Card variant='outlined' sx={{ width: "100%", maxWidth: 600 }}>
            <Typography level='h3' sx={{ mb: 2 }}>
                🏆 Таблиця лідерів
            </Typography>

            <List>
                {data.map((entry, index) => (
                    <ListItem
                        key={entry.id || index}
                        sx={{
                            bgcolor: index < 3 ? "background.level1" : "transparent",
                            borderRadius: "sm",
                            mb: 1,
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                            <Typography
                                level='h4'
                                sx={{
                                    minWidth: 40,
                                    color:
                                        index === 0
                                            ? "warning.500"
                                            : index === 1
                                            ? "neutral.400"
                                            : index === 2
                                            ? "warning.700"
                                            : "text.primary",
                                }}
                            >
                                {index === 0 ? "�" : index === 1 ? "🥈" : index === 2 ? "🥉" : `${index + 1}.`}
                            </Typography>

                            <Typography level='title-lg' sx={{ flex: 1 }}>
                                {entry.player_name}
                            </Typography>

                            <Typography
                                level='h4'
                                sx={{
                                    fontWeight: "bold",
                                    color: entry.score === 3 ? "success.500" : "text.primary",
                                }}
                            >
                                {entry.score}/3
                            </Typography>
                        </Box>

                        <Typography level='body-sm' sx={{ mt: 0.5, ml: 6 }}>
                            {entry.story_completed ? "✅ Історію завершено" : "⏳ В процесі"}
                            {" • "}
                            {new Date(entry.timestamp).toLocaleDateString("uk-UA")}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Card>
    );
};

interface LeaderboardOverlayProps {
    onClose: () => void;
}

export default function LeaderboardOverlay({ onClose }: LeaderboardOverlayProps): JSX.Element {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.7)",
                zIndex: 10000,
                padding: "1rem",
            }}
        >
            <div
                style={{
                    background: "#fff",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    width: "min(95vw, 900px)",
                    maxHeight: "90vh",
                    overflow: "auto",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "1rem",
                    }}
                >
                    <h2 style={{ margin: 0 }}>🏆 Таблиця лідерів</h2>
                    <button
                        onClick={onClose}
                        style={{
                            padding: "0.5rem 1rem",
                            fontSize: "1rem",
                            cursor: "pointer",
                        }}
                    >
                        ✕ Закрити
                    </button>
                </div>
                <Leaderboard limit={10} />
            </div>
        </div>
    );
}
