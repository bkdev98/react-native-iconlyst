import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFavouriteCarLight = ({
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
      d="m18.726 15.756-.73-1.457a.495.495 0 0 0-.878 0l-.73 1.458a.49.49 0 0 1-.372.265l-1.631.235a.483.483 0 0 0-.272.827l1.181 1.134c.116.11.169.271.142.43l-.28 1.6a.49.49 0 0 0 .713.512l1.46-.757a.5.5 0 0 1 .457 0l1.458.756a.49.49 0 0 0 .714-.51l-.28-1.601a.48.48 0 0 1 .142-.43L21 17.084a.483.483 0 0 0-.271-.828l-1.633-.234a.5.5 0 0 1-.37-.266M14.32 11.232h1.573M6.551 11.232h1.573M3.356 7.568c5.215.74 10.509.74 15.724 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.097 10.994c-.001-.709-.227-1.4-.646-1.972l-1.02-1.368a1.6 1.6 0 0 1-.196-.374l-.918-2.55a1.96 1.96 0 0 0-1.513-1.266 23 23 0 0 0-7.148 0A1.96 1.96 0 0 0 6.152 4.73l-.918 2.55a1.5 1.5 0 0 1-.195.357L4.002 9.065a3.3 3.3 0 0 0-.63 1.946l-.014 4.554a.875.875 0 0 0 .875.878h1.734a.875.875 0 0 0 .874-.875v-.359c0-.483.392-.875.875-.875h4.308"
    />
  </Svg>
);
export default IconlystFavouriteCarLight;
