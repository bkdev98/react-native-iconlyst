import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNemTwoTone = ({
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
      strokeWidth={1.5}
      d="M5.26 4.84c2.825-1.16 8.527-2.756 14.505-.104 1.187.528 1.906 1.767 1.7 3.05-.475 2.95-2.055 8.454-7.322 12.384-.975.727-2.324.707-3.307-.01C8.421 18.4 4.218 14.42 3.515 7.695c-.129-1.228.603-2.386 1.744-2.854Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.703 9.025c1.734 7.197 8.837 1.996 8.837 1.996M12.54 11.02c-.338-8.05 4.213-7.29 4.213-7.29M15.7 18.868s4.133-4.051-3.16-7.848"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNemTwoTone;
