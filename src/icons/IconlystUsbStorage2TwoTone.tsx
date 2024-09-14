import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsbStorage2TwoTone = ({
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
      d="M10.332 14.168a1.455 1.455 0 1 0-2.056 2.058 1.455 1.455 0 0 0 2.056-2.058"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.435 12.014 9.577 6.87c1.319-1.318 3.07-1.208 4.387.11l3.555 3.553c1.318 1.317 1.428 3.069.108 4.388l-5.142 5.142c-1.318 1.319-3.07 1.208-4.386-.11l-3.554-3.553c-1.318-1.318-1.425-3.073-.11-4.387"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.382 11.831 2.453-2.453c.938-.938.857-2.186-.075-3.117l-2.521-2.52c-.932-.933-2.178-1.014-3.117-.076l-2.453 2.453M16.673 6.033l.01-.01M18.433 7.795l.01-.01"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUsbStorage2TwoTone;
