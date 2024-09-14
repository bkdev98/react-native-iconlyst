import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreadmill2Bold = ({
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
      d="M9.862 15.725h-2.04c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h2.04c.42 0 .75.33.75.75 0 .41-.33.75-.75.75m10.28-13.53a.754.754 0 0 0-.96.46c-1.05 3.01-1.97 2.84-3.35 2.58-.4-.07-.77.17-.87.56l-1.61 6.54-4.84-1.43-.91-3.63 1.28.16h.1c.37 0 .69-.27.74-.65a.753.753 0 0 0-.65-.84l-4.43-.56a.753.753 0 0 0-.84.65c-.05.41.24.79.65.84l1.56.2.92 3.69c-1.33.14-2.55.93-3.17 2.2-.62 1.26-.53 2.77.26 4a4.11 4.11 0 0 0 3.45 1.87h7.05c1.24 0 2.37-.77 2.81-1.93.31-.78.27-1.66-.1-2.42a3.04 3.04 0 0 0-1.86-1.56l-.58-.17 1.46-5.94c1.92.2 3.24-.48 4.35-3.67a.74.74 0 0 0-.46-.95M5.025 19.39a1.23 1.23 0 0 0 0 2.458 1.23 1.23 0 0 0 0-2.458M17.038 19.39a1.23 1.23 0 0 0 0 2.458 1.23 1.23 0 0 0 0-2.458"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreadmill2Bold;
