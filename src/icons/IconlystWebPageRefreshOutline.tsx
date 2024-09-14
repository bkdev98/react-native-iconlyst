import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageRefreshOutline = ({
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
      d="M4.024 3.858c.961-1.032 2.33-1.608 3.944-1.608h8.2c1.619 0 2.988.576 3.948 1.608.956 1.026 1.451 2.441 1.451 4.028v4.887a.75.75 0 0 1-1.5 0V10.06H4.07v5.55c0 1.278.396 2.306 1.049 3.007.647.696 1.602 1.13 2.85 1.13H9.67a.75.75 0 1 1 0 1.5H7.968c-1.618 0-2.987-.575-3.948-1.608-.955-1.026-1.45-2.441-1.45-4.028V7.886c0-1.588.498-3.003 1.454-4.028m.045 4.702h15.998v-.674c0-1.277-.396-2.305-1.048-3.006-.647-.695-1.603-1.13-2.85-1.13h-8.2c-1.244 0-2.2.435-2.848 1.13-.654.702-1.052 1.73-1.052 3.006zm1.697-2.11a.75.75 0 0 1 .75-.75h.054a.75.75 0 0 1 0 1.5h-.054a.75.75 0 0 1-.75-.75m2.416 0a.75.75 0 0 1 .75-.75h.054a.75.75 0 0 1 0 1.5h-.054a.75.75 0 0 1-.75-.75m2.418 0a.75.75 0 0 1 .75-.75h.053a.75.75 0 0 1 0 1.5h-.053a.75.75 0 0 1-.75-.75m2.764 10.383h1.83a.75.75 0 0 0 0-1.5h-.19a2.642 2.642 0 1 1-.918 3.642.75.75 0 1 0-1.282.778 4.142 4.142 0 1 0 1.26-5.6.75.75 0 0 0-1.498.063v1.852a.75.75 0 0 0 .798.765"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageRefreshOutline;
