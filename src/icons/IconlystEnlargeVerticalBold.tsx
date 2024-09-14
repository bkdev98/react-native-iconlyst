import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnlargeVerticalBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.658 11.25H5.342a1 1 0 1 0 0 2h13.316a1 1 0 0 0 0-2M12.707 14.29l-.004-.003-.004-.004-.003-.003v-.002h-.002a1 1 0 0 0-.318-.209 1.04 1.04 0 0 0-.773.007q-.16.068-.294.194v.001l-.022.02-2.863 2.876a1 1 0 1 0 1.417 1.412l1.157-1.162v3.83a1 1 0 1 0 2 0v-3.832l1.158 1.164a1 1 0 0 0 1.417-1.412zM11.291 10.208a1 1 0 0 0 .283.2l.003.001.002.001.004.002.002.001.003.001.001.001.003.001.002.001q.002-.001.003.001l.003.001.003.001.002.002.017.007a1 1 0 0 0 .772-.007l.04-.018.002-.001.002-.002.003-.001q.002 0 .003-.002l.003-.001.003-.002h.002l.003-.002.003-.001a1 1 0 0 0 .24-.173l.001-.002.002-.002.008-.007 2.865-2.878a.999.999 0 1 0-1.417-1.411L13 7.081V3.25a1 1 0 1 0-2 0v3.831L9.843 5.919A1 1 0 0 0 8.426 7.33z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEnlargeVerticalBold;
