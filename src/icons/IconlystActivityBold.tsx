import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystActivityBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M15.45 3.78q-.06.375-.06.75c0 2.25 1.82 4.07 4.06 4.07.25 0 .49-.03.74-.07v8.07c0 3.39-2 5.4-5.4 5.4H7.4C4 22 2 19.99 2 16.6V9.2c0-3.4 2-5.42 5.4-5.42Zm.2 6.08a.77.77 0 0 0-.7.31l-2.42 3.13-2.77-2.18a.8.8 0 0 0-.57-.16.78.78 0 0 0-.5.3l-2.96 3.85-.06.09a.75.75 0 0 0 .21.95c.14.09.29.15.46.15.23.01.45-.11.59-.3l2.51-3.23 2.85 2.14.09.06c.32.17.72.09.95-.21l2.89-3.73-.04.02c.16-.22.19-.5.08-.75a.74.74 0 0 0-.61-.44M19.59 2C20.92 2 22 3.08 22 4.41s-1.08 2.41-2.41 2.41-2.41-1.08-2.41-2.41S18.26 2 19.59 2"
    />
  </Svg>
);
export default IconlystActivityBold;
