import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareSmartHandWatchBold = ({
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
      d="M15.207 21.245H8.86a.75.75 0 0 0 0 1.5h6.348a.75.75 0 0 0 0-1.5M8.86 2.745h6.348a.75.75 0 0 0 0-1.5H8.86a.75.75 0 0 0 0 1.5M18.064 5.85c-.694-.696-1.712-1.063-2.944-1.063H8.954c-2.49 0-3.975 1.45-3.975 3.88v6.593c0 2.432 1.523 3.943 3.975 3.943h6.16c2.489 0 3.974-1.454 3.974-3.89V8.67c.003-1.17-.351-2.145-1.024-2.82"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareSmartHandWatchBold;
