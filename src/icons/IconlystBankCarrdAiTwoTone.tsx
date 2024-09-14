import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdAiTwoTone = ({
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
      d="M3 11.824V8.531c0-2.443 1.52-4.168 3.965-4.168h10.07C19.472 4.363 21 6.088 21 8.531v6.587c0 2.442-1.52 4.167-3.965 4.167h-5.412M21 9.658H3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.596 14.086-.101.273a3.76 3.76 0 0 1-2.222 2.225L3 16.685l.273.102a3.76 3.76 0 0 1 2.222 2.224l.1.274.102-.274a3.76 3.76 0 0 1 2.221-2.224l.273-.102-.273-.1a3.76 3.76 0 0 1-2.221-2.226zM11.409 13.418a1.77 1.77 0 0 1-1.177 1.179 1.77 1.77 0 0 1 1.177 1.178 1.77 1.77 0 0 1 1.177-1.178 1.77 1.77 0 0 1-1.177-1.179"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBankCarrdAiTwoTone;
