import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftCircleBulk = ({
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
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M12 22C6.485 22 2 17.514 2 12S6.485 2 12 2s10 4.486 10 10-4.486 10-10 10"
        opacity={0.4}
      />
      <Path d="M13.442 16.22a.75.75 0 0 1-.529-.218l-3.487-3.47a.75.75 0 0 1 0-1.063l3.487-3.472a.749.749 0 1 1 1.058 1.063L11.019 12l2.953 2.94a.75.75 0 0 1-.529 1.28" />
    </G>
  </Svg>
);
export default IconlystArrowLeftCircleBulk;
