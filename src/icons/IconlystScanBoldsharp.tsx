import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanBoldsharp = ({
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
      d="M1.5 12.662v1.41h1.78v7.43h6.23v-1.5H4.78v-5.93H6.8v4.01h11.15v-4.01h1.77v5.93h-4.7v1.5h6.2v-7.43H23v-1.41zM19.718 10.062h1.5V3.567h-6.203v1.5h4.703zM4.781 5.067h4.732v-1.5H3.281v6.495h1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.8 11.162h11.15v-4.24H6.8z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanBoldsharp;
