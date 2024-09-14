import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownSquareTwoTone = ({
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
      <Path
        d="M7.666 21.25h8.669c3.02 0 4.915-2.139 4.915-5.166V7.916c0-3.027-1.885-5.166-4.915-5.166h-8.67c-3.03 0-4.915 2.139-4.915 5.166v8.168c0 3.027 1.886 5.166 4.916 5.166"
        opacity={0.4}
      />
      <Path d="M12 16.086V7.914M15.748 12.322 12 16.086l-3.748-3.764" />
    </G>
  </Svg>
);
export default IconlystArrowDownSquareTwoTone;
