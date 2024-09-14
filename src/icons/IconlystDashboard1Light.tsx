import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard1Light = ({
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
      d="M18.86 19.905a8.96 8.96 0 0 0 3.12-6.807 9 9 0 0 0-9.003-9.004c-4.967 0-8.997 4.028-8.997 9.004a8.96 8.96 0 0 0 3.122 6.807"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.822 9.27-2.441 2.44m.568 1.386a1.97 1.97 0 1 1-3.94 0 1.97 1.97 0 0 1 3.94 0"
    />
  </Svg>
);
export default IconlystDashboard1Light;
