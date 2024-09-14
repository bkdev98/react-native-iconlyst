import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygon2Bold = ({
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
      d="M21.009 14.08c.659-.678.659-1.74.002-2.416l-1.015-1.054a.74.74 0 0 1-.198-.619l.204-1.44c.13-.924-.512-1.8-1.426-1.952l-1.424-.249a.76.76 0 0 1-.535-.394l-.68-1.28a1.73 1.73 0 0 0-2.304-.745l-1.305.63-.004.001a.74.74 0 0 1-.652-.002l-1.3-.627a1.73 1.73 0 0 0-2.308.744l-.681 1.28a.76.76 0 0 1-.527.392l-1.428.25a1.744 1.744 0 0 0-1.429 1.953l.203 1.44a.74.74 0 0 1-.203.622l-1.008 1.048a1.725 1.725 0 0 0-.002 2.416l1.014 1.053a.74.74 0 0 1 .199.62l-.203 1.44a1.743 1.743 0 0 0 1.422 1.952l1.442.262a.72.72 0 0 1 .52.38l.682 1.281c.315.591.912.927 1.532.927.259 0 .521-.059.769-.183l1.31-.63a.72.72 0 0 1 .653.002l1.298.626a1.73 1.73 0 0 0 2.31-.743l.68-1.28a.73.73 0 0 1 .532-.382l1.423-.259a1.745 1.745 0 0 0 1.43-1.954l-.204-1.439a.74.74 0 0 1 .202-.624z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPolygon2Bold;
