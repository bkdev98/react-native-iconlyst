import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftCircleLight = ({
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
      d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.54 15.335c-1.198-.483-2.776-1.496-3.648-2.286q-1.192-1.047 0-2.096c.872-.79 2.45-1.802 3.649-2.285.975-.317 1.537.1 1.714 1.198q.116 1.031.11 2.135a19 19 0 0 1-.11 2.136c-.171 1.102-.74 1.507-1.714 1.198"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftCircleLight;
