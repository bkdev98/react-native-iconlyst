import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketBroken = ({
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
      d="M7.66 4.748v11.277M13.445 9.547v4.69M15.485 10.734l-4.08 2.316M11.406 10.734l4.079 2.316M3.254 9.11c-.001-1.082-.001-1.624.126-2.066a3.24 3.24 0 0 1 2.212-2.213c.441-.128.983-.128 2.065-.128h9.187c1.085 0 1.627 0 2.07.129a3.24 3.24 0 0 1 2.208 2.207c.128.443.128.986.128 2.07 0 .233 0 .35-.014.419-.048.242-.062.266-.254.42-.053.043-.249.146-.635.349l-.039.02a1.88 1.88 0 0 0-1.019 1.68 1.89 1.89 0 0 0 1.019 1.686c.413.218.619.326.674.37.192.156.206.179.254.42.013.07.013.186.013.419.001 1.084.001 1.626-.128 2.069a3.24 3.24 0 0 1-2.208 2.209c-.443.128-.985.128-2.069.128H7.651c-1.08 0-1.62 0-2.06-.127a3.24 3.24 0 0 1-2.214-2.213c-.127-.441-.127-.981-.127-2.06 0-.969.003-1.345.005-2.312"
    />
  </Svg>
);
export default IconlystTicketBroken;
