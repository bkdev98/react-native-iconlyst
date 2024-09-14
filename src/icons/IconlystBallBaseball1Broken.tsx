import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallBaseball1Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.323 8.57a9 9 0 1 1-2.571-3.493"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.598 12.47q.692.069 1.388.03M11.498 3.014q-.036.666.025 1.33M11.967 6.426q.21.62.515 1.21M13.635 9.352a9 9 0 0 0 .988.992M16.334 11.504q.57.296 1.168.505M12.47 19.598q.069.692.03 1.388M3.014 11.498a9 9 0 0 1 1.33.025M6.426 11.967q.62.21 1.21.515M9.352 13.635a9 9 0 0 1 .992.988M11.502 16.334q.295.57.505 1.168"
    />
  </Svg>
);
export default IconlystBallBaseball1Broken;
