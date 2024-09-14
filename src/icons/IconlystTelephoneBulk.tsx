import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelephoneBulk = ({
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
      d="M12.5 17.983a2.31 2.31 0 0 1-2.315-2.312 2.315 2.315 0 1 1 4.631 0 2.313 2.313 0 0 1-2.316 2.312m6.441-5.883c-.288-.007-.6-.015-.94-.015-2.706 0-3.52-1.86-3.911-2.753-.313-.716-.361-.827-1.592-.827-1.23 0-1.277.11-1.589.825-.391.894-1.203 2.755-3.91 2.755-.335 0-.644.008-.93.014-.552.014-1.112.027-1.657-.03a.334.334 0 0 0-.373.324v3.861c0 2.968 1.902 4.961 4.735 4.961h7.442c2.837 0 4.744-1.993 4.744-4.961v-3.858a.334.334 0 0 0-.373-.325 9 9 0 0 1-.906.041q-.37-.002-.74-.012"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.498 2.785C2.286 2.785 3.045 6.448 3 6.86c0 3.652 1.117 3.113 3.998 3.113 2.988 0 .806-3.578 5.5-3.578 4.695 0 2.515 3.578 5.504 3.578 2.881 0 3.998.55 3.998-3.113-.045-.412.71-4.075-9.502-4.075"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTelephoneBulk;
