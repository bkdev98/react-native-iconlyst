import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConcertTicketBroken = ({
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
      d="M3.25 14.898c0 1.079 0 1.619.127 2.06a3.24 3.24 0 0 0 2.214 2.213c.44.127.98.127 2.06.127h9.193c1.084 0 1.626 0 2.069-.128a3.24 3.24 0 0 0 2.208-2.21c.129-.442.129-.984.128-2.068 0-.233 0-.349-.013-.418-.048-.242-.062-.265-.254-.42-.055-.045-.261-.153-.674-.371a1.89 1.89 0 0 1-1.019-1.685 1.88 1.88 0 0 1 1.019-1.681l.039-.02c.386-.203.582-.306.635-.349.192-.154.206-.178.254-.42.014-.07.014-.186.014-.419 0-1.084 0-1.627-.128-2.07a3.24 3.24 0 0 0-2.208-2.207c-.443-.129-.985-.129-2.07-.129H7.657c-1.082 0-1.624 0-2.065.128A3.24 3.24 0 0 0 3.38 7.044c-.127.442-.127.984-.126 2.066.004.969.003 1.196.001 2.154"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.756 13.482a1.782 1.782 0 1 1-3.564 0 1.782 1.782 0 0 1 3.564 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.756 13.48V8.13s.462 1.206 1.708 1.46M7.66 7.902v11.242"
    />
  </Svg>
);
export default IconlystConcertTicketBroken;
