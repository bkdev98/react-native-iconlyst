import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBaseballTwoTone = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.864 18.364A9 9 0 1 1 6.136 5.636a9 9 0 0 1 12.728 12.728"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.098 12.47q.692.069 1.388.03M11.998 3.014q-.036.666.025 1.33M12.467 6.425q.21.62.515 1.21M14.135 9.353a9 9 0 0 0 .988.991M16.834 11.503q.57.295 1.168.505M12.97 19.598q.069.692.03 1.388M3.514 11.5a9 9 0 0 1 1.33.024M6.926 11.967q.62.21 1.21.515M9.852 13.635a9 9 0 0 1 .992.988M12.002 16.334q.295.57.505 1.168"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBaseballTwoTone;
