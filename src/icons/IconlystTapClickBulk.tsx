import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapClickBulk = ({
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
      d="M13.618 4.556c-.812-1.251-2.465-1.702-3.736-1.03a.788.788 0 0 1-.735-1.395 4.4 4.4 0 0 1 2.043-.506c1.505 0 2.907.775 3.75 2.074a.787.787 0 1 1-1.322.857M9.525 10.514V8.897A3.18 3.18 0 0 1 8.24 6.34c0-.398.07-.787.206-1.154a.787.787 0 0 0-1.477-.55 4.9 4.9 0 0 0-.305 1.704c0 1.697.882 3.27 2.303 4.107.125.074.262.11.399.11.034 0 .066-.012.098-.023a1 1 0 0 1 .061-.02M12.927 10.47c.409.03.539-.055.552-.063a4.72 4.72 0 0 0 2.145-3.114.787.787 0 1 0-1.547-.305 3.14 3.14 0 0 1-1.174 1.885z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.927 10.47-.067-4.313a1.667 1.667 0 0 0-3.335.026v9.564l-1.193-1.73a1.82 1.82 0 0 0-2.153-.668c-.888.34-1.364 1.305-1.04 2.2.605 1.666 1.563 3.526 2.796 5.06 1.942 2.415 7.875 2.254 9.999.13 1.664-1.664 2.598-5.056 1.649-7.62-.944-2.546-4.323-2.426-6.656-2.648"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTapClickBulk;
