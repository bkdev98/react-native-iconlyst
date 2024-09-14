import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLoveLight = ({
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
      d="M11.33 14.875c-3.375 0-6.254.51-6.254 2.553s2.863 2.571 6.255 2.571"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.326 7.996a3.996 3.996 0 1 1-7.991 0 3.996 3.996 0 0 1 7.991 0M14.133 17.316c-.293-.917.05-1.963 1.01-2.273a1.64 1.64 0 0 1 1.485.25 1.66 1.66 0 0 1 1.482-.25c.961.31 1.307 1.356 1.014 2.273-.457 1.45-2.496 2.57-2.496 2.57s-2.023-1.102-2.495-2.57"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserLoveLight;
