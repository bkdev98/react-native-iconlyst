import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScale5Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.72 2.5 8.026v7.947c0 3.306 2.123 5.527 5.282 5.527h8.434c3.16 0 5.284-2.221 5.284-5.527V8.026c0-3.306-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.208 17.218a.767.767 0 1 1 1.534 0V21.5h-1.534z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.746 9.512-2.122 3.405a.75.75 0 0 1-1.135.164 3.75 3.75 0 0 0-4.976 0 .75.75 0 0 1-1.135-.164L6.256 9.512a.75.75 0 0 1 .138-.957 8.44 8.44 0 0 1 11.213 0 .75.75 0 0 1 .139.957m-8.684 1.665L8.025 9.515a.29.29 0 0 1 .08-.396 6.945 6.945 0 0 1 7.792 0 .29.29 0 0 1 .08.396l-1.037 1.662a.314.314 0 0 1-.418.103 5.2 5.2 0 0 0-1.772-.59v-.844a.75.75 0 0 0-1.5 0v.845a5.2 5.2 0 0 0-1.77.588.314.314 0 0 1-.418-.102"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScale5Bulk;
