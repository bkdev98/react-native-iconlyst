import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabasePrivacyLight = ({
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
      strokeWidth={1.5}
      d="M11.378 9.011c4.047 0 7.327-1.323 7.327-2.956 0-1.632-3.28-2.955-7.327-2.955S4.051 4.423 4.051 6.055s3.28 2.956 7.327 2.956Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.05 11.877v5.852s0 2.926 7.393 2.926M18.706 11.046v-5.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.05 6.025v5.852s0 2.727 6.652 2.916"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.938 20.9s2.987-.904 2.987-3.399c0-2.493.109-2.414-.132-2.655-.24-.242-2.463-1.016-2.855-1.016s-2.617.776-2.857 1.016-.13.161-.13 2.655c0 2.495 2.987 3.4 2.987 3.4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabasePrivacyLight;
