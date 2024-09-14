import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAdmanagerLight = ({
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
      strokeWidth={1.5}
      d="m7.415 14.449 7.034-7.034a1.658 1.658 0 1 1 2.344 2.345L9.76 16.793a1.658 1.658 0 0 1-2.345-2.344Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.95 10.915a1.658 1.658 0 1 1 2.345 2.344 1.658 1.658 0 0 1-2.345-2.344ZM3.486 10.52l7.033-7.034a1.658 1.658 0 1 1 2.345 2.344L5.83 12.864a1.658 1.658 0 0 1-2.344-2.345Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.519 3.486a1.658 1.658 0 1 1 2.344 2.344 1.658 1.658 0 0 1-2.344-2.344ZM11.136 18.168l7.034-7.034a1.658 1.658 0 0 1 2.344 2.345l-7.033 7.033a1.658 1.658 0 1 1-2.345-2.344Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.136 18.17a1.658 1.658 0 1 1 2.345 2.343 1.658 1.658 0 0 1-2.345-2.344Z"
    />
  </Svg>
);
export default IconlystGoogleAdmanagerLight;
