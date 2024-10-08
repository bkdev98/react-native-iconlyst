import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallHistoryOutline = ({
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
      d="M17.049 21.718c-2.336 0-5.374-1.854-9.032-5.511-3.674-3.672-5.53-6.72-5.515-9.061A3.52 3.52 0 0 1 3.635 4.49c.016-.021.068-.071.087-.09C5.069 3.053 5.95 2.51 6.892 2.52c1.063.013 1.81.8 2.756 1.8q.344.367.76.787a2.856 2.856 0 0 1 .556 3.547c-.4 1.03-.751 1.92.969 3.64s2.61 1.372 3.64.967a2.856 2.856 0 0 1 3.547.553c.276.275.536.523.778.753 1 .95 1.79 1.7 1.8 2.766.01.9-.533 1.822-1.878 3.168l-.092.089a3.52 3.52 0 0 1-2.658 1.132zM4.788 5.458s-.046.048-.105.106a2.03 2.03 0 0 0-.681 1.59c-.008 1.325.866 3.784 5.075 7.992 4.189 4.188 6.646 5.072 7.972 5.072h.015a2.04 2.04 0 0 0 1.6-.681q.079-.082.166-.156c.91-.918 1.38-1.6 1.376-2.032s-.564-.964-1.338-1.7a37 37 0 0 1-.8-.78c-.7-.7-1.091-.55-1.94-.216-1.194.47-2.833 1.112-5.247-1.3C8.467 10.939 9.108 9.3 9.575 8.105c.333-.85.484-1.238-.218-1.941-.29-.288-.55-.562-.788-.813-.73-.77-1.258-1.325-1.688-1.33h-.007c-.431 0-1.113.472-2.084 1.442z"
    />
    <Path
      fill={props.color}
      d="M17.616 11.041a4.382 4.382 0 1 1 .002-8.764 4.382 4.382 0 0 1-.002 8.764m0-7.264a2.882 2.882 0 1 0 .002 5.764 2.882 2.882 0 0 0-.002-5.764"
    />
    <Path
      fill={props.color}
      d="M18.744 8.354a.74.74 0 0 1-.384-.107l-1.148-.686a.75.75 0 0 1-.365-.644V5.441a.75.75 0 1 1 1.5 0v1.055l.783.468a.75.75 0 0 1-.386 1.394z"
    />
  </Svg>
);
export default IconlystPhoneCallHistoryOutline;
