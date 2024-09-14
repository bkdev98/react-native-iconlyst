import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneCheck2Bold = ({
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
      d="m14.675 9.639-2.923 2.925a.748.748 0 0 1-1.061-.001l-1.419-1.421a.749.749 0 1 1 1.061-1.059l.888.889 2.393-2.394a.75.75 0 1 1 1.061 1.061m-.326 8.136a2.35 2.35 0 0 1-2.35 2.35 2.35 2.35 0 0 1-2.349-2.35q-.002-.008-.003-.015h4.705q-.002.007-.003.015m5.641-3.982-.466-.991a4.8 4.8 0 0 1-.457-2.042V9.441c0-3.896-3.171-7.066-7.067-7.066S4.933 5.545 4.933 9.44l-.001 1.32c0 .702-.157 1.408-.456 2.042l-.466.991a2.77 2.77 0 0 0 .168 2.675 2.77 2.77 0 0 0 2.35 1.292h1.625q-.002.007-.003.015a3.854 3.854 0 0 0 3.849 3.85 3.854 3.854 0 0 0 3.85-3.85q-.002-.008-.003-.015h1.626c.958 0 1.836-.483 2.349-1.292a2.77 2.77 0 0 0 .169-2.675"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneCheck2Bold;
