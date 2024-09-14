import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalAiTwoTone = ({
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
      d="M10.615 3.121a2.77 2.77 0 0 1 2.772 0l5.61 3.24a2.77 2.77 0 0 1 1.386 2.4v6.478c0 .99-.528 1.905-1.386 2.4l-5.61 3.24a2.77 2.77 0 0 1-2.772 0l-5.61-3.24a2.77 2.77 0 0 1-1.386-2.4V8.761c0-.99.528-1.905 1.386-2.4z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.054 10.022-.1.273A3.76 3.76 0 0 1 7.73 12.52l-.272.101.272.101a3.76 3.76 0 0 1 2.222 2.225l.101.274.101-.274a3.76 3.76 0 0 1 2.222-2.225l.273-.101-.273-.101a3.76 3.76 0 0 1-2.222-2.225zM15.365 8.78a1.77 1.77 0 0 1-1.177 1.178 1.77 1.77 0 0 1 1.177 1.178 1.77 1.77 0 0 1 1.177-1.178 1.77 1.77 0 0 1-1.177-1.179"
    />
  </Svg>
);
export default IconlystHexagonalAiTwoTone;
