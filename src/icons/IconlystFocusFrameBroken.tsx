import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFocusFrameBroken = ({
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
      d="M21 8.468V6.891a3.89 3.89 0 0 0-3.893-3.893H15.85M3 8.468V6.891a3.89 3.89 0 0 1 3.893-3.893h1.29M3 15.532v1.577a3.89 3.89 0 0 0 3.893 3.892H8.15M21 15.532v1.577a3.89 3.89 0 0 1-3.893 3.892h-1.29"
    />
  </Svg>
);
export default IconlystFocusFrameBroken;
