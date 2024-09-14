import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongAiOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.96 14.184a2.644 2.644 0 1 0 0 5.287 2.644 2.644 0 0 0 0-5.287m-4.144 2.643a4.144 4.144 0 1 1 8.288 0 4.144 4.144 0 0 1-8.288 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.051 3.949a.75.75 0 0 0-1.45.271v12.002a.75.75 0 0 0 1.5 0V6.628c.682.679 1.643 1.336 2.935 1.599a.75.75 0 1 0 .3-1.47c-1.177-.24-1.996-.929-2.534-1.588a5.6 5.6 0 0 1-.716-1.14l-.03-.066zM6.69 5.49a.75.75 0 0 1 .704.49l.111.302a3.42 3.42 0 0 0 2.02 2.022l.302.112a.75.75 0 0 1 0 1.407l-.303.112a3.42 3.42 0 0 0-2.019 2.022l-.111.303a.75.75 0 0 1-1.407 0l-.112-.303a3.42 3.42 0 0 0-2.02-2.022l-.302-.112a.75.75 0 0 1 0-1.407l.303-.112a3.42 3.42 0 0 0 2.019-2.022l.112-.303a.75.75 0 0 1 .703-.49m0 4.82A4.9 4.9 0 0 0 5.5 9.12a4.9 4.9 0 0 0 1.19-1.191c.325.462.728.865 1.19 1.19a4.9 4.9 0 0 0-1.19 1.191M11.72 3.03a.75.75 0 0 1 .718.532c.1.326.354.58.678.679a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 .718-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongAiOutline;
