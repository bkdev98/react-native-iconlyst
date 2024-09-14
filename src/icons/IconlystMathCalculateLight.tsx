import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMathCalculateLight = ({
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
      d="M16.501 21H8.066c-2.948 0-4.783-2.081-4.783-5.026V8.026C3.283 5.081 5.118 3 8.066 3h8.435c2.948 0 4.782 2.081 4.782 5.026v7.948c0 2.945-1.844 5.026-4.782 5.026M15.082 16.643l2.551-2.551m-2.551 0 2.551 2.55M10.54 9.163H6.932m1.804-1.804v3.61M7.46 15.342h3.61M17.05 7.902l-2.552 2.552"
    />
  </Svg>
);
export default IconlystMathCalculateLight;
