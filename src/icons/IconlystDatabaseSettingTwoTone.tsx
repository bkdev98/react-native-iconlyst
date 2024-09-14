import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseSettingTwoTone = ({
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
      d="M11.566 8.912c4.046 0 7.327-1.324 7.327-2.956 0-1.633-3.28-2.956-7.327-2.956S4.238 4.323 4.238 5.956c0 1.632 3.28 2.956 7.328 2.956Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.238 6.124v11.398s0 2.917 7.37 2.917M18.892 10.896V5.852"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.238 11.687s0 2.917 7.37 2.917M17.788 14.13v1.146m0 0a2.29 2.29 0 0 0 0 4.579m0-4.58a2.29 2.29 0 0 1 0 4.58m0 0v1.144m-2.973-5.15.99.572m3.965 2.29.99.571m-5.946 0 .992-.572m3.964-2.288.99-.572"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDatabaseSettingTwoTone;
