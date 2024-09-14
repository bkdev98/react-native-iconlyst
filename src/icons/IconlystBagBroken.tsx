import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagBroken = ({
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
      d="M12.533 21H7.687c-2.231 0-4.04-1.809-4.04-4.606V9.335c0-1.664 1.809-3.473 4.04-3.473h9.691c2.231 0 4.04 1.809 4.04 3.473v7.059c0 2.797-1.809 4.606-4.04 4.606H16.11M8.998 14.322v-2.025m7.073 2.025v-2.025M15.916 5.861A2.86 2.86 0 0 0 13.055 3h-1.041a2.86 2.86 0 0 0-2.862 2.861"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.373 12.547a44.6 44.6 0 0 1-15.184.428"
    />
  </Svg>
);
export default IconlystBagBroken;
