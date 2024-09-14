import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorkBrokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M12.255 17.226V14.69M5.109 13.396a15 15 0 0 1-2.104-1.016v-6.5h18.49v6.5c-2.46 1.44-5.71 2.31-9.25 2.31-1.294 0-2.55-.117-3.74-.335M15.755 5.61l-1-2.31h-5l-1 2.31M18.248 20.7h3.037l.19-5.507M3.035 15.193l.19 5.507h11.207"
    />
  </Svg>
);
export default IconlystWorkBrokensharp;
