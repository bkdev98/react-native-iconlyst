import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSSLBold = ({
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
      d="M6.291 6.125c.414 0 .781.336.781.75s-.303.75-.718.75h-.063a.75.75 0 0 1 0-1.5m2.486 0c.414 0 .782.336.782.75s-.305.75-.719.75h-.063a.75.75 0 0 1 0-1.5m2.486 0c.414 0 .782.336.782.75s-.305.75-.719.75h-.063a.75.75 0 0 1 0-1.5m9.937 2.94a.3.3 0 0 0 .3-.3v-.41c0-3.308-2.123-5.53-5.282-5.53H7.783c-3.16 0-5.283 2.222-5.283 5.53v.41a.3.3 0 0 0 .3.3zM17.411 17.866h-1.733a.75.75 0 0 1-.75-.75v-4.25a.75.75 0 0 1 1.5 0v3.5h.983a.75.75 0 0 1 0 1.5m-5.237-.011h-.749a.75.75 0 0 1 0-1.5h.75a.305.305 0 1 0 0-.61h-.15c-.998 0-1.81-.812-1.81-1.81s.812-1.81 1.81-1.81h.72a.75.75 0 0 1 0 1.5h-.72a.306.306 0 0 0-.31.31c0 .167.142.31.31.31h.15c.997 0 1.808.808 1.808 1.8a1.81 1.81 0 0 1-1.809 1.81m-4.445 0h-.748a.75.75 0 0 1 0-1.5h.748a.306.306 0 0 0 .311-.31.307.307 0 0 0-.31-.3h-.15a1.81 1.81 0 0 1 0-3.619h.72a.75.75 0 0 1 0 1.5h-.72a.305.305 0 0 0-.308.309c0 .167.141.31.308.31h.15c.997 0 1.81.808 1.81 1.8 0 .999-.813 1.81-1.81 1.81M2.8 10.565a.3.3 0 0 0-.3.3v5.44c0 3.302 2.123 5.52 5.283 5.52h8.434c3.16 0 5.283-2.218 5.283-5.52v-5.44a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSSLBold;
