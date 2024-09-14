import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarAutomationTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.021 14.458h2.51c.876 0 1.422.62 1.422 1.495v2.364c0 .877-.546 1.496-1.423 1.496h-2.509c-.877 0-1.422-.62-1.422-1.496v-2.364c0-.876.548-1.495 1.422-1.495"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.499 13.267v1.186M16.064 13.267v1.186M18.499 19.814V21M16.064 19.814V21M21.148 18.35H19.96M21.148 15.915H19.96M14.601 18.35h-1.187M14.601 15.915h-1.187M14.32 11.049h1.573M6.551 11.049h1.573M3.356 7.385c5.215.74 10.509.74 15.724 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.097 10.81c-.001-.708-.227-1.4-.646-1.971L17.43 7.47a1.6 1.6 0 0 1-.196-.374l-.918-2.55a1.96 1.96 0 0 0-1.513-1.266 23 23 0 0 0-7.148 0 1.96 1.96 0 0 0-1.504 1.267l-.918 2.55a1.5 1.5 0 0 1-.195.356L4.002 8.881a3.3 3.3 0 0 0-.63 1.946l-.014 4.554a.875.875 0 0 0 .875.878h1.734a.875.875 0 0 0 .874-.875v-.358c0-.483.392-.875.875-.875h4.308"
    />
  </Svg>
);
export default IconlystCarAutomationTwoTone;
