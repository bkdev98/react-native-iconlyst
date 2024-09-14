import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJiraSoftwareTwoTone = ({
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
      d="M12 15.145 15.146 12 11.26 8.114a3.4 3.4 0 0 1 0-4.807v0c.41-.41 1.073-.41 1.483 0l7.951 7.952a1.05 1.05 0 0 1 0 1.482l-7.951 7.952"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.26 3.307a3.4 3.4 0 0 0 0 4.807l.718.719"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 8.857-3.145 3.145 3.886 3.885a3.4 3.4 0 0 1 0 4.807v0c-.41.41-1.073.41-1.482 0l-7.952-7.951a1.05 1.05 0 0 1 0-1.483l7.952-7.951"
    />
  </Svg>
);
export default IconlystJiraSoftwareTwoTone;
