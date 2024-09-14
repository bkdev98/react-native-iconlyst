import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnUp2Outline = ({
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
      d="M15.087 3.47a.75.75 0 0 1 1.06 0l1.528 1.526.001.002 1.526 1.525a.75.75 0 1 1-1.06 1.06l-1.528-1.526v-.001l-.997-.995-2.522 2.523a.75.75 0 0 1-1.06-1.061z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.616 3.25a.75.75 0 0 1 .75.75v10.857a5.893 5.893 0 0 1-11.786 0v-2.79a.75.75 0 0 1 1.5 0v2.79a4.393 4.393 0 0 0 8.786 0V4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnUp2Outline;
