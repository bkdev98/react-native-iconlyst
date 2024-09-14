import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerCircleBrokencurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 21.785c-6.937 0-9.25-2.313-9.25-9.25s2.313-9.25 9.25-9.25 9.25 2.313 9.25 9.25c0 5.636-1.527 8.22-5.82 8.99M12.25 8.64v3.894M12.245 16.035h.009"
    />
  </Svg>
);
export default IconlystDangerCircleBrokencurved;
