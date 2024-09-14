import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraBrokencurved = ({
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
      d="M15.019 14.372a3.145 3.145 0 1 0-2.768 1.65"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 20.579c8.046 0 9.004-2.41 9.004-7.633 0-3.662-.485-5.62-3.534-6.463a1.9 1.9 0 0 1-.842-.533c-.406-.446-.703-1.813-1.684-2.227-.981-.412-4.921-.393-5.887 0-.964.395-1.278 1.78-1.684 2.227a1.9 1.9 0 0 1-.842.533c-3.05.843-3.534 2.8-3.534 6.463 0 3.728.488 6.023 3.693 7.03M17.162 9.379h.009"
    />
  </Svg>
);
export default IconlystCameraBrokencurved;
