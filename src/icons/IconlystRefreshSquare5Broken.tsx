import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshSquare5Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.914 12.364V8.737c0-2.604-1.63-4.444-4.228-4.444H7.229C4.622 4.293 3 6.133 3 8.737v3.513M18.914 15.766c0 2.604-1.621 4.443-4.228 4.443H7.23c-2.608 0-4.23-1.84-4.23-4.443"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 10.258-2.106 2.105-2.093-2.093"
    />
  </Svg>
);
export default IconlystRefreshSquare5Broken;
