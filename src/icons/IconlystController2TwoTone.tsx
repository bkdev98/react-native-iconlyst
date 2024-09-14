import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystController2TwoTone = ({
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
      d="M9.84 20.513h5.32c3.5 0 6.34-2.84 6.34-6.341v-.053a6.34 6.34 0 0 0-6.34-6.34H9.84a6.34 6.34 0 0 0-6.34 6.34v.053a6.34 6.34 0 0 0 6.34 6.34"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.041 15.513h-.01M15.403 12.283h-.01M9.599 12.18v3.385m1.725-1.693H7.871M8.627 3.487c0 .67.554 1.212 1.237 1.212h.954c1.054.004 1.907.84 1.911 1.873v1.056"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystController2TwoTone;
