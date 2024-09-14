import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLockBulk = ({
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
      d="M19.097 16.056v-.811c0-1.217-.913-2.231-2.13-2.231s-2.13.912-2.13 2.23v.812c-.608.203-1.013.913-1.013 1.52v1.725c0 .913.81 1.623 1.622 1.623h3.245c.913 0 1.623-.71 1.623-1.623v-1.724c-.101-.71-.608-1.217-1.217-1.521m-2.13-1.521c.406 0 .609.304.609.71v.71h-1.318v-.71c.1-.406.304-.71.709-.71M11.085 3.076a4.664 4.664 0 0 1 4.665 4.665 4.664 4.664 0 0 1-4.665 4.665A4.664 4.664 0 0 1 6.42 7.741a4.664 4.664 0 0 1 4.665-4.665"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.071 14.434c-1.42 0-2.738.203-3.752.507-.609.203-1.217.507-1.623.913a2.45 2.45 0 0 0-.71 1.724c0 .71.203 1.217.71 1.724.406.405 1.014.71 1.623.912 1.014.305 2.332.507 3.752.507.608 0 1.014-.405 1.014-1.014v-4.26c0-.607-.406-1.013-1.014-1.013"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserLockBulk;
