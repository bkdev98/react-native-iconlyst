import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClapTwoTone = ({
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
      d="M6.148 11.72a1.52 1.52 0 0 0-2.047-.55 1.52 1.52 0 0 0-.55 2.048l3.08 5.335a5.993 5.993 0 0 0 10.38-5.993l-1.574-2.73c-.3-.52-.965-.7-1.486-.399a1.903 1.903 0 0 0-.696 2.6l.032.056"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.339 13.916-3.496-6.06a1.5 1.5 0 0 0-2.597 1.498M10.744 13.684 7.581 8.207a1.5 1.5 0 0 0-2.597 1.498l3.163 5.478"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.062 2.5-.074 1.31m3.669-.013-.839 1.017m2.824 1.957-1.23.459M14.928 9.292a1.904 1.904 0 0 1 .88-2.17c.52-.3 1.185-.122 1.485.399l1.575 2.73a5.99 5.99 0 0 1-1.614 7.735"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.103 7.045A1.499 1.499 0 1 1 12.7 5.547L14.93 9.29"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.84 7.397a1.5 1.5 0 1 1 2.596-1.499l.666 1.15"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystClapTwoTone;
