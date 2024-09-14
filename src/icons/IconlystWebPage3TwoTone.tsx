import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPage3TwoTone = ({
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
      d="M8.101 3h8.435c2.948 0 4.782 2.081 4.782 5.026v7.948c0 2.945-1.834 5.026-4.783 5.026H8.101c-2.948 0-4.783-2.081-4.783-5.026V8.026C3.318 5.081 5.162 3 8.101 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.589 16.778a2.595 2.595 0 1 0 3.67-3.668 2.595 2.595 0 0 0-3.67 3.668"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.258 16.778-1.835-1.835v-2.595"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.611 13.499h3.197m-3.197 2.83h2.456"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.318 9.491h-18M6.663 6.55h-.056m2.542 0h-.056m2.542 0h-.055"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebPage3TwoTone;
