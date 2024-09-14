import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeBroken = ({
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
      d="M9.35 11.753c-1 2.03-2.199 3.805-3.605 5.317h3.319M6.766 11.753C8.904 9.247 10.743 6.266 12.383 3c1.638 3.266 3.478 6.247 5.616 8.753M15.416 11.753c1 2.03 2.2 3.805 3.604 5.317h-6.637M12.385 12.4V21"
    />
  </Svg>
);
export default IconlystTreeBroken;
