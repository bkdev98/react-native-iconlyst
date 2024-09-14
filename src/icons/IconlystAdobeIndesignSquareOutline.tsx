import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeIndesignSquareOutline = ({
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
      d="M16.215 21.754h-8.43c-3.31 0-5.53-2.32-5.53-5.78v-7.95c0-3.45 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.45-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28v-7.95c0-2.6-1.58-4.28-4.03-4.28z"
    />
    <Path
      fill={props.color}
      d="M14.285 16.098c-.76 0-1.66-.14-2.33-.67-.43-.34-.95-.98-.95-2.12s.51-1.79.94-2.13c.87-.7 2.12-.75 2.96-.69v-1.81c0-.41.34-.75.75-.75s.75.34.75.75v6.51c0 .35-.24.65-.57.73-.13.03-.78.18-1.56.18zm.11-4.13c-.55 0-1.15.08-1.51.38-.16.13-.38.37-.38.96s.21.81.37.94c.49.38 1.4.38 2.04.31v-2.56c-.16-.01-.34-.02-.52-.02zM8.345 15.938c-.41 0-.75-.34-.75-.75v-6.51c0-.41.34-.75.75-.75s.75.34.75.75v6.51c0 .41-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystAdobeIndesignSquareOutline;
