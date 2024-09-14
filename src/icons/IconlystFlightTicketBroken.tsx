import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlightTicketBroken = ({
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
      d="M9.595 8.75v6.5M12.25 12.862l-2.655-2.19-2.655 2.19M11.278 15.25H7.912"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 19.296h4.594c1.085 0 1.627 0 2.07-.128a3.24 3.24 0 0 0 2.208-2.208c.128-.443.128-.985.128-2.07 0-.233 0-.35-.014-.419-.048-.241-.062-.265-.254-.42-.053-.043-.249-.146-.635-.348l-.039-.02a1.88 1.88 0 0 1-1.019-1.681 1.89 1.89 0 0 1 1.019-1.686c.413-.217.619-.326.674-.37.192-.156.206-.179.254-.42.013-.07.013-.186.013-.419.001-1.084.001-1.626-.128-2.069a3.24 3.24 0 0 0-2.208-2.208c-.443-.129-.985-.129-2.069-.129H7.651c-1.08 0-1.62 0-2.06.128a3.24 3.24 0 0 0-2.214 2.213c-.127.44-.127.98-.127 2.06 0 1.928.012 3.842.004 5.787-.001 1.083-.001 1.624.126 2.066a3.24 3.24 0 0 0 2.212 2.213c.441.128.983.128 2.065.128h.596M15.767 14.084V9.916M15.767 7.303v-2.6M15.767 19.298v-2.6"
    />
  </Svg>
);
export default IconlystFlightTicketBroken;
