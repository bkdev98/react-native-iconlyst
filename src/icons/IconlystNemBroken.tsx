import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNemBroken = ({
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
      strokeWidth={1.5}
      d="M21.465 7.786c.206-1.283-.513-2.522-1.7-3.05-5.978-2.652-11.68-1.056-14.506.105-1.141.468-1.873 1.626-1.744 2.854.703 6.726 4.906 10.705 7.321 12.465.983.717 2.332.737 3.307.01 3.394-2.533 5.257-5.72 6.28-8.454"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.754 3.73s-4.552-.76-4.214 7.29c0 0-1.993 1.46-4.125 1.763"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.7 18.868s4.133-4.051-3.16-7.848"
    />
  </Svg>
);
export default IconlystNemBroken;
