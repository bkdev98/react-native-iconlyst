import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBoldsharp = ({
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
      d="M23.347 16.569c-.73-2.286-2.665-3.594-5.32-3.594h-.02c-1.081-.01-2.048.208-2.864.625 2.277.73 3.965 2.353 4.742 4.648 1.233-.171 2.305-.55 3.253-1.13l.313-.198zM16.29 11.248a3.5 3.5 0 0 0 1.718.446 3.56 3.56 0 0 0 3.556-3.557 3.556 3.556 0 0 0-3.556-3.547c-.39 0-.76.067-1.11.18.512.826.805 1.802.805 2.836a5.33 5.33 0 0 1-1.412 3.642M9.31 13.582c-.797-.399-1.736-.607-2.798-.607h-.038c-2.655 0-4.59 1.309-5.31 3.594l-.115.35.313.2c.901.55 1.964.92 3.15 1.11.786-2.304 2.503-3.936 4.798-4.647M6.493 11.694c.626 0 1.204-.16 1.717-.446a5.33 5.33 0 0 1-1.414-3.642c0-1.033.294-2.01.807-2.835a3.6 3.6 0 0 0-1.11-.18 3.557 3.557 0 0 0-3.557 3.546 3.56 3.56 0 0 0 3.557 3.557"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.216 14.103h-.046c-3.414 0-5.903 1.678-6.829 4.607l-.112.354.317.194c1.808 1.102 3.968 1.638 6.603 1.638h.085c2.637 0 4.798-.536 6.606-1.638l.318-.194-.112-.354c-.927-2.929-3.415-4.607-6.83-4.607M12.25 12.119a4.513 4.513 0 0 0 4.508-4.508 4.513 4.513 0 0 0-4.508-4.507A4.513 4.513 0 0 0 7.742 7.61a4.513 4.513 0 0 0 4.508 4.508"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserBoldsharp;
