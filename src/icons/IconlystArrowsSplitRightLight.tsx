import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsSplitRightLight = ({
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
      d="M21 18h-5.397c-1.632 0-3.16-.956-4.096-2.56l-.514-.88C10.057 12.956 8.529 12 6.897 12H3M21 6h-5.395c-1.633 0-3.162.956-4.098 2.562l-.51.876C10.062 11.043 8.532 12 6.9 12H3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.5 8.5 21 6l-2.5-2.5M18.5 20.5 21 18l-2.5-2.5"
    />
  </Svg>
);
export default IconlystArrowsSplitRightLight;
