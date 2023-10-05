import { Box, Typography, styled } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import { config } from "../config";

const TypewriterTypography = styled(Typography)`
  & .Typewriter {
    display: inline;
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper id="loader-wrapper">
      <TypewriterTypography variant="h3" my={2}>
        <Typewriter
          options={{
            strings: [config.fullName],
            autoStart: true,
            delay: 100,
            pauseFor: 60000,
            cursor: "|",
            loop: true,
          }}
        />
      </TypewriterTypography>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.default};
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loader;
