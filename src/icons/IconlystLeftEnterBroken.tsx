import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftEnterBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.396 4.148h-1.8c-1.99 0-3.6 1.612-3.6 3.6v3.796M8.396 20.344h-1.8a3.6 3.6 0 0 1-3.6-3.6v-1.408M8.877 14.524l-2.28-2.28 2.28-2.28M21.006 12.244v5.6a2.5 2.5 0 0 1-2.5 2.5h-2.171a2.5 2.5 0 0 1-2.5-2.5v-11.2a2.5 2.5 0 0 1 2.5-2.5h2.17a2.5 2.5 0 0 1 2.5 2.5v.8M13.826 12.246H6.601"
    />
  </Svg>
);
export default IconlystLeftEnterBroken;
