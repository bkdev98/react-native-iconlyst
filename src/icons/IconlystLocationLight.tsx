import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocationLight = ({
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
      <Path d="M14.5 10.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0" />
      <Path d="M12 21c-1.199 0-7.5-5.102-7.5-10.437C4.5 6.387 7.857 3 12 3s7.5 3.387 7.5 7.563C19.5 15.898 13.198 21 12 21" />
    </G>
  </Svg>
);
export default IconlystLocationLight;
