import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlightTicketLight = ({
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
      d="M12 8.75v6.5M14.655 12.862 12 10.672l-2.655 2.19M13.683 15.25h-3.367"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.003 19.039a1.88 1.88 0 0 1 1.68 1.019c.216.412.324.619.369.674.154.192.178.206.42.254.07.014.186.014.419.014 1.085 0 1.627 0 2.07-.128a3.24 3.24 0 0 0 2.207-2.208c.129-.443.129-.985.129-2.07V7.407c0-1.082 0-1.624-.128-2.065a3.24 3.24 0 0 0-2.213-2.212c-.442-.127-.984-.127-2.066-.126-.232.001-.347.001-.416.014-.242.048-.265.062-.42.254-.044.055-.153.26-.37.671a1.89 1.89 0 0 1-1.683 1.016h-.058a1.9 1.9 0 0 1-1.597-.985c-.241-.44-.362-.66-.406-.714-.162-.194-.169-.199-.417-.247C9.455 3 9.337 3 9.103 3c-1.08 0-1.62 0-2.06.127a3.24 3.24 0 0 0-2.214 2.214c-.127.44-.127.98-.127 2.06v9.193c0 1.084 0 1.626.128 2.069a3.24 3.24 0 0 0 2.21 2.208c.442.129.984.129 2.068.128.233 0 .349 0 .418-.013.242-.048.265-.062.42-.254.044-.055.153-.261.371-.674a1.89 1.89 0 0 1 1.685-1.019"
    />
  </Svg>
);
export default IconlystFlightTicketLight;
