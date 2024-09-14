import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookLight = ({
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
      d="M16.95 3.5a.5.5 0 0 0-.5-.5h-2.2a4.52 4.52 0 0 0-3.182 1.314A4.5 4.5 0 0 0 9.75 7.5v2.7h-2.2a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5h2.2v6.7a.5.5 0 0 0 .5.5h2.6a.5.5 0 0 0 .5-.5v-6.7h3.1a.5.5 0 0 0 .5-.5v-2.6a.5.5 0 0 0-.5-.5h-3.1V7.5a.9.9 0 0 1 .264-.64.93.93 0 0 1 .636-.26h2.2a.5.5 0 0 0 .5-.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFacebookLight;
