import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainbowBroken = ({
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
      d="M14.662 19.112a2.3 2.3 0 0 1-.849-.173 2.11 2.11 0 0 1-1.241-1.924c0-1.324.934-2.102 2.092-2.112 0-.833.653-2.498 2.498-2.498 1.843 0 2.497 1.665 2.497 2.498 1.157.01 2.092.788 2.092 2.112 0 .855-.508 1.595-1.241 1.926-.312.125-.62.17-.854.17h-2.1M12.895 11.145q-.298-.05-.604-.05a3.61 3.61 0 0 0-3.61 3.608v2.046M5.741 16.748v-2.227a6.55 6.55 0 0 1 3.461-5.774M16.079 9.18a6.55 6.55 0 0 0-3.789-1.207M18.37 7.075a9.54 9.54 0 0 0-12.825.608M2.75 16.748v-2.317a9.54 9.54 0 0 1 1.102-4.45"
    />
  </Svg>
);
export default IconlystRainbowBroken;
