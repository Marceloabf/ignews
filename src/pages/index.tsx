import Head from "next/head";
import Image from "next/image";
import AvatarImg from "../../public/images/avatar.svg";
import { SubscribeButton } from "../components/SubscribeButton";
import { styled } from "../styles";

const HeroSection = styled("section", {
  maxWidth: "600px",
  "> span": {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  h1: {
    fontSize: "4.5rem",
    lineHeight: "4.5rem",
    fontWeight: "900",
    marginTop: "2.5rem",
    span: {
      color: "$cyan500",
    },
  },
  p: {
    fontSize: "1.5rem",
    lineHeight: "2.25rem",
    marginTop: "1.5rem",
    span: {
      color: "$cyan500",
      fontWeight: "bold",
    },
  },
  button: {
    marginTop: "2.5rem",
  },
});

const ContentContainer = styled("main", {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "0 2rem",
  height: "calc(100vh - 5rem)",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>IgNews</title>
      </Head>
      <ContentContainer>
        <HeroSection>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> World
          </h1>
          <p>
            Get acess to all publications <br />
            <span>for $9.99 month</span>
          </p>
          <SubscribeButton />
        </HeroSection>
        <Image src={AvatarImg} alt="Imagem de um avatar" />
      </ContentContainer>
    </>
  );
}
