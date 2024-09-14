import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsLeftSquareLight = ({
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
      d="m11.056 13.426-2.131 2.139m0 0 2.13 2.138m-2.13-2.138H21M11.056 6.298 8.925 8.436m0 0 2.13 2.139m-2.13-2.139H21M3 7.782v8.435C3 19.165 5.082 21 8.027 21h7.947C18.92 21 21 19.165 21 16.216V7.782C21 4.834 18.92 3 15.974 3H8.027C5.082 3 3 4.843 3 7.782"
    />
  </Svg>
);
export default IconlystArrowsLeftSquareLight;
