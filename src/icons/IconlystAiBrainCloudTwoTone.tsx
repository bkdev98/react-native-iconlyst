import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainCloudTwoTone = ({
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
      d="M9.926 8.633c-.948.008-1.715.646-1.715 1.73a1.73 1.73 0 0 0 1.018 1.578c.253.103.504.142.695.142h4.095c.19 0 .443-.037.699-.14a1.73 1.73 0 0 0 1.017-1.58c0-1.084-.767-1.722-1.715-1.73 0-.682-.535-2.047-2.047-2.047S9.926 7.95 9.926 8.633"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiBrainCloudTwoTone;
