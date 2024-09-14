import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHemisphereBroken = ({
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
      d="M6.492 18.008c-3.99-3.99-3.99-10.46 0-14.45M20.941 18.008A10.22 10.22 0 0 1 9.66 20.163"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.606 7.894c3.99 3.99 5.931 8.518 4.335 10.114s-6.124-.345-10.115-4.335c-3.99-3.99-5.93-8.518-4.334-10.114C7.64 2.412 10.3 3.09 13.187 5.045"
    />
  </Svg>
);
export default IconlystHemisphereBroken;
