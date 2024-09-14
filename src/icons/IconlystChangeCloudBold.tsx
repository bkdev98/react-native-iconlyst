import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChangeCloudBold = ({
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
      d="M14.408 8.663c.238-.02.38-.283.217-.458-.473-.508-1.123-.845-1.895-.945C12.516 5.803 11.327 4 9.038 4s-3.48 1.803-3.693 3.26c-1.635.211-2.741 1.471-2.741 3.199 0 1.266.746 2.421 1.919 2.951.413.168.869.26 1.284.26h1.875a.31.31 0 0 0 .242-.118 4.44 4.44 0 0 1 1.85-1.354.32.32 0 0 0 .183-.182c.747-1.922 2.432-3.19 4.45-3.353M7.246 19.13a2.49 2.49 0 0 1-2.436-1.991l.004.005a.75.75 0 1 0 1.049-1.073l-1.31-1.281a.77.77 0 0 0-.532-.214.75.75 0 0 0-.527.226l-1.28 1.308a.751.751 0 0 0 .536 1.275.74.74 0 0 0 .536-.226l.023-.024c.245 1.965 1.907 3.495 3.937 3.495a.75.75 0 0 0 0-1.5M18.51 13.395c-.214-1.458-1.403-3.261-3.692-3.261s-3.479 1.803-3.694 3.26c-1.635.21-2.74 1.47-2.74 3.199 0 1.266.746 2.422 1.92 2.95.413.169.87.262 1.283.262h6.456c.417 0 .875-.091 1.31-.265a3.24 3.24 0 0 0 1.897-2.947c0-1.728-1.105-2.987-2.74-3.198M15.564 5.744A2.49 2.49 0 0 1 18 7.734l-.003-.002a.749.749 0 1 0-1.05 1.071l1.308 1.281a.75.75 0 0 0 .525.215h.008a.75.75 0 0 0 .528-.226l1.28-1.308a.75.75 0 1 0-1.071-1.049l-.025.025c-.244-1.966-1.906-3.497-3.937-3.497a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChangeCloudBold;
