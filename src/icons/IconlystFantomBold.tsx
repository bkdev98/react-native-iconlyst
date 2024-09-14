import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFantomBold = ({
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
      d="M3.847 14.116a1 1 0 0 0-1 1v2.13a1 1 0 1 0 2 0v-2.13a1 1 0 0 0-1-1M20.153 4.816a1 1 0 0 0-1 1v2.13a1 1 0 0 0 2 0v-2.13a1 1 0 0 0-1-1M16.264 17.64l-3.937 2.267a.64.64 0 0 1-.668-.008L7.737 17.64a.68.68 0 0 1-.34-.594v-2.878l3.263 1.884c.387.223.82.332 1.254.346.03.003.056.018.087.018.032 0 .06-.016.09-.018a2.7 2.7 0 0 0 1.25-.346l3.262-1.884v2.878a.68.68 0 0 1-.339.593M11.647 4.09a.72.72 0 0 1 .692-.009l3.454 2-3.464 1.995a.64.64 0 0 1-.668-.007L8.206 6.081zm2.726 5.116 2.23-1.286v2.573zm-1.372 1.517 2.784 1.607-2.784 1.608zm-2 0v3.216L8.215 12.33zm-3.604-2.8 2.23 1.282-2.23 1.288zm10.93-2.12c-.043-.09-.08-.18-.133-.265a1 1 0 0 0-.094-.123 2.65 2.65 0 0 0-.836-.795l-3.937-2.278a2.76 2.76 0 0 0-2.668.008L6.736 4.62c-.346.2-.62.483-.84.802a1 1 0 0 0-.08.104 2.7 2.7 0 0 0-.419 1.42v10.1c0 .957.513 1.848 1.341 2.326l3.91 2.252c.418.25.888.374 1.356.374.464 0 .926-.122 1.335-.366l3.924-2.26a2.69 2.69 0 0 0 1.34-2.326v-10.1c0-.402-.108-.785-.274-1.138z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFantomBold;
