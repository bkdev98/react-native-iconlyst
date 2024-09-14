import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatFavoriteBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.464 11.526c-.711 2.271-3.676 3.923-3.802 3.993a.75.75 0 0 1-.721.001c-.125-.069-3.066-1.699-3.803-3.993-.565-1.772.262-3.57 1.88-4.094h.003a3 3 0 0 1 2.282.182 3.04 3.04 0 0 1 2.27-.184c1.628.527 2.455 2.324 1.89 4.095m.898-8.187H7.24c-2.31 0-4.19 1.886-4.19 4.203v6.94c0 2.316 1.88 4.202 4.19 4.202h1.069c.503 0 .994.204 1.348.56l1.422 1.426c.327.328.76.51 1.222.51.463 0 .896-.182 1.223-.51l1.42-1.426c.356-.356.848-.56 1.35-.56h1.068c2.31 0 4.189-1.886 4.189-4.203V7.542c0-2.317-1.88-4.203-4.19-4.203"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.118 8.86a1.54 1.54 0 0 0-1.37.235.75.75 0 0 1-.9-.002 1.52 1.52 0 0 0-1.37-.232c-.95.31-1.178 1.37-.911 2.21.394 1.227 1.877 2.373 2.733 2.917.862-.548 2.354-1.702 2.734-2.914.269-.844.039-1.905-.916-2.214"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatFavoriteBold;
