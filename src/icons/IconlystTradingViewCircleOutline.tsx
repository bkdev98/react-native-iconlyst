import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTradingViewCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.789 8.612a.75.75 0 0 1 .403.981l-2.5 6a.75.75 0 0 1-1.384-.577l2.5-6a.75.75 0 0 1 .98-.404M6.25 9.305a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-5.25H7a.75.75 0 0 1-.75-.75M12.03 9.236a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTradingViewCircleOutline;
