import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserHearingTwoTone = ({
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
      d="M19.701 5.117c.476.72.754 1.582.754 2.509s-.277 1.79-.754 2.509M6.098 5.117a4.53 4.53 0 0 0-.754 2.509c0 .927.277 1.79.754 2.509"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8.143 19.877c-1.407 0-2.258-.913-2.318-2.185 0-2.59 2.802-3.482 7.024-3.512 4.23.04 7.04.933 7.024 3.512-.067 1.272-.913 2.185-2.318 2.185zM12.855 11.224a3.55 3.55 0 1 0 0-7.099 3.55 3.55 0 0 0 0 7.1Z"
    />
  </Svg>
);
export default IconlystUserHearingTwoTone;
