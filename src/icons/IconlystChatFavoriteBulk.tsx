import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatFavoriteBulk = ({
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
      d="M19.145 9.494q-.375 0-.72-.18c-.28-.15-2.74-1.54-3.42-3.65a3.7 3.7 0 0 1-.173-1.402.21.21 0 0 0-.206-.228h-7.8c-2.31 0-4.19 1.88-4.19 4.2v6.94c0 2.32 1.88 4.2 4.19 4.2h1.07c.5 0 1 .21 1.35.56l1.42 1.43c.33.33.76.51 1.22.51.47 0 .9-.18 1.23-.51l1.42-1.43c.35-.35.84-.56 1.35-.56h1.06c2.31 0 4.19-1.88 4.19-4.2V8.867c0-.167-.195-.261-.33-.163-.471.342-.843.553-.94.61-.22.12-.47.18-.72.18"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.875 12.975c-.57 0-1.04-.47-1.04-1.04s.47-1.03 1.04-1.03 1.03.46 1.03 1.03-.46 1.04-1.03 1.04m-5.7 0c-.58 0-1.04-.47-1.04-1.04s.46-1.03 1.04-1.03c.57 0 1.03.46 1.03 1.03s-.46 1.04-1.03 1.04M20.755 2.734c-.17-.06-.36-.08-.54-.08-.38 0-.76.12-1.07.35a1.7 1.7 0 0 0-.5-.27c-.18-.06-.38-.09-.57-.09-.18 0-.37.03-.54.09-.64.21-1.03.71-1.15 1.3-.09.37-.07.78.05 1.17.447 1.401 2.189 2.488 2.615 2.737.059.034.13.034.19 0a9 9 0 0 0 1.605-1.217c.44-.43.84-.95 1.01-1.52.32-1-.05-2.13-1.1-2.47"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatFavoriteBulk;
