import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVechainBold = ({
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
      d="M21.26 2.387a.75.75 0 0 0-.963.442c-1.415 3.806-3.997 10.832-5.47 14.837l-.398 1.087-5.94-15.925a.75.75 0 0 0-.703-.488h-.002c-4.761.01-4.821.018-4.886.027a.75.75 0 0 0-.6 1.009l6.65 17.797a.75.75 0 0 0 .704.487h.002s3.389-.011 4.774 0h.006a.74.74 0 0 0 .597-.296.8.8 0 0 0 .11-.207c.077-.204.494-1.337 1.095-2.974 1.47-4.003 4.052-11.027 5.467-14.832a.75.75 0 0 0-.442-.964"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVechainBold;
