import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandyLight = ({
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
      d="M18.151 12.575a6.103 6.103 0 1 1-12.206 0 6.103 6.103 0 0 1 12.206 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.369 8.73c.946-.068 3.536.624 6.326 3.932M15.667 7.66c-.364-1.071-.58-2.89 1.301-4.295 1.703.29 3.928 2.497 4.282 4.281-1.407 1.884-3.216 1.676-4.28 1.319M8.26 17.365c.398 1.03.78 3-1.228 4.5-1.702-.291-3.928-2.498-4.281-4.282 1.504-2.012 3.466-1.637 4.487-1.244"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.469 18.946c.16-.48.173-1.424.9-1.98"
    />
  </Svg>
);
export default IconlystCandyLight;
