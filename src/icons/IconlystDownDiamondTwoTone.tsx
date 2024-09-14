import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownDiamondTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.312 20.083 4.958-4.959c1.733-1.733 1.589-4.035-.143-5.767l-4.672-4.672c-1.731-1.73-4.033-1.876-5.767-.142L4.73 9.501c-1.733 1.733-1.588 4.035.143 5.766l4.672 4.672c1.732 1.732 4.039 1.872 5.767.144"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.294 13.09-2.795 2.803-2.791-2.803M12.501 15.892V8.73"
    />
  </Svg>
);
export default IconlystDownDiamondTwoTone;
