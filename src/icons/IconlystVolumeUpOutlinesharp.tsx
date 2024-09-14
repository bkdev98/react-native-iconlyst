import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeUpOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.606 4.831.428.616a12.33 12.33 0 0 1 0 14.106l-.429.616-1.231-.856.428-.616a10.83 10.83 0 0 0 0-12.394l-.428-.616z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.976 7.472.372.65a8.79 8.79 0 0 1 0 8.758l-.374.65-1.3-.746.373-.65a7.29 7.29 0 0 0 0-7.266l-.373-.651zM11.228 4.237h1.806v16.526h-1.806l-4.126-3.577h-4.85v-.749q-.005-3.938 0-7.874v-.75h4.85zm.306 1.72L7.662 9.315H3.751a4800 4800 0 0 0 0 6.372h3.911l3.872 3.356z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeUpOutlinesharp;
