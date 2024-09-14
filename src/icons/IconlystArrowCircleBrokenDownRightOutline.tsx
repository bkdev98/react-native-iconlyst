import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowCircleBrokenDownRightOutline = ({
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
      d="M5.178 5.097a.75.75 0 0 1 1.06 0l7.502 7.501-.004-2.464a.75.75 0 1 1 1.5-.002l.007 4.279a.75.75 0 0 1-.752.75l-4.277-.008a.75.75 0 0 1 .003-1.5l2.461.005-7.5-7.5a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.954 2.413c3.129-.677 6.53.2 8.964 2.634 3.808 3.808 3.808 9.981 0 13.79-3.808 3.807-9.981 3.806-13.788 0a9.74 9.74 0 0 1-2.635-8.965.75.75 0 1 1 1.466.317 8.25 8.25 0 1 0 6.31-6.31.75.75 0 1 1-.317-1.466"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowCircleBrokenDownRightOutline;
