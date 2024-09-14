import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletAiTwoTone = ({
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
      d="M20.998 14.407h-3.807a2.53 2.53 0 0 1 0-5.062h3.807"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.997 11.82h-.003M3 11.712V8.625A4.936 4.936 0 0 1 7.936 3.69h8.128A4.936 4.936 0 0 1 21 8.625v6.75a4.936 4.936 0 0 1-4.936 4.936h-4.168"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.596 15.112-.101.273a3.76 3.76 0 0 1-2.222 2.225L3 17.711l.273.102a3.76 3.76 0 0 1 2.222 2.224l.1.274.102-.274a3.76 3.76 0 0 1 2.221-2.224l.273-.102-.273-.1a3.76 3.76 0 0 1-2.221-2.226zM10.823 12.755a1.77 1.77 0 0 1-1.176 1.178 1.77 1.77 0 0 1 1.176 1.179A1.77 1.77 0 0 1 12 13.933a1.77 1.77 0 0 1-1.177-1.178"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWalletAiTwoTone;
