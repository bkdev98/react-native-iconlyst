import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShuffleSquareTwoTone = ({
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
      d="M16.718 3H8.283C5.336 3 3.5 5.081 3.5 8.026v7.947c0 2.945 1.836 5.026 4.784 5.026h8.434c2.947 0 4.782-2.081 4.782-5.026V8.026C21.5 5.081 19.656 3 16.718 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.363 7.797 1.325 1.324-1.325 1.324M15.363 13.55l1.324 1.325-1.324 1.325"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.688 14.878c-1.57 0-3.401 0-4.449-2.878C11.193 9.12 9.884 9.12 8.314 9.12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.688 9.121c-1.57 0-3.401 0-4.449 2.878-1.046 2.879-2.355 2.879-3.925 2.879"
    />
  </Svg>
);
export default IconlystShuffleSquareTwoTone;
