import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSSLBulk = ({
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
      d="M2.8 10.563a.3.3 0 0 0-.3.3v5.44c0 3.302 2.123 5.52 5.283 5.52h8.434c3.16 0 5.283-2.218 5.283-5.52v-5.44a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.291 6.125c.414 0 .781.336.781.75s-.303.75-.718.75h-.063a.75.75 0 0 1 0-1.5m2.486 0c.414 0 .782.336.782.75s-.305.75-.719.75h-.063a.75.75 0 0 1 0-1.5m2.486 0c.414 0 .782.336.782.75s-.305.75-.719.75h-.063a.75.75 0 0 1 0-1.5m9.937 2.94a.3.3 0 0 0 .3-.3v-.41c0-3.308-2.123-5.53-5.282-5.53H7.783c-3.16 0-5.283 2.222-5.283 5.53v.41a.3.3 0 0 0 .3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M15.678 17.865h1.733a.75.75 0 0 0 0-1.5h-.983v-3.5a.75.75 0 0 0-1.5 0v4.25c0 .414.336.75.75.75M11.425 17.854h.75a1.81 1.81 0 0 0 1.808-1.809c0-.993-.81-1.8-1.809-1.8h-.149a.314.314 0 0 1-.31-.31c0-.174.136-.31.31-.31h.72a.75.75 0 0 0 0-1.5h-.72c-.998 0-1.81.811-1.81 1.81 0 .997.812 1.81 1.81 1.81h.15a.305.305 0 1 1 0 .61h-.75a.75.75 0 0 0 0 1.5M6.981 17.854h.748c.998 0 1.811-.81 1.811-1.809 0-.993-.813-1.8-1.81-1.8h-.15a.313.313 0 0 1-.308-.31c0-.174.135-.31.308-.31h.72a.75.75 0 0 0 0-1.5h-.72a1.81 1.81 0 0 0 0 3.62h.15c.17 0 .31.134.31.3a.306.306 0 0 1-.31.31H6.98a.75.75 0 0 0 0 1.5"
    />
  </Svg>
);
export default IconlystSSLBulk;
