import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerSettingBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21.248 7.55c0-3.17-2.25-5.3-5.6-5.3h-7.9c-3.23 0-5.5 2.18-5.5 5.3v3.15a.3.3 0 0 0 .3.3h18.4a.3.3 0 0 0 .3-.3zM12.478 20.59c-.6-1-.42-2.24.34-3.03a.014.014 0 0 0 0-.02c-.76-.79-.94-2.03-.34-3.03.607-1.03 1.49-1.13 2.52-1.14.11 0 .201-.09.234-.196.036-.114.095-.232.162-.343.084-.142-.01-.331-.176-.331H2.548a.3.3 0 0 0-.3.3v3.15c0 3.17 2.21 5.3 5.5 5.3h4.44c.285 0 .448-.407.297-.649z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.348 7.9h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.5a.749.749 0 1 1 0 1.5m-8.7 0h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5a.749.749 0 1 1 0 1.5M7.648 17.1h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5a.749.749 0 1 1 0 1.5M20.915 18.373l.473.284a.751.751 0 0 1-.773 1.286l-.453-.272a3 3 0 0 1-1.41.779V21a.75.75 0 0 1-1.5 0v-.55a3 3 0 0 1-1.41-.779l-.455.272a.752.752 0 0 1-1.03-.257.75.75 0 0 1 .258-1.029l.473-.284a3.1 3.1 0 0 1-.136-.873c0-.275.046-.536.111-.788l-.447-.269a.75.75 0 1 1 .772-1.286l.396.238c.39-.41.893-.704 1.467-.845V14a.75.75 0 0 1 1.5 0v.55c.544.134 1.03.401 1.41.779l.454-.272a.75.75 0 1 1 .773 1.286l-.474.284c.08.278.137.566.137.873s-.056.596-.136.873m-4.463-.873c0 .883.665 1.55 1.55 1.55.884 0 1.55-.667 1.55-1.55s-.666-1.55-1.55-1.55c-.566 0-1.04.276-1.31.704l-.015.047c-.008.03-.016.058-.032.085q-.01.014-.024.024-.012.008-.022.021a1.6 1.6 0 0 0-.148.669"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerSettingBulk;
