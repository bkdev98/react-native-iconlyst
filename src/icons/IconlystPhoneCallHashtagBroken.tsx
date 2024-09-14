import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallHashtagBroken = ({
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
      d="M8.856 15.599C.68 7.425 4.217 5.096 4.51 4.73c2.93-2.93 3.385-1.596 5.692.71 2.392 2.393-2.217 3.513 1.541 7.27s4.876-.855 7.269 1.536c2.307 2.308 3.633 2.769.71 5.692-.334.267-2.297 3.234-8.837-2.44M21.02 7.217h-5.606M21.5 4.494h-5.605M16.613 8.62l.922-5.53M19.379 8.62l.921-5.53"
    />
  </Svg>
);
export default IconlystPhoneCallHashtagBroken;
