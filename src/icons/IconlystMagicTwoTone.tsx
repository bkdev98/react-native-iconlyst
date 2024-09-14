import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagicTwoTone = ({
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
      d="M7.166 7.052 5.698 5.584m6.24 12.986v2.076zm0-15.57v2.075zm-6.749 8.823H3.114zm15.57 0h-2.074zm-13.593 4.77-1.468 1.468zm11.01-11.01-1.468 1.468z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.114 21-6.552-6.55M9.337 9.221a5.54 5.54 0 0 0 5.212-.01 5.54 5.54 0 0 0-.009 5.213 5.54 5.54 0 0 0-5.213.01 5.54 5.54 0 0 0 .01-5.213"
    />
  </Svg>
);
export default IconlystMagicTwoTone;
