import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoardPinLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.628 5.82c2.136.264 3.436 1.928 3.436 4.21v6.717c0 2.49-1.555 4.254-4.045 4.254H7.983c-2.49 0-4.045-1.764-4.045-4.254v-6.718c0-2.273 1.3-3.935 3.427-4.199"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.994 8.565v1.854m2.146-6.796a.99.99 0 0 1-.23 1.074s-.453.338-.524.506c-.09.214-.104.72 0 .927.105.21.751.563.751.563.391.294.622.755.622 1.245a.627.627 0 0 1-.628.626H9.858a.627.627 0 0 1-.628-.626c0-.49.231-.95.622-1.245 0 0 .646-.353.751-.563.104-.207.09-.713 0-.927-.07-.168-.523-.506-.523-.506A.988.988 0 0 1 10.767 3h2.456c.404 0 .768.247.917.623M9.384 13.703h5.223m-6.271 3.358h7.32"
    />
  </Svg>
);
export default IconlystBoardPinLight;
