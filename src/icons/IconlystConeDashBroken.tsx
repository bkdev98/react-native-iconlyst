import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConeDashBroken = ({
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
      d="M12.5 21c-4.351 0-7.88-1.665-7.88-3.719M20.38 17.281c0 1.441-1.737 2.69-4.275 3.308M10.326 13.705c.69-.094 1.42-.143 2.174-.143.7 0 1.378.043 2.024.124M4.62 17.281c0-1.162 1.129-2.2 2.898-2.883M17.479 14.398c1.769.682 2.899 1.72 2.899 2.883"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.994 16.092 11.38 3.717c.493-.956 1.746-.956 2.239 0l1.596 3.094M20.003 16.092 16.81 9.904"
    />
  </Svg>
);
export default IconlystConeDashBroken;
