import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDirectionRightTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.313 19.77 4.958-4.958c1.728-1.728 1.588-4.035-.143-5.767l-4.672-4.671c-1.732-1.732-4.033-1.877-5.766-.144L4.73 9.188c-1.733 1.734-1.588 4.036.143 5.767l4.672 4.672c1.732 1.732 4.034 1.876 5.767.143"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.14 10.79h-4.798a1.58 1.58 0 0 0-1.581 1.58v3.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.953 8.605 2.19 2.182-2.19 2.18"
    />
  </Svg>
);
export default IconlystDirectionRightTwoTone;
