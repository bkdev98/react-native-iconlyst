import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandyBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.048 18.678a6.103 6.103 0 1 1 4.125-1.605"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.369 8.73c.946-.068 3.535.624 6.325 3.932M15.667 7.66c-.364-1.071-.58-2.89 1.301-4.295 1.703.29 3.928 2.497 4.282 4.281-.512.686-1.078 1.094-1.64 1.319M8.26 17.365c.398 1.03.78 3-1.228 4.5-1.042-.178-2.28-1.074-3.164-2.151"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.469 18.946c.16-.48.173-1.424.9-1.98M2.75 17.583c1.504-2.012 3.467-1.637 4.488-1.244"
    />
  </Svg>
);
export default IconlystCandyBroken;
