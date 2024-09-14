import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshLockBroken = ({
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
      d="m21.25 7.703-1.333 2.816-2.8-1.325"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.948 10.446a8.422 8.422 0 0 0-16.452-.463M3.364 13.383a8.421 8.421 0 0 0 15.93 2.21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.661 15.18h-2.006a.853.853 0 0 1-.809-1.121l.623-1.873a2 2 0 0 1-.82-1.614 2.01 2.01 0 0 1 4.02 0c0 .665-.326 1.249-.822 1.614l.312.936"
    />
  </Svg>
);
export default IconlystRefreshLockBroken;
