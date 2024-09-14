import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBadooSquareLight = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.364 8v.001c1.178.019 2.174.836 2.512 1.914.209.67.13 1.408-.056 2.073-.644 2.303-2.91 4.008-4.82 4.008s-4.177-1.705-4.82-4.008c-.186-.665-.265-1.404-.056-2.073.337-1.078 1.334-1.896 2.513-1.914A2.53 2.53 0 0 1 12 9.483 2.54 2.54 0 0 1 14.364 8"
    />
  </Svg>
);
export default IconlystBadooSquareLight;
