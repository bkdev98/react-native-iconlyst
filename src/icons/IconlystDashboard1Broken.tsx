import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard1Broken = ({
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
      d="M18.11 19.905a8.96 8.96 0 0 0 3.12-6.807 9 9 0 0 0-9.004-9.004c-2.13 0-4.089.741-5.63 1.98M6.352 19.906a8.96 8.96 0 0 1-3.122-6.807c0-1.441.338-2.802.939-4.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.228 15.067a1.97 1.97 0 1 1 1.971-1.97M16.072 9.27l-2.441 2.44"
    />
  </Svg>
);
export default IconlystDashboard1Broken;
