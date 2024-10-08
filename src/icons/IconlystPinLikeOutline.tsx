import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinLikeOutline = ({
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
      d="M10.636 8.56c-.686.222-1.046 1.012-.769 1.878.224.696.854 1.378 1.527 1.925.322.261.628.472.855.617a10 10 0 0 0 .863-.625c.678-.55 1.304-1.231 1.518-1.913l.002-.003c.276-.864-.084-1.655-.77-1.878a1.3 1.3 0 0 0-1.165.198.75.75 0 0 1-.896-.001 1.29 1.29 0 0 0-1.165-.197m1.614 5.297-.36.658-.003-.002-.008-.005-.026-.014a7 7 0 0 1-.41-.248 11 11 0 0 1-.995-.72c-.729-.591-1.647-1.504-2.009-2.63-.45-1.409.04-3.216 1.738-3.763l.002-.001a2.8 2.8 0 0 1 2.072.15 2.8 2.8 0 0 1 2.062-.151l.006.002c1.697.546 2.192 2.351 1.742 3.76-.353 1.12-1.274 2.033-2.002 2.626a11 11 0 0 1-1.41.974l-.026.014-.008.005-.003.001s-.001.001-.362-.656m0 0 .361.657a.75.75 0 0 1-.72.001z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinLikeOutline;
