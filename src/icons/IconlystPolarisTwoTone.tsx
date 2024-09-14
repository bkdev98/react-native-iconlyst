import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolarisTwoTone = ({
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
      d="m5.825 18.333.971-.971M18.446 18.311l-.972-.97M5.802 5.711l.97.97M18.424 5.69l-.972.97M12.114 20v1M12.114 3v1M4.16 12H3.113M21.114 12H20.07M12.115 7.882A6.19 6.19 0 0 0 16.232 12a6.19 6.19 0 0 0-4.117 4.118A6.19 6.19 0 0 0 7.997 12a6.19 6.19 0 0 0 4.118-4.118"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.114 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0"
    />
  </Svg>
);
export default IconlystPolarisTwoTone;
