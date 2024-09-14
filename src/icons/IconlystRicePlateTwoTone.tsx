import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRicePlateTwoTone = ({
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
      d="M20.486 12.16c.604 0 1.078.529 1.006 1.128a9.3 9.3 0 0 1-.407 1.816 9.34 9.34 0 0 1-4.318 5.206 3.94 3.94 0 0 1-1.914.48h-4.475c-.669 0-1.335-.157-1.92-.483a9.31 9.31 0 0 1-4.72-7.024 1.012 1.012 0 0 1 1.007-1.123z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.046 9.767a1.655 1.655 0 0 0-2.806-.097"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.633 8.556a1.93 1.93 0 0 0-2.587-2.007M20.428 12.159a1.93 1.93 0 0 0-1.892-2.125"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.036 10.107.065-.34a1.655 1.655 0 0 0-1.255-1.974 1.63 1.63 0 0 0-1.05.119l-.187.094M4.84 12.16a1.845 1.845 0 0 1 .732-2.504c.728-.399 1.704-.314 2.27.236-.115-.78.19-1.662.739-2.311a2.85 2.85 0 0 1 2.485-.995 1.845 1.845 0 1 1 3.665-.412l.028.258"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.082 3.21.76 6.682L3.5 4.535"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRicePlateTwoTone;
