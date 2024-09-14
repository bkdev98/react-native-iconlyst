import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseReloadLight = ({
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
      d="M11.373 8.822c4.047 0 7.327-1.324 7.327-2.956S15.42 2.91 11.373 2.91 4.046 4.234 4.046 5.866s3.28 2.956 7.327 2.956Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.046 11.684v5.85s0 2.603 6.191 2.896M18.7 11.686v-5.85"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.237 14.579c-6.191-.293-6.191-2.897-6.191-2.897v-5.85M15.21 15.289a3.126 3.126 0 1 0 4.745 2.676c0-1.223-.702-2.28-1.723-2.795"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.231 16.9v-1.73h1.721"
    />
  </Svg>
);
export default IconlystDatabaseReloadLight;
