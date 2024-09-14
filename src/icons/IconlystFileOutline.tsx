import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFileOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25M9.993 16.829a2.3 2.3 0 0 1-1.154-.314.75.75 0 1 1 .746-1.3.716.716 0 0 0 .984-.189 4.2 4.2 0 0 0 .511-1.432q.06-.263.126-.511l.636-2.541q.063-.238.117-.475a5.3 5.3 0 0 1 .76-1.974 2.217 2.217 0 0 1 2.943-.606.75.75 0 0 1-.746 1.3.717.717 0 0 0-.984.188c-.257.443-.43.93-.513 1.435q-.06.262-.125.508l-.636 2.54c-.044.163-.08.32-.118.479a5.4 5.4 0 0 1-.758 1.971 2.2 2.2 0 0 1-1.789.921"
    />
    <Path
      fill={props.color}
      d="M14.142 14.16a1 1 0 0 1-.14-.014l-3.785-.71a.751.751 0 0 1 .278-1.475l3.784.713a.75.75 0 0 1-.137 1.489zM14.142 12.052a1 1 0 0 1-.14-.013l-3.785-.712a.75.75 0 0 1 .278-1.475l3.784.713a.75.75 0 0 1-.137 1.487"
    />
  </Svg>
);
export default IconlystFileOutline;
