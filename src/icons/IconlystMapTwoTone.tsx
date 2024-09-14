import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapTwoTone = ({
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
      d="M8.282 3h8.435C19.665 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.835 5.026-4.784 5.026H8.282C5.334 21 3.5 18.919 3.5 15.974V8.025C3.5 5.081 5.343 3 8.282 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.497 10.307-10.07-2.073m0 0L3.661 6.63m7.764 1.605L9.023 21"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMapTwoTone;
