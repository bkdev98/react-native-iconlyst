import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystController2Light = ({
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
      d="M9.34 20.513h5.32c3.5 0 6.34-2.84 6.34-6.341v-.053a6.34 6.34 0 0 0-6.34-6.34H9.34A6.34 6.34 0 0 0 3 14.12v.053a6.34 6.34 0 0 0 6.34 6.34M16.541 15.513h-.01M14.903 12.283h-.01M9.099 12.18v3.385m1.725-1.693H7.371M8.127 3.487c0 .67.554 1.212 1.237 1.212h.954c1.054.004 1.907.84 1.911 1.873v1.056"
    />
  </Svg>
);
export default IconlystController2Light;
