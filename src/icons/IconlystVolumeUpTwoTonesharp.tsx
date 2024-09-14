import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeUpTwoTonesharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M19.418 5.375a11.58 11.58 0 0 1 0 13.25M16.697 7.995a8.04 8.04 0 0 1 0 8.012"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M7.382 15.936h-4.38q-.005-3.936 0-7.872h4.38l4.126-3.577h.776v15.026h-.776z"
    />
  </Svg>
);
export default IconlystVolumeUpTwoTonesharp;
