import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFullBatteryBold = ({
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
      d="M20.125 12.9c0 1.246-.497 1.35-1.05 1.35h-.223c.01-.183.03-.36.023-.55v-3.3c0-.194-.027-.368-.043-.551h.243c.553 0 1.05.104 1.05 1.35zm-5.1.899a.75.75 0 0 1-1.5 0v-3.6a.75.75 0 0 1 1.5 0zm-3.7 0a.75.75 0 0 1-1.5 0v-3.6a.75.75 0 0 1 1.5 0zm-3.8 0a.75.75 0 0 1-1.5 0v-3.6a.75.75 0 0 1 1.5 0zm11.55-5.45h-.57c-.646-1.622-2.123-2.55-4.23-2.55h-7.3c-2.837 0-4.6 1.725-4.6 4.5v3.4c0 2.776 1.763 4.5 4.6 4.5h7.3c1.5 0 2.719-.442 3.524-1.278.318-.33.552-.732.731-1.171h.545c.767 0 2.55-.278 2.55-2.85v-1.7c0-2.573-1.783-2.851-2.55-2.851"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFullBatteryBold;
