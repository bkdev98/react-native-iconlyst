import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameBoldcurved = ({
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
      d="M17.194 17.23h-.102a.75.75 0 0 1 0-1.5h.102a.75.75 0 0 1 0 1.5m-1.731-3.411h-.102a.75.75 0 0 1 0-1.5h.102a.75.75 0 0 1 0 1.5m-4.398 1.679H9.99v1.038a.75.75 0 0 1-1.5 0v-1.038H7.417a.75.75 0 0 1 0-1.5H8.49V12.96a.75.75 0 0 1 1.5 0v1.038h1.074a.75.75 0 0 1 0 1.5m2.519-8.594V6.36c-.02-1.51-1.244-2.764-2.77-2.717H9.793a.54.54 0 0 1-.543-.537c-.004-.415-.36-.768-.757-.743a.75.75 0 0 0-.743.757 2.044 2.044 0 0 0 2.036 2.023h1.042c.684 0 1.247.554 1.256 1.228v.51c-7.287.033-9.882 2.113-9.882 7.91 0 5.843 2.63 7.915 10.049 7.915s10.047-2.072 10.047-7.914c0-5.48-2.311-7.641-8.714-7.89"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGameBoldcurved;
