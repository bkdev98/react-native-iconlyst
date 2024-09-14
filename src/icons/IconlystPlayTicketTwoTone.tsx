import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayTicketTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.487 13.045a9.2 9.2 0 0 1-2.685 1.685c-.866.34-1.592-.085-1.699-.939a16.8 16.8 0 0 1 0-3.59c.116-.887.916-1.264 1.7-.935a9 9 0 0 1 2.683 1.685c.669.605.684 1.466 0 2.094"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.539 11.998a1.88 1.88 0 0 1 1.019-1.681c.412-.216.619-.324.674-.369.192-.154.206-.178.254-.42.014-.07.014-.186.014-.419 0-1.084 0-1.627-.128-2.07a3.24 3.24 0 0 0-2.208-2.207c-.443-.129-.985-.129-2.07-.129H7.907c-1.082 0-1.624 0-2.065.128A3.24 3.24 0 0 0 3.63 7.044c-.127.442-.127.984-.126 2.066.001.232.001.347.014.416.048.242.062.265.254.42.055.044.26.153.671.37.606.32 1.017.943 1.016 1.683v.058a1.9 1.9 0 0 1-.985 1.597c-.44.241-.66.362-.714.406-.194.162-.199.169-.247.417-.013.068-.013.185-.013.42 0 1.08 0 1.62.127 2.06a3.24 3.24 0 0 0 2.214 2.214c.44.127.98.127 2.06.127h9.193c1.084 0 1.626 0 2.069-.128a3.24 3.24 0 0 0 2.208-2.21c.129-.442.129-.984.128-2.068 0-.233 0-.349-.013-.418-.048-.242-.062-.265-.254-.42-.055-.045-.261-.153-.674-.371a1.89 1.89 0 0 1-1.019-1.685"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlayTicketTwoTone;