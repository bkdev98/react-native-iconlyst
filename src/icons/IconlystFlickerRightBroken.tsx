import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlickerRightBroken = ({
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
      d="M4.543 13.528a6.4 6.4 0 0 1 .745-2.114l1.688-2.928a1.166 1.166 0 0 1 1.593-.427 2.04 2.04 0 0 1 .747 2.787l-.035.06M14.489 19.893a6.425 6.425 0 0 1-9.805-3.627M16.936 10.512c.436-.758 1.445-1.022 2.195-.59a1.63 1.63 0 0 1 .589 2.196l-3.302 5.722M8.152 12.87l3.75-6.499a1.607 1.607 0 1 1 2.784 1.606"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.008 12.619 15.4 6.746a1.6 1.6 0 0 1 .975-.75 1.605 1.605 0 0 1 1.692.574 1.6 1.6 0 0 1 .117 1.782l-3.391 5.873M8.146 3l1.62 1.051-1.051 1.621"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.767 4.05c-1.898.102-4.427.939-5.695 2.914"
    />
  </Svg>
);
export default IconlystFlickerRightBroken;
