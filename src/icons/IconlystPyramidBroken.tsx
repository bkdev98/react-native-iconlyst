import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPyramidBroken = ({
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
      d="M17.472 9.374 13.684 3.69a1.423 1.423 0 0 0-2.368 0L3.739 15.056a1.423 1.423 0 0 0 .548 2.063l7.145 3.572a2.39 2.39 0 0 0 2.136 0l7.145-3.572a1.423 1.423 0 0 0 .547-2.063l-1.894-2.841M19.85 15.393l1.61.784M3.543 16.188l1.61-.795M7.744 14.095l1.298-.649M15.959 13.447l1.298.65"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.637 12.15.864-.432.863.431M12.5 3.146v14.689"
    />
  </Svg>
);
export default IconlystPyramidBroken;
