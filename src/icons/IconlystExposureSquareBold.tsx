import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExposureSquareBold = ({
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
      d="M6.394 8.233h1.12v-1.12a.75.75 0 0 1 1.5 0v1.12h1.119a.75.75 0 0 1 0 1.5H9.014v1.12a.75.75 0 0 1-1.5 0v-1.12h-1.12a.75.75 0 0 1 0-1.5m12.844-4.138a.285.285 0 0 0-.036-.442c-.823-.542-1.829-.852-2.984-.852H7.783C4.623 2.8 2.5 5.02 2.5 8.327v7.948c0 1.171.276 2.197.763 3.044a.285.285 0 0 0 .449.053zM17.104 16.704h-3.739a.75.75 0 0 1 0-1.5h3.739a.75.75 0 0 1 0 1.5M20.71 5.242a.285.285 0 0 0-.447-.05L4.725 20.48a.285.285 0 0 0 .033.441c.83.56 1.85.88 3.025.88h8.435c3.159 0 5.282-2.22 5.282-5.526V8.327c0-1.191-.287-2.231-.79-3.085"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExposureSquareBold;
