import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainStarTwoTone = ({
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
      d="m12.904 7.984-.675-1.348a.457.457 0 0 0-.812 0l-.675 1.348a.46.46 0 0 1-.343.245l-1.508.218a.446.446 0 0 0-.251.764l1.091 1.048a.45.45 0 0 1 .131.397l-.258 1.48a.452.452 0 0 0 .66.473l1.348-.7a.47.47 0 0 1 .423 0l1.348.7a.453.453 0 0 0 .66-.472l-.259-1.481a.44.44 0 0 1 .131-.397l1.091-1.048a.447.447 0 0 0-.251-.765l-1.51-.217a.46.46 0 0 1-.341-.245"
    />
  </Svg>
);
export default IconlystAiBrainStarTwoTone;
