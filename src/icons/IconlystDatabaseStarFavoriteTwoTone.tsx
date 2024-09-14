import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseStarFavoriteTwoTone = ({
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
      d="m17.664 14.612.712 1.424c.07.14.206.237.361.259l1.595.23a.472.472 0 0 1 .265.807l-1.153 1.107a.47.47 0 0 0-.137.42l.272 1.563a.479.479 0 0 1-.697.5l-1.424-.739a.49.49 0 0 0-.447 0l-1.424.739a.478.478 0 0 1-.697-.5l.273-1.563a.47.47 0 0 0-.138-.42l-1.154-1.107a.472.472 0 0 1 .266-.807l1.594-.23a.48.48 0 0 0 .361-.259l.714-1.424a.483.483 0 0 1 .858 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.225 11.759s0 2.92 7.376 2.92M17.977 10.298v-4.38"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.225 6.133v11.466s0 2.92 7.376 2.92"
    />
    <Ellipse
      cx={10.601}
      cy={5.938}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={7.376}
      ry={2.938}
    />
  </Svg>
);
export default IconlystDatabaseStarFavoriteTwoTone;
