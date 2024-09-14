import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleBed3Light = ({
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
      d="M3 14.142c0-.655 0-.983.095-1.246a1.6 1.6 0 0 1 .963-.963c.263-.095.59-.095 1.246-.095h13.392c.656 0 .983 0 1.246.095a1.6 1.6 0 0 1 .963.963c.095.263.095.59.095 1.246v1.392c0 .656 0 .983-.095 1.246a1.6 1.6 0 0 1-.963.963c-.263.095-.59.095-1.246.095H5.304c-.655 0-.983 0-1.246-.095a1.6 1.6 0 0 1-.963-.963C3 16.517 3 16.19 3 15.534zM18.786 19.4v-1.562m-13.571 0V19.4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.786 11.838V6.904c0-.655 0-.983-.094-1.246a1.6 1.6 0 0 0-.964-.963c-.263-.095-.59-.095-1.246-.095H7.52c-.656 0-.983 0-1.246.095a1.6 1.6 0 0 0-.964.963c-.094.263-.094.59-.094 1.246v4.934"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 11.739v-.59a2.25 2.25 0 0 1 4.5 0v.621M12 11.15a2.25 2.25 0 0 0-4.5 0v.61"
    />
  </Svg>
);
export default IconlystDoubleBed3Light;
