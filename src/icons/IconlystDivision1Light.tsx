import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDivision1Light = ({
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
      d="M7.783 3h8.435C19.166 3 21 5.081 21 8.026v7.948C21 18.919 19.166 21 16.217 21H7.783C4.835 21 3 18.919 3 15.974V8.026C3 5.081 4.844 3 7.783 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.008 15.367v.01m.026-.112a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25M12.008 8.587v.01m.026-.112a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25M8.615 12h6.771"
    />
  </Svg>
);
export default IconlystDivision1Light;
