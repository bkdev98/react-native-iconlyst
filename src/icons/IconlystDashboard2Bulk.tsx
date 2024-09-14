import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard2Bulk = ({
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
      fill={props.color}
      d="M3.48 12c0 5.238 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5-9.5 4.262-9.5 9.5"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M7.075 12a.75.75 0 0 0 1.5 0 4.41 4.41 0 0 1 4.405-4.404.75.75 0 0 0 0-1.5A5.91 5.91 0 0 0 7.075 12"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.921 12c0 1.136.925 2.06 2.061 2.06a2.063 2.063 0 0 0 1.936-2.764l2.169-2.17a.749.749 0 1 0-1.06-1.06l-2.102 2.102A2.064 2.064 0 0 0 10.921 12m1.5 0a.56.56 0 1 1 1.122 0 .56.56 0 0 1-1.122 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.981 17.905a.75.75 0 0 1 0-1.5 4.41 4.41 0 0 0 4.405-4.406.75.75 0 0 1 1.5 0 5.91 5.91 0 0 1-5.905 5.905M9.556 16.81a.75.75 0 1 0 .873-1.22 4.4 4.4 0 0 1-.938-.903.75.75 0 0 0-1.187.917c.354.459.775.865 1.252 1.206"
    />
  </Svg>
);
export default IconlystDashboard2Bulk;
