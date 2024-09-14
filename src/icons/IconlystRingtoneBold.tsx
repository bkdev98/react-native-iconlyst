import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.043 11.125c-.4-.695-.778-1.351-.778-2.901 0-2.825-2.517-5.849-6.265-5.849s-6.265 3.024-6.265 5.85c0 1.55-.379 2.207-.779 2.901-.389.676-.791 1.374-.791 2.746q0 .02.002.041c.259 3.114 3.068 3.723 7.833 3.723 4.764 0 7.574-.609 7.835-3.764 0-1.373-.402-2.072-.792-2.747M14.135 19.1H9.933a.75.75 0 0 0-.586 1.218 3.43 3.43 0 0 0 2.683 1.306 3.44 3.44 0 0 0 2.69-1.306.749.749 0 0 0-.585-1.219"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneBold;
