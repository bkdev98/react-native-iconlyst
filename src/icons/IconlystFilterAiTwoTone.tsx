import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterAiTwoTone = ({
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
      d="M5.752 3.215A2.75 2.75 0 0 0 3 5.966v2.102c0 1.026.408 2.008 1.132 2.733l4.475 3.984c.296.296.462.698.462 1.116v3.306a1.577 1.577 0 0 0 2.161 1.465l1.93-.769c.6-.238.993-.819.993-1.465V16.4c0-.447.19-.873.522-1.173l5.047-4.991A3.87 3.87 0 0 0 21 7.365V5.966a2.75 2.75 0 0 0-2.752-2.751h-3.573"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.054 8.414-.1-.274A3.76 3.76 0 0 0 7.73 5.915l-.272-.1.272-.102a3.76 3.76 0 0 0 2.222-2.225l.101-.273.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.222 2.225zM15.365 9.656a1.77 1.77 0 0 0-1.177-1.179A1.77 1.77 0 0 0 15.365 7.3a1.77 1.77 0 0 0 1.176 1.178 1.77 1.77 0 0 0-1.176 1.179"
    />
  </Svg>
);
export default IconlystFilterAiTwoTone;
