import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareDownLight = ({
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
      d="M13.966 12.282c0-4.18 1.446-7.415 5.398-9.205 0 0-10.846-1.547-10.846 9.205l-2.974.002a.908.908 0 0 0-.69 1.495l5.844 6.899a.903.903 0 0 0 1.362.024l6.244-6.908c.527-.583.11-1.512-.676-1.512z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplyShareDownLight;
