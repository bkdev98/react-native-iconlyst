import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnlargeContractVerticalOutline = ({
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
      d="M3.75 12a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75M12 15.797a.75.75 0 0 1 .53.22l3.454 3.453a.75.75 0 1 1-1.061 1.06L12 17.608 9.077 20.53a.75.75 0 0 1-1.06-1.06l3.453-3.453a.75.75 0 0 1 .53-.22M8.017 3.47a.75.75 0 0 1 1.06 0L12 6.393l2.923-2.923a.75.75 0 0 1 1.06 1.06L12.53 7.984a.75.75 0 0 1-1.06 0L8.017 4.53a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEnlargeContractVerticalOutline;
