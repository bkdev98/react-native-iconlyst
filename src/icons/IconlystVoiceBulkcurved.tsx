import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceBulkcurved = ({
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
      d="M19.384 13.407H5.116a.75.75 0 0 0 0 1.5h1.015a6.176 6.176 0 0 0 5.369 5.369v1.703a.75.75 0 0 0 1.5 0v-1.703a6.175 6.175 0 0 0 5.369-5.37h1.015a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.58 11.402h11.339a.5.5 0 0 0 .5-.5V8.648a6.176 6.176 0 0 0-6.17-6.169 6.177 6.177 0 0 0-6.17 6.17v2.253a.5.5 0 0 0 .5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVoiceBulkcurved;
