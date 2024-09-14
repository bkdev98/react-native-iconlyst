import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightDiamondTwoTone = ({
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
      d="m20.272 15.125-4.958 4.958c-1.733 1.733-4.035 1.588-5.767-.143l-4.672-4.673c-1.731-1.73-1.876-4.033-.143-5.766l4.959-4.959c1.733-1.733 4.034-1.588 5.766.143l4.672 4.673c1.731 1.731 1.871 4.038.143 5.766"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.277 9.52 2.804 2.794-2.804 2.791M16.081 12.313H8.92"
    />
  </Svg>
);
export default IconlystRightDiamondTwoTone;
