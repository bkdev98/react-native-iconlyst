import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowCircleBrokenDownLeftOutline = ({
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
      fillRule="evenodd"
      d="M18.871 5.097a.75.75 0 0 1 0 1.06l-7.5 7.501 2.46-.005a.75.75 0 1 1 .003 1.5l-4.277.009a.75.75 0 0 1-.751-.751l.007-4.28a.75.75 0 1 1 1.5.003l-.004 2.464 7.501-7.501a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.777 3.879a8.25 8.25 0 1 0 6.31 6.31.75.75 0 0 1 1.466-.317 9.74 9.74 0 0 1-2.634 8.964c-3.808 3.807-9.981 3.808-13.789 0s-3.807-9.981 0-13.789a9.74 9.74 0 0 1 8.965-2.634.75.75 0 1 1-.318 1.466"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowCircleBrokenDownLeftOutline;
