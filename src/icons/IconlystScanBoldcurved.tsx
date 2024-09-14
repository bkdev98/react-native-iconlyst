import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanBoldcurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.945 11.115h12.81c-.4-3.49-2.23-4.78-6.4-4.78s-6 1.29-6.41 4.78M22.815 12.615H1.685c-.41 0-.75.34-.75.75s.34.75.75.75h.62c.04.64.09 1.26.19 1.8v.04c.63 3.76 2.6 5.71 6.38 6.34.04.01.09.01.13.01.36 0 .67-.26.74-.63a.76.76 0 0 0-.62-.86c-3.19-.53-4.63-1.98-5.15-5.15-.01-.02-.01-.03-.01-.05-.08-.45-.12-.96-.16-1.5h2.1c.31 3.82 2.11 5.22 6.45 5.22s6.14-1.4 6.45-5.22h1.88c-.03.55-.08 1.08-.16 1.55v.04c-.53 3.15-1.98 4.58-5.15 5.11-.41.07-.68.46-.61.86.06.37.37.63.73.63.05 0 .09 0 .13-.01 3.8-.63 5.77-2.6 6.39-6.39v-.04c.09-.53.14-1.13.18-1.75h.62a.749.749 0 1 0 0-1.5M3.11 10.025q.062.01.122.01a.75.75 0 0 0 .74-.63c.514-3.143 2.007-4.635 5.15-5.15a.75.75 0 1 0-.242-1.48c-3.797.62-5.767 2.592-6.389 6.389a.75.75 0 0 0 .62.86M15.38 4.255c3.144.515 4.636 2.007 5.151 5.15a.749.749 0 1 0 1.48-.242c-.622-3.797-2.592-5.767-6.389-6.388a.75.75 0 1 0-.242 1.48"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanBoldcurved;
