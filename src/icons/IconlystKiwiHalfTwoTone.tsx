import * as React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKiwiHalfTwoTone = ({
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
    <Circle
      cx={12}
      cy={12}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Circle cx={12} cy={12} r={3} />
      <Path d="M13.035 9.092c.026-.37.268-1.278 1.034-1.952M13.035 15c.026.37.268 1.279 1.034 1.953M12.274 19.048c.019.272.197.942.761 1.438M16.77 14.129c.283.238.927.71 1.236.69M15.385 11.302c.37-.008 1.165-.078 1.385-.296M16.018 8.417c.328-.172 1.008-.588 1.108-.88M6.834 7.451c.192.317.651.97.95 1.051M12.56 3.604c-.177.325-.514 1.049-.435 1.347M10.442 7.6c.104.355.378 1.105.645 1.26M9.043 12.583c-.516.239-1.5.525-2.024.477M6.522 15.976c-.516.238-1.5.525-2.024.477M9.043 17.967c.174-.379.385-1.1.35-1.485" />
    </G>
  </Svg>
);
export default IconlystKiwiHalfTwoTone;
