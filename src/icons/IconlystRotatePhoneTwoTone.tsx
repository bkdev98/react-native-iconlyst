import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotatePhoneTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.507 6.45.001 11.139a3.21 3.21 0 0 1-3.208 3.208H6.71A3.21 3.21 0 0 1 3.5 17.589L3.5 6.45a3.21 3.21 0 0 1 3.208-3.209h4.591a3.21 3.21 0 0 1 3.208 3.208"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.056 6.386 1.407.619a3.59 3.59 0 0 0-2.465-3.802M15.135 20.796l3.159-.001a3.21 3.21 0 0 0 3.207-3.208v-4.676a3.21 3.21 0 0 0-3.208-3.208l-1.862.001M18.23 14.123v2.253"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.92 6.512h2.17M9.004 17.547V17.5m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystRotatePhoneTwoTone;
