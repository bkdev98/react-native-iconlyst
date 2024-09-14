import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhpBulk = ({
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
      d="M17.34 4.46H6.66C4.172 4.46 2.5 6.206 2.5 8.8v6.4c0 2.597 1.672 4.34 4.16 4.34h10.679c2.488 0 4.161-1.743 4.161-4.34V8.8c0-2.595-1.672-4.34-4.16-4.34"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.086 14.16q.06.01.123.01c.36 0 .678-.261.739-.629l.327-1.979a1.56 1.56 0 0 0-.348-1.265c-.3-.355-.74-.558-1.206-.558h-.445l.107-.647a.75.75 0 0 0-1.48-.244l-.737 4.45a.75.75 0 0 0 1.48.243l.38-2.302h.695l.074.077-.327 1.981a.75.75 0 0 0 .618.862"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.868 12.209c-.194.914-.875 1.654-1.736 1.886-.306.086-.747.088-1.258.061l-.134.816a.751.751 0 0 1-1.48-.245l.737-4.46a.75.75 0 0 1 .74-.627h.869c.475 0 1.03.053 1.534.45.632.51.9 1.3.728 2.119m-2.496-1.07h.233c.323 0 .487.035.6.123.232.19.234.45.194.636-.075.356-.345.664-.666.75-.106.026-.36.026-.613.017zM10.018 12.209c-.193.914-.875 1.654-1.734 1.886-.31.087-.75.087-1.26.061l-.135.816a.75.75 0 1 1-1.48-.245l.738-4.46a.75.75 0 0 1 .74-.627h.87c.447 0 1.027.05 1.534.45.63.51.9 1.3.727 2.119m-2.495-1.07h.233c.318 0 .488.036.6.123.232.19.233.45.194.635-.076.357-.346.665-.666.751-.105.026-.36.026-.614.017z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhpBulk;
