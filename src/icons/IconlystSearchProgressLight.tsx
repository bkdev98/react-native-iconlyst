import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchProgressLight = ({
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
      d="M20.05 11.418A8.417 8.417 0 0 0 11.632 3a8.418 8.418 0 1 0 8.418 8.418M17.361 17.584 20.786 21M8.925 14.537h3.22m2.198 0h.364m0-5.996H11.5m-2.197 0h-.377M7.777 11.54h8.078"
    />
  </Svg>
);
export default IconlystSearchProgressLight;
