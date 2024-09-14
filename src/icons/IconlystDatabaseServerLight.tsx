import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseServerLight = ({
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
      d="M5.425 5.604v3.47s0 2.602 6.575 2.602 6.576-2.602 6.576-2.602v-3.47"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.424 9.073v3.47s0 2.604 6.575 2.604 6.576-2.604 6.576-2.604v-3.47"
    />
    <Ellipse
      cx={11.999}
      cy={5.597}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={6.575}
      ry={2.597}
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
      d="M18.201 19.403h-4.628m-3.155 0H5.8M11.999 17.802v-2.644"
    />
  </Svg>
);
export default IconlystDatabaseServerLight;
