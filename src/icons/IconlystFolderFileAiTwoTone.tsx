import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileAiTwoTone = ({
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
      d="M15.64 21c3.357 0 5.334-1.98 5.334-5.34L21 10.996c0-3.428-1.242-5.142-4.605-5.142h-2.653a2.15 2.15 0 0 1-1.712-.857l-.856-1.14A2.14 2.14 0 0 0 9.463 3H7.588C4.232 3 3 4.98 3 8.336v7.323C3 19.02 4.981 21 8.345 21z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.054 15.382-.1-.273a3.76 3.76 0 0 0-2.223-2.225l-.272-.101.272-.102a3.76 3.76 0 0 0 2.222-2.224l.101-.274.101.274a3.76 3.76 0 0 0 2.222 2.224l.273.102-.273.1a3.76 3.76 0 0 0-2.222 2.226zM15.365 16.624a1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.179 1.77 1.77 0 0 0 1.176 1.179 1.77 1.77 0 0 0-1.176 1.178"
    />
  </Svg>
);
export default IconlystFolderFileAiTwoTone;
