import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeat1Light = ({
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
      d="M10.268 6.388h5.119c1.542 0 2.947.629 3.965 1.647A5.57 5.57 0 0 1 20.999 12a5.57 5.57 0 0 1-1.311 3.598M12.768 14.988l2.622 2.622-2.622 2.623"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.389 17.613H8.61a5.6 5.6 0 0 1-3.965-1.647A5.58 5.58 0 0 1 3 12M6.016 9.01V3.767L3.918 4.815"
    />
  </Svg>
);
export default IconlystRepeat1Light;
