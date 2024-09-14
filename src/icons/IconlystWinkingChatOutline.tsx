import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWinkingChatOutline = ({
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
      d="M12.233 21.76a9.7 9.7 0 0 1-4.07-.889 3.3 3.3 0 0 0-.984-.3c-.36.04-.714.13-1.05.266-.765.264-1.81.624-2.567-.133-.756-.757-.414-1.756-.139-2.56.139-.34.228-.7.264-1.065a3.3 3.3 0 0 0-.3-1 9.758 9.758 0 1 1 8.843 5.675zm-5.057-2.687a4.2 4.2 0 0 1 1.564.414l.035.014a8.28 8.28 0 0 0 9.31-1.653A8.25 8.25 0 0 0 6.42 6.181a8.29 8.29 0 0 0-1.652 9.311c.242.498.384 1.037.42 1.59a4.9 4.9 0 0 1-.344 1.547c-.094.277-.315.923-.22 1.017s.741-.13 1.018-.225a5 5 0 0 1 1.535-.348"
    />
    <Path
      fill={props.color}
      d="M10.492 9.512h-1.48a.75.75 0 1 1 0-1.5h1.48a.75.75 0 1 1 0 1.5M15.278 9.72a.976.976 0 0 1-.001-1.95.975.975 0 0 1 0 1.95M12.373 17.23a3.84 3.84 0 0 1-3.72-3.94.75.75 0 0 1 .75-.75h5.938a.75.75 0 0 1 .75.75 3.84 3.84 0 0 1-3.718 3.94m-2.112-3.19a2.165 2.165 0 0 0 4.223 0z"
    />
  </Svg>
);
export default IconlystWinkingChatOutline;
