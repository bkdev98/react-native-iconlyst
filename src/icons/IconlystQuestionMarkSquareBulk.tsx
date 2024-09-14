import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuestionMarkSquareBulk = ({
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
      d="M16.217 2.5H7.782C4.622 2.5 2.5 4.72 2.5 8.026v7.948c0 3.305 2.122 5.526 5.282 5.526h8.434c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.306-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.615 12.807-.151.085c-.693.388-.981.61-.976.99a.75.75 0 0 1-.74.76h-.01a.75.75 0 0 1-.75-.74c-.018-1.332 1.084-1.95 1.742-2.32l.15-.083c.635-.351.954-.838.954-1.45 0-1.01-.823-1.832-1.832-1.832s-1.832.822-1.832 1.832a.75.75 0 0 1-1.5 0 3.336 3.336 0 0 1 3.332-3.332 3.336 3.336 0 0 1 3.332 3.332c0 1.165-.611 2.145-1.719 2.758m-1.127 3.766a.75.75 0 0 1-1.5 0c0-.414.336-.773.75-.773s.75.315.75.729z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQuestionMarkSquareBulk;
