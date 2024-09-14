import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomepodSpeakerOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.478 5.167c-.78.836-.953 2.116-.953 4.16v5.346c0 2.045.17 3.325.95 4.16.777.832 2.357 1.417 5.788 1.417s5.006-.586 5.777-1.415c.775-.835.94-2.114.934-4.16v-5.35c.005-2.046-.159-3.325-.934-4.16-.771-.83-2.345-1.415-5.777-1.415-3.426 0-5.006.585-5.785 1.417M5.383 4.143c1.24-1.326 3.403-1.893 6.88-1.893 3.48 0 5.642.566 6.876 1.894 1.23 1.324 1.34 3.208 1.335 5.184v5.344c.005 1.976-.105 3.86-1.335 5.184-1.234 1.328-3.395 1.894-6.876 1.894-3.48 0-5.645-.567-6.884-1.893-1.235-1.322-1.354-3.206-1.354-5.184V9.327c0-1.98.121-3.862 1.358-5.184"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.304 5.492a.75.75 0 0 1 1.032-.246c.447.275.878.732.878 1.37 0 .513-.294.902-.596 1.159-.307.26-.706.461-1.134.616-.864.312-2.007.491-3.232.491s-2.368-.18-3.23-.491c-.43-.155-.828-.356-1.135-.616-.302-.257-.596-.646-.596-1.16 0-.643.45-1.098.871-1.364a.75.75 0 0 1 .801 1.268 1 1 0 0 0-.126.094l.02.018c.121.103.34.228.674.35.662.238 1.625.401 2.721.401s2.06-.163 2.722-.402c.335-.12.553-.247.673-.349l.023-.02a1 1 0 0 0-.12-.087.75.75 0 0 1-.246-1.032m.423 1.055-.002.004zm-6.95 0 .003.004z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomepodSpeakerOutline;
