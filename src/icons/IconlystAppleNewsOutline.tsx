import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleNewsOutline = ({
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
      d="M3.762 12.933a.75.75 0 0 1 .836.26c1.903 2.518 3.407 4.351 6.17 6.18a.75.75 0 0 1-.413 1.376H5.673a2.423 2.423 0 0 1-2.423-2.423v-4.681a.75.75 0 0 1 .512-.712m.988 2.9v2.493c0 .51.413.923.923.923h2.402c-1.3-1.07-2.325-2.182-3.325-3.416M12.927 3.784a.75.75 0 0 1 .719-.534h4.681a2.423 2.423 0 0 1 2.423 2.423v4.682a.75.75 0 0 1-1.348.452c-1.903-2.519-3.407-4.352-6.17-6.182a.75.75 0 0 1-.305-.841m2.999.966c1.3 1.07 2.325 2.183 3.324 3.416V5.673a.923.923 0 0 0-.923-.923zM8.255 4.75H5.673a.923.923 0 0 0-.923.923v2.582c0 .245.097.48.27.653L15.092 18.98c.173.173.407.27.652.27h2.583c.51 0 .923-.413.923-.922v-2.583a.92.92 0 0 0-.27-.652L8.907 5.02a.92.92 0 0 0-.653-.27m-2.582-1.5h2.582c.643 0 1.26.255 1.714.71L20.04 14.03c.454.455.71 1.072.71 1.714v2.583a2.423 2.423 0 0 1-2.423 2.423h-2.583a2.42 2.42 0 0 1-1.713-.71L3.96 9.969a2.42 2.42 0 0 1-.71-1.714V5.673A2.423 2.423 0 0 1 5.673 3.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAppleNewsOutline;
