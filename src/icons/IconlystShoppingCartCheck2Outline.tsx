import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartCheck2Outline = ({
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
      d="M10.076 16.852a3 3 0 0 1-2.91-2.3L4.646 3.898h-1.4a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .73.578l.625 2.647 13.521-.11a1.86 1.86 0 0 1 1.8 2.4l-1.833 6a3.22 3.22 0 0 1-2.8 2.277l-6.937.643a2 2 0 0 1-.276.02M6.952 7.118l1.674 7.088a1.5 1.5 0 0 0 1.586 1.14l6.934-.648a1.72 1.72 0 0 0 1.5-1.22l1.833-6.006a.35.35 0 0 0-.055-.32c-.04-.056-.168-.182-.292-.146z"
    />
    <Path
      fill={props.color}
      d="M13.222 12.765a.75.75 0 0 1-.531-.22L11.447 11.3a.75.75 0 1 1 1.061-1.06l.719.718 1.967-1.968a.75.75 0 1 1 1.053 1.058l-2.5 2.5a.75.75 0 0 1-.525.218M9.113 21.599a1.231 1.231 0 1 1 .01-2.463 1.231 1.231 0 0 1-.01 2.463M18.32 21.599a1.231 1.231 0 1 0 0-2.462 1.231 1.231 0 0 0 0 2.462"
    />
  </Svg>
);
export default IconlystShoppingCartCheck2Outline;
