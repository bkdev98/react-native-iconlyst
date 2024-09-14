import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebcamCameraCloseOutline = ({
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
      d="M6.741 6.712a.75.75 0 0 1 .445.964 5.7 5.7 0 0 0-.34 1.957 5.86 5.86 0 0 0 2.905 5.07q.09.037.165.093a5.75 5.75 0 0 0 2.803.718 5.5 5.5 0 0 0 1.95-.346.75.75 0 0 1 .533 1.403 7 7 0 0 1-2.483.443 7.25 7.25 0 0 1-3.662-.98 7.36 7.36 0 0 1-3.711-6.401c0-.856.145-1.698.432-2.476a.75.75 0 0 1 .963-.445"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.842 14.755a.75.75 0 0 1 .274 1.025L8.172 19.14a.436.436 0 0 0 .384.656h8.33c.308 0 .52-.316.413-.594a.75.75 0 0 1 1.401-.537c.472 1.23-.422 2.63-1.813 2.63H8.556a1.935 1.935 0 0 1-1.686-2.9l.002-.003 1.945-3.364a.75.75 0 0 1 1.025-.274M12.719 3.75a5.75 5.75 0 0 0-3.607 1.256.75.75 0 1 1-.935-1.173A7.25 7.25 0 0 1 12.72 2.25a7.383 7.383 0 0 1 7.38 7.382 7.28 7.28 0 0 1-1.582 4.55.75.75 0 1 1-1.173-.935 5.78 5.78 0 0 0 1.255-3.615 5.883 5.883 0 0 0-5.88-5.882"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.719 8.244c-.193 0-.369.04-.525.11a.75.75 0 0 1-.614-1.37c.352-.157.737-.24 1.139-.24a2.89 2.89 0 0 1 2.896 2.888c0 .399-.082.793-.24 1.147a.75.75 0 0 1-1.37-.613c.07-.154.11-.338.11-.534 0-.765-.623-1.388-1.396-1.388M3.903 4.835a.75.75 0 0 1 1.06 0L20.6 20.47a.75.75 0 0 1-1.06 1.06L3.902 5.897a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebcamCameraCloseOutline;
