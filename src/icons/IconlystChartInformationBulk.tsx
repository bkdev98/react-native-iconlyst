import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartInformationBulk = ({
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
      d="M16.218 2.5H7.784C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.284 5.53h8.433c3.16 0 5.283-2.223 5.283-5.53V8.03c0-3.307-2.122-5.53-5.282-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.994 17.44 3.808-3.28a.75.75 0 1 0-.98-1.138l-3.312 2.855-2.068-1.82a.75.75 0 0 0-.942-.039l-3.374 2.5a.75.75 0 1 0 .893 1.205l2.887-2.139 2.104 1.85a.75.75 0 0 0 .984.005M6.69 9.84a.75.75 0 0 0 0 1.5h3.945a.75.75 0 0 0 0-1.5zm2.483-3H6.69a.75.75 0 0 0 0 1.5h2.483a.75.75 0 0 0 0-1.5m8.777 1.85a2.416 2.416 0 0 0-4.831 0 2.42 2.42 0 0 0 2.415 2.42 2.42 2.42 0 0 0 2.416-2.42m-1.5 0a.92.92 0 0 1-.916.92.92.92 0 0 1-.915-.92c0-.502.41-.91.915-.91s.916.408.916.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartInformationBulk;
