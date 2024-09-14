import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperLight = ({
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
      <Path d="M14.738 2.762H8.085A3.82 3.82 0 0 0 4.25 6.49v10.713a3.83 3.83 0 0 0 3.742 3.91q.045.001.092 0h7.989a3.887 3.887 0 0 0 3.729-3.91V8.038z" />
      <Path d="M14.475 2.75v2.909a2.574 2.574 0 0 0 2.568 2.575h2.755M14.288 15.358h-5.4M12.243 11.606H8.887" />
    </G>
  </Svg>
);
export default IconlystPaperLight;
