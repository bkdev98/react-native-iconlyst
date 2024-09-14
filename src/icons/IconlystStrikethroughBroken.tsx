import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStrikethroughBroken = ({
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
      d="M12.25 21h3.974c2.945 0 5.026-1.835 5.026-4.783V7.782C21.25 4.842 19.169 3 16.224 3H8.276C5.331 3 3.25 4.834 3.25 7.782v8.434C3.25 19.165 5.331 21 8.276 21h.353"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.557 14.422c0 1.338 1.207 2.421 2.694 2.421 1.49 0 2.695-1.083 2.695-2.421 0-1.44-1.04-1.997-2.193-2.422M8.018 12h8.468M9.765 10.063q-.06-.236-.06-.485c0-1.337 1.057-2.422 2.546-2.422 1.144 0 2.032.641 2.383 1.545"
    />
  </Svg>
);
export default IconlystStrikethroughBroken;
