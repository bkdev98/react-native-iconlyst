import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortingZToABroken = ({
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
      d="m4.76 14.667 2.91 2.909m0 0 2.909-2.91m-2.91 2.91V5.939M16.727 18.422h-1.182M14.882 20l2.429-5.818L19.739 20M19.25 9.818h-3.88l.97-1.455M15.371 4h3.879l-1.478 2.217"
    />
  </Svg>
);
export default IconlystSortingZToABroken;
