import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJavascriptBold = ({
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
      d="M18.247 16.755c-.301.793-.971 1.324-1.838 1.456a3 3 0 0 1-.416.031c-.871 0-1.742-.399-2.261-1.06a.75.75 0 0 1 1.181-.927c.27.345.807.545 1.27.473q.498-.076.662-.506a.65.65 0 0 0-.031-.564 1 1 0 0 0-.655-.467c-.721-.15-1.615-.337-2.172-1.239a2.145 2.145 0 0 1 .16-2.518c.42-.523 1.08-.837 1.808-.858a2.28 2.28 0 0 1 1.814.74.749.749 0 1 1-1.114 1.003c-.144-.16-.394-.24-.658-.244-.283.01-.539.121-.685.303a.65.65 0 0 0-.049.785c.209.338.555.424 1.199.56.724.157 1.343.613 1.672 1.222.303.563.344 1.206.113 1.81m-5.916-.777a2.383 2.383 0 0 1-2.379 2.381 2.385 2.385 0 0 1-2.382-2.38.75.75 0 0 1 1.5 0 .881.881 0 0 0 1.761 0v-4.65a.75.75 0 0 1 1.5 0zm3.886-13.15H7.783C4.623 2.828 2.5 5.051 2.5 8.36v7.94c0 3.307 2.123 5.53 5.283 5.53h8.433c3.161 0 5.284-2.223 5.284-5.53v-7.94c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystJavascriptBold;
