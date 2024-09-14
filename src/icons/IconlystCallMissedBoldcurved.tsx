import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallMissedBoldcurved = ({
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
      d="m19.845 6.105 2.47-2.47a.749.749 0 1 0-1.061-1.06l-2.47 2.469-2.469-2.469a.75.75 0 0 0-1.061 1.06l2.47 2.47-2.47 2.47a.749.749 0 1 0 1.061 1.06l2.469-2.469 2.47 2.469a.746.746 0 0 0 1.061 0 .75.75 0 0 0 0-1.06zM15.808 14.452c-.998.486-1.861.908-4.108-1.34-2.246-2.246-1.827-3.11-1.34-4.108.705-1.448.99-2.765-2.212-5.402-.763-.624-1.585-.861-2.46-.698-1.86.346-3.13 2.383-3.128 2.383-.811 1.137-1.923 4.555 5.244 11.72 4.712 4.713 7.804 5.846 9.68 5.846.977 0 1.626-.307 2.002-.576.02-.013 2.089-1.317 2.425-3.168.156-.864-.08-1.686-.703-2.447-2.633-3.197-3.951-2.915-5.4-2.21"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallMissedBoldcurved;
