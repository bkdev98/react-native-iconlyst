import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdateRightOutline = ({
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
      d="M4.736 11.262a.75.75 0 0 1 .563.113l2.79 1.871a.75.75 0 0 1-.834 1.246l-2.168-1.453-1.464 2.183a.75.75 0 1 1-1.246-.835l1.881-2.806a.75.75 0 0 1 .478-.319M21.418 8.568a.75.75 0 0 1 .205 1.041l-1.88 2.807a.75.75 0 0 1-1.041.205l-2.791-1.87a.75.75 0 1 1 .835-1.247l2.168 1.453 1.463-2.183a.75.75 0 0 1 1.041-.206"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.897 11.403a.75.75 0 0 1 .765.734 6.341 6.341 0 0 0 11.56 3.464.75.75 0 1 1 1.234.852 7.841 7.841 0 0 1-14.294-4.285.75.75 0 0 1 .735-.765M5.545 7.545A7.841 7.841 0 0 1 19.84 11.83a.75.75 0 0 1-1.5.032A6.341 6.341 0 0 0 6.78 8.398a.75.75 0 0 1-1.234-.853"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpdateRightOutline;
