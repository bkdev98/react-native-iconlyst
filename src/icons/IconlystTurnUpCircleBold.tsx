import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnUpCircleBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.026 11.354a.75.75 0 0 1-1.061 0l-1.027-1.028v2.32a4.094 4.094 0 0 1-4.09 4.09 4.094 4.094 0 0 1-4.09-4.09V11.06a.75.75 0 0 1 1.5 0v1.586a2.59 2.59 0 0 0 2.59 2.59 2.59 2.59 0 0 0 2.59-2.59v-2.32l-1.029 1.028a.749.749 0 1 1-1.06-1.061l2.308-2.308a.77.77 0 0 1 .531-.219q.151 0 .289.058c.071.03.131.077.19.127.016.013.036.019.051.034l2.308 2.308a.75.75 0 0 1 0 1.061M12 2.75c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnUpCircleBold;
