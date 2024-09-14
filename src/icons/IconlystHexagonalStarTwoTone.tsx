import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalStarTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.114 7.75a6.39 6.39 0 0 0 4.25 4.25 6.39 6.39 0 0 0-4.25 4.25A6.39 6.39 0 0 0 7.864 12a6.39 6.39 0 0 0 4.25-4.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.729 3.122a2.77 2.77 0 0 1 2.772 0l5.61 3.239a2.77 2.77 0 0 1 1.386 2.4v6.478c0 .99-.529 1.906-1.386 2.4l-5.61 3.24a2.77 2.77 0 0 1-2.772 0l-5.61-3.24a2.77 2.77 0 0 1-1.386-2.4V8.761c0-.99.528-1.905 1.385-2.4z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHexagonalStarTwoTone;
