import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseReloadTwoTone = ({
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
      d="M11.873 8.822c4.047 0 7.327-1.324 7.327-2.956S15.92 2.91 11.873 2.91 4.546 4.234 4.546 5.866s3.28 2.956 7.327 2.956Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.546 5.966v11.567s0 2.603 6.191 2.896M19.2 11.686v-5.85"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.737 14.579c-6.191-.293-6.191-2.896-6.191-2.896M15.71 15.289a3.126 3.126 0 1 0 4.745 2.676c0-1.223-.702-2.28-1.723-2.795"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.731 16.9v-1.73h1.721"
    />
  </Svg>
);
export default IconlystDatabaseReloadTwoTone;
