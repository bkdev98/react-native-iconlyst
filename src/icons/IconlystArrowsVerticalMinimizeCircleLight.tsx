import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsVerticalMinimizeCircleLight = ({
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
      d="m14.761 16.172-2.765-2.766m0 0L9.23 16.172m2.766-2.766v7.51m2.765-13.04-2.765 2.765m0 0L9.23 7.876m2.766 2.765V3.105M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18"
    />
  </Svg>
);
export default IconlystArrowsVerticalMinimizeCircleLight;
