import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTearsOfJoyBold = ({
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
      d="M19.135 9.43c-.82.73-2.06 2.55-1.52 4.72.294 1.185 1.144 2.1 2.217 2.462.194.066.297.292.188.466a9.482 9.482 0 0 1-16.039 0c-.11-.174-.007-.4.187-.466 1.073-.362 1.923-1.277 2.217-2.462.53-2.17-.71-3.99-1.52-4.72-.28-.25-.64-.39-1-.39-.13 0-.25.02-.37.05-.24.067-.486-.16-.399-.394 1.34-3.617 4.832-6.196 8.9-6.196 4.08 0 7.566 2.585 8.902 6.198.088.236-.152.463-.393.392-.12-.03-.24-.05-.37-.05-.36 0-.72.14-1 .39m-11.45.86c.36 0 .68-.27.74-.64.04-.28.27-.47.55-.47s.51.19.55.46a.748.748 0 1 0 1.48-.21c-.14-1-1.01-1.75-2.03-1.75s-1.88.73-2.03 1.75c-.07.41.22.79.63.85.03.01.07.01.11.01m8.74-.01c-.04.01-.07.01-.11.01-.37 0-.69-.27-.74-.64a.55.55 0 0 0-.56-.47c-.27 0-.5.2-.54.46-.06.41-.44.7-.85.64a.76.76 0 0 1-.64-.85c.14-1 1.02-1.75 2.03-1.75 1.03 0 1.89.73 2.04 1.75.06.41-.22.79-.63.85m-4.43 6.94c-1.85 0-3.37-1.51-3.37-3.37 0-.28.23-.5.5-.5h5.74c.28 0 .5.22.5.5 0 1.86-1.51 3.37-3.37 3.37"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.595 12.93c-.08-.29-.19-.55-.32-.78-.05-.08-.09-.15-.14-.22s-.11-.14-.16-.21a3 3 0 0 0-.37-.37.8.8 0 0 0-.14-.11v-.01a.3.3 0 0 0-.07-.05q-.105-.09-.21-.15c-.14-.09-.27-.17-.4-.23-.18-.1-.34-.16-.46-.2-.08-.03-.13-.04-.16-.05-.02-.01-.03-.01-.03-.01s-1.53 1.38-1.07 3.25c.03.11.06.22.11.32.04.1.09.2.15.29s.12.18.19.26c.14.15.31.29.49.39.1.06.21.11.33.14.06.03.12.05.19.06.11.03.24.04.36.04h.02c.12 0 .26-.02.39-.05.97-.24 1.55-1.27 1.3-2.31M4.925 13.79c.19-.76.05-1.43-.18-1.97-.06-.15-.13-.28-.2-.4-.25-.44-.54-.74-.64-.83l-.05-.05c-.06.02-.71.2-1.33.69-.12.09-.23.2-.34.31-.07.07-.14.14-.2.22-.25.31-.47.7-.58 1.17-.25 1.04.33 2.07 1.3 2.31.13.03.26.05.38.05h.03c.52 0 1.01-.23 1.36-.63.21-.24.37-.53.45-.87"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTearsOfJoyBold;
