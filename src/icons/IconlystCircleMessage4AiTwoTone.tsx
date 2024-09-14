import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleMessage4AiTwoTone = ({
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
      d="M3 11.96c0-4.954 4.03-8.97 9-8.97s9 4.016 9 8.97c0 4.953-4.03 8.97-9 8.97H4c-.552 0-1-.447-1-.997z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.946 13.978.1-.273a3.76 3.76 0 0 1 2.223-2.225l.273-.101-.273-.101a3.76 3.76 0 0 1-2.222-2.225l-.101-.274-.101.274a3.76 3.76 0 0 1-2.222 2.225l-.273.1.273.102a3.76 3.76 0 0 1 2.222 2.225zM8.635 15.22a1.77 1.77 0 0 1 1.177-1.178 1.77 1.77 0 0 1-1.177-1.178 1.77 1.77 0 0 1-1.176 1.178 1.77 1.77 0 0 1 1.176 1.178"
    />
  </Svg>
);
export default IconlystCircleMessage4AiTwoTone;
