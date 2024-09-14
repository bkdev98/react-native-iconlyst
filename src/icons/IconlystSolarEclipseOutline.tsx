import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSolarEclipseOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M14.64 2.302a.75.75 0 0 1 .423.973l-.295.748a.75.75 0 0 1-1.396-.55l.295-.748a.75.75 0 0 1 .972-.423m-3.96.025a.75.75 0 0 1 .75.75v.02a.75.75 0 0 1-1.5 0v-.02a.75.75 0 0 1 .75-.75m7.988 1.72a.75.75 0 0 1 0 1.061L17.53 6.245a.75.75 0 0 1-1.06-1.06l1.136-1.138a.75.75 0 0 1 1.06 0m1.75 3.832a.75.75 0 0 1-.388.987l-.737.32a.75.75 0 0 1-.599-1.374l.738-.321a.75.75 0 0 1 .987.388m-1.55 4.157a.75.75 0 0 1 .75-.75h1.608a.75.75 0 1 1 0 1.5H19.62a.75.75 0 0 1-.75-.75m-.45 3.03a.75.75 0 0 1 .972-.424l.748.294a.75.75 0 1 1-.55 1.396l-.747-.294a.75.75 0 0 1-.424-.973m-1.948 2.76a.75.75 0 0 1 1.06 0l1.137 1.137a.75.75 0 0 1-1.06 1.06l-1.137-1.136a.75.75 0 0 1 0-1.06m-2.405 1.75a.75.75 0 0 1 .987.388l.321.737a.75.75 0 1 1-1.375.598l-.321-.737a.75.75 0 0 1 .388-.987m-3.385.649a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-.025a.75.75 0 0 1 .75-.75M8.693 8.053a3.941 3.941 0 1 0 0 7.883 3.941 3.941 0 0 0 0-7.883m-5.441 3.94a5.441 5.441 0 1 1 10.883.002 5.441 5.441 0 0 1-10.883-.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.457 6.29a5.705 5.705 0 1 0 0 11.41 5.705 5.705 0 0 0 0-11.41m-7.205 5.704a7.205 7.205 0 1 1 14.41.002 7.205 7.205 0 0 1-14.41-.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSolarEclipseOutline;
