import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdLoveBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.694 18.296a4.5 4.5 0 0 0 1.058-1.712c.392-1.253-.089-2.678-1.403-3.092a2.23 2.23 0 0 0-2.02.353 2.23 2.23 0 0 0-2.028-.327c-1.31.432-1.768 1.863-1.359 3.11a4.46 4.46 0 0 0 1.08 1.696c.687.66 1.444 1.241 2.258 1.735l.091.053M10.306 18.838l-3.026.02c-2.442.015-3.972-1.698-3.987-4.137L3.25 8.14C3.234 5.7 4.75 3.967 7.183 3.951h1.315M21.25 10.943l-.02-2.92c-.015-2.44-1.545-4.153-3.987-4.136l-5.03.032M3.258 9.272l17.981-.117"
    />
  </Svg>
);
export default IconlystBankCarrdLoveBroken;
