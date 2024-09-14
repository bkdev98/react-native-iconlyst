import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelebrationStarsBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.94 11.398 1.767 1.438a.49.49 0 0 1 .143.435l-.283 1.623a.497.497 0 0 0 .723.518l1.479-.767a.5.5 0 0 1 .464 0l1.478.766a.498.498 0 0 0 .723-.517l-.283-1.623a.48.48 0 0 1 .143-.436l1.197-1.15a.491.491 0 0 0-.276-.837l-1.654-.239a.5.5 0 0 1-.375-.268l-.74-1.478a.501.501 0 0 0-.89 0l-.74 1.478M12 18.465v2.927M12 3.983v.008M15.961 8.103l4.533-4.43M14.16 6.113l1.213-2.65M18.881 9.433 21 8.593M17.356 14.727l3.58 1.589M17.356 17.842l2.927 2.959M14.766 21.112v.009M20.283 12.575v.008M8.04 8.103l-4.534-4.43M9.838 6.113l-1.212-2.65M5.12 9.433 3 8.593M6.645 14.727l-3.581 1.589M6.645 17.842l-2.927 2.959M9.235 21.112v.009M3.719 12.575v.008"
    />
  </Svg>
);
export default IconlystCelebrationStarsBroken;
