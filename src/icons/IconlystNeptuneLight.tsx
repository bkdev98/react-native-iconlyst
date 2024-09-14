import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNeptuneLight = ({
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
      d="M12.911 14.218a13 13 0 0 0 7.983-3.3M8.382 17.316a14.71 14.71 0 0 0 12.15-2.08M19.44 6.892a9.92 9.92 0 0 1-9.347 2.333A9.9 9.9 0 0 1 5.312 6.31M10.265 5.932a7.52 7.52 0 0 0 6.792-1.506M3.293 10.67a12.9 12.9 0 0 0 5.578 3.12"
    />
  </Svg>
);
export default IconlystNeptuneLight;
