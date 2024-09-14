import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewRingtoneMessageBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.045 11.397c-.4-.69-.78-1.35-.78-2.9 0-.24-.02-.47-.06-.71-.56.32-1.2.49-1.88.49-2.17 0-3.94-1.77-3.94-3.94 0-.59.13-1.15.37-1.65-.24-.03-.49-.04-.75-.04-3.75 0-6.27 3.03-6.27 5.85 0 1.55-.38 2.21-.78 2.91-.39.67-.79 1.37-.79 2.74v.04c.26 3.12 3.07 3.73 7.84 3.73 4.76 0 7.57-.61 7.83-3.77 0-1.37-.4-2.07-.79-2.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.137 19.376H9.935a.75.75 0 0 0-.586 1.218 3.43 3.43 0 0 0 2.683 1.306 3.44 3.44 0 0 0 2.69-1.305.749.749 0 0 0-.585-1.22M16.325 6.579a2.243 2.243 0 0 0 2.239-2.24 2.24 2.24 0 0 0-2.24-2.24 2.24 2.24 0 0 0-2.238 2.24 2.243 2.243 0 0 0 2.239 2.24"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewRingtoneMessageBulk;
