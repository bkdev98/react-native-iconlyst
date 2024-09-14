import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerEnergyBroken = ({
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
      d="M12.007 3.148v.032M5.663 5.786l.02.02m12.649 0 .045-.046m-6.37 15.366v-.032m-6.344-2.606.02-.02m-2.634-6.325H3m18 0h-.043m-2.625 6.326.045.045M18 12.136a6 6 0 1 1-1.083-3.44"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.988 15.137 1.94-3h-3.857l1.938-3"
    />
  </Svg>
);
export default IconlystPowerEnergyBroken;
