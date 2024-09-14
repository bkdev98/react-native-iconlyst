import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperBlockBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.959 11.57c.41 0 .81.047 1.196.133.196.043.39-.1.39-.302V7.447c0-2.303-1.482-3.851-3.688-3.851H5.233c-2.206 0-3.688 1.548-3.688 3.85v7.4c0 2.303 1.482 3.85 3.689 3.85h8c.2 0 .344-.192.302-.387a5.5 5.5 0 0 1-.13-1.182 5.56 5.56 0 0 1 5.553-5.556"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.881 16.99c0-.289.062-.563.17-.812l2.681 2.68c-.25.108-.524.171-.814.171a2.04 2.04 0 0 1-2.037-2.04m4.074 0c0 .285-.06.556-.166.803l-2.678-2.676a2 2 0 0 1 .807-.168 2.04 2.04 0 0 1 2.037 2.04m-2.037-3.54a3.543 3.543 0 0 0-3.537 3.54 3.543 3.543 0 0 0 3.537 3.54 3.543 3.543 0 0 0 3.537-3.54 3.543 3.543 0 0 0-3.537-3.54M11.044 14.187a3.04 3.04 0 0 1-3.038-3.04 3.04 3.04 0 0 1 3.038-3.04 3.04 3.04 0 0 1 3.038 3.04 3.04 3.04 0 0 1-3.038 3.04m-1.538-3.04c0-.85.69-1.54 1.538-1.54a1.54 1.54 0 0 1 0 3.08 1.54 1.54 0 0 1-1.538-1.54"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M6.662 8.346H5.259a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystMoneyPaperBlockBulk;
