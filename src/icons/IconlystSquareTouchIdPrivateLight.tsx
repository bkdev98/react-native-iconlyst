import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdPrivateLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.972 13.012V8.97c0-2.936-1.83-5.011-4.769-5.011H7.795c-2.93 0-4.767 2.075-4.767 5.011v7.922c0 2.936 1.828 5.011 4.767 5.011h4.528"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.03 10.747a4.56 4.56 0 0 1 3.971-2.311c.622 0 1.217.125 1.758.35M13.76 14.986v-1.819a1.798 1.798 0 0 0-3.597 0v.482M15.731 10.373c.525.743.833 1.649.833 2.629M10.163 17.428V15.81M7.437 16.391v-2.826"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.178 21.96s2.37-.718 2.37-2.696.087-2.131-.103-2.323-1.956-.806-2.267-.806-2.075.615-2.264.806c-.19.19-.104.344-.104 2.323 0 1.978 2.368 2.696 2.368 2.696"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareTouchIdPrivateLight;
