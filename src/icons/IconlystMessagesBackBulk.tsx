import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesBackBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.021 5.873a9.42 9.42 0 0 0-6.719-2.789c-2.539 0-4.925.99-6.718 2.79-2.805 2.815-3.57 7.137-1.913 10.728.197.492.317.811.317 1.093 0 .332-.142.749-.279 1.15-.264.78-.565 1.663.079 2.309.647.648 1.531.343 2.309.075.398-.139.809-.28 1.135-.281.29 0 .656.146 1.079.317a9.516 9.516 0 0 0 10.71-1.916c3.701-3.715 3.701-9.76 0-13.476"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.84 13.364h-5.262l1.57 1.57a.749.749 0 1 1-1.06 1.06l-2.85-2.848a.8.8 0 0 1-.166-.246.8.8 0 0 1-.044-.22c-.002-.022-.014-.043-.014-.066v-.002q0-.151.06-.29c.02-.048.057-.087.088-.131.025-.037.041-.078.073-.11l2.854-2.85a.75.75 0 1 1 1.06 1.063l-1.573 1.57h5.265a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesBackBulk;
