import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomOutline = ({
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
      d="M12 14.675c.199 0 .39.08.531.22l2.097 2.107a.75.75 0 0 1-1.063 1.058l-.816-.819V20a.75.75 0 1 1-1.5 0V17.24l-.815.82A.75.75 0 0 1 9.37 17l2.097-2.105a.75.75 0 0 1 .531-.221M12 3.25a.75.75 0 0 1 .75.75v2.76l.817-.82a.75.75 0 0 1 1.062 1.058l-2.097 2.106a.75.75 0 0 1-1.063 0L9.373 6.998a.75.75 0 0 1 1.063-1.058l.815.819V4a.75.75 0 0 1 .75-.75M5.938 9.373a.75.75 0 0 1 1.06-.002l2.106 2.097a.75.75 0 0 1 0 1.063L7 14.627a.75.75 0 1 1-1.059-1.062l.819-.816H4a.75.75 0 0 1 0-1.5h2.76l-.82-.815a.75.75 0 0 1-.002-1.06M18.063 9.377a.75.75 0 0 1-.002 1.06l-.819.816h2.759a.75.75 0 0 1 0 1.5h-2.76l.82.816a.75.75 0 0 1-1.058 1.062l-2.106-2.097a.75.75 0 0 1 0-1.063l2.106-2.096a.75.75 0 0 1 1.06.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystZoomOutline;
