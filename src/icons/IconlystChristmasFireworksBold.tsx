import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasFireworksBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.822 3.923-.45 6.03c-.02.36-.22.66-.53.8a.9.9 0 0 1-.44.1c-.22 0-.45-.07-.65-.21-.06-.03-.11-.08-.16-.11l-10.98 10.98c-.15.14-.34.22-.53.22s-.38-.08-.53-.22a.754.754 0 0 1 0-1.06l3.58-3.59-1.35-1.34c-.03.07-.06.14-.11.21-.38.53-1.2 1.14-2.94.99-2.32-.19-2.86.64-3.18 1.13a.75.75 0 0 1-.63.35.758.758 0 0 1-.63-1.16c.63-.97 1.71-2.03 4.57-1.82.8.07 1.37-.06 1.6-.37.15-.2.13-.45.1-.55l-.52-.53a1.49 1.49 0 0 1-.31-1.7l5.83 1.15c.05.01.1.01.15.01.35 0 .66-.24.73-.6.08-.41-.18-.8-.59-.88l-4.96-.98 1.66-1.66 4.56.66c.04 0 .08.01.11.01.37 0 .69-.27.74-.65a.747.747 0 0 0-.63-.85l-3.45-.5 2.46-2.46c-.1-.13-.2-.24-.3-.38-.25-.37-.3-.78-.13-1.12.14-.3.45-.5.81-.52l6.03-.45c.3-.01.58.08.78.29.21.2.31.49.29.78M4.785 13.169a.75.75 0 0 0 .75-.75v-.011a.745.745 0 0 0-.75-.744.755.755 0 0 0-.75.755c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasFireworksBold;
