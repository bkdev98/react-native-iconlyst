import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExpressionlessBold = ({
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
      d="M15.544 10.092h-1.771a.75.75 0 1 1 0-1.5h1.771a.75.75 0 0 1 0 1.5m-.663 5.52H9.12a.75.75 0 0 1 0-1.5h5.761a.75.75 0 1 1 0 1.5m-7.174-6.27a.75.75 0 0 1 .75-.75h1.772a.75.75 0 0 1 0 1.5H8.457a.75.75 0 0 1-.75-.75M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExpressionlessBold;
