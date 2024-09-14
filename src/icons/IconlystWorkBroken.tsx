import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorkBroken = ({
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
      d="M11.995 16.677V14.14M12 5.33h6.19c1.69 0 3.05 1.37 3.05 3.06v3.44c-2.46 1.44-5.71 2.31-9.25 2.31s-6.78-.87-9.24-2.31V8.38c0-1.69 1.37-3.05 3.06-3.05H8.5M15.495 5.326V4.96c0-1.22-.99-2.21-2.21-2.21h-2.58c-1.22 0-2.21.99-2.21 2.21v.366M21.216 15.483l-.19 2.509a3.24 3.24 0 0 1-3.231 2.998h-5.8M2.774 15.483l.19 2.509a3.24 3.24 0 0 0 3.231 2.998h1.9"
    />
  </Svg>
);
export default IconlystWorkBroken;
