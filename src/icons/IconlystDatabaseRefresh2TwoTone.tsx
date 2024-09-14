import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseRefresh2TwoTone = ({
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
      d="M11.956 9.03c4.047 0 7.327-1.323 7.327-2.955s-3.28-2.956-7.327-2.956S4.63 4.443 4.63 6.075s3.28 2.956 7.327 2.956Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.629 6.066v11.702s0 2.608 6.203 2.9M19.283 10.934V6.049"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.832 14.81c-6.203-.292-6.203-2.9-6.203-2.9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.325 19.065h-1.954v1.817M20.371 14.285v1.954h-1.953"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.441 16.084a3.16 3.16 0 0 1 2.756-1.594c2.12 0 3.174 1.76 3.174 1.76M19.94 19.248a3.17 3.17 0 0 1-2.745 1.582c-1.75 0-2.824-1.758-2.824-1.758"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDatabaseRefresh2TwoTone;
