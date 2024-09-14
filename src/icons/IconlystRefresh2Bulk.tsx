import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefresh2Bulk = ({
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
      d="M18.056 8.133a8.04 8.04 0 0 0-6.972-3.967C6.626 4.166 3 7.792 3 12.25c0 4.457 3.626 8.083 8.084 8.083a8.1 8.1 0 0 0 6.663-3.493 1 1 0 1 0-1.646-1.137A6.091 6.091 0 0 1 5 12.25a6.09 6.09 0 0 1 6.084-6.084 6.06 6.06 0 0 1 5.07 2.697z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m17.858 8.172 1.49-.572a.9.9 0 0 1 .906.149.8.8 0 0 1 .243.85l-1.174 3.873c-.006.018-.023.03-.03.048a.8.8 0 0 1-.13.227c-.024.029-.04.061-.066.088a.9.9 0 0 1-.319.213.9.9 0 0 1-.38.055c-.037-.002-.07-.016-.108-.022a.9.9 0 0 1-.25-.08c-.016-.009-.036-.007-.052-.016l-3.465-2.093a.82.82 0 0 1-.389-.794.9.9 0 0 1 .575-.717l1.49-.572z"
    />
  </Svg>
);
export default IconlystRefresh2Bulk;
