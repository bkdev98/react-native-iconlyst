import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBinanceBnbBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.5C7.262 2.5 3 6.762 3 12s4.262 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.457 12.71a.75.75 0 0 0 .623-1.166l-.007-.01a.744.744 0 0 0-1.037-.203.755.755 0 0 0 .421 1.379M15.5 10.75a.749.749 0 0 0 .53-1.28l-3-3a.75.75 0 0 0-1.06 0l-3 3a.749.749 0 1 0 1.06 1.06l2.47-2.47 2.47 2.47c.146.147.338.22.53.22M13.073 11.534a.744.744 0 0 0-1.037-.203.755.755 0 0 0 .421 1.379.75.75 0 0 0 .623-1.166zM13.03 17.53l3-3a.749.749 0 1 0-1.06-1.06l-2.47 2.469-2.47-2.47a.749.749 0 1 0-1.06 1.06l3 3c.146.148.338.22.53.22a.74.74 0 0 0 .53-.22M7.544 12.796a.75.75 0 0 0 .432-.137.755.755 0 0 0 .181-1.05.749.749 0 1 0-1.228.86l.006.01a.74.74 0 0 0 .61.317"
    />
  </Svg>
);
export default IconlystBinanceBnbBulk;
