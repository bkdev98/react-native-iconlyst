import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPistachiosTwoTone = ({
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
      d="M15.555 8.528c-7.832 4.707-7.07 9.248-5.71 10.93 3.512 3.831 11.422-.936 11.148-6.498-2.438 1.28-6.55 3.615-8.68 4.201 4.973-5.347 4.175-7.82 3.242-8.633"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M13.082 10.14c.318-1.743.11-3.557-.841-5.033-1.472 2.327-3.865 6.406-5.416 7.978 1.633-7.117-.296-8.859-1.51-9.097-4.43 7.992-1.5 11.544.52 12.32 1.071.338 2.12.225 3.075-.207" />
      <Path d="M11.188 6.721c-.05-4.064-2.218-4.846-4.146-1.329" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.275 13.832c1.988-3.545.502-5.307-2.926-3.224"
    />
  </Svg>
);
export default IconlystPistachiosTwoTone;
