import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessDisconnectBroken = ({
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
      d="m15.724 16.81-2.606 2.756a1.474 1.474 0 0 1-2.143 0l-3.176-3.359M6.41 6.95a11 11 0 0 0-3.07 2.763 1.475 1.475 0 0 0 .117 1.899l1.88 1.988M18.66 19.915 3.595 3.973M11.027 5.44a10 10 0 0 1 1.019-.053c3.552 0 6.704 1.687 8.706 4.312a1.48 1.48 0 0 1-.113 1.907l-1.894 1.998"
    />
  </Svg>
);
export default IconlystWirelessDisconnectBroken;
