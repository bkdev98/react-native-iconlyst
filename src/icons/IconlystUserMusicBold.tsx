import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserMusicBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.436 3.002v2.1a2.545 2.545 0 0 0-3.59 2.316 2.545 2.545 0 0 0 2.54 2.543 2.55 2.55 0 0 0 2.55-2.545V4.905a3 3 0 0 0 .82.298c.4.077.802-.18.885-.587a.75.75 0 0 0-.587-.883c-.824-.168-1.156-.969-1.167-.998a.75.75 0 0 0-.288-.362.74.74 0 0 0-.55-.109.75.75 0 0 0-.613.738m-2.09 4.416c0-.574.466-1.043 1.04-1.043.578 0 1.05.469 1.05 1.043s-.472 1.043-1.05 1.043c-.573 0-1.04-.469-1.04-1.043"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.065 21.752c-5.194 0-9.42-4.228-9.42-9.424 0-5.58 4.928-10.035 10.591-9.35a.74.74 0 0 1 .592.434l.03.073a.76.76 0 0 1 .031.328.746.746 0 0 1-.835.654l-.229-.025a8 8 0 0 0-.76-.037c-4.367 0-7.92 3.554-7.92 7.923 0 2.559 1.22 4.84 3.107 6.29.562-1.391 2.094-2.53 4.763-2.53 2.71 0 4.248 1.17 4.788 2.586a7.92 7.92 0 0 0 3.182-6.346.75.75 0 0 1 1.5 0c0 5.196-4.226 9.424-9.42 9.424"
    />
    <Path
      fill={props.color}
      d="M12.015 15.268a3.17 3.17 0 0 0 3.162-3.164 3.166 3.166 0 0 0-3.162-3.162 3.166 3.166 0 0 0-3.163 3.162 3.17 3.17 0 0 0 3.163 3.164"
    />
  </Svg>
);
export default IconlystUserMusicBold;
