import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBroomBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.183 13.661h6.114a1.776 1.776 0 1 0-.003-3.551l-1.738.003a2.095 2.095 0 0 1-2.083-2.342l.245-2.062a2.541 2.541 0 0 0-5.082 0l.248 2.047a2.097 2.097 0 0 1-2.082 2.35H6.065c-.977 0-1.77.79-1.772 1.768v.006a1.775 1.775 0 0 0 1.776 1.781h3.057M5.449 13.668v2.557c.09 2.226-.943 3.674-1.014 3.791-.286.47-.058 1.02.477 1.147.005.002.573.003 1.135.004a2 2 0 0 0 1.69-.925l1.176-1.847.149 1.975a.86.86 0 0 0 .856.798h2.281"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.912 13.668v2.557c-.09 2.226.942 3.674 1.014 3.791.286.47.058 1.02-.477 1.147-.005.001-1.04.003-3.427.004M12.182 5.762v-.01"
    />
  </Svg>
);
export default IconlystBroomBroken;
