import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFoodPlateTwoTone = ({
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
      d="M20.474 10.901c.611 0 1.092.537 1.019 1.145a9.3 9.3 0 0 1-.413 1.838 9.47 9.47 0 0 1-4.373 5.274 4 4 0 0 1-1.94.486h-4.533a4 4 0 0 1-1.946-.489 9.44 9.44 0 0 1-4.78-7.116A1.025 1.025 0 0 1 4.525 10.9z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.186 10.898a4.045 4.045 0 0 0-.502-2.558 4.062 4.062 0 0 0-7.55 2.558"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.408 10.898v-.02c0-.932.622-1.727 1.471-1.99"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.686 8.34a3.42 3.42 0 0 1 2.264-.852 3.47 3.47 0 0 1 3.467 3.41"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.835 4.356-1.697 3.23M12.867 4.502l.817 3.838"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFoodPlateTwoTone;
