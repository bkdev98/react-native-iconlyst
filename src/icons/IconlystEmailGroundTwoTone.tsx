import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailGroundTwoTone = ({
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
      d="m7.002 19.594-2.704-4.258c-1.33-2.105-1.012-4.704 1.07-6.021l6.704-4.27c2.093-1.318 4.575-.507 5.905 1.587l2.717 4.293c1.34 2.106 1.023 4.705-1.059 6.011l-3.963 2.517"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.777 8.947-1.279 3.829a1.62 1.62 0 0 1-1.701 1.08l-4.031-.455M3.5 19.593h18"
    />
  </Svg>
);
export default IconlystEmailGroundTwoTone;
