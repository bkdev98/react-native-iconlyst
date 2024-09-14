import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapClickBold = ({
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
      d="M19.082 13.119c-.9-2.432-4.02-2.432-6.33-2.621a.8.8 0 0 0 .227-.09 4.72 4.72 0 0 0 2.145-3.115.787.787 0 1 0-1.547-.305 3.14 3.14 0 0 1-1.175 1.885l-.042-2.718a1.667 1.667 0 0 0-3.334.027v2.716A3.18 3.18 0 0 1 7.74 6.339c0-.398.07-.787.206-1.154a.787.787 0 0 0-1.478-.55 4.9 4.9 0 0 0-.304 1.704c0 1.697.882 3.27 2.303 4.107.125.074.262.11.399.11.056 0 .105-.031.16-.042v5.232l-1.194-1.73a1.82 1.82 0 0 0-2.154-.668c-.887.34-1.362 1.305-1.039 2.199.604 1.666 1.563 3.527 2.795 5.06 1.943 2.416 7.877 2.255 10 .131 1.664-1.664 2.598-5.055 1.648-7.619M9.382 3.526c1.27-.672 2.924-.221 3.736 1.03a.786.786 0 0 0 1.09.232.786.786 0 0 0 .231-1.09c-.842-1.298-2.244-2.073-3.75-2.073-.707 0-1.413.174-2.042.506a.788.788 0 1 0 .735 1.395"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapClickBold;
