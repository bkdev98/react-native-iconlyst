import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardClockTimer24Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.722 18.465h-.19a1 1 0 0 0-1.759 0h-.268l1.96-2.727a1 1 0 0 0-1.625-1.167l-3.097 4.31a1 1 0 0 0 .812 1.583h2.097v.27a1 1 0 0 0 2 0v-.27h.07a1 1 0 0 0 0-2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.773 19.715h-1.377c.15-.12.332-.248.548-.395.771-.525 1.829-1.246 1.829-2.665a2.484 2.484 0 0 0-4.97 0 1 1 0 0 0 2 0c0-.265.217-.48.486-.48.267 0 .484.215.484.48 0 .312-.227.517-.954 1.012-.85.58-2.016 1.373-2.016 3.048a1 1 0 0 0 1 1h2.97a1 1 0 0 0 0-2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.252 14.866a7.8 7.8 0 0 0 4.119 4.326 1 1 0 0 1-.816 1.825 9.78 9.78 0 0 1-5.17-5.432c-1.933-5.037.587-10.72 5.618-12.673 3.706-1.425 7.849-.426 10.523 2.3v-.377a1 1 0 1 1 2 0v2.93a1 1 0 0 1-1 1h-2.918a1 1 0 1 1 0-2h.63c-2.12-2.285-5.5-3.149-8.514-1.987-4.004 1.553-6.011 6.08-4.472 10.088m6.317-3.811v-3.11a1 1 0 0 1 2 0v4.11a1 1 0 0 1-1 1H9.186a1 1 0 0 1 0-2z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystForwardClockTimer24Bulk;
