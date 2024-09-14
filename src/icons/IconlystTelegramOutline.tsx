import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelegramOutline = ({
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
      d="M20.245 5.065a.16.16 0 0 0-.218-.184L3.882 11.488c-.067.028-.094.062-.109.089a.23.23 0 0 0-.02.136c.006.055.029.098.055.126.02.022.056.048.128.057l4.297.545a.75.75 0 0 1 .64.595l.874 4.3 1.654-1.412-1.08-1.08a.75.75 0 0 1 1.06-1.06l1.567 1.566a.8.8 0 0 1 .175.175l3.538 3.537a.246.246 0 0 0 .414-.12zm-7.78 11.923-1.79 1.529a1.465 1.465 0 0 1-2.385-.822l-.78-3.834-3.763-.477C2 13.162 1.686 10.766 3.314 10.1L19.46 3.493c1.245-.51 2.548.595 2.248 1.907l-3.17 13.876c-.305 1.34-1.967 1.817-2.937.846z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.052 7.855a.75.75 0 0 1-.204 1.04l-7.29 4.91a.75.75 0 0 1-.838-1.245l7.29-4.909a.75.75 0 0 1 1.042.204"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTelegramOutline;
