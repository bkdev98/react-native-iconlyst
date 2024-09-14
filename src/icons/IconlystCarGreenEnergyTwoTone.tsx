import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarGreenEnergyTwoTone = ({
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
      d="M20.203 18.949c-.568.62-1.507 1.126-2.706.754-.797-.247-1.104-.566-1.104-.566-1.206-.884-1.27-2.081-.992-2.961.312-.989 1.115-1.78 2.018-2.251 1.382-.723 2.746-.945 3.038-.963.131.262.621 1.555.687 3.113.042 1.018-.241 2.109-.94 2.874"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.572 16.396c-1.355 1.133-2.406 2.528-2.658 4.604M14.32 11.048h1.573M6.551 11.048h1.573M3.356 7.385c5.215.74 10.509.74 15.724 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.097 10.81c0-.708-.227-1.4-.646-1.971L17.43 7.47a1.6 1.6 0 0 1-.196-.374l-.918-2.55a1.96 1.96 0 0 0-1.513-1.266 23 23 0 0 0-7.147 0 1.96 1.96 0 0 0-1.505 1.267l-.918 2.55a1.5 1.5 0 0 1-.195.356L4.002 8.881a3.3 3.3 0 0 0-.63 1.946l-.013 4.554a.875.875 0 0 0 .874.878h1.734a.875.875 0 0 0 .875-.875v-.358c0-.483.391-.875.874-.875h4.308"
    />
  </Svg>
);
export default IconlystCarGreenEnergyTwoTone;
