import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMathCalculateBroken = ({
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
      d="M12.534 21H8.316c-2.948 0-4.783-2.081-4.783-5.026V8.026C3.533 5.081 5.368 3 8.316 3h8.435c2.948 0 4.782 2.081 4.782 5.026v7.948c0 2.945-1.844 5.026-4.782 5.026h-.886M15.332 16.643l2.551-2.551m-2.551 0 2.551 2.55M10.79 9.163H7.182m1.804-1.804v3.61M7.71 15.342h3.61M17.3 7.902l-2.552 2.552"
    />
  </Svg>
);
export default IconlystMathCalculateBroken;
