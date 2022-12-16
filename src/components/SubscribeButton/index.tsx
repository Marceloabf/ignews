import { styled } from "../../styles";

const Button = styled("button", {
  width: "268px",
  height: "4rem",
  border: "0",
  borderRadius: "2rem",
  background: "$yellow500",

  fontSize: "1.25rem",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  transition: "filter 0.2s",

  "&:hover": {
    filter: "brightness (0.8)",
  },
});
export function SubscribeButton() {
  return <Button type="button">Subscribe Now! </Button>;
}
