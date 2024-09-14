import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSerumBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.485 10.976V7.953c0-.815.472-1.565 1.212-1.903q4.303-1.974 8.606 0a2.09 2.09 0 0 1 1.212 1.903v8.264c0 .814-.472 1.564-1.212 1.904q-4.303 1.973-8.606 0a2.1 2.1 0 0 1-1.212-1.904v-2.066"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.38 5.16v-.78a1.38 1.38 0 0 0-2.763 0v.78M12 21v-1.893M10.414 15.34c1.105-.024 2.168.027 3.17 0M13.067 9.624 12 8.557l-1.067 1.067a1.508 1.508 0 1 0 2.134 2.133"
    />
  </Svg>
);
export default IconlystSerumBroken;
