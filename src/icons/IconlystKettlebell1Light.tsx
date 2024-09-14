import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKettlebell1Light = ({
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
      d="M16.888 18.976A6.913 6.913 0 1 1 7.11 9.199a6.913 6.913 0 0 1 9.777 9.777"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.788 8.272c.537-.824 1.532-3.715-.994-4.69-1.712-.779-3.872-.773-5.586 0-2.526.975-1.532 3.866-.995 4.69M9.799 16.503v-4.816l-1.002.859"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.724 16.594a1.48 1.48 0 0 1-1.48-1.48v-2.04a1.48 1.48 0 1 1 2.96 0v2.04a1.48 1.48 0 0 1-1.48 1.48"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKettlebell1Light;
