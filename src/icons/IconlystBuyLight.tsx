import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="m2.75 3.25 2.08.36.963 11.473a1.8 1.8 0 0 0 1.8 1.653h10.91a1.8 1.8 0 0 0 1.784-1.546l.95-6.558a1.34 1.34 0 0 0-1.136-1.52C20.037 7.105 5.164 7.1 5.164 7.1M14.125 10.795h2.773" />
      <Path
        fill={props.color}
        d="M7.154 20.203a.544.544 0 1 1 0 1.087.544.544 0 0 1 0-1.087M18.435 20.203a.545.545 0 1 1 0 1.09.545.545 0 0 1 0-1.09"
      />
    </G>
  </Svg>
);
export default IconlystBuyLight;
