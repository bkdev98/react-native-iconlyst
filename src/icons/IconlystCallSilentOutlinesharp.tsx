import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m6.728 2.673 3.927 5.395-1.725 2.995q.034.104.087.24c.13.336.341.806.666 1.327l.397.636-1.273.794-.397-.636a9.4 9.4 0 0 1-.793-1.582 7 7 0 0 1-.223-.678l-.003-.013-.001-.005v-.003l.729-.174-.73.175-.069-.29 1.55-2.691-2.542-3.49a8.5 8.5 0 0 0-2.562 2.725c-.154.998.021 2.292.54 3.73.536 1.486 1.419 3.069 2.586 4.539l.466.587-1.175.933-.466-.588c-1.26-1.586-2.227-3.31-2.823-4.963-.591-1.641-.837-3.269-.581-4.638l.023-.127.066-.112c.934-1.607 2.141-2.804 3.74-3.742zm4.215 11.553.585.469a9.3 9.3 0 0 0 1.93 1.19c.213.098.395.17.532.22l2.987-1.72 5.538 4.084-.323.577c-.925 1.654-2.107 2.835-3.76 3.76l-.155.087-.177.008c-4.056.186-7.642-1.62-10.351-4.113l-.552-.508 1.016-1.103.552.508c2.461 2.265 5.609 3.827 9.089 3.724 1.137-.663 1.989-1.462 2.688-2.531l-3.666-2.704-2.7 1.555-.302-.082.199-.724-.199.724h-.001l-.003-.001-.006-.002-.019-.005-.061-.02a9.018 9.018 0 0 1-.95-.37 10.8 10.8 0 0 1-2.244-1.384l-.585-.47z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.94 6.825 4.298 23.508l-1.095-1.026L18.845 5.8z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallSilentOutlinesharp;
