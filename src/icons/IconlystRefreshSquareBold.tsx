import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshSquareBold = ({
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
      d="M12.399 17.244a5.02 5.02 0 0 1-3.687-1.621.75.75 0 1 1 1.106-1.014 3.497 3.497 0 0 0 6.074-2.358 3.497 3.497 0 0 0-3.493-3.493 3.47 3.47 0 0 0-3.218 2.13l.815-.345a.751.751 0 0 1 .584 1.382l-2.267.959a.75.75 0 0 1-.574.004.75.75 0 0 1-.408-.403l-.963-2.279a.749.749 0 1 1 1.381-.584l.177.419a4.95 4.95 0 0 1 4.473-2.783 5 5 0 0 1 4.993 4.993 5 5 0 0 1-4.993 4.993M16.217 2.75H7.783C4.623 2.75 2.5 4.971 2.5 8.276v7.948c0 3.305 2.124 5.526 5.284 5.526h8.433c3.16 0 5.283-2.221 5.283-5.526V8.276c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshSquareBold;
