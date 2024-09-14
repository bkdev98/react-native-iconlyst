import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNemLight = ({
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
      strokeWidth={1.5}
      d="M4.76 4.84c2.825-1.16 8.527-2.756 14.505-.104 1.187.528 1.906 1.767 1.7 3.05-.475 2.95-2.055 8.454-7.322 12.384-.975.727-2.324.707-3.307-.01C7.921 18.4 3.718 14.42 3.015 7.695c-.129-1.228.603-2.386 1.744-2.854Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.203 9.025c1.734 7.197 8.837 1.995 8.837 1.995-.338-8.05 4.214-7.29 4.214-7.29M15.2 18.868s4.132-4.051-3.16-7.848"
    />
  </Svg>
);
export default IconlystNemLight;
