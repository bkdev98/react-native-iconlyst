import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareRightBroken = ({
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
      d="m15.917 7.615-2.123-1.919c-.583-.526-1.512-.11-1.512.677v3.661c-4.18 0-7.415-1.446-9.205-5.397 0 0-1.547 10.846 9.205 10.846l.002 2.974a.908.908 0 0 0 1.495.69l6.899-5.844a.903.903 0 0 0 .024-1.362l-2.108-1.907"
    />
  </Svg>
);
export default IconlystReplyShareRightBroken;
