import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDirectionRightBold = ({
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
      d="m16.17 11.32-2.189 2.179a.75.75 0 0 1-1.059-1.063l.902-.897h-2.983a.83.83 0 0 0-.83.83v3.02a.75.75 0 0 1-1.5 0v-3.02a2.33 2.33 0 0 1 2.33-2.33h2.986l-.905-.901a.75.75 0 0 1 1.06-1.062l2.189 2.182a.7.7 0 0 1 .126.187c.01.019.026.033.034.052q.059.139.06.292a.7.7 0 0 1-.06.29c-.014.033-.04.057-.056.086-.032.054-.06.11-.104.155m3.81-2.628L15.31 4.02c-.951-.951-2.064-1.476-3.218-1.517-1.201-.051-2.314.433-3.255 1.374l-4.96 4.957c-1.892 1.894-1.834 4.496.144 6.474l4.672 4.672c.95.95 2.063 1.477 3.219 1.518l.145.002c1.135 0 2.207-.474 3.11-1.377l4.958-4.957c1.893-1.893 1.835-4.495-.143-6.475"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDirectionRightBold;
