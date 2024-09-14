import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingPlay2Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.159 9.547a9 9 0 0 0-.299 3.034M5.611 6.63a9 9 0 0 1 1.452-1.552M7.684 19.36a9 9 0 0 1-3.12-3.782"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.446 13.141a9.9 9.9 0 0 1-2.905 1.84c-.936.372-1.723-.093-1.837-1.025a18.5 18.5 0 0 1 0-3.92c.125-.968.99-1.38 1.837-1.021a9.7 9.7 0 0 1 2.905 1.84c.723.66.74 1.6 0 2.286"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.394 19.086a8.97 8.97 0 0 1-4.878 1.889 9 9 0 0 1-2.645-.195M20.478 16.724a8.9 8.9 0 0 0 1.346-5.06 9.01 9.01 0 0 0-9.35-8.657"
    />
  </Svg>
);
export default IconlystLoadingPlay2Light;
