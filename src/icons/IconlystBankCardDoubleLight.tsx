import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardDoubleLight = ({
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
      d="M18.438 7.586H9.386c-2.189 0-3.562 1.55-3.562 3.745v5.92c0 2.195 1.366 3.745 3.562 3.745h9.05c2.198 0 3.564-1.55 3.564-3.745v-5.92c0-2.195-1.366-3.745-3.562-3.745"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.372 12.048h9.075M18.085 7.584 16.5 4.94c-1.136-1.872-3.101-2.503-4.987-1.366L3.762 8.24c-1.878 1.128-2.256 3.164-1.128 5.05l3.062 5.066q.212.367.48.664v.007"
    />
  </Svg>
);
export default IconlystBankCardDoubleLight;
