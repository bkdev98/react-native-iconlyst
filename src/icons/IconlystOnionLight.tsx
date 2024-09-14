import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOnionLight = ({
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
      d="M17.814 18.285c-4.174 4.17-11.256-.843-13.31 1.21 2.054-2.053-2.96-9.135 1.21-13.309 2.674-2.673 7.549-2.131 10.89 1.21 3.34 3.34 3.883 8.216 1.21 10.889"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.291 14.763c-4.173 4.171-7.733 2.68-9.786 4.732 2.053-2.053.561-5.613 4.732-9.786 2.673-2.673 5.971-3.708 7.367-2.313s.36 4.694-2.313 7.367"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.887 5.114 16.659 7.34M16.66 4v3.341H20"
    />
  </Svg>
);
export default IconlystOnionLight;
