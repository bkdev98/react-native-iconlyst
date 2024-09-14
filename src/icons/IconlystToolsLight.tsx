import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToolsLight = ({
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
      d="m11.381 16.145 5.898-5.898a2.94 2.94 0 0 0 0-4.157l-2.216-2.215a2.94 2.94 0 0 0-4.157 0L5.009 9.773a2.94 2.94 0 0 0 0 4.157l2.216 2.215a2.94 2.94 0 0 0 4.157 0M3.98 20.986h4.372M17.788 6.762H8.02m9.254 3.5H4.617m9.146 3.5H4.864M16.162 11.627l5.258 5.258a1.91 1.91 0 0 1 0 2.7l-.702.703a1.91 1.91 0 0 1-2.7 0l-5.258-5.259M17.121 19.158l3.17-3.17"
    />
  </Svg>
);
export default IconlystToolsLight;
