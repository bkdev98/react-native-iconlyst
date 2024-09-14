import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseDownOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 21.25a.75.75 0 0 0 .53-.22l4-4a.75.75 0 0 0-1.06-1.06l-2.72 2.72V2.5a.75.75 0 1 0-1.5 0v16.19l-2.72-2.72a.75.75 0 0 0-1.06 1.06l4 4c.14.141.332.22.53.22m-7-9a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-1.5 0v9c0 .414.336.75.75.75m14 0a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-1.5 0v9c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloseDownOutline;
