import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagAiTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.904 21H8.087c-2.87 0-5.074-1.038-4.449-5.212l.729-5.656c.381-2.083 1.714-2.88 2.88-2.88h9.53c1.183 0 2.435.856 2.88 2.88l.729 5.656C20.917 19.491 18.775 21 15.904 21"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.034 7.045A4.045 4.045 0 0 0 11.99 3a4.045 4.045 0 0 0-4.063 4.028v.017M10.27 15.883l-.09-.242a3.34 3.34 0 0 0-1.973-1.977l-.243-.09.243-.09a3.34 3.34 0 0 0 1.974-1.977l.09-.243.09.243a3.34 3.34 0 0 0 1.973 1.977l.242.09-.242.09a3.34 3.34 0 0 0-1.974 1.976zM14.989 16.987a1.57 1.57 0 0 0-1.046-1.047 1.57 1.57 0 0 0 1.046-1.047c.152.502.544.894 1.045 1.047a1.57 1.57 0 0 0-1.045 1.047"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystShoppingBagAiTwoTone;
