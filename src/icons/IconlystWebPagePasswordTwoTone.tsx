import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPagePasswordTwoTone = ({
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
      d="M8.101 3h8.434c2.948 0 4.782 2.082 4.782 5.027v7.946c0 2.946-1.834 5.027-4.782 5.027H8.1c-2.948 0-4.783-2.081-4.783-5.027V8.027C3.318 5.082 5.162 3 8.101 3M8.924 14.112 6.98 16.058m1.945 0L6.98 14.112M13.292 14.112l-1.946 1.946m1.945 0-1.945-1.946M17.659 14.112l-1.946 1.946m1.946 0-1.946-1.946"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.317 9.492H3.318M6.663 6.55h-.056m2.542 0h-.055m2.54 0h-.055"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebPagePasswordTwoTone;
