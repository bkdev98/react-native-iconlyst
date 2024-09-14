import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchAiTwoTone = ({
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
      d="M20.05 11.418A8.417 8.417 0 0 0 11.632 3a8.418 8.418 0 1 0 8.418 8.418M17.361 17.584 20.786 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.687 12.962-.102-.273a3.76 3.76 0 0 0-2.221-2.225l-.273-.101.273-.102a3.76 3.76 0 0 0 2.221-2.225l.101-.273.102.273a3.76 3.76 0 0 0 2.221 2.225l.273.102-.273.1a3.76 3.76 0 0 0-2.221 2.226zM14.997 14.204a1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.179 1.77 1.77 0 0 0 1.177 1.179 1.77 1.77 0 0 0-1.177 1.178"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSearchAiTwoTone;
