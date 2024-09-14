import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseServerBroken = ({
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
      d="M12 11.676c6.575 0 6.575-2.602 6.575-2.602v-3.47M5.425 5.604v3.47s0 1.733 3.576 2.37"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.424 9.074v3.47s0 2.604 6.575 2.604 6.576-2.604 6.576-2.604v-3.47M12 3C8.367 3 5.423 4.163 5.423 5.597c0 1.435 2.944 2.598 6.575 2.598s6.576-1.163 6.576-2.598c0-.829-.983-1.567-2.514-2.042"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.595 19.403a1.597 1.597 0 1 1-3.194 0 1.597 1.597 0 0 1 3.194 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.201 19.402h-4.628m-3.155 0H5.8M11.999 17.802v-2.644"
    />
  </Svg>
);
export default IconlystDatabaseServerBroken;
