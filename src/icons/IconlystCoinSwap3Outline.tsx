import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinSwap3Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.252 2.47a.75.75 0 0 1 1.06 0l1.381 1.38a.75.75 0 0 1 0 1.061l-1.38 1.38a.75.75 0 0 1-1.06-1.061l.849-.85-.85-.85a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.799 7.831a4.2 4.2 0 0 1 4.2-4.2h2.083a.75.75 0 0 1 0 1.5H7a2.7 2.7 0 0 0-2.7 2.7.75.75 0 0 1-1.5 0M17.249 17.71a.75.75 0 0 1 0 1.06l-.85.85.85.85a.75.75 0 0 1-1.06 1.061l-1.381-1.38a.75.75 0 0 1 0-1.06l1.38-1.381a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.95 15.42a.75.75 0 0 1 .75.75 4.2 4.2 0 0 1-4.2 4.2h-2.084a.75.75 0 0 1 0-1.5h2.083a2.7 2.7 0 0 0 2.7-2.7.75.75 0 0 1 .75-.75M10.06 10.121a4.068 4.068 0 1 0 0 8.136 4.068 4.068 0 0 0 0-8.136M4.492 14.19a5.568 5.568 0 1 1 11.136 0 5.568 5.568 0 0 1-11.136 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.441 5.742a4.068 4.068 0 1 0 0 8.136 4.068 4.068 0 0 0 0-8.136M8.873 9.81a5.568 5.568 0 1 1 11.136 0 5.568 5.568 0 0 1-11.136 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoinSwap3Outline;
