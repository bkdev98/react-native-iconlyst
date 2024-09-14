import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScale4Bold = ({
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
      d="m17.746 9.512-2.122 3.405a.75.75 0 0 1-1.135.164 3.75 3.75 0 0 0-4.976 0 .75.75 0 0 1-1.135-.164L6.256 9.512a.75.75 0 0 1 .138-.957 8.44 8.44 0 0 1 11.213 0 .75.75 0 0 1 .139.957M16.217 2.5H7.782C4.623 2.5 2.5 4.72 2.5 8.026v7.947c0 3.306 2.123 5.527 5.282 5.527h8.434c3.16 0 5.284-2.221 5.284-5.527V8.026c0-3.306-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.105 9.12a.29.29 0 0 0-.08.395l1.037 1.662c.087.14.273.183.418.103a5.24 5.24 0 0 1 2.52-.644c.099 0 .196.015.294.02l.226-.978a.746.746 0 0 1 .899-.563.75.75 0 0 1 .562.9l-.217.94c.258.091.512.197.757.327a.317.317 0 0 0 .419-.105l1.036-1.662a.29.29 0 0 0-.08-.395 6.945 6.945 0 0 0-7.791 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScale4Bold;
