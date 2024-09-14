import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlickerRightTwoTone = ({
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
      d="M17.436 10.512a1.63 1.63 0 0 1 2.195-.589 1.63 1.63 0 0 1 .59 2.196l-3.303 5.721a6.427 6.427 0 0 1-11.13-6.426l1.688-2.928a1.166 1.166 0 0 1 1.593-.427 2.04 2.04 0 0 1 .747 2.787l-.035.061"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.652 12.869 3.75-6.498a1.608 1.608 0 0 1 2.784 1.606M12.508 12.619 15.9 6.746a1.607 1.607 0 1 1 2.784 1.606l-3.391 5.873M8.646 3l1.62 1.051-1.05 1.62"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.267 4.05c-1.898.102-4.427.939-5.695 2.914"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFlickerRightTwoTone;
