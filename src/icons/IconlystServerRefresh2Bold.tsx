import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRefresh2Bold = ({
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
      d="M16.448 8.15h-4.5a.749.749 0 1 1 0-1.5h4.5c.41 0 .75.34.75.75s-.34.75-.75.75m-8.7 0h-.5a.749.749 0 1 1 0-1.5h.5c.41 0 .75.34.75.75s-.34.75-.75.75m8-5.65h-7.9c-3.24 0-5.5 2.18-5.5 5.3v3.15a.3.3 0 0 0 .3.3h18.4a.3.3 0 0 0 .3-.3V7.8c0-3.17-2.25-5.3-5.6-5.3M7.748 17.35h-.5a.749.749 0 1 1 0-1.5h.5c.41 0 .75.34.75.75s-.34.75-.75.75m5.45-3.984c.222-.2.088-.616-.21-.616H2.648a.3.3 0 0 0-.3.3v3.15c0 3.17 2.21 5.3 5.5 5.3h3.69c.238 0 .384-.265.274-.475a6.26 6.26 0 0 1-.714-2.925 6.36 6.36 0 0 1 2.1-4.734M20.902 13.632a.75.75 0 0 0-.75.75v.15c-.626-.444-1.463-.833-2.538-.833-1.436 0-2.76.79-3.371 2.015a.75.75 0 1 0 1.342.67c.354-.708 1.17-1.185 2.029-1.185.525 0 .964.149 1.33.344a.745.745 0 0 0 .058 1.489h1.9a.75.75 0 0 0 .75-.75v-1.9a.75.75 0 0 0-.75-.75M20.678 18.494a.75.75 0 0 0-1.02.292c-.39.703-1.25 1.214-2.044 1.214-.417 0-.789-.164-1.109-.377h.143a.75.75 0 0 0 0-1.5h-1.9a.75.75 0 0 0-.75.75v1.8c0 .414.336.75.75.75a.743.743 0 0 0 .737-.688c.558.415 1.272.765 2.13.765 1.325 0 2.705-.817 3.355-1.986a.75.75 0 0 0-.292-1.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerRefresh2Bold;
