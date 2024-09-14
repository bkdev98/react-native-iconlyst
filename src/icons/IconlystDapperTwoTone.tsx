import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDapperTwoTone = ({
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
      d="M19.305 17.11v-4.221a7.902 7.902 0 0 0-15.805 0v4.221a3.464 3.464 0 0 0 3.45 3.464h8.891a3.464 3.464 0 0 0 3.464-3.464M21.5 5.756l-1.316 1.317M18.1 4l-.18.937"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.11 14.098a1.976 1.976 0 1 0 0-3.952 1.976 1.976 0 0 0 0 3.952M14.694 14.098a1.976 1.976 0 1 0 0-3.951 1.976 1.976 0 0 0 0 3.95"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDapperTwoTone;
