import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarStarShiningLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.804 14.536a5.18 5.18 0 0 0 3.446 3.446 5.18 5.18 0 0 0-3.446 3.446 5.18 5.18 0 0 0-3.447-3.446 5.18 5.18 0 0 0 3.447-3.446M14.648 12.074h1.634M6.574 12.074h1.634M3.254 8.268c5.42.768 10.92.768 16.34 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.611 11.826c0-.737-.235-1.455-.671-2.05l-1.06-1.422a1.6 1.6 0 0 1-.203-.388l-.954-2.65A2.04 2.04 0 0 0 15.151 4a23.9 23.9 0 0 0-7.428 0 2.04 2.04 0 0 0-1.564 1.316l-.954 2.65q-.075.2-.203.37L3.925 9.82a3.44 3.44 0 0 0-.654 2.023l-.015 4.733a.91.91 0 0 0 .91.912h1.8a.91.91 0 0 0 .91-.91v-.372a.91.91 0 0 1 .91-.91h4.475"
    />
  </Svg>
);
export default IconlystCarStarShiningLight;
