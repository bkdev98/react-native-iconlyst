import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudBrainTwoTone = ({
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
      strokeWidth={1.5}
      d="M14.554 21.5v-1.328c0-.347.271-.633.618-.652l2.605-.122c.524-.028.962-.41 1.061-.926l.12-2.328c.218-1.137 2.04-.452 1.84-1.723-.276-1.127-1.091-2.244-1.294-3.29-.45-2.32-.163-5.143-2.521-7.131-1.442-1.216-3.192-1.538-5.035-1.497-3.075.069-5.952 1.374-7.236 4.336-1.254 2.889 0 5.288 1.08 7.89.829 1.996.322 6.771.322 6.771"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.527 12.181h.384c.192 0 .444-.037.7-.14a1.74 1.74 0 0 0 1.02-1.582c0-1.087-.768-1.726-1.718-1.734 0-.684-.537-2.051-2.051-2.051S9.81 8.04 9.81 8.724c-.95.009-1.718.648-1.718 1.735 0 .703.418 1.308 1.02 1.58.707.32 1.722.327 1.722 1.955v7.484"
    />
  </Svg>
);
export default IconlystCloudBrainTwoTone;
