import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockSecurityAiLight = ({
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
      d="M3 12.008a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-5.09-8.11"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.237 13.336c.515-.379.851-.984.851-1.673a2.084 2.084 0 1 0-4.17 0c0 .69.338 1.294.852 1.673l-.646 1.943a.884.884 0 0 0 .839 1.163h2.081a.884.884 0 0 0 .839-1.163z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.596 4.25-.101.273a3.76 3.76 0 0 1-2.222 2.225L3 6.85l.273.102a3.76 3.76 0 0 1 2.222 2.224l.1.274.102-.274a3.76 3.76 0 0 1 2.221-2.224l.273-.102-.273-.1a3.76 3.76 0 0 1-2.221-2.226zM10.906 3.008A1.77 1.77 0 0 1 9.73 4.186a1.77 1.77 0 0 1 1.176 1.179 1.77 1.77 0 0 1 1.177-1.179 1.77 1.77 0 0 1-1.177-1.178"
    />
  </Svg>
);
export default IconlystLockSecurityAiLight;
