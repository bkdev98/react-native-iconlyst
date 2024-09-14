import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinHideOutline = ({
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
      d="M12.25 3.75a6.776 6.776 0 0 0-6.776 6.777c0 2.403 1.435 4.847 3.122 6.747a16.4 16.4 0 0 0 2.415 2.24c.36.266.673.463.916.59.188.099.29.13.323.141.032-.01.134-.042.322-.14.244-.128.556-.325.916-.591a16.4 16.4 0 0 0 2.415-2.24c1.687-1.9 3.123-4.344 3.123-6.747A6.776 6.776 0 0 0 12.25 3.75m-8.276 6.777a8.276 8.276 0 1 1 16.552 0c0 2.952-1.726 5.744-3.501 7.743a18 18 0 0 1-2.645 2.45 9 9 0 0 1-1.114.715c-.296.154-.668.315-1.016.315s-.72-.16-1.017-.316a9 9 0 0 1-1.113-.714 18 18 0 0 1-2.646-2.45c-1.775-1.999-3.5-4.791-3.5-7.743"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.99 10.465a.75.75 0 0 1 .75-.75h5.018a.75.75 0 1 1 0 1.5H9.74a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinHideOutline;
