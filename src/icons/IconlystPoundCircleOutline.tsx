import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoundCircleOutline = ({
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
      d="M12.25 21.813a9.75 9.75 0 1 1 9.75-9.75 9.76 9.76 0 0 1-9.75 9.75m0-18a8.25 8.25 0 1 0 8.25 8.25 8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M14.336 16.393h-4.4a.75.75 0 0 1-.54-1.27q.622-.647 1.17-1.36a1.43 1.43 0 0 0-.113-1.677.75.75 0 1 1 1.166-.945 2.94 2.94 0 0 1 .166 3.494q-.1.132-.2.258h2.748a.75.75 0 1 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M11.04 12.361a.75.75 0 0 1-.59-.285 2.949 2.949 0 0 1 4.575-3.72.75.75 0 1 1-1.15.963 1.448 1.448 0 0 0-2.247 1.828.75.75 0 0 1-.588 1.214"
    />
    <Path
      fill={props.color}
      d="M13.603 12.73h-4.4a.75.75 0 1 1 0-1.5h4.4a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystPoundCircleOutline;
