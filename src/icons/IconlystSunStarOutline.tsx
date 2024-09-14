import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunStarOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.615 7.981a.75.75 0 0 1 .704.49l.085.23a4.25 4.25 0 0 0 2.51 2.51l.23.086a.75.75 0 0 1 0 1.406l-.23.085a4.25 4.25 0 0 0-2.51 2.511l-.085.23a.75.75 0 0 1-1.407 0l-.085-.23a4.25 4.25 0 0 0-2.511-2.51l-.23-.086a.75.75 0 0 1 0-1.406l.23-.085a4.25 4.25 0 0 0 2.51-2.511l.086-.23a.75.75 0 0 1 .703-.49m0 2.45A5.8 5.8 0 0 1 11.045 12c.62.416 1.154.95 1.57 1.57.416-.62.95-1.154 1.57-1.57a5.8 5.8 0 0 1-1.57-1.57"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.614 2a.75.75 0 0 1 .693.462 2.272 2.272 0 0 0 3.477.931.75.75 0 0 1 1.199.693 2.272 2.272 0 0 0 2.546 2.545.75.75 0 0 1 .692 1.2 2.272 2.272 0 0 0 .932 3.477.75.75 0 0 1 0 1.384 2.272 2.272 0 0 0-.932 3.478.75.75 0 0 1-.692 1.199 2.272 2.272 0 0 0-2.546 2.545.75.75 0 0 1-1.2.693 2.272 2.272 0 0 0-3.476.931.75.75 0 0 1-1.385 0 2.272 2.272 0 0 0-3.477-.931.75.75 0 0 1-1.2-.693A2.272 2.272 0 0 0 4.7 17.37a.75.75 0 0 1-.692-1.2 2.272 2.272 0 0 0-.932-3.477.75.75 0 0 1 0-1.384 2.272 2.272 0 0 0 .932-3.478.75.75 0 0 1 .692-1.199 2.272 2.272 0 0 0 2.545-2.545.75.75 0 0 1 1.2-.693 2.272 2.272 0 0 0 3.477-.931.75.75 0 0 1 .692-.462M8.68 5.185a3.79 3.79 0 0 1-2.88 2.88A3.79 3.79 0 0 1 4.744 12a3.79 3.79 0 0 1 1.054 3.935 3.79 3.79 0 0 1 2.88 2.88 3.79 3.79 0 0 1 3.935 1.054 3.79 3.79 0 0 1 3.935-1.054 3.79 3.79 0 0 1 2.88-2.88A3.79 3.79 0 0 1 20.484 12a3.79 3.79 0 0 1-1.055-3.935 3.79 3.79 0 0 1-2.88-2.88 3.79 3.79 0 0 1-3.935-1.054A3.79 3.79 0 0 1 8.68 5.185"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunStarOutline;
