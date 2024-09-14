import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpRightCircleBold = ({
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
      d="M18.237 9.969c-.13-.118-.333-.128-.457-.004l-2.547 2.547a2.5 2.5 0 0 1-1.767.732 2.501 2.501 0 0 1-1.768-4.268l2.547-2.546c.124-.124.114-.327-.003-.457a2.48 2.48 0 0 1-.64-1.59c-.004-.15-.103-.284-.25-.31a8.5 8.5 0 0 0-1.51-.137c-4.693 0-8.511 3.819-8.511 8.511 0 4.694 3.818 8.512 8.512 8.512 4.693 0 8.512-3.818 8.512-8.511 0-.545-.056-1.076-.156-1.592-.028-.148-.166-.246-.317-.248a2.48 2.48 0 0 1-1.645-.64"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.923 3.541H16.09a.75.75 0 0 0 0 1.5h2.018l-5.173 5.173a.749.749 0 1 0 1.06 1.06l5.174-5.173v2.02a.75.75 0 0 0 1.5 0V4.29a.75.75 0 0 0-.746-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpRightCircleBold;
