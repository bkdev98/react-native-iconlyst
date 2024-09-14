import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinRemoveLight = ({
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
      d="m8.972 9.941-2.678.836a1.4 1.4 0 0 0-.59.363 1.44 1.44 0 0 0-.418 1.017c0 .372.136.744.418 1.025l5.111 5.112a1.46 1.46 0 0 0 2.052 0c.163-.163.29-.363.354-.59l.844-2.679M8.263 15.738l-3.699 3.699M11.277 8.115c.373-.409.472-.999.264-1.516l-.01-.027A1.44 1.44 0 0 1 11.842 5l.571-.572a1.44 1.44 0 0 1 2.052 0l5.111 5.111c.563.563.563 1.48 0 2.043l-.572.572a1.45 1.45 0 0 1-1.57.318l-.037-.018a1.44 1.44 0 0 0-1.507.272M19.037 19.998 4 4.961"
    />
  </Svg>
);
export default IconlystPinRemoveLight;
