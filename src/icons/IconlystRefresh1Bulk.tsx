import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefresh1Bulk = ({
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
      d="M5.944 8.133a8.04 8.04 0 0 1 6.972-3.967C17.374 4.166 21 7.792 21 12.25c0 4.457-3.626 8.083-8.084 8.083a8.1 8.1 0 0 1-6.663-3.493 1 1 0 1 1 1.646-1.137A6.091 6.091 0 0 0 19 12.25a6.09 6.09 0 0 0-6.084-6.084 6.06 6.06 0 0 0-5.07 2.697z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M6.142 8.172 4.652 7.6a.9.9 0 0 0-.906.149.8.8 0 0 0-.243.85l1.174 3.873c.006.018.022.03.029.048q.046.122.132.227c.023.029.038.061.065.088a.9.9 0 0 0 .319.213.9.9 0 0 0 .38.055c.037-.002.07-.016.107-.022a.9.9 0 0 0 .25-.08c.017-.009.037-.007.053-.016l3.465-2.093a.82.82 0 0 0 .388-.794.9.9 0 0 0-.574-.717l-1.49-.572z"
    />
  </Svg>
);
export default IconlystRefresh1Bulk;
