import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmptyBatteryBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.746 12.9c0 1.246-.496 1.35-1.05 1.35h-.245c.017-.183.045-.358.045-.55v-3.3c0-.194-.027-.368-.043-.551h.243c.554 0 1.05.104 1.05 1.35zm-1.05-4.551h-.57c-.646-1.622-2.123-2.55-4.23-2.55H7.597c-2.838 0-4.6 1.725-4.6 4.5v3.4c0 2.776 1.762 4.5 4.6 4.5h7.3c2.046 0 3.521-.907 4.191-2.45h.608c.767 0 2.55-.277 2.55-2.85v-1.7c0-2.572-1.783-2.85-2.55-2.85"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmptyBatteryBold;
