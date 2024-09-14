import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMxTokenBroken = ({
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
      d="M12.235 17.686h6.957a2.3 2.3 0 0 1-1.953-1.082l-5.923-9.457a1.776 1.776 0 0 0-3.04.052L3.742 15.02c-.686 1.184.168 2.666 1.536 2.666h3.479"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.72 9.379 1.368-2.188a1.775 1.775 0 0 1 3.04.048l2.032 3.499M21.19 14.236c.882 1.537-.227 3.451-1.999 3.451"
    />
  </Svg>
);
export default IconlystMxTokenBroken;
