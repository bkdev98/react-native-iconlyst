import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoopDirectionRepeatSquareHorizontalLight = ({
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
      d="m11.882 3.669 3.016 3.015L11.882 9.7M11.984 14.3 8.97 17.315l3.015 3.016"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.056 17.308A3.056 3.056 0 0 1 3 14.253V9.74a3.055 3.055 0 0 1 3.056-3.056h8.78M17.944 6.684A3.056 3.056 0 0 1 21 9.74v4.513a3.056 3.056 0 0 1-3.056 3.055H9.06"
    />
  </Svg>
);
export default IconlystLoopDirectionRepeatSquareHorizontalLight;
