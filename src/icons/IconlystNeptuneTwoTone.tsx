import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNeptuneTwoTone = ({
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
      strokeWidth={1.5}
      d="M3.114 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20.315 8.683a12.97 12.97 0 0 1-10.87 5.886 12.9 12.9 0 0 1-6.196-1.571M21.083 12.948A14.71 14.71 0 0 1 9.885 18.1c-1.767 0-3.46-.311-5.03-.88M17.87 5.17a9.92 9.92 0 0 1-8.426 4.672c-1.98 0-3.824-.58-5.373-1.578M14.929 3.404a7.52 7.52 0 0 1-6.171 3.213 7.5 7.5 0 0 1-3.195-.71"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNeptuneTwoTone;
