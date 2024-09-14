import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightSquareTwoTone = ({
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
        d="M21.25 16.334V7.665c0-3.02-2.139-4.915-5.166-4.915H7.916c-3.027 0-5.166 1.885-5.166 4.915v8.67c0 3.03 2.139 4.915 5.166 4.915h8.168c3.027 0 5.166-1.886 5.166-4.916"
        opacity={0.4}
      />
      <Path d="M16.086 12H7.914M12.322 8.252 16.086 12l-3.764 3.748" />
    </G>
  </Svg>
);
export default IconlystArrowRightSquareTwoTone;
