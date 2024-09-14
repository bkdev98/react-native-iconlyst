import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClapLight = ({
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
      d="M5.648 11.72a1.52 1.52 0 0 0-2.047-.55 1.52 1.52 0 0 0-.55 2.048l3.08 5.335a5.993 5.993 0 0 0 10.38-5.993l-1.574-2.73c-.3-.52-.965-.7-1.486-.399a1.903 1.903 0 0 0-.696 2.6l.032.056"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.839 13.916-3.496-6.06a1.5 1.5 0 1 0-2.597 1.498"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.244 13.684 7.081 8.207a1.5 1.5 0 0 0-2.597 1.498l3.163 5.478M15.562 2.5l-.074 1.31m3.669-.013-.839 1.017m2.824 1.957-1.23.459M14.428 9.292a1.904 1.904 0 0 1 .88-2.17c.52-.3 1.185-.122 1.485.399l1.575 2.73a5.99 5.99 0 0 1-1.614 7.735"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.603 7.045A1.5 1.5 0 0 1 12.2 5.547L14.43 9.29M6.34 7.397a1.5 1.5 0 1 1 2.596-1.499l.666 1.15"
    />
  </Svg>
);
export default IconlystClapLight;
