import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShowTwoTonecurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.164 12.448a3.162 3.162 0 1 1-6.325 0 3.162 3.162 0 0 1 6.325 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.75 12.448c0 3.28 4.142 7.302 9.252 7.302s9.252-4.019 9.252-7.302-4.143-7.302-9.252-7.302S2.75 9.168 2.75 12.448"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystShowTwoTonecurved;
