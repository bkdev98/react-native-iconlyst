import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoPlaylist2Outline = ({
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
      d="M6.192 4.73a2.36 2.36 0 0 0-2.358 2.358v9.824a2.36 2.36 0 0 0 2.358 2.358h5.953a2.36 2.36 0 0 0 2.358-2.358V7.088a2.36 2.36 0 0 0-2.358-2.358zM2.334 7.088A3.86 3.86 0 0 1 6.192 3.23h5.953a3.86 3.86 0 0 1 3.858 3.858v9.824a3.86 3.86 0 0 1-3.858 3.858H6.192a3.86 3.86 0 0 1-3.858-3.858z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.44 10.594a13.2 13.2 0 0 0 0 2.813c.021.152.08.189.093.197.018.01.107.05.301-.026a6.9 6.9 0 0 0 2.007-1.26c.153-.142.179-.258.179-.322 0-.066-.03-.18-.176-.313l-.004-.003a6.7 6.7 0 0 0-2.013-1.263l-.006-.002c-.149-.063-.242-.037-.278-.018a.14.14 0 0 0-.054.05.35.35 0 0 0-.05.147m.959-1.564c-.504-.21-1.07-.215-1.553.039-.496.26-.817.747-.894 1.336l-.002.013a14.7 14.7 0 0 0 0 3.152l.001.016c.07.554.356 1.049.847 1.325.487.274 1.061.269 1.588.062l.006-.003a8.4 8.4 0 0 0 2.458-1.542l.005-.004c.415-.383.668-.886.665-1.436s-.26-1.045-.668-1.415A8.2 8.2 0 0 0 9.4 9.03M18.164 5.793a.75.75 0 0 1 .75.75v10.914a.75.75 0 0 1-1.5 0V6.543a.75.75 0 0 1 .75-.75M21.084 8.172a.75.75 0 0 1 .75.75v6.155a.75.75 0 0 1-1.5 0V8.922a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoPlaylist2Outline;
