import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePhotosSquareLight = ({
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
      d="M9.25 8.484a2.75 2.75 0 0 1 2.75 2.75v.767H6.5v-.767a2.75 2.75 0 0 1 2.75-2.75M14.75 15.517a2.75 2.75 0 0 1-2.75-2.75V12h5.5v.767a2.75 2.75 0 0 1-2.75 2.75"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.482 14.75a2.75 2.75 0 0 1 2.75-2.75H12v5.5h-.767a2.75 2.75 0 0 1-2.75-2.75M15.516 9.25a2.75 2.75 0 0 1-2.75 2.75H12V6.5h.766a2.75 2.75 0 0 1 2.75 2.75"
    />
  </Svg>
);
export default IconlystGooglePhotosSquareLight;
