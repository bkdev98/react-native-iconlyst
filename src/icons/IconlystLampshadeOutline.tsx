import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLampshadeOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.074 20.89c0-.41.336-.75.75-.75h3.433v-6.013l-3.983-.016a2.08 2.08 0 0 1-1.987-2.64l2.056-7.34a2.724 2.724 0 0 1 2.626-1.99H14c1.22 0 2.294.81 2.625 1.99l2.088 7.38a2.073 2.073 0 0 1-2.004 2.64h-.09v1.72c0 .41-.335.75-.75.75a.753.753 0 0 1-.75-.75v-1.727l-2.363-.01v6.007h3.43c.415 0 .75.34.75.75s-.335.75-.75.75H7.825a.753.753 0 0 1-.75-.75m8.109-16.36c-.15-.52-.631-.89-1.182-.89H9.969a1.23 1.23 0 0 0-1.181.9l-2.056 7.34c-.102.36.17.73.55.73l9.434.04c.382 0 .659-.36.555-.73z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLampshadeOutline;
