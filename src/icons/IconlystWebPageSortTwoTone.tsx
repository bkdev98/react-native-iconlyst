import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageSortTwoTone = ({
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
      d="M21.317 12.08V8.026C21.317 5.08 19.484 3 16.536 3H8.102C5.162 3 3.32 5.08 3.32 8.026v7.946c0 2.944 1.834 5.025 4.782 5.025h1.75M14.033 14.179v6.32m0-6.32-1.748 1.686m1.748-1.686 1.748 1.686"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.246 20.998v-6.32m1.747 4.636L19.245 21l-1.747-1.686M21.317 9.491H3.32M6.663 6.55h-.056m2.542 0h-.055m2.54 0h-.055"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebPageSortTwoTone;
