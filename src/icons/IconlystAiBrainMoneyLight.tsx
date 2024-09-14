import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainMoneyLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.054 21.5v-1.328c0-.347.271-.633.618-.652l2.605-.122c.524-.028.962-.41 1.061-.926l.12-2.328c.218-1.137 2.04-.452 1.84-1.723-.276-1.127-1.091-2.244-1.294-3.29-.45-2.32-.163-5.143-2.521-7.131-1.442-1.216-3.192-1.538-5.035-1.497-3.075.069-5.952 1.374-7.236 4.336-1.254 2.889 0 5.288 1.08 7.89.829 1.996.322 6.771.322 6.771"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.114 8.678h-2.506a1.35 1.35 0 1 0 0 2.698h1.542a1.35 1.35 0 1 1 0 2.699H9.644M11.379 14.075v1.133m0-7.669v1.143"
    />
  </Svg>
);
export default IconlystAiBrainMoneyLight;
