import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimeCircleTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M21.25 12A9.25 9.25 0 0 1 12 21.25 9.25 9.25 0 0 1 2.75 12 9.25 9.25 0 0 1 12 2.75 9.25 9.25 0 0 1 21.25 12" />
      <Path d="m15.431 14.943-3.77-2.25V7.848" opacity={0.4} />
    </G>
  </Svg>
);
export default IconlystTimeCircleTwoTone;
