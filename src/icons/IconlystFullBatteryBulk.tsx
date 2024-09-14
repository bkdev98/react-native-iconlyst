import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFullBatteryBulk = ({
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
      d="M20.125 12.9c0 1.246-.497 1.35-1.05 1.35h-.223c.01-.183.03-.36.023-.55v-3.3c0-.194-.027-.368-.043-.551h.243c.553 0 1.05.104 1.05 1.35zm-1.05-4.551h-.57c-.646-1.622-2.123-2.55-4.23-2.55h-7.3c-2.837 0-4.6 1.725-4.6 4.5v3.4c0 2.776 1.763 4.5 4.6 4.5h7.3c1.5 0 2.719-.442 3.524-1.278.318-.33.552-.732.731-1.171h.545c.767 0 2.55-.278 2.55-2.85v-1.7c0-2.573-1.783-2.851-2.55-2.851"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.025 13.8a.75.75 0 0 1-1.5 0v-3.6a.75.75 0 0 1 1.5 0zm-3.7 0a.75.75 0 0 1-1.5 0v-3.6a.75.75 0 0 1 1.5 0zm-3.8 0a.75.75 0 0 1-1.5 0v-3.6a.75.75 0 0 1 1.5 0zM17.53 9.064a.75.75 0 0 1 .75-.75h.8c.796 0 1.497.233 1.97.82.445.553.575 1.285.575 2.03v1.708c0 .734-.131 1.46-.58 2.006-.474.578-1.174.804-1.964.804h-.792a.75.75 0 0 1 0-1.5h.792c.51 0 .708-.138.805-.256.123-.15.239-.455.239-1.054v-1.709c0-.612-.116-.93-.244-1.087-.098-.123-.294-.262-.8-.262h-.8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFullBatteryBulk;
