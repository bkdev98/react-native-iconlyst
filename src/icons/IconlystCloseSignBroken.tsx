import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseSignBroken = ({
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
      d="M16.903 8.951 13.273 5.1m-1.958-.001L7.676 8.95M12 21H7.081c-2.077 0-3.37-1.466-3.37-3.543v-4.963c0-2.075 1.299-3.543 3.37-3.543h9.837c2.077 0 3.371 1.467 3.371 3.543v4.963c0 2.077-1.294 3.543-3.372 3.543h-1.46M11.014 4.28a1.28 1.28 0 1 0 2.559 0 1.28 1.28 0 0 0-2.559 0M9.43 13.043v.01M14.57 13.043v.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.704 17.46A2.2 2.2 0 0 0 12 16.657c-.687 0-1.3.314-1.705.805"
    />
  </Svg>
);
export default IconlystCloseSignBroken;
