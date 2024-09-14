import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChangeCloudBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M14.908 8.663c.238-.02.38-.283.217-.458-.473-.508-1.123-.845-1.896-.945C13.017 5.803 11.828 4 9.539 4c-2.29 0-3.48 1.803-3.693 3.26-1.635.211-2.741 1.471-2.741 3.199 0 1.266.746 2.421 1.919 2.951.413.168.869.26 1.284.26h1.875a.31.31 0 0 0 .241-.118 4.44 4.44 0 0 1 1.85-1.354.32.32 0 0 0 .184-.182c.747-1.922 2.432-3.19 4.45-3.353M19.01 13.395c-.214-1.458-1.403-3.261-3.692-3.261s-3.48 1.803-3.694 3.26c-1.635.21-2.74 1.47-2.74 3.199 0 1.266.746 2.422 1.919 2.95.414.169.87.262 1.284.262h6.456c.417 0 .875-.091 1.31-.265a3.24 3.24 0 0 0 1.897-2.947c0-1.728-1.105-2.987-2.74-3.198" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.746 19.128a2.49 2.49 0 0 1-2.436-1.991l.004.005a.75.75 0 1 0 1.049-1.073l-1.31-1.281a.77.77 0 0 0-.532-.214.75.75 0 0 0-.527.226l-1.28 1.308a.751.751 0 0 0 1.072 1.049l.023-.024c.245 1.965 1.907 3.495 3.937 3.495a.75.75 0 0 0 0-1.5M16.064 5.742a2.49 2.49 0 0 1 2.437 1.99l-.003-.002a.749.749 0 1 0-1.05 1.071l1.308 1.281a.75.75 0 0 0 .525.215h.008a.75.75 0 0 0 .528-.226l1.28-1.308a.75.75 0 1 0-1.071-1.049L20 7.74c-.244-1.966-1.906-3.497-3.937-3.497a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChangeCloudBulk;
