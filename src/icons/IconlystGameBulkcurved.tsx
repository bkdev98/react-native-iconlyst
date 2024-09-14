import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameBulkcurved = ({
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
      d="M11.532 6.89c-6.867.134-9.33 2.254-9.33 7.903 0 5.842 2.63 7.914 10.049 7.914s10.047-2.072 10.047-7.914c0-5.124-2.021-7.347-7.52-7.817a47 47 0 0 0-3.246-.087"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.584 6.904V6.36c-.02-1.51-1.244-2.764-2.77-2.717h-1.02a.54.54 0 0 1-.544-.537c-.004-.415-.36-.768-.757-.743a.75.75 0 0 0-.743.757 2.044 2.044 0 0 0 2.036 2.023h1.042c.684 0 1.247.554 1.256 1.228v.51c-.52.003 1.5.022 1.5.022M11.065 15.498H9.991v1.038a.75.75 0 0 1-1.5 0v-1.038H7.417a.75.75 0 0 1 0-1.5h1.074V12.96a.75.75 0 0 1 1.5 0v1.038h1.074a.75.75 0 0 1 0 1.5M15.361 13.819h.102a.75.75 0 0 0 0-1.5h-.102a.75.75 0 0 0 0 1.5M17.092 17.23h.102a.75.75 0 0 0 0-1.5h-.102a.75.75 0 0 0 0 1.5"
    />
  </Svg>
);
export default IconlystGameBulkcurved;
