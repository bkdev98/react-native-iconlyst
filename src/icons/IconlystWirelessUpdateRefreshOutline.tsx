import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessUpdateRefreshOutline = ({
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
      d="M12.105 2.96a.75.75 0 0 1-.67.82A8.205 8.205 0 0 0 6.94 18.198l-.05-.99a.75.75 0 1 1 1.498-.075l.134 2.685a.75.75 0 0 1-.711.786l-2.7.136a.75.75 0 0 1-.076-1.498l.772-.04c-3.324-2.943-4.288-7.896-2.054-11.945l.657.362-.657-.362a9.69 9.69 0 0 1 7.531-4.968.75.75 0 0 1 .821.672m8.4 1.234a.75.75 0 0 1-.734.764l-.773.016c3.234 3.043 4.048 8.022 1.691 12.002a9.69 9.69 0 0 1-7.677 4.738.75.75 0 0 1-.105-1.496 8.204 8.204 0 0 0 4.93-14.274l.02.99a.75.75 0 1 1-1.5.03l-.054-2.687a.75.75 0 0 1 .735-.765l2.703-.053a.75.75 0 0 1 .765.735m-4.683 6.855a5.65 5.65 0 0 0-7.055 0 .75.75 0 1 1-.938-1.17 7.15 7.15 0 0 1 8.931 0 .75.75 0 1 1-.938 1.17m-1.973 2.454a2.406 2.406 0 0 0-3.1.003.75.75 0 1 1-.973-1.141 3.906 3.906 0 0 1 5.04-.009.75.75 0 0 1-.967 1.147m-1.555 1.088a.75.75 0 0 1 .75.75v.043a.75.75 0 1 1-1.5 0v-.043a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessUpdateRefreshOutline;
