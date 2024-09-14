import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoLightcurved = ({
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
      d="M16.151 9.673c1.839-1.457 4.305-2.867 4.772-2.362.771.828.705 8.714 0 9.467-.429.466-2.914-.943-4.771-2.39"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.514 12.037c0-5.192 1.725-6.923 6.901-6.923s6.9 1.73 6.9 6.923c0 5.191-1.724 6.923-6.9 6.923s-6.9-1.732-6.9-6.923"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoLightcurved;
