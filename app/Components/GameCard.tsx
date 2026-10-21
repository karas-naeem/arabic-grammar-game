import { Button, Card, CardActions, CardMedia } from "@mui/material";
import Link from "next/link";

interface IGameCard {
  imageSrc: string;
  gameLink: string;

  alt: string;
}
export default function GameCard({ imageSrc, gameLink, alt }: IGameCard) {
  return (
    <Card
      sx={{
        maxWidth: 200,
        background: "var(--background)",
        border: "1px solid #FFFFFF",
      }}
    >
      <CardMedia
        component="img"
        src={imageSrc}
        alt={alt}
        sx={{
          filter: "invert()",
          borderBottom: "1px solid #FFF",
        }}
      />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "white",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "var(--background)",
            fontFamily: "arial",
          }}
        >
          <Link
            href={gameLink}
            style={{
              color: "var(--foreground)",
            }}
          >
            العب الأن
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
