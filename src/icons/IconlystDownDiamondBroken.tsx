import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownDiamondBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.812 20.083c-1.728 1.728-4.035 1.588-5.767-.144l-4.672-4.672c-1.731-1.73-1.876-4.033-.143-5.766l4.958-4.958c1.734-1.734 4.036-1.589 5.767.142l4.672 4.672c1.732 1.732 1.876 4.034.143 5.767l-2.48 2.48"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.794 13.09-2.795 2.803-2.791-2.803M12.001 15.892V8.73"
    />
  </Svg>
);
export default IconlystDownDiamondBroken;
