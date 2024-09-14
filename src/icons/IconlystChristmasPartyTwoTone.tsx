import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasPartyTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.153 17.286c.952.889 3.761-.574 6.275-3.267 2.513-2.692 3.779-5.595 2.827-6.484s-3.762.574-6.275 3.267-3.779 5.595-2.827 6.483"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.42 7.749 3.794 11.917a.743.743 0 0 1-.896.942L8.509 17.502"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.232 11.801c.71 1.36 1.974 4.873 1.34 8.04M13.766 14.677c.328 1.274.544 2.767.411 4.237M2.905 9.835l.112.186a1.693 1.693 0 0 0 2.325.571l.175-.106a1.49 1.49 0 0 1 2.044.502M13.206 11.594a1.91 1.91 0 0 0-.066-2.7l-.158-.15a1.693 1.693 0 0 1-.058-2.393l.14-.148a1.49 1.49 0 0 0-.051-2.104"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.238 7.35c.181-.699-.048-1.621-.543-2.23"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.32 5.687-.407-.39"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.396 14.677-.56.065"
    />
  </Svg>
);
export default IconlystChristmasPartyTwoTone;
