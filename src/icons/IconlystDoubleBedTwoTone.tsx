import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleBedTwoTone = ({
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
      d="M19.326 12.119V7.185c0-.656 0-.983-.094-1.246a1.6 1.6 0 0 0-.964-.964c-.263-.094-.59-.094-1.246-.094H8.058c-.656 0-.983 0-1.246.094a1.6 1.6 0 0 0-.964.964c-.094.263-.094.59-.094 1.246v4.934"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.54 12.119v-.598c0-.41 0-.615-.06-.779a1 1 0 0 0-.602-.602c-.164-.059-.37-.059-.779-.059h-.62c-.41 0-.614 0-.779.06a1 1 0 0 0-.602.601c-.059.164-.059.37-.059.78v.597M17.04 12.119v-.598c0-.41 0-.615-.06-.779a1 1 0 0 0-.602-.602c-.164-.059-.37-.059-.779-.059h-.62c-.41 0-.614 0-.779.06a1 1 0 0 0-.602.601c-.059.164-.059.37-.059.78v.597"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.54 19.12v-4.697c0-.655 0-.983-.095-1.246a1.6 1.6 0 0 0-.964-.963c-.263-.095-.59-.095-1.246-.095H5.843c-.655 0-.983 0-1.246.095a1.6 1.6 0 0 0-.963.963c-.095.263-.095.59-.095 1.246v4.696M3.54 17.88h18"
    />
  </Svg>
);
export default IconlystDoubleBedTwoTone;
