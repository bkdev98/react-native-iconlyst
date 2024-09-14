import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessBroken = ({
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
      d="M10.701 17.888a1.953 1.953 0 0 1 2.684 0M8.17 15.162a5.66 5.66 0 0 1 3.874-1.533c1.494 0 2.875.585 3.885 1.533M12.044 9.836c2.491 0 4.772.969 6.467 2.553M5.586 12.389A9.4 9.4 0 0 1 8.558 10.5M3.043 9.655a13.17 13.17 0 0 1 9-3.542m4.067.638a13.1 13.1 0 0 1 4.933 2.914"
    />
  </Svg>
);
export default IconlystWirelessBroken;
