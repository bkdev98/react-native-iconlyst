import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelerOutline = ({
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
      fill={props.color}
      d="M13.562 21.748a9.749 9.749 0 1 1 6.9-16.64.75.75 0 0 1 0 1.06l-2.635 2.635a.75.75 0 0 1-1.06 0 4.525 4.525 0 1 0 0 6.4.747.747 0 0 1 1.06 0l2.635 2.634a.75.75 0 0 1 0 1.061 9.73 9.73 0 0 1-6.9 2.85m0-17.992a8.249 8.249 0 1 0 5.282 14.582l-1.583-1.583a6.024 6.024 0 1 1 0-9.513l1.583-1.583a8.22 8.22 0 0 0-5.282-1.903"
    />
  </Svg>
);
export default IconlystCelerOutline;
