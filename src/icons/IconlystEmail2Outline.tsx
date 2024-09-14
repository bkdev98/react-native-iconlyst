import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmail2Outline = ({
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
      d="M16.681 20.85H7.817a5.04 5.04 0 0 1-3.642-1.48A5.96 5.96 0 0 1 2.5 15.093v-6.18A5.44 5.44 0 0 1 7.832 3.15h8.836A5.44 5.44 0 0 1 22 8.913v6.177a5.96 5.96 0 0 1-1.675 4.275 5.04 5.04 0 0 1-3.644 1.485m-8.851-1.5h8.849a3.58 3.58 0 0 0 2.587-1.043 4.47 4.47 0 0 0 1.234-3.213v-6.18c0-2.47-1.611-4.264-3.832-4.264H7.832C5.611 4.65 4 6.443 4 8.913v6.177a4.47 4.47 0 0 0 1.234 3.213 3.58 3.58 0 0 0 2.585 1.043z"
    />
    <Path
      fill={props.color}
      d="M12.266 13.363a2.8 2.8 0 0 1-1.75-.613L6.478 9.494a.75.75 0 1 1 .94-1.168l4.034 3.252a1.31 1.31 0 0 0 1.637 0l3.99-3.246a.75.75 0 0 1 .948 1.164l-4 3.252c-.5.398-1.122.615-1.761.615"
    />
    <Path
      fill={props.color}
      d="M17.556 15.842a.74.74 0 0 1-.555-.246l-3.231-3.548a.749.749 0 1 1 1.109-1.01l3.23 3.549a.75.75 0 0 1-.553 1.255m-10.611 0a.75.75 0 0 1-.551-1.258l3.267-3.548a.75.75 0 0 1 1.1 1.016l-3.268 3.547a.74.74 0 0 1-.543.242z"
    />
  </Svg>
);
export default IconlystEmail2Outline;
