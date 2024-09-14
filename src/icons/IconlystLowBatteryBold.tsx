import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLowBatteryBold = ({
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
      d="M20.696 12.9c0 1.25-.5 1.35-1.05 1.35h-.14c.01-.18.04-.36.04-.55v-3.3c0-.19-.03-.37-.04-.55h.14c.55 0 1.05.1 1.05 1.35zm-12.6.9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.6c0-.41.34-.75.75-.75s.75.34.75.75zm11.55-5.45h-.47c-.65-1.62-2.12-2.55-4.23-2.55h-7.3c-2.84 0-4.6 1.72-4.6 4.5v3.4c0 2.78 1.76 4.5 4.6 4.5h7.3c2.05 0 3.52-.91 4.19-2.45h.51c.77 0 2.55-.28 2.55-2.85v-1.7c0-2.57-1.78-2.85-2.55-2.85"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLowBatteryBold;
