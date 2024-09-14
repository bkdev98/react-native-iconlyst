import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshSquare5Bold = ({
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
      d="M17.508 9.563a.999.999 0 1 0-1.414 1.414l2.093 2.093a1 1 0 0 0 .707.293l.007-.001.013.002a.99.99 0 0 0 .752-.358l2.04-2.041a.999.999 0 1 0-1.414-1.414l-.378.378V8.737c0-3.205-2.15-5.444-5.228-5.444H7.23C4.151 3.293 2 5.532 2 8.737v7.027c0 3.205 2.151 5.443 5.23 5.443h7.456c3.078 0 5.228-2.238 5.228-5.443a1 1 0 1 0-2 0c0 2.124-1.237 3.443-3.228 3.443H7.23c-1.992 0-3.23-1.319-3.23-3.443V8.737c0-2.124 1.237-3.444 3.23-3.444h7.456c1.991 0 3.228 1.32 3.228 3.444v1.232z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshSquare5Bold;
