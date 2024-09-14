import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovie2Bold = ({
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
      d="M9.42 6.429a.3.3 0 0 0 .3.3h4.555a.3.3 0 0 0 .3-.3V2.8a.3.3 0 0 0-.3-.3H9.72a.3.3 0 0 0-.3.3zM16.076 6.429a.3.3 0 0 0 .3.3h4.235a.288.288 0 0 0 .287-.345c-.487-2.25-2.17-3.725-4.518-3.867a.29.29 0 0 0-.304.292zM7.62 6.729a.3.3 0 0 0 .3-.3v-3.62a.29.29 0 0 0-.304-.292C5.268 2.66 3.586 4.134 3.1 6.384a.288.288 0 0 0 .287.345zM17.618 15.87c0 1.202-.979 2.18-2.18 2.18H13.26a2.183 2.183 0 0 1-2.18-2.18v-1.32c0-1.203.977-2.18 2.18-2.18h2.176c1.202 0 2.181.978 2.181 2.18zM3.25 8.229a.3.3 0 0 0-.3.3v7.7c0 3.153 2.027 5.27 5.044 5.27h8.013c3.016 0 5.043-2.117 5.043-5.27v-7.7a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.438 13.87H13.26a.68.68 0 0 0-.68.68v1.32c0 .375.305.68.68.68h2.177a.68.68 0 0 0 .68-.68v-1.32a.68.68 0 0 0-.68-.68"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovie2Bold;
