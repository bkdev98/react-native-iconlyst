import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailEditBroken = ({
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
      d="M11.497 19.499H7.366C4.758 19.505 3 17.363 3 14.729V8.84c0-2.632 1.758-4.776 4.366-4.776h.83M20.15 10.441V8.84c0-2.633-1.758-4.777-4.365-4.777h-4.21M20.004 16.847l.744-.812a.95.95 0 0 0-.052-1.34l-.634-.587a.95.95 0 0 0-1.34.052l-3.008 3.283c-.23.26-.375.582-.412.926l-.077.713a.773.773 0 0 0 .897.845l.69-.115c.371-.063.71-.25.96-.53l.504-.549"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.637 9.08-3.81 3.099c-.719.57-1.734.57-2.453 0L6.531 9.08"
    />
  </Svg>
);
export default IconlystEmailEditBroken;
