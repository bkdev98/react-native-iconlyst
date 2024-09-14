import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketAiAltTwoTone = ({
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
      d="M19.039 11.997a1.88 1.88 0 0 1 1.019-1.68c.412-.217.619-.325.674-.37.192-.154.206-.178.254-.42.014-.07.014-.186.014-.418 0-1.085 0-1.627-.128-2.07a3.24 3.24 0 0 0-2.208-2.208c-.443-.128-.985-.128-2.07-.128H7.407c-1.082 0-1.624 0-2.065.128A3.24 3.24 0 0 0 3.13 7.044c-.127.442-.127.983-.126 2.066.001.231.001.347.014.416.048.241.062.265.254.42.055.044.26.152.671.37.606.319 1.017.942 1.016 1.683v.057a1.9 1.9 0 0 1-.985 1.598c-.44.24-.66.361-.714.406-.194.161-.199.168-.247.417-.013.067-.013.185-.013.42 0 1.08 0 1.62.127 2.06a3.24 3.24 0 0 0 2.214 2.213c.44.127.98.127 2.06.127h9.193c1.084 0 1.626 0 2.069-.128a3.24 3.24 0 0 0 2.208-2.209c.129-.442.129-.985.128-2.069 0-.232 0-.349-.013-.418-.048-.242-.062-.265-.254-.42-.055-.044-.261-.153-.674-.37a1.89 1.89 0 0 1-1.019-1.686"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.168 13.863-.095-.258a3.54 3.54 0 0 0-2.092-2.094l-.257-.096.257-.095a3.54 3.54 0 0 0 2.092-2.095l.095-.257.095.257a3.54 3.54 0 0 0 2.092 2.095l.257.095-.257.096a3.54 3.54 0 0 0-2.092 2.095zM15.168 15.033a1.67 1.67 0 0 0-1.108-1.11c.531-.162.947-.578 1.108-1.11.162.532.577.948 1.108 1.11-.53.162-.946.578-1.108 1.11"
    />
  </Svg>
);
export default IconlystTicketAiAltTwoTone;
