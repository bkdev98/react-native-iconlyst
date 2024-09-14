import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPersonBold = ({
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
      fill={props.color}
      d="M6.425 2.5a3.283 3.283 0 1 0 0 6.565 3.283 3.283 0 0 0 0-6.565M17.575 2.5a3.283 3.283 0 1 0 0 6.566 3.283 3.283 0 0 0 0-6.566M7.708 11.89a2.08 2.08 0 0 0-2.58-.004c-.629.498-1.085 1.358-1.39 2.285a11.1 11.1 0 0 0-.525 3.063c-.031 1.025.084 2.04.4 2.82.316.778.896 1.446 1.826 1.446h2.44c.437 0 .79 0 1.07-.018.285-.02.546-.059.782-.165a2.08 2.08 0 0 0 1.225-1.838c.007-.258-.057-.514-.149-.784-.091-.267-.227-.593-.395-.996l-1.46-3.502c-.254-.61-.455-1.09-.632-1.448-.173-.35-.359-.66-.612-.86M18.871 11.886a2.08 2.08 0 0 0-2.58.003c-.252.2-.437.51-.611.86a27 27 0 0 0-.632 1.448l-1.46 3.502c-.168.403-.304.729-.395.996-.092.27-.156.526-.149.784.022.797.498 1.511 1.225 1.838.236.106.497.146.782.165.28.018.633.018 1.07.018h2.44c.93 0 1.51-.668 1.826-1.446.316-.78.431-1.795.4-2.82a11.1 11.1 0 0 0-.524-3.063c-.306-.927-.762-1.787-1.392-2.285"
    />
  </Svg>
);
export default IconlystPersonBold;
