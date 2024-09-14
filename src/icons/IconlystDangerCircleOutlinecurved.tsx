import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerCircleOutlinecurved = ({
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
      fillRule="evenodd"
      d="M5.304 6.304C4.08 7.527 3.5 9.574 3.5 13c0 3.427.58 5.473 1.804 6.696C6.527 20.92 8.573 21.5 12 21.5s5.473-.58 6.696-1.804C19.919 18.473 20.5 16.427 20.5 13s-.581-5.473-1.804-6.696S15.426 4.5 12 4.5c-3.427 0-5.473.581-6.696 1.804m-1.061-1.06C5.911 3.575 8.49 3 12 3s6.089.576 7.756 2.243C21.425 6.911 22 9.49 22 13s-.576 6.089-2.244 7.757C18.09 22.425 15.51 23 12 23s-6.09-.575-7.757-2.243C2.575 19.089 2 16.51 2 13s.575-6.089 2.243-7.757"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 8.355a.75.75 0 0 1 .75.75V13a.75.75 0 0 1-1.5 0V9.105a.75.75 0 0 1 .75-.75M11.245 16.5a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDangerCircleOutlinecurved;
