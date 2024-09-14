import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLightcurved = ({
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
      d="M11.973 20.368c-3.24 0-6.006-.49-6.006-2.452s2.749-3.67 6.006-3.67c3.239 0 6.006 1.692 6.006 3.653s-2.75 2.47-6.006 2.47M11.973 11.449a3.85 3.85 0 1 0-3.85-3.85 3.837 3.837 0 0 0 3.823 3.85z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.362 10.392a2.901 2.901 0 0 0-.166-5.643M18.943 13.544c1.754 0 3.252 1.19 3.252 2.251 0 .625-.517 1.306-1.3 1.49M5.584 10.392a2.901 2.901 0 0 1 .165-5.643M5.002 13.544c-1.754 0-3.252 1.19-3.252 2.251 0 .625.517 1.306 1.302 1.49"
    />
  </Svg>
);
export default IconlystUserLightcurved;
