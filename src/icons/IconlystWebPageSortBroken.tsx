import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageSortBroken = ({
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
      d="M21.817 12.08V8.026C21.817 5.08 19.983 3 17.035 3H8.602C5.662 3 3.82 5.08 3.82 8.026v3.973M3.82 15.973c0 2.944 1.834 5.025 4.782 5.025h1.75M14.533 14.18v6.32m0-6.32-1.748 1.686m1.748-1.686 1.748 1.686M19.746 21v-6.32m1.747 4.635L19.745 21l-1.747-1.686M18.963 9.49H3.82M7.163 6.549h-.056m2.542 0h-.055m2.54 0h-.055"
    />
  </Svg>
);
export default IconlystWebPageSortBroken;
